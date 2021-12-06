import { sendUnaryData, ServerUnaryCall } from "grpc"

import { IGridServiceServer } from "../proto/proto/grid_grpc_pb"
import { GridRequest, GridResponse } from "../proto/proto/grid_pb"
import CreateGrid from "../client/grid"

export class GridServer implements IGridServiceServer {
  async createGrid(
    call: ServerUnaryCall<GridRequest>,
    callback: sendUnaryData<GridResponse>
  ) {
    console.log("call", call)

    const request = call.request.toObject()
    console.log("request", request)
    const response = new GridResponse()
    if (call.request.getRead()) {
      const r = await CreateGrid(call.request)
      console.log("ResponseCreateGrid", r)
      if (r) response.setDone(true)
    }
    callback(null, response)
  }
}
