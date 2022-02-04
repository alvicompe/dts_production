// package: pb
// file: proto/services/grid.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_grid_services_pb from "../../proto/services/grid.services_pb";
import * as proto_entities_square_pb from "../../proto/entities/square_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IGridServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createGrid: IGridServiceService_ICreateGrid;
    updateGrid: IGridServiceService_IUpdateGrid;
    updateGridWeb: IGridServiceService_IUpdateGridWeb;
    deleteGridByName: IGridServiceService_IDeleteGridByName;
}

interface IGridServiceService_ICreateGrid extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_grid_services_pb.GridResponse> {
    path: string; // "/pb.GridService/CreateGrid"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_grid_services_pb.GridResponse>;
    responseDeserialize: grpc.deserialize<proto_services_grid_services_pb.GridResponse>;
}
interface IGridServiceService_IUpdateGrid extends grpc.MethodDefinition<proto_services_grid_services_pb.UpdateGridRequest, proto_services_grid_services_pb.UpdateGridResponse> {
    path: string; // "/pb.GridService/UpdateGrid"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_grid_services_pb.UpdateGridRequest>;
    requestDeserialize: grpc.deserialize<proto_services_grid_services_pb.UpdateGridRequest>;
    responseSerialize: grpc.serialize<proto_services_grid_services_pb.UpdateGridResponse>;
    responseDeserialize: grpc.deserialize<proto_services_grid_services_pb.UpdateGridResponse>;
}
interface IGridServiceService_IUpdateGridWeb extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_grid_services_pb.UpdateGridResponse> {
    path: string; // "/pb.GridService/UpdateGridWeb"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_grid_services_pb.UpdateGridResponse>;
    responseDeserialize: grpc.deserialize<proto_services_grid_services_pb.UpdateGridResponse>;
}
interface IGridServiceService_IDeleteGridByName extends grpc.MethodDefinition<proto_services_grid_services_pb.DeleteGridByNameRequest, proto_services_grid_services_pb.GridResponse> {
    path: string; // "/pb.GridService/DeleteGridByName"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_grid_services_pb.DeleteGridByNameRequest>;
    requestDeserialize: grpc.deserialize<proto_services_grid_services_pb.DeleteGridByNameRequest>;
    responseSerialize: grpc.serialize<proto_services_grid_services_pb.GridResponse>;
    responseDeserialize: grpc.deserialize<proto_services_grid_services_pb.GridResponse>;
}

export const GridServiceService: IGridServiceService;

export interface IGridServiceServer {
    createGrid: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_grid_services_pb.GridResponse>;
    updateGrid: grpc.handleUnaryCall<proto_services_grid_services_pb.UpdateGridRequest, proto_services_grid_services_pb.UpdateGridResponse>;
    updateGridWeb: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_grid_services_pb.UpdateGridResponse>;
    deleteGridByName: grpc.handleUnaryCall<proto_services_grid_services_pb.DeleteGridByNameRequest, proto_services_grid_services_pb.GridResponse>;
}

export interface IGridServiceClient {
    createGrid(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
    createGrid(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
    createGrid(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
    updateGrid(request: proto_services_grid_services_pb.UpdateGridRequest, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    updateGrid(request: proto_services_grid_services_pb.UpdateGridRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    updateGrid(request: proto_services_grid_services_pb.UpdateGridRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    updateGridWeb(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    updateGridWeb(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    updateGridWeb(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    deleteGridByName(request: proto_services_grid_services_pb.DeleteGridByNameRequest, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
    deleteGridByName(request: proto_services_grid_services_pb.DeleteGridByNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
    deleteGridByName(request: proto_services_grid_services_pb.DeleteGridByNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
}

export class GridServiceClient extends grpc.Client implements IGridServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createGrid(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
    public createGrid(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
    public createGrid(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
    public updateGrid(request: proto_services_grid_services_pb.UpdateGridRequest, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    public updateGrid(request: proto_services_grid_services_pb.UpdateGridRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    public updateGrid(request: proto_services_grid_services_pb.UpdateGridRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    public updateGridWeb(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    public updateGridWeb(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    public updateGridWeb(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.UpdateGridResponse) => void): grpc.ClientUnaryCall;
    public deleteGridByName(request: proto_services_grid_services_pb.DeleteGridByNameRequest, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
    public deleteGridByName(request: proto_services_grid_services_pb.DeleteGridByNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
    public deleteGridByName(request: proto_services_grid_services_pb.DeleteGridByNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_grid_services_pb.GridResponse) => void): grpc.ClientUnaryCall;
}
