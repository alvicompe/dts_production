import {Chunk, GeoChunkRequest} from "../proto/proto/geo_pb";
import {client} from "./utils";

export default function UploadGeo(param: string) {

    return new Promise<Boolean>((resolve, reject) => {

        const request = new GeoChunkRequest()
        const chunk = new Chunk()
        chunk.setContent(Buffer.from(param).toString('base64'))
        request.setChunk(chunk)

        client.uploadGeo(request, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(true)
        });
    });
}
