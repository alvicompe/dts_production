import { sendUnaryData, ServerUnaryCall } from "grpc"
import {
  CheckChangesTreeGeoResponse,
  CreateTreeGeoResponse,
  GeoTreeResponse,
} from "../proto/proto/geo-reader_pb"
import { IGeoReaderServiceServer } from "../proto/proto/geo-reader_grpc_pb"
import { GeoReader } from "../business/GeoReader"
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb"

export class GeoReaderServer implements IGeoReaderServiceServer {
  async retrieveTreeGeo(
    call: ServerUnaryCall<google_protobuf_empty_pb.Empty>,
    callback: sendUnaryData<GeoTreeResponse>
  ) {
    const response = new GeoTreeResponse()
    const ok = new GeoReader()
    const result = await ok.readFiles()
    response.setGeo(result.tree)
    if (result.response) {
      response.setStatus(true)
      response.setMessage("Success")
    } else {
      response.setStatus(false)
      response.setMessage("Incorrect tree, check files.")
      response.setErrorsList(result.errors)
    }

    callback(null, response)
  }

  async createTreeGeo(
    call: ServerUnaryCall<google_protobuf_empty_pb.Empty>,
    callback: sendUnaryData<CreateTreeGeoResponse>
  ) {
    const geoReaderBusiness = new GeoReader()
    const { status, message, errors } = await geoReaderBusiness.createGeo()

    const response = new CreateTreeGeoResponse()
    response.setStatus(status)
    response.setMessage(message)
    response.setErrorsList(errors)

    callback(null, response)
  }

  async createTreeDirectory(
    call: ServerUnaryCall<google_protobuf_empty_pb.Empty>,
    callback: sendUnaryData<GeoTreeResponse>
  ) {
    const response = new GeoTreeResponse()
    callback(null, response)
  }

  updateTreeDirectory(
    call: ServerUnaryCall<google_protobuf_empty_pb.Empty>,
    callback: sendUnaryData<GeoTreeResponse>
  ) {
    const response = new GeoTreeResponse()
    callback(null, response)
  }

  async checkChangesTreeGeo(
    call: ServerUnaryCall<google_protobuf_empty_pb.Empty>,
    callback: sendUnaryData<CheckChangesTreeGeoResponse>
  ) {
    const geoReaderBusiness = new GeoReader()
    const response = await geoReaderBusiness.checkChangeTreeGeo()
    callback(null, response)
  }
}
