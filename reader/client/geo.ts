import { client } from "./utils"
import { Chunk, GeoChunkRequest } from "../proto/proto/services/geo.services_pb"

export default function UploadGeo(param: string) {
  return new Promise<Boolean>((resolve, reject) => {
    const request = new GeoChunkRequest()
    const chunk = new Chunk()
    chunk.setContent(Buffer.from(param).toString("base64"))
    request.setChunk(chunk)
    client.uploadGeo(request, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(true)
    })
  })
}
