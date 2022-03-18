import { sendUnaryData, ServerUnaryCall } from "grpc"
import {
  DeleteGridByNameRequest,
  GridResponse,
  UpdateGridResponse,
} from "../proto/proto/services/grid.services_pb"
import { Empty } from "google-protobuf/google/protobuf/empty_pb"
import { GridBusiness } from "../business/GridBusiness"
import { IGridServiceServer } from "../proto/proto/services/grid.services_grpc_pb"

export class GridServer implements IGridServiceServer {
  async createGrid(
    call: ServerUnaryCall<Empty>,
    callback: sendUnaryData<GridResponse>
  ) {
    const gridBusiness = new GridBusiness()
    const response = await gridBusiness.createGrid()
    response.setDone(response.getDone())
    callback(null, response)
  }

  async updateGrid(
    call: ServerUnaryCall<Empty>,
    callback: sendUnaryData<UpdateGridResponse>
  ) {
    const gridBusiness = new GridBusiness()
    const result = await gridBusiness.updateGrid()

    const response = new UpdateGridResponse()
    response.setStatus(result.getStatus())
    response.setMessage(result.getMessage())
    callback(null, response)
  }

  deleteGridByName(
    call: ServerUnaryCall<DeleteGridByNameRequest>,
    callback: sendUnaryData<GridResponse>
  ): void {}

  async updateGridWeb(
    call: ServerUnaryCall<Empty>,
    callback: sendUnaryData<UpdateGridResponse>
  ) {
    const gridBusiness = new GridBusiness()
    const result = await gridBusiness.updateGrid()

    const response = new UpdateGridResponse()
    response.setStatus(result.getStatus())
    response.setMessage(result.getMessage())
    callback(null, response)
  }
}
