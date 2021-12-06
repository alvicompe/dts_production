import { GridRequest } from "../proto/proto/grid_pb";
import { clientGrid } from "./utils";


// chunk.setContent(btoa(e))
// uploadRequest.setChunk(chunk)

export default function CreateGrid(param: GridRequest) {
  return new Promise<Boolean>((resolve, reject) => {
    const request = new GridRequest()
    console.log("param.getRead()", param.getRead())
    request.setRead(param.getRead())
    clientGrid.createGrid(request, (err, res) => {
      if (err) {
        reject(err)
      }else {
        console.log("res.getDone()", res.getDone())
        resolve(res.getDone())
      }

    });

  });

}
