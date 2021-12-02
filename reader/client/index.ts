// import { Geo, GeoChunkRequest } from "../proto/geo_pb";
// import * as tree from "./tree"
import UploadGeo from "./geo";

const getTree = require("./tree")

// const getDME = require("./tree")

export async function readFiles() {
    return await getTree()
    // return await UploadGeo(tree)
}
