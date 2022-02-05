import { clientGrid } from "./utils"
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb"
import {
  UpdateGridRequest,
  UpdateGridResponse,
} from "../proto/proto/services/grid.services_pb"

export default class GridClient {
  createGrid() {
    return new Promise<boolean>((resolve, reject) => {
      const request = new google_protobuf_empty_pb.Empty()
      clientGrid.createGrid(request, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res.getDone())
        }
      })
    })
  }

  updateGrid(req: UpdateGridRequest) {
    return new Promise<UpdateGridResponse>(async (resolve, reject) => {
      clientGrid.updateGrid(req, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
}
