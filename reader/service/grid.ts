import {
  ServerUnaryCall,
  sendUnaryData,
  ServiceError,
  ServerWritableStream,
  ServerReadableStream,
} from "grpc";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { IGridServiceServer } from "../proto/proto/grid_grpc_pb";
import { GridRequest, GridResponse } from "../proto/proto/grid_pb";

export class GridServer implements IGridServiceServer {
  createGrid(call: ServerUnaryCall<GridRequest>, callback: sendUnaryData<GridResponse>) {
    console.log("call", call)

    const request = call.request.toObject;
    console.log("request", request)
    const response = new GridResponse
    response.setDone(true)
    callback(null, response);
  }

}
