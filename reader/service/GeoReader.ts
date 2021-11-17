import {sendUnaryData, ServerUnaryCall} from "grpc";
import {readFiles} from "../client";
import {GeoTreeRequest, GeoTreeResponse} from "../proto/proto/geo-reader_pb";
import {IGeoReaderServiceServer} from "../proto/proto/geo-reader_grpc_pb";
import {Geo} from "../proto/proto/geo_pb";
import {BuildTree} from "../business/buildTree";


export class GeoReaderServer implements IGeoReaderServiceServer {
    async retrieveTreeGeo(call: ServerUnaryCall<GeoTreeRequest>, callback: sendUnaryData<GeoTreeResponse>) {
        // console.log("call", call)
        // const request = call.request.toObject();
        // console.log("request", request)
        const response = new GeoTreeResponse()
        //   if (call.request.()) {
        // const ok = await readFiles()
        // response.setGeoList(ok)
        // console.log('ResponsereadFiles', ok)
        // if (ok) {
        //     // const r = await CreateGrid(call.request)
        //     // console.log('ResponseCreateGrid', r)
        //     // if (r)
        //     response.setStatus(true)
        //     response.setMessage("Hola")
        // }
        //   }
        const item = new BuildTree()
        item.getTree()
        // console.log(JSON.stringify(item.getTree()))
        callback(null, response);
    }
}
  