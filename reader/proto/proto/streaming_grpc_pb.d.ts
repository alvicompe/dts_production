// package: pb
// file: proto/streaming.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_streaming_pb from "../proto/streaming_pb";
import * as proto_geofence_pb from "../proto/geofence_pb";
import * as proto_road_pb from "../proto/road_pb";
import * as proto_point_pb from "../proto/point_pb";
import * as proto_sensor_pb from "../proto/sensor_pb";
import * as proto_pit_pb from "../proto/pit_pb";
import * as proto_pad_pb from "../proto/pad_pb";
import * as proto_stock_pb from "../proto/stock_pb";
import * as proto_dme_pb from "../proto/dme_pb";
import * as proto_excavator_pb from "../proto/excavator_pb";
import * as proto_truck_pb from "../proto/truck_pb";
import * as proto_load_pb from "../proto/load_pb";

interface ITruckInfoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    serverStream: ITruckInfoServiceService_IServerStream;
}

interface ITruckInfoServiceService_IServerStream extends grpc.MethodDefinition<proto_streaming_pb.TruckInfoRequest, proto_streaming_pb.TruckInfoResponse> {
    path: "/pb.TruckInfoService/ServerStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_streaming_pb.TruckInfoRequest>;
    requestDeserialize: grpc.deserialize<proto_streaming_pb.TruckInfoRequest>;
    responseSerialize: grpc.serialize<proto_streaming_pb.TruckInfoResponse>;
    responseDeserialize: grpc.deserialize<proto_streaming_pb.TruckInfoResponse>;
}

export const TruckInfoServiceService: ITruckInfoServiceService;

export interface ITruckInfoServiceServer {
    serverStream: grpc.handleServerStreamingCall<proto_streaming_pb.TruckInfoRequest, proto_streaming_pb.TruckInfoResponse>;
}

export interface ITruckInfoServiceClient {
    serverStream(request: proto_streaming_pb.TruckInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_streaming_pb.TruckInfoResponse>;
    serverStream(request: proto_streaming_pb.TruckInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_streaming_pb.TruckInfoResponse>;
}

export class TruckInfoServiceClient extends grpc.Client implements ITruckInfoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public serverStream(request: proto_streaming_pb.TruckInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_streaming_pb.TruckInfoResponse>;
    public serverStream(request: proto_streaming_pb.TruckInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_streaming_pb.TruckInfoResponse>;
}

interface IExcavatorInfoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    serverStream: IExcavatorInfoServiceService_IServerStream;
}

interface IExcavatorInfoServiceService_IServerStream extends grpc.MethodDefinition<proto_streaming_pb.ExcavatorInfoRequest, proto_streaming_pb.ExcavatorInfoResponse> {
    path: "/pb.ExcavatorInfoService/ServerStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_streaming_pb.ExcavatorInfoRequest>;
    requestDeserialize: grpc.deserialize<proto_streaming_pb.ExcavatorInfoRequest>;
    responseSerialize: grpc.serialize<proto_streaming_pb.ExcavatorInfoResponse>;
    responseDeserialize: grpc.deserialize<proto_streaming_pb.ExcavatorInfoResponse>;
}

export const ExcavatorInfoServiceService: IExcavatorInfoServiceService;

export interface IExcavatorInfoServiceServer {
    serverStream: grpc.handleServerStreamingCall<proto_streaming_pb.ExcavatorInfoRequest, proto_streaming_pb.ExcavatorInfoResponse>;
}

export interface IExcavatorInfoServiceClient {
    serverStream(request: proto_streaming_pb.ExcavatorInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_streaming_pb.ExcavatorInfoResponse>;
    serverStream(request: proto_streaming_pb.ExcavatorInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_streaming_pb.ExcavatorInfoResponse>;
}

export class ExcavatorInfoServiceClient extends grpc.Client implements IExcavatorInfoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public serverStream(request: proto_streaming_pb.ExcavatorInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_streaming_pb.ExcavatorInfoResponse>;
    public serverStream(request: proto_streaming_pb.ExcavatorInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_streaming_pb.ExcavatorInfoResponse>;
}
