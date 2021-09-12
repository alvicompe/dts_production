// import { Geo, GeoChunkRequest } from "../proto/geo_pb";
import UploadGeo from "./geo";
// import * as tree from "./tree"
const getTree = require("./tree")
// const getDME = require("./tree")



async function run() {

  const tree = await getTree()
  // console.log("tree")
  // console.log(tree)


  const uploaded = await UploadGeo(tree)
  console.log("UPLOADED:", uploaded)




  // console.log(JSON.stringify(tree.years[0]))
  // const dme = await getDME()
  // console.log(JSON.stringify(dme))

}

run();
