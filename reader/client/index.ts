// import { Geo, GeoChunkRequest } from "../proto/geo_pb";
import UploadGeo from "./geo";
// import * as tree from "./tree"
const getTree = require("./tree")
// const getDME = require("./tree")



export async function readFiles() {

  const tree = await getTree()
  // console.log("tree")
  // console.log(tree)

  return tree
  // return await UploadGeo(tree)
  // console.log(JSON.stringify(tree.years[0]))
  // const dme = await getDME()
  // console.log(JSON.stringify(dme))

}

//run();
