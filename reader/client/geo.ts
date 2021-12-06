import { Chunk, Geo, GeoChunkRequest } from "../proto/proto/geo_pb";
import { client } from "./utils";


// chunk.setContent(btoa(e))
// uploadRequest.setChunk(chunk)

export default function UploadGeo(param: string) {

  return new Promise<Boolean>((resolve, reject) => {

    const request = new GeoChunkRequest()
    const geo =  new Geo()
    const chunk = new Chunk()
    // console.log(Buffer.from('text!').toString('base64'));
    // console.log(Buffer.from(b64Encoded, 'base64').toString());
    chunk.setContent(Buffer.from(param).toString('base64'))

 

    request.setChunk(chunk)

    client.uploadGeo(request, (err, res) => {

      if (err) {
        reject(err)
      }else {
        // console.log("res", res)
        resolve(res.getOk())
      }

    });

  });

}
