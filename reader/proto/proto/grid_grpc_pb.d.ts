// package: pb
// file: proto/grid.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_grid_pb from "../proto/grid_pb";
import * as proto_point_pb from "../proto/point_pb";
import * as proto_geofence_pb from "../proto/geofence_pb";
import * as proto_road_pb from "../proto/road_pb";
import * as proto_pit_pb from "../proto/pit_pb";
import * as proto_pad_pb from "../proto/pad_pb";
import * as proto_stock_pb from "../proto/stock_pb";
import * as proto_dme_pb from "../proto/dme_pb";

interface IGridServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createGrid: IGridServiceService_ICreateGrid;
}

interface IGridServiceService_ICreateGrid extends grpc.MethodDefinition<proto_grid_pb.GridRequest, proto_grid_pb.GridResponse> {
    path: "/pb.GridService/CreateGrid";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_grid_pb.GridRequest>;
    requestDeserialize: grpc.deserialize<proto_grid_pb.GridRequest>;
    responseSerialize: grpc.serialize<proto_grid_pb.GridResponse>;
    responseDeserialize: grpc.deserialize<proto_grid_pb.GridResponse>;
}

export const GridServiceService: IGridServiceService;

export interface IGridServiceServer {
    createGrid: grpc.handleUnaryCall<proto_grid_pb.GridRequest, proto_grid_pb.GridResponse>;
}

export interface IGridServiceClient {
    createGrid(request: proto_grid_pb.GridRequest, callback: (error: grpc.ServiceError | null, response: proto_grid_pb.GridResponse) => void): grpc.ClientUnaryCall;
    createGrid(request: proto_grid_pb.GridRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_grid_pb.GridResponse) => void): grpc.ClientUnaryCall;
    createGrid(request: proto_grid_pb.GridRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_grid_pb.GridResponse) => void): grpc.ClientUnaryCall;
}

export class GridServiceClient extends grpc.Client implements IGridServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createGrid(request: proto_grid_pb.GridRequest, callback: (error: grpc.ServiceError | null, response: proto_grid_pb.GridResponse) => void): grpc.ClientUnaryCall;
    public createGrid(request: proto_grid_pb.GridRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_grid_pb.GridResponse) => void): grpc.ClientUnaryCall;
    public createGrid(request: proto_grid_pb.GridRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_grid_pb.GridResponse) => void): grpc.ClientUnaryCall;
}
