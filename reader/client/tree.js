var path = require('path');
var walker = require('walker');
const proj4 = require('proj4')
const DxfParser = require('dxf-parser');
const getCentroid = require('./util')
const turf = require('@turf/turf')

const { createReadStream, readFileSync, writeFileSync } = require('fs');
const { formatDiagnostic } = require('typescript');

const root = 'geo'

const parseDouble = param => {
  if (param != '') {
    return parseFloat(param)
  }
  return 0
}


function readDir(dest, cb) {
  var dirObj = {}
  var child, parts, obj
  walker(dest)
    .on('dir', function (dir, stat) {
      if (dir === dest) return;
      child = dir.slice(dest.length, dir.length)
      if (child.indexOf(path.sep) === 0) {
        child = child.slice(1, child.length)
      }
      parts = child.split(path.sep)
      obj = dirObj
      for (var i = 0; i < parts.length; i++) {
        if (parts[i] !== '') {
          if (obj[parts[i]] === undefined) {
            obj[parts[i]] = {}
          }
          obj = obj[parts[i]]
        }
      }
    })
  walker(dest)
    .on('file', function (dir, stat) {
      if (dir === dest) return
      child = dir.slice(dest.length, dir.length)
      if (child.indexOf(path.sep) === 0) {
        child = child.slice(1, child.length)
      };
      parts = child.split(path.sep);
      obj = dirObj
      for (var i = 0; i < parts.length; i++) {
        if (parts[i] !== '') {
          if (obj[parts[i]] === undefined) {
            const name = parts[i].toLowerCase()
            if (name.includes('.dxf') || name.includes('r.csv')) {
              obj[parts[i]] = true
            }
          }
          obj = obj[parts[i]]
        }
      }
    })
    .on('error', function (err, entry, stat) {
      cb(err, null)
    })
    .on('end', function () {
      cb(null, dirObj)
    })
};


const convertToJson = async param => {
  const geo = {}
  const obj = {}
  const pit = {}
  const projects2 = []

  const materials = await getMaterial()
  geo.material = materials

  for (const [k1, v1] of Object.entries(param)) {
    const year = {}
    if (Object.keys(v1).length !== 0) {
      const benches = []
      for (const [k2, v2] of Object.entries(v1)) {
        if (k2 === 'dme') {
          const csv = path.join(__dirname, '..', root, k1, k2, "forma_DME_agosto.csv")
          const dmes = await getDme(csv)
          geo.dme = [{
            name: "Principal",
            cell: dmes
          }]
        } else if (k2 === 'pad') {
          const csv = path.join(__dirname, '..', root, k1, k2, "Celdas Pad_Agosto_2021-V2.csv")
          const cells = await getCell(csv)
          geo.pad = [{
            name: "Principal",
            cell: cells
          }]
          // geo.pad = cells
        } else if (k2 === 'rutas') {
          const csv = path.join(__dirname, '..', root, k1, k2, "RUTAS.csv")
          const roads = await getRoad(csv)
          geo.road = roads
        } else if (k2 === 'stock') {
          const csv = path.join(__dirname, '..', root, k1, k2, "stk_2855.csv")
          const stocks = await getStock(csv)
          // geo.stock = stocks
          geo.stock = [{
            name: "Principal",
            cell: stocks
          }]
        }
        else {
          const bench = {}
          if (Object.keys(v2).length !== 0) {
            const projects = []
            for (const [k3, v3] of Object.entries(v2)) {
              const project = {}
              if (typeof v3 === 'object') {
                let pathDxf
                let pathCsv
                for (const [k4, _] of Object.entries(v3)) {
                  if (k4.length == 14) {
                    pathDxf = path.join(__dirname, '..', root, k1, k2, k3, k4)
                  } else if (k4.includes('.csv')) {
                    pathCsv = path.join(__dirname, '..', root, k1, k2, k3, k4)
                  }
                }

                const extras = pathCsv ? await getPolygonExtra(pathCsv) : []
                const polygons = pathDxf ? await getPolygon(pathDxf) : []
                polygons.map(polygon => {
                  extras.map(extra => {
                    if (polygon.name == extra.name) {
                      let material = {}
                      materials.map(value => {
                        if (value.type == extra.material) {
                          material = value
                        }
                      })
                      polygon.material = material
                      polygon.lito = extra.lito
                      polygon.alte = extra.alte
                      polygon.orezonet = extra.orezonet
                      polygon.au = extra.au
                      polygon.ag = extra.ag
                      polygon.as = extra.as
                      polygon.volume = extra.volume
                      polygon.tonnes = extra.tonnes
                      polygon.onzas = extra.onzas
                      polygon.aucn = extra.aucn
                      polygon.agcn = extra.agcn
                      polygon.ptaucn = extra.ptaucn
                      polygon.s = extra.s
                    }
                  })
                })
                project.name = k3
                project.polygon = polygons
                // pit.project = projects
                // obj.year = year
              }
              projects.push(project)
              projects2.push(project)

              // geo.pit = [{
              //   name: "Principal",
              //   project: projects
              // }]

            }
          }
          // benches.push(bench)
        }
        // if (k2 == '2764') {
        //     // break
        // }
      }
      // years.push(year)
    }
  }
  // materials = getMaterial()
  // geo.material = await materials
  geo.pit = [{
    name: "Principal",
    project: projects2
  }]
  return geo
}


/*
const getDME = async (filePath) => {
  filePath = path.join(__dirname, '../geo/2021/dme/celdas.csv')
  const cells = []
  let csv = readFileSync(filePath).toString().split('\n')
  // csv.shift()
  // csv.shift()
  csv.map(row => {
    if (row != '') {
      const parts = row.split(',')
      const cell = {}
      cell.x = parts[0]
      cell.y = parts[1]
      cell.z = parts[2]
      const result = convertionUTM(parseFloat(cell.x), parseFloat(cell.y), parseFloat(cell.z))
      const point = {
        longitude: result.x,
        latitude: result.y,
        altitude: result.z
      }
      console.log(point.longitude, ',', point.latitude, ',', point.altitude)
      // console.log(point.longitude, ',', point.latitude)

      cells.push(point)
    }
  })
  return cells
}
*/



const getDme2 = async (filePath) => {
  const csv = readFileSync(filePath).toString().split('\n')
  csv.shift()
  const beforeCell = {
    name: '',
    point: {}
  }
  const cells = []
  let points = []
  let cell = {}
  csv.map((row, index) => {
    if (row != '') {
      const parts = row.split(',')
      if (beforeCell.name == '') {
        beforeCell.name = parts[0]
      }
      const result = convertionUTM(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]))
      const point = {
        longitude: result.x,
        latitude: result.y,
        altitude: result.z
      }
      // const point = {
      //   longitude: parts[1],
      //   latitude: parts[2],
      //   altitude: parts[3]
      // }
      beforeCell.point = point

      if (beforeCell.name != parts[0]) {
        points.push(points[0])
        const results = points.map(point => {
          return [point.longitude, point.latitude]
        })
        const turfPolygon = turf.polygon([results])
        const centroid = turf.centerOfMass(turfPolygon)

        cell.point = points
        cell.centroid = {
          longitude: centroid.geometry.coordinates[0],
          latitude: centroid.geometry.coordinates[1],
          altitude: cell.altitude
        }

        cells.push(cell)
        cell = {}
        points = []
        beforeCell.name = parts[0]
      }
      points.push(point)
      cell.name = parts[0]
      cell.altitude = parseFloat(parts[3])
    }

    if (index + 1 == csv.length) {
      points.push(points[0])
      const results = points.map(point => {
        return [point.longitude, point.latitude]
      })
      const turfPolygon = turf.polygon([results])
      const centroid = turf.centerOfMass(turfPolygon)
      cell.point = points
      cell.centroid = {
        longitude: centroid.geometry.coordinates[0],
        latitude: centroid.geometry.coordinates[1],
        altitude: cell.altitude
      }
      cells.push(cell)
    }
  })
  return cells
}



const getMaterial = async (filePath) => {
  filePath = path.join(__dirname, '../geo/2021/materials/material.csv')
  const materials = []
  let csv = readFileSync(filePath).toString().split('\n')
  csv.shift()
  csv.map(row => {
    if (row != '') {
      const parts = row.split(';')
      const material = {}
      material.type = parts[0]
      material.description = parts[1]
      material.crs = parts[2]
      material.orezone = parts[3]
      material.law = parts[4]
      material.thins = parts[5]
      material.cf = parts[6]
      material.place = parts[7]
      materials.push(material)
    }
  })
  return materials
}










const getPolygonExtra = async (filePath) => {
  // console.log('---------------->')
  console.log('filePath getPolygonExtra', filePath)
  const polygons = []
  let csv = readFileSync(filePath).toString().split('\n')
  // csv.shift()
  csv.shift()
  csv.map(row => {
    if (row != '') {
      const parts = row.split(',')
      const polygon = {}
      if (parts[2] != '') {
        polygon.name = parts[0]
        polygon.material = parts[1]
        polygon.lito = parts[2]
        polygon.alte = parts[3]
        polygon.orezonet = parts[4]
        polygon.au = parseDouble(parts[5])
        polygon.ag = parseDouble(parts[6])
        polygon.as = parseDouble(parts[7])
        polygon.volume = parseDouble(parts[8])
        polygon.tonnes = parseDouble(parts[9])
        polygon.onzas = parseDouble(parts[10])
        polygon.aucn = parseDouble(parts[11])
        polygon.agcn = parseDouble(parts[12])
        polygon.ptaucn = parseDouble(parts[13])
        polygon.s = parseDouble(parts[14])
        polygons.push(polygon)
      } else {
        polygon.name = parts[3]
        polygon.material = parts[4]
        polygon.lito = parts[5]
        polygon.alte = parts[6]
        polygon.orezonet = parts[7]
        polygon.au = parseDouble(parts[8])
        polygon.ag = parseDouble(parts[9])
        polygon.as = parseDouble(parts[10])
        polygon.volume = parseDouble(parts[11])
        polygon.tonnes = parseDouble(parts[12])
        polygon.onzas = parseDouble(parts[13])
        polygon.aucn = parseDouble(parts[14])
        polygon.agcn = parseDouble(parts[15])
        polygon.ptaucn = parseDouble(parts[16])
        polygon.s = parseDouble(parts[17])
        polygons.push(polygon)
      }

    }
  })
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

const getPolygon = async (filePath) => {
  console.log("filePath", filePath)
  var parser = new DxfParser();
  var fileStream = createReadStream(filePath, { encoding: 'utf8' });
  return new Promise((resolve, reject) => {
    parser.parseStream(fileStream, (err, dxf) => {
      const polygons = []
      if (err) return console.error(err.stack);
      const entities = dxf.entities
      entities.map(async entity => {
        const polygon = {}
        const name = entity.extendedData.customStrings[0].split("=")
        // const altitude = entity.extendedData.customStrings[3].split("=")
        const color = entity.colorIndex
        const points = []
        const results = []
        entity.vertices.map(v => {
          const result = convertionUTM(v.x, v.y, v.z)
          // const arr = [result.x, result.y, result.z]
          const point = {
            longitude: result.x,
            latitude: result.y,
            altitude: result.z
          }
          points.push(point)
          // results.push(result)
          results.push([point.longitude, point.latitude])


        })
        results.push(results[0])

        points.push(points[0])
        polygon.name = name[1]
        polygon.altitude = points[0].altitude
        polygon.color = color
        polygon.point = points
        // polygon.centroid = getCentroid(results)
        // var center = turf.centerOfMass(tPolygon)
        const turfPolygon = turf.polygon([results])
        const centroid = turf.centerOfMass(turfPolygon)
        polygon.centroid = {
          longitude: centroid.geometry.coordinates[0],
          latitude: centroid.geometry.coordinates[1],
          altitude: polygon.altitude
        }
        polygons.push(polygon)
      })
      resolve(polygons)
    })
  })

}




const getCell2 = async (filePath) => {
  const csv = readFileSync(filePath).toString().split('\n')
  csv.shift()
  const beforeCell = {
    name: '',
    point: {}
  }
  const cells = []
  let points = []
  let cell = {}
  csv.map((row, index) => {
    if (row != '') {
      const parts = row.split(',')
      if (beforeCell.name == '') {
        beforeCell.name = parts[0]
      }
      const result = convertionUTM(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]))
      const point = {
        longitude: result.x,
        latitude: result.y,
        altitude: result.z
      }
      // const point = {
      //   longitude: parseFloat(parts[1]),
      //   latitude: parseFloat(parts[2]),
      //   altitude: parseFloat(parts[3])
      // }
      beforeCell.point = point

      if (beforeCell.name != parts[0]) {
        points.push(points[0])
        const results = points.map(point => {
          return [point.longitude, point.latitude]
        })
        const turfPolygon = turf.polygon([results])
        const centroid = turf.centerOfMass(turfPolygon)

        cell.point = points
        cell.centroid = {
          longitude: centroid.geometry.coordinates[0],
          latitude: centroid.geometry.coordinates[1],
          altitude: cell.altitude
        }
        cells.push(cell)
        cell = {}
        points = []
        beforeCell.name = parts[0]
      }
      points.push(point)
      cell.name = parts[0]
      cell.area = parseFloat(parts[4])
      cell.volume = parseFloat(parts[5])
      cell.height = parseFloat(parts[6])
      cell.altitude = parseFloat(parts[7].substr(0, 4))
    }

    if (index + 1 == csv.length) {
      points.push(points[0])
      const results = points.map(point => {
        return [point.longitude, point.latitude]
      })
      const turfPolygon = turf.polygon([results])
      const centroid = turf.centerOfMass(turfPolygon)
      cell.point = points
      cell.centroid = {
        longitude: centroid.geometry.coordinates[0],
        latitude: centroid.geometry.coordinates[1],
        altitude: cell.altitude
      }
      cells.push(cell)
    }
  })
  return cells
}




const getStock2 = async (filePath) => {
  const csv = readFileSync(filePath).toString().split('\n')
  csv.shift()
  const beforeCell = {
    name: '',
    point: {}
  }
  const cells = []
  let points = []
  let cell = {}
  csv.map((row, index) => {
    if (row != '') {
      const parts = row.split(',')
      if (beforeCell.name == '') {
        beforeCell.name = parts[0]
      }
      const result = convertionUTM(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]))
      const point = {
        longitude: result.x,
        latitude: result.y,
        altitude: result.z
      }
      // const point = {
      //   longitude: parts[1],
      //   latitude: parts[2],
      //   altitude: parts[3]
      // }
      console.log(parts[1], ',', parts[2])
      console.log(point.longitude, point.latitude)
      beforeCell.point = point

      if (beforeCell.name != parts[0]) {
        points.push(points[0])
        const results = points.map(point => {
          return [point.longitude, point.latitude]
        })
        const turfPolygon = turf.polygon([results])
        const centroid = turf.centerOfMass(turfPolygon)
        cell.point = points
        cell.centroid = {
          longitude: centroid.geometry.coordinates[0],
          latitude: centroid.geometry.coordinates[1],
          altitude: cell.altitude
        }
        cells.push(cell)
        cell = {}
        points = []
        beforeCell.name = parts[0]
      }
      points.push(point)
      cell.name = parts[0]
      cell.area = parseFloat(parts[4])
      cell.volume = parseFloat(parts[5])
      cell.height = parseFloat(parts[6])
      cell.altitude = parseFloat(parts[7].substr(0, 4))
    }

    if (index + 1 == csv.length) {
      points.push(points[0])
      const results = points.map(point => {
        return [point.longitude, point.latitude]
      })
      const turfPolygon = turf.polygon([results])
      const centroid = turf.centerOfMass(turfPolygon)
      cell.point = points
      cell.centroid = {
        longitude: centroid.geometry.coordinates[0],
        latitude: centroid.geometry.coordinates[1],
        altitude: cell.altitude
      }
      cells.push(cell)
    }
  })
  return cells
}




const getDme = async (filePath) => {
  const csv = readFileSync(filePath).toString().split('\n')
  csv.shift()
  const beforeCell = {
    name: '',
    point: {}
  }
  const cells = []
  let points = []
  let cell = {}
  csv.map((row, index) => {
    if (row != '') {
      const parts = row.split(',')
      if (beforeCell.name == '') {
        beforeCell.name = parts[0]
      }

      const result = convertionUTM(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]))
      const point = {
        longitude: result.x,
        latitude: result.y,
        altitude: result.z
      }

      // console.log(parts[1], ',', parts[2])
      // console.log(point.longitude, point.latitude)

      beforeCell.point = point

      if (beforeCell.name == parts[0]) {
        points.push(point)
        cell.name = parts[0]
        cell.altitude = parseFloat(parts[3])
      } else if (beforeCell.name != parts[0]) {
        if (points[0].longitude != points[points.length - 1].longitude) {
          points.push(points[0])
        }
        const results = points.map(point => {
          return [point.longitude, point.latitude]
        })
        const turfPolygon = turf.polygon([results])
        const centroid = turf.centerOfMass(turfPolygon)
        cell.centroid = {
          longitude: centroid.geometry.coordinates[0],
          latitude: centroid.geometry.coordinates[1],
          altitude: cell.altitude
        }
        cell.point = points
        cells.push(cell)

        // New Cell
        cell = {}
        points = []
        points.push(beforeCell.point)
        beforeCell.name = parts[0]
      }
    }
    if (index + 1 == csv.length) {
      if (points[0].longitude != points[points.length - 1].longitude) {
        points.push(points[0])
      }
      const results = points.map(point => {
        return [point.longitude, point.latitude]
      })
      const turfPolygon = turf.polygon([results])
      const centroid = turf.centerOfMass(turfPolygon)
      cell.centroid = {
        longitude: centroid.geometry.coordinates[0],
        latitude: centroid.geometry.coordinates[1],
        altitude: cell.altitude
      }
      cell.point = points
      cells.push(cell)
    }
  })

  // console.log('STOCK')
  // cells.map(cell  => {
  //   console.log(cell.name)
  //   cell.point.map(point => {
  //     console.log
  //     console.log(point.longitude,',', point.latitude)
  //   })
  // })
  return cells
}



const getCell = async (filePath) => {
  const csv = readFileSync(filePath).toString().split('\n')
  csv.shift()
  const beforeCell = {
    name: '',
    point: {}
  }
  const cells = []
  let points = []
  let cell = {}
  csv.map((row, index) => {
    if (row != '') {
      const parts = row.split(',')
      if (beforeCell.name == '') {
        beforeCell.name = parts[0]
      }

      const result = convertionUTM(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]))
      const point = {
        longitude: result.x,
        latitude: result.y,
        altitude: result.z
      }

      // console.log(parts[1], ',', parts[2])
      // console.log(point.longitude, point.latitude)

      beforeCell.point = point

      if (beforeCell.name == parts[0]) {
        points.push(point)
        cell.name = parts[0]
        cell.area = parseFloat(parts[4])
        cell.volume = parseFloat(parts[5])
        cell.height = parseFloat(parts[6])
        cell.altitude = parseFloat(parts[7].substr(0, 4))
      } else if (beforeCell.name != parts[0]) {
        if (points[0].longitude != points[points.length - 1].longitude) {
          points.push(points[0])
        }
        const results = points.map(point => {
          return [point.longitude, point.latitude]
        })
        const turfPolygon = turf.polygon([results])
        const centroid = turf.centerOfMass(turfPolygon)
        cell.centroid = {
          longitude: centroid.geometry.coordinates[0],
          latitude: centroid.geometry.coordinates[1],
          altitude: cell.altitude
        }
        cell.point = points
        cells.push(cell)

        // New Cell
        cell = {}
        points = []
        points.push(beforeCell.point)
        beforeCell.name = parts[0]
      }
    }
    if (index + 1 == csv.length) {
      if (points[0].longitude != points[points.length - 1].longitude) {
        points.push(points[0])
      }
      const results = points.map(point => {
        return [point.longitude, point.latitude]
      })
      const turfPolygon = turf.polygon([results])
      const centroid = turf.centerOfMass(turfPolygon)
      cell.centroid = {
        longitude: centroid.geometry.coordinates[0],
        latitude: centroid.geometry.coordinates[1],
        altitude: cell.altitude
      }
      cell.point = points
      cells.push(cell)
    }
  })

  // console.log('STOCK')
  // cells.map(cell  => {
  //   console.log(cell.name)
  //   cell.point.map(point => {
  //     console.log
  //     console.log(point.longitude,',', point.latitude)
  //   })
  // })
  return cells
}



const getStock = async (filePath) => {
  const csv = readFileSync(filePath).toString().split('\n')
  csv.shift()
  const beforeCell = {
    name: '',
    point: {}
  }
  const cells = []
  let points = []
  let cell = {}
  csv.map((row, index) => {
    if (row != '') {
      const parts = row.split(',')
      if (beforeCell.name == '') {
        beforeCell.name = parts[0]
      }

      const result = convertionUTM(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]))
      const point = {
        longitude: result.x,
        latitude: result.y,
        altitude: result.z
      }

      // console.log(parts[1], ',', parts[2])
      // console.log(point.longitude, point.latitude)

      beforeCell.point = point

      if (beforeCell.name == parts[0]) {
        points.push(point)
        cell.name = parts[0]
        cell.area = parseFloat(parts[4])
        cell.volume = parseFloat(parts[5])
        cell.height = parseFloat(parts[6])
        cell.altitude = parseFloat(parts[7].substr(0, 4))
      } else if (beforeCell.name != parts[0]) {
        if (points[0].longitude != points[points.length - 1].longitude) {
          points.push(points[0])
        }
        const results = points.map(point => {
          return [point.longitude, point.latitude]
        })
        const turfPolygon = turf.polygon([results])
        const centroid = turf.centerOfMass(turfPolygon)
        cell.centroid = {
          longitude: centroid.geometry.coordinates[0],
          latitude: centroid.geometry.coordinates[1],
          altitude: cell.altitude
        }
        cell.point = points
        cells.push(cell)

        // New Cell
        cell = {}
        points = []
        points.push(beforeCell.point)
        beforeCell.name = parts[0]
      }
    }
    if (index + 1 == csv.length) {
      if (points[0].longitude != points[points.length - 1].longitude) {
        points.push(points[0])
      }
      const results = points.map(point => {
        return [point.longitude, point.latitude]
      })
      const turfPolygon = turf.polygon([results])
      const centroid = turf.centerOfMass(turfPolygon)
      cell.centroid = {
        longitude: centroid.geometry.coordinates[0],
        latitude: centroid.geometry.coordinates[1],
        altitude: cell.altitude
      }
      cell.point = points
      cells.push(cell)
    }
  })

  // console.log('STOCK')
  // cells.map(cell  => {
  //   console.log(cell.name)
  //   cell.point.map(point => {
  //     console.log
  //     console.log(point.longitude,',', point.latitude)
  //   })
  // })
  return cells
}



const getRoad = async (filePath) => {
  const csv = readFileSync(filePath).toString().split('\n')
  csv.shift()
  const beforeCell = {
    name: '',
    point: {}
  }
  const cells = []
  let points = []
  let cell = {}
  csv.map((row, index) => {
    if (row != '') {
      const parts = row.split(',')
      if (beforeCell.name == '') {
        beforeCell.name = parts[0]
      }

      const result = convertionUTM(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]))
      const point = {
        longitude: result.x,
        latitude: result.y,
        altitude: result.z
      }
      beforeCell.point = point

      // console.log(parts[1], ',', parts[2])
      // console.log(point.longitude, ',', point.latitude)


      if (beforeCell.name == parts[0]) {
        points.push(point)
        cell.name = parts[0]
      } else if (beforeCell.name != parts[0]) {
        cell.point = points
        cells.push(cell)
        cell = {}
        points = []
        points.push(beforeCell.point)
        beforeCell.name = parts[0]
      }
    }
    if (index + 1 == csv.length) {
      cell.point = points
      cells.push(cell)
    }
  })

  console.log('ROAD')
  cells.map(cell => {
    console.log(cell.name)
    cell.point.map(point => {
      // console.log(point.longitude, ',', point.latitude)
      console.log('{ "longitude": "' + point.longitude * -1 + '", "latitude": "' + point.latitude * -1 + '" },')
    })
  })
  return cells
}








/*
const getRoads = async (filePath) => {
  var parser = new DxfParser();
  var fileStream = createReadStream(filePath, { encoding: 'utf8' });
  return new Promise((resolve, reject) => {
    parser.parseStream(fileStream, (err, dxf) => {
      const roads = []
      if (err) return console.error(err.stack);
      const entities = dxf.entities
      entities.map(entity => {
        const road = {}
        const color = dxf.tables.layer.layers.rutas.colorIndex
        const points = []
        entity.vertices.map(v => {
          const result = convertionUTM(v.x, v.y, v.z)
          // const arr = [result.x, result.y, result.z]
          const point = {
            longitude: result.x,
            latitude: result.y,
            altitude: result.z
          }
          points.push(point)
        })
        // path.altitude = altitude[1]
        // path.altitude = points[0][2]
        
        road.color = color
        road.point = points

        roads.push(road)
      })
      resolve(roads)
    })
  })

}
*/

const convertionUTM = (x, y, z) => {
  const from = "+proj=utm +zone=17 +units=m +ellps=WGS84 +south +no_defs";
  const to = "+proj=longlat +ellps=WGS84 +units=m +no_defs";
  // const from =  "+proj=utm +zone=" + zone + " +units=m +ellps=" + ellipsoid + (southern ? " +south +no_defs" : " +no_defs");
  var isWGS = from.includes("WGS84");
  var srcLL = from.includes("longlat");
  var proj = proj4(from, to);
  var point = proj4.toPoint([x, y, z]);
  var results = proj.forward(point);
  return results
}

const getTree = async () => {
  const geo = await dirToJson(root)
  // console.log(geo)
  // console.log(JSON.stringify(geo))
  console.log(geo)

  return JSON.stringify(geo)
  // return geo

}

const dirToJson = async filePath => {
  return new Promise((resolve, reject) => {
    readDir(filePath, async (err, dirObj) => {
      if (err) {
        console.log(err);
      } else {
        // console.log('dirObj', JSON.stringify(dirObj))
        const geo = await convertToJson(dirObj)
        resolve(geo)
      }
    })
  })
}

module.exports = getTree
// module.exports = getDME








































