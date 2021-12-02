var path = require('path');
const proj4 = require('proj4')
const DxfParser = require('dxf-parser');
const turf = require('@turf/turf')

const {createReadStream, writeFileSync, readFile} = require('fs');
const {BuildTree} = require("../business/BuildTree");

const ROOT_ROUTE = 'geo'


const isNum = (str) => !isNaN(str)

const buildPolygons = async (projectsFiles, projectName, geo) => {
    const extras = await getPolygonExtra(projectsFiles[projectName][".csv"]) || []
    const polygons = await getPolygon(projectsFiles[projectName][".dxf"]) || []

    for (let j = 0; j < polygons.length; j++) {
        const extra = extras.find(item => polygons[j].name === item.name)

        polygons[j].lito = extra ? extra.lito : null
        polygons[j].alte = extra ? extra.alte : null
        polygons[j].orezonet = extra ? extra.orezonet : null
        polygons[j].au = extra ? extra.au : null
        polygons[j].ag = extra ? extra.ag : null
        polygons[j].as = extra ? extra.as : null
        polygons[j].volume = extra ? extra.volume : null
        polygons[j].tonnes = extra ? extra.tonnes : null
        polygons[j].onzas = extra ? extra.onzas : null
        polygons[j].aucn = extra ? extra.aucn : null
        polygons[j].agcn = extra ? extra.agcn : null
        polygons[j].ptaucn = extra ? extra.ptaucn : null
        polygons[j].s = extra ? extra.s : null
        let material = {}

        for (let k = 0; k < geo.material.length; k++) {
            if (extra && geo.material[k].type == extra.material) {
                material = geo.material[k]
            }
        }
        polygons[j].material = material
    }
    return polygons;
}

const convertToJson = async (files) => {
    const geo = {}
    const projects = []
    const projectsFiles = {}

    for (let i = 0; i < files.length; i++) {

        const pathRead = path.join(__dirname, '..', files[i].path)

        if (files[i].path.toLowerCase().includes('dme')) {
            const dmes = await getDme(pathRead)
            geo.dme = [{
                name: "Principal",
                cell: dmes
            }]
        } else if (files[i].path.toLowerCase().includes('materials')) {
            geo.material = await getMaterial(pathRead)
        } else if (files[i].path.toLowerCase().includes('pad')) {
            const pads = await getPad(pathRead)
            geo.pad = [{
                name: "Principal",
                cell: pads
            }]
        } else if (files[i].path.toLowerCase().includes('rutas')) {
            geo.road = await getRoad(pathRead)
        } else if (files[i].path.toLowerCase().includes('stock')) {
            const stocks = await getStock(pathRead)
            geo.stock = [{
                name: "Principal",
                cell: stocks
            }]
        } else {
            const projectName = files[i].project
            const extensionName = files[i].extension

            if (!projectsFiles[projectName]) {
                projectsFiles[projectName] = {}
            }

            projectsFiles[projectName][extensionName] = pathRead;

            if (projectsFiles[projectName][".csv"] && projectsFiles[projectName][".dxf"]) {
                let polygons = await buildPolygons(projectsFiles, projectName, geo);
                projects.push({
                    name: projectName,
                    polygon: polygons
                })
            }
        }
    }

    geo.pit = [{
        name: "Principal",
        project: projects
    }]
    return geo
}

const getMaterial = async (filePath) => {
    const csvFile = await formattedFile(filePath)
    const materials = []
    for (let i = 0; i < csvFile.length; i++) {
        if (csvFile[i] === '') continue
        const [type, description, crs, orezone, law, thins, cf, place] = csvFile[i].split(';')
        if (!type || !description || !crs || !orezone || !law || !thins || !cf || !place) continue
        const material = {type, description, crs, orezone, law, thins, cf, place}
        materials.push(material);
    }
    return materials
}


const getPolygonExtra = async (filePath) => {
    // columns file
    const outputLabels = ['name', 'material', 'lito', 'alte', 'orezonet', 'au', 'ag', 'as', 'volume', 'tonnes', 'onzas', 'aucn', 'agcn', 'ptaucn', 's']
    let csvFile = await formattedFile(filePath, 2)
    const polygons = []
    for (let i = 0; i < csvFile.length; i++) {
        const colSplit = csvFile[i].split(/[;,]/)
        if (colSplit[0] === '') continue
        const group = {}
        if (colSplit[2] !== '') {
            for (let i = 0; i < outputLabels.length; i++) {
                group[outputLabels[i]] = isNum(colSplit[i]) ? parseFloat(colSplit[i]) : colSplit[i]
            }
        } else {
            for (let i = 3; i < outputLabels.length + 3; i++) {
                group[outputLabels[i - 3]] = isNum(colSplit[i]) ? parseFloat(colSplit[i]) : colSplit[i]
            }
        }
        polygons.push(group)
    }
    return polygons
}


const rewriteFile = async (filePath) => {
    return new Promise((resolve, reject) => {
        let csvContent = readFileSync(filePath).toString().split('\n')
        csvContent.shift()
        csvContent = csvContent.join('\n')
        writeFileSync(filePath, csvContent)
        resolve(true)
    })
}

const getPolygon = (filePath) => {
    const parser = new DxfParser();
    const fileStream = createReadStream(filePath, {encoding: 'utf8'});
    return new Promise((resolve, reject) => {
        parser.parseStream(fileStream, (err, dxf) => {
            if (err) reject(err.stack);
            const polygons = []
            const entities = dxf.entities

            for (let i = 0; i < entities.length; i++) {
                const polygon = {}

                polygon.name = entities[i].extendedData.customStrings[0].split("=").name
                polygon.altitude = entities[i].vertices[0].altitude
                polygon.color = entities[i].colorIndex
                polygon.point = []

                const polygonPoints = []
                entities[i].vertices.forEach(v => {
                    const {longitude, latitude, altitude} = transformUTM(v.x, v.y, v.z)
                    polygon.point.push({longitude, latitude, altitude})
                    polygonPoints.push([longitude, latitude])
                })

                // to create a polygon it is necessary that the starting point be the last
                if (polygonPoints[0] !== polygonPoints[polygonPoints.length - 1]) {
                    polygonPoints.push(polygonPoints[0])
                    // to create centroid is necessary 4 point
                    if (polygonPoints.length < 4) {
                        polygons.push(polygon)
                        continue
                    }
                }

                const turfPolygon = turf.polygon([polygonPoints])
                const centroid = turf.centerOfMass(turfPolygon)

                polygon.centroid = {
                    longitude: centroid.geometry.coordinates[0],
                    latitude: centroid.geometry.coordinates[1],
                    altitude: polygon.altitude
                }

                polygons.push(polygon)
            }

            resolve(polygons)
        })
    })

}


const formattedFile = (filePath, headersToRemove = 1) => {
    return new Promise(((resolve, reject) => {
        readFile(filePath, {encoding: null}, (err, csv) => {
            if (err) reject(err)
            let csvRead = csv.toString().split('\n')
            csvRead = csvRead.splice(headersToRemove, csv.length)
            resolve(csvRead)
        })
    }))
}

const buildCentroid = (groupedDme) => {
    for (let i = 0; i < groupedDme.length; i++) {
        const polygonPoints = groupedDme[i].points.map(point => [point.longitude, point.latitude])

        // to create a polygon it is necessary that the starting point be the last
        if (polygonPoints[0] !== polygonPoints[polygonPoints.length - 1]) {
            polygonPoints.push(polygonPoints[0])
        }
        // to create centroid is necessary 4 point
        if (polygonPoints.length < 4) continue

        const turfPolygon = turf.polygon([polygonPoints])
        const centroid = turf.centerOfMass(turfPolygon)
        groupedDme[i].altitude = groupedDme[i].points[0].altitude
        groupedDme[i].centroid = {
            longitude: centroid.geometry.coordinates[0],
            latitude: centroid.geometry.coordinates[1],
            altitude: groupedDme[i].points[0].altitude
        }
    }
}

const getDme = async (filePath) => {
    const csvFile = await formattedFile(filePath)
    let groupedDme = []

    for (let i = 0; i < csvFile.length; i++) {
        // columns file [name: unique]
        const [name, x, y, z] = csvFile[i].split(',')
        if (!name || !x || !y || !z) continue

        if (!groupedDme.some((item) => item.name === name)) {
            const group = {
                name,
                points: []
            };
            groupedDme.push(group)
        }

        const indexGroupDme = groupedDme.findIndex(item => item.name === name);
        const {longitude, latitude, altitude} = transformUTM(x, y, z)
        groupedDme[indexGroupDme].points.push({longitude, latitude, altitude});
    }

    buildCentroid(groupedDme);

    return groupedDme
}

const getPad = async (filePath) => {
    const csvFile = await formattedFile(filePath)

    let groupedPad = []

    for (let i = 0; i < csvFile.length; i++) {
        // columns file [name: unique]
        const [name, x, y, z, area, volume, height, level] = csvFile[i].split(',')
        if (!name || !x || !y || !z || !area || !volume || !height || !level) continue

        if (!groupedPad.some((item) => item.name === name)) {
            const group = {
                name,
                area: parseFloat(area),
                volume: parseFloat(volume),
                height: parseFloat(height),
                altitude: level.substr(0, 4),
                points: []
            }
            groupedPad.push(group)
        }

        const indexGroupPad = groupedPad.findIndex(item => item.name === name);
        const {longitude, latitude, altitude} = transformUTM(x, y, z)
        groupedPad[indexGroupPad].points.push({longitude, latitude, altitude});
    }

    buildCentroid(groupedPad)
    return groupedPad
}


const getStock = async (filePath) => {
    const csvFile = await formattedFile(filePath)

    let groupedStock = []

    for (let i = 0; i < csvFile.length; i++) {
        // columns file [name: unique]
        const [name, x, y, z, area, volume, height, level] = csvFile[i].split(',')
        if (!name || !x || !y || !z || !area || !volume || !height || !level) continue

        if (!groupedStock.some((item) => item.name === name)) {
            const group = {
                name,
                area: parseFloat(area),
                volume: parseFloat(volume),
                height: parseFloat(height),
                altitude: level.substr(0, 4),
                points: []
            }
            groupedStock.push(group)
        }

        const indexGroupStock = groupedStock.findIndex(item => item.name === name);
        const {longitude, latitude, altitude} = transformUTM(x, y, z)
        groupedStock[indexGroupStock].points.push({longitude, latitude, altitude});
    }

    buildCentroid(groupedStock)
    return groupedStock
}


const getRoad = async (filePath) => {
    const csvFile = await formattedFile(filePath)
    let groupedRoad = []

    for (let i = 0; i < csvFile.length; i++) {
        // columns file [name: unique]
        const [name, x, y, z] = csvFile[i].split(',')
        if (!name || !x || !y || !z) continue;

        if (!groupedRoad.some((item) => item.name === name)) {
            const group = {
                name,
                points: []
            }
            groupedRoad.push(group);
        }

        const indexGroupRoad = groupedRoad.findIndex(item => item.name === name);
        const {longitude, latitude, _} = transformUTM(x, y, z)
        groupedRoad[indexGroupRoad].points.push({longitude, latitude});
    }
    return groupedRoad
}

const transformUTM = (x, y, z) => {
    x = parseFloat(x)
    y = parseFloat(y)
    z = parseFloat(z)

    const from = "+proj=utm +zone=17 +units=m +ellps=WGS84 +south +no_defs";
    const to = "+proj=longlat +ellps=WGS84 +units=m +no_defs";

    const proj = proj4(from, to);
    const point = proj4.toPoint([x, y, z]);
    const results = proj.forward(point);
    return {longitude: results.x, latitude: results.y, altitude: results.z}
}


const getTree = async () => {
    const treeBusiness = new BuildTree()
    const files = treeBusiness.getTree(ROOT_ROUTE)
    return await convertToJson(files)
}

module.exports = getTree