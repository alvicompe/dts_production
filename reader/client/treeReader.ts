import path from "path"
import { createReadStream, readFile, readFileSync, writeFileSync } from "fs"
import { envVariables } from "../common/environmentsVariables"
import { ValidationTree } from "./validationTree"
import { MessageError } from "../proto/proto/geo-reader_pb"

const DxfParser = require("dxf-parser")
const proj4 = require("proj4")
const turf = require("@turf/turf")

export class TreeReader {
  private response = {
    geo: {},
    status: true,
    message: "Error reading files.",
    errors: [] as any,
  } as any

  private fileFunctions: { [folderType: string]: any } = {
    dme: (path: any) => this.getDme(path),
    material: (path: any) => this.getMaterial(path),
    pad: (path: any) => this.getPad(path),
    road: (path: any) => this.getRoad(path),
    stock: (path: any) => this.getStock(path),
  }

  async buildGeo() {
    const treeBusiness = new ValidationTree()
    const { tree, response } = treeBusiness.getValidatedTreeToCreate()
    if (!response) {
      this.response.status = false
      this.response.message = "Incorrect tree, check files."
      return this.response
    }
    const geo = await this.formatStructGeo(tree)
    this.response.geo = this.response.status ? geo : {}
    return this.response
  }

  private async formatStructGeo(files: any) {
    const geo = {} as any

    const projects = [] as any
    const projectsFiles = {} as any
    for (const file of files) {
      const pathRead = path.join(__dirname, "..", file.path)
      const folderName = this.getFolderName(pathRead)

      if (this.fileFunctions[`${folderName}`]) {
        // this <fileFunctions["dme"](pathRead)> is equivalent to <getDme(pathRead)>
        const fileContent =
          (await this.fileFunctions[`${folderName}`](pathRead)) || []
        TreeReader.addPropertyGeo(geo, folderName, fileContent)
      } else {
        const projectName = file.project
        const extensionName = file.extension

        if (!projectsFiles[projectName]) {
          projectsFiles[projectName] = {}
        }

        projectsFiles[projectName][extensionName] = pathRead

        if (
          projectsFiles[projectName][".csv"] &&
          projectsFiles[projectName][".dxf"]
        ) {
          let polygons = await this.buildPolygons(
            projectsFiles,
            projectName,
            geo
          )
          projects.push({ name: projectName, polygon: polygons })
        }
      }
    }
    TreeReader.cleanRepeated(geo)
    TreeReader.addPropertyGeo(geo, "pit", projects)
    geo.name = envVariables.ROOT_PATH
    return geo
  }

  private static cleanRepeated(geo: any) {
    for (const folder of Object.keys(envVariables.FOLDER_NAME)) {
      if (folder === "dme" || folder === "pad" || folder === "stock") {
        TreeReader.cleanRepeatedCell(geo, folder)
      } else if (folder === "road") {
        TreeReader.cleanRepeatedPoint(geo, folder)
      }
    }
  }

  private async getDme(path: string) {
    const files = await this.formattedFile(path)
    let groups = [] as any

    let currentIndexGroup = 0
    let polygonPoints = []

    for (let i = 0; i < files.length; i++) {
      if (files[i].trim() === "") {
        continue
      }
      const [name, x, y, z] = files[i].split(/[;,]/)
      if (!name || !x || !y || !z) {
        this.setErrResponse(path)
        break
      }

      if (groups.length === 0) {
        groups.push({ name, point: [] })
        currentIndexGroup = groups.length - 1
      }
      if (groups[currentIndexGroup]["name"] === name) {
        const { longitude, latitude, altitude } = TreeReader.transformUTM(
          x,
          y,
          z
        )
        groups[currentIndexGroup].point.push({ longitude, latitude, altitude })
        polygonPoints.push([longitude, latitude, altitude])
      }
      if (groups[currentIndexGroup]["name"] !== name) {
        const okBuildCentroid = this.buildCentroid(
          groups[currentIndexGroup],
          polygonPoints,
          path
        )
        if (!okBuildCentroid) {
          break
        } else {
          polygonPoints = []
          groups.push({ name, point: [] })
          currentIndexGroup = groups.length - 1
        }
      }
    }
    this.buildCentroid(groups[groups.length - 1], polygonPoints, path)
    return groups
  }

  private async getPad(path: any) {
    const files = await this.formattedFile(path)
    let groups = [] as any

    let currentIndexGroup = 0
    let polygonPoints = []

    for (let i = 0; i < files.length; i++) {
      if (files[i].trim() === "") {
        continue
      }
      const [name, x, y, z, area, volume, height, level] =
        files[i].split(/[;,]/)
      if (!name || !x || !y || !z || !volume || !height) {
        this.setErrResponse(path)
        break
      }

      if (groups.length === 0) {
        groups.push({
          name,
          area: parseFloat(area),
          volume: parseFloat(volume),
          height: parseFloat(height),
          altitude: parseFloat(level),
          point: [],
        })
        currentIndexGroup = groups.length - 1
      }
      if (groups[currentIndexGroup]["name"] === name) {
        const { longitude, latitude, altitude } = TreeReader.transformUTM(
          x,
          y,
          z
        )
        groups[currentIndexGroup].point.push({ longitude, latitude, altitude })
        polygonPoints.push([longitude, latitude, altitude])
      }
      if (groups[currentIndexGroup]["name"] !== name) {
        const okBuildCentroid = this.buildCentroid(
          groups[currentIndexGroup],
          polygonPoints,
          path
        )
        if (!okBuildCentroid) {
          break
        } else {
          polygonPoints = []
          groups.push({
            name,
            area: parseFloat(area),
            volume: parseFloat(volume),
            height: parseFloat(height),
            altitude: parseFloat(level),
            point: [],
          })
          currentIndexGroup = groups.length - 1
        }
      }
    }
    this.buildCentroid(groups[groups.length - 1], polygonPoints, path)
    return groups
  }

  private async getStock(path: any) {
    const files = await this.formattedFile(path)
    let groups = [] as any

    let currentIndexGroup = 0
    let polygonPoints = []

    for (let i = 0; i < files.length; i++) {
      if (files[i].trim() === "") {
        continue
      }
      let [name, x, y, z, area, volume, height, level] = files[i].split(/[;,]/)
      if (!name || !x || !y || !z) {
        this.setErrResponse(path)
        break
      }
      if (!volume) volume = 0
      if (!height) height = 0
      if (!level) level = 0
      if (!area) area = 0

      if (groups.length === 0) {
        groups.push({
          name,
          area: parseFloat(area),
          volume: parseFloat(volume),
          height: parseFloat(height),
          altitude: parseFloat(level),
          point: [],
        })
        currentIndexGroup = groups.length - 1
      }
      if (groups[currentIndexGroup]["name"] === name) {
        const { longitude, latitude, altitude } = TreeReader.transformUTM(
          x,
          y,
          z
        )
        groups[currentIndexGroup].point.push({ longitude, latitude, altitude })
        polygonPoints.push([longitude, latitude, altitude])
      }

      if (groups[currentIndexGroup]["name"] !== name) {
        const okBuildCentroid = this.buildCentroid(
          groups[currentIndexGroup],
          polygonPoints,
          path
        )
        if (!okBuildCentroid) {
          break
        } else {
          polygonPoints = []
          groups.push({
            name,
            area: parseFloat(area),
            volume: parseFloat(volume),
            height: parseFloat(height),
            altitude: parseFloat(level),
            point: [],
          })
          currentIndexGroup = groups.length - 1
        }
      }
    }
    this.buildCentroid(groups[groups.length - 1], polygonPoints, path)
    return groups
  }

  private async getRoad(path: any) {
    const files = await this.formattedFile(path)
    let groups = [] as any

    let currentIndexGroup = 0

    for (let i = 0; i < files.length; i++) {
      if (files[i].trim() === "") {
        continue
      }
      const [name, x, y, z] = files[i].split(/[;,]/)
      if (!name || !x || !y || !z) {
        this.setErrResponse(path)
        break
      }

      if (groups.length === 0) {
        groups.push({ name, point: [] })
        currentIndexGroup = groups.length - 1
      }

      if (groups[currentIndexGroup]["name"] === name) {
        const { longitude, latitude, altitude } = TreeReader.transformUTM(
          x,
          y,
          z
        )
        groups[currentIndexGroup].point.push({ longitude, latitude, altitude })
      }

      if (groups[currentIndexGroup]["name"] !== name) {
        groups.push({ name, point: [] })
        currentIndexGroup = groups.length - 1
      }
    }
    return groups
  }

  private async getMaterial(path: any) {
    const files = await this.formattedFile(path)
    const materials = [] as any

    for (let i = 0; i < files.length; i++) {
      if (files[i].trim() === "") {
        continue
      }
      const [type, description, crs, orezone, law, thins, cf, place] =
        files[i].split(";")
      if (!type || !place) {
        this.setErrResponse(path)
        break
      }
      materials.push({ type, description, crs, orezone, law, thins, cf, place })
    }
    return materials
  }

  private getDxfPid(path: string, projectName: string): Promise<any> {
    const parser = new DxfParser()
    const fileStream = createReadStream(path, { encoding: "utf8" })
    return new Promise((resolve, reject) => {
      parser.parseStream(fileStream, (err: any, dxf: any) => {
        if (err || !dxf) {
          this.setErrResponse(path, "dxf corrupt")
          return reject(err.stack)
        }
        const polygons = [] as any
        let polygonPoints = [] as any
        const entities = dxf.entities

        for (let i = 0; i < entities.length; i++) {
          const polygon = {} as any

          const hasLine = JSON.stringify(
            entities[i].extendedData.customStrings
          ).indexOf("LINE digitising")
          if (hasLine !== -1) {
            continue
          }

          polygon.name = entities[i].extendedData.customStrings[0].split("=")[1]
          polygon.project_name = projectName
          polygon.color = entities[i].colorIndex
          polygon.point = []

          entities[i].vertices.forEach((v: any) => {
            const { longitude, latitude, altitude } = TreeReader.transformUTM(
              v.x,
              v.y,
              v.z
            )
            polygon.point.push({ longitude, latitude, altitude })
            polygonPoints.push([longitude, latitude, altitude])
          })
          polygon.altitude = polygon.point[0].altitude

          const okBuildCentroid = this.buildCentroid(
            polygon,
            polygonPoints,
            path
          )
          if (!okBuildCentroid) {
            polygons.push(polygon)
            break
          } else {
            polygonPoints = []
          }
          polygons.push(polygon)
        }
        resolve(polygons)
      })
    })
  }

  private async getCsvPidExtra(path: string) {
    const OUTPUT_LABELS = [
      "name",
      "material",
      "lito",
      "alte",
      "orezonet",
      "au",
      "ag",
      "as",
      "volume",
      "tonnes",
      "onzas",
      "aucn",
      "agcn",
      "ptaucn",
      "s",
    ]
    let files = await this.formattedFile(path, 2)
    const polygons = [] as any
    for (let i = 0; i < files.length; i++) {
      if (files[i].trim() === "") {
        continue
      }
      const colSplit = files[i].split(/[;,]/)
      const group = {} as any
      if (colSplit[2] !== "") {
        if (
          !colSplit[0] ||
          !colSplit[1] ||
          !colSplit[8] ||
          !colSplit[9] ||
          !colSplit[10]
        ) {
          this.setErrResponse(path)
          break
        }
        for (let i = 0; i < OUTPUT_LABELS.length; i++) {
          group[OUTPUT_LABELS[i]] = TreeReader.isNum(colSplit[i])
            ? parseFloat(colSplit[i])
            : colSplit[i]
        }
      } else {
        if (
          !colSplit[3] ||
          !colSplit[4] ||
          !colSplit[11] ||
          !colSplit[12] ||
          !colSplit[13]
        ) {
          this.setErrResponse(path)
          break
        }
        for (let i = 3; i < OUTPUT_LABELS.length + 3; i++) {
          group[OUTPUT_LABELS[i - 3]] = TreeReader.isNum(colSplit[i])
            ? parseFloat(colSplit[i])
            : colSplit[i]
        }
      }
      polygons.push(group)
    }
    return polygons
  }

  private async buildPolygons(
    projectsFiles: any,
    projectName: string,
    geo: any
  ) {
    let csvPidContent: any, dxfPidContent: any
    try {
      csvPidContent = await this.getCsvPidExtra(
        projectsFiles[projectName][".csv"]
      )
      dxfPidContent = await this.getDxfPid(
        projectsFiles[projectName][".dxf"],
        projectName
      )
    } catch (e) {
      csvPidContent = []
      dxfPidContent = []
    }

    for (let i = 0; i < dxfPidContent.length; i++) {
      const extra = csvPidContent.find(
        (item: { name: any }) => dxfPidContent[i].name === item.name
      )

      dxfPidContent[i].lito = extra ? extra.lito : null
      dxfPidContent[i].alte = extra ? extra.alte : null
      dxfPidContent[i].orezonet = extra ? extra.orezonet : null
      dxfPidContent[i].au = extra ? extra.au : null
      dxfPidContent[i].ag = extra ? extra.ag : null
      dxfPidContent[i].as = extra ? extra.as : null
      dxfPidContent[i].volume = extra ? extra.volume : null
      dxfPidContent[i].tonnes = extra ? extra.tonnes : null
      dxfPidContent[i].onzas = extra ? extra.onzas : null
      dxfPidContent[i].aucn = extra ? extra.aucn : null
      dxfPidContent[i].agcn = extra ? extra.agcn : null
      dxfPidContent[i].ptaucn = extra ? extra.ptaucn : null
      dxfPidContent[i].s = extra ? extra.s : null
      let material = {}
      for (let j = 0; j < geo["material"].length; j++) {
        if (extra && geo["material"][j].type == extra.material) {
          material = geo["material"][j]
        }
      }
      dxfPidContent[i].material = material
    }
    return dxfPidContent
  }

  private getFolderName(path: string): string {
    const pathFormatted = path.toLowerCase().split("/")
    const valuesFolderName = Object.entries(envVariables.FOLDER_NAME)
    const entryMatch = valuesFolderName.find(([, value]: any) =>
      pathFormatted.includes(value)
    )
    return entryMatch ? entryMatch[0] : ""
  }

  private static addPropertyGeo(
    geo: any,
    folderName: string,
    fileContent: any
  ) {
    // geo [<name_proto>] : <properties_proto>
    if (folderName === "dme") {
      if (!geo["dme"] || geo["dme"].length === 0) {
        geo["dme"] = [{ name: folderName, cell: [] }]
      }
      geo["dme"][0].cell = [...geo["dme"][0].cell, ...fileContent]
    } else if (folderName === "material") {
      if (!geo["material"] || geo["material"].length === 0) {
        geo["material"] = []
      }
      geo["material"] = [...geo["material"], ...fileContent]
    } else if (folderName === "pad") {
      if (!geo["pad"] || geo["pad"].length === 0) {
        geo["pad"] = [{ name: folderName, cell: [] }]
      }
      geo["pad"][0].cell = [...geo["pad"][0].cell, ...fileContent]
    } else if (folderName === "road") {
      if (!geo["road"] || geo["road"].length === 0) {
        geo["road"] = []
      }
      geo["road"] = [...geo["road"], ...fileContent]
    } else if (folderName === "stock") {
      if (!geo["stock"] || geo["stock"].length === 0) {
        geo["stock"] = [{ name: folderName, cell: [] }]
      }
      geo["stock"][0].cell = [...geo["stock"][0].cell, ...fileContent]
    } else if (folderName === "pit") {
      geo["pit"] = [{ name: folderName, project: fileContent }]
    }
  }

  private setErrResponse(path: string, summary: string = "missing values") {
    this.response.status = false
    const indexPathError = path.indexOf(envVariables.ROOT_PATH)
    const messageError = new MessageError()
    messageError.setPath(path.substring(indexPathError, path.length))
    messageError.setMessage(summary)
    this.response.errors.push(messageError)
  }

  private async rewriteFile(filePath: import("fs").PathOrFileDescriptor) {
    return new Promise((resolve, reject) => {
      let csvContent: any = readFileSync(filePath).toString().split("\n")
      csvContent.shift()
      csvContent = csvContent.join("\n")
      writeFileSync(filePath, csvContent)
      resolve(true)
    })
  }

  private formattedFile(filePath: string, headersToRemove = 1): Promise<any> {
    return new Promise((resolve, reject) => {
      readFile(filePath, { encoding: null }, (err, csv) => {
        if (err) {
          reject(err)
        }
        let csvRead = csv.toString().split("\n")
        csvRead = csvRead.splice(headersToRemove, csv.length)
        resolve(csvRead)
      })
    })
  }

  private buildCentroid(group: any, polygonPoints: any, path: string): boolean {
    // to create centroid with a polygon is necessary 4 point and that the starting point be the last
    if (polygonPoints.length >= 4) {
      if (polygonPoints[0] !== polygonPoints[polygonPoints.length - 1]) {
        polygonPoints.push(polygonPoints[0])
        group.point.push({
          longitude: polygonPoints[0][0],
          latitude: polygonPoints[0][1],
          altitude: polygonPoints[0][2],
        })
      }
    } else if (polygonPoints.length === 3) {
      if (polygonPoints[0] !== polygonPoints[polygonPoints.length - 1]) {
        this.setErrResponse(path, "build centroid")
        return false
      } else {
        polygonPoints.push(polygonPoints[0])
        group.point.push({
          longitude: polygonPoints[0][0],
          latitude: polygonPoints[0][1],
          altitude: polygonPoints[0][2],
        })
      }
    } else {
      this.setErrResponse(path, "build centroid")
      return false
    }

    const turfPolygon = turf.polygon([polygonPoints])
    const centroid = turf.centerOfMass(turfPolygon)

    group.altitude = group.point[0].altitude
    group.centroid = {
      longitude: centroid.geometry.coordinates[0],
      latitude: centroid.geometry.coordinates[1],
      altitude: group.point[0].altitude,
    }
    return true
  }

  private static cleanRepeatedCell(geo: any, type: string) {
    let newArray: any = []
    let lookupObject: any = {} //{name, obj}

    for (let i in geo[`${type}`][0].cell) {
      if (lookupObject[geo[`${type}`][0].cell[i]["name"]]) {
        if (
          lookupObject[geo[`${type}`][0].cell[i]["name"]]["point"].length <
          geo[`${type}`][0].cell[i]["point"].length
        ) {
          lookupObject[geo[`${type}`][0].cell[i]["name"]] =
            geo[`${type}`][0].cell[i]
        }
      } else {
        lookupObject[geo[`${type}`][0].cell[i]["name"]] =
          geo[`${type}`][0].cell[i]
      }
    }

    for (let i in lookupObject) {
      newArray.push(lookupObject[i])
    }

    geo[`${type}`][0].cell = newArray
  }

  private static cleanRepeatedPoint(geo: any, type: string) {
    let newArray: any = []
    let lookupObject: any = {} //{name, obj}

    for (let i in geo[`${type}`]) {
      if (lookupObject[geo[`${type}`][i]["name"]]) {
        if (
          lookupObject[geo[`${type}`][i]["name"]]["point"].length <
          geo[`${type}`][i]["point"].length
        ) {
          lookupObject[geo[`${type}`][i]["name"]] = geo[`${type}`][i]
        }
      } else {
        lookupObject[geo[`${type}`][i]["name"]] = geo[`${type}`][i]
      }
    }

    for (let i in lookupObject) {
      newArray.push(lookupObject[i])
    }

    geo[`${type}`] = newArray
  }

  private static transformUTM(x: any, y: any, z: any) {
    x = parseFloat(x)
    y = parseFloat(y)
    z = parseFloat(z)

    const FROM = "+proj=utm +zone=17 +units=m +ellps=WGS84 +south +no_defs"
    const TO = "+proj=longlat +ellps=WGS84 +units=m +no_defs"

    const proj = proj4(FROM, TO)
    const point = proj4.toPoint([x, y, z])
    const results = proj.forward(point)
    return { longitude: results.x, latitude: results.y, altitude: results.z }
  }

  private static isNum(str: any) {
    return !isNaN(str)
  }
}
