// package: pb
// file: proto/sensor.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_sensor_pb from "../proto/sensor_pb";

interface ISensorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    serverStream: ISensorServiceService_IServerStream;
}

interface ISensorServiceService_IServerStream extends grpc.MethodDefinition<proto_sensor_pb.ServerSensorRequest, proto_sensor_pb.ServerSensorResponse> {
    path: string; // "/pb.SensorService/ServerStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_sensor_pb.ServerSensorRequest>;
    requestDeserialize: grpc.deserialize<proto_sensor_pb.ServerSensorRequest>;
    responseSerialize: grpc.serialize<proto_sensor_pb.ServerSensorResponse>;
    responseDeserialize: grpc.deserialize<proto_sensor_pb.ServerSensorResponse>;
}

export const SensorServiceService: ISensorServiceService;

export interface ISensorServiceServer {
    serverStream: grpc.handleServerStreamingCall<proto_sensor_pb.ServerSensorRequest, proto_sensor_pb.ServerSensorResponse>;
}

export interface ISensorServiceClient {
    serverStream(request: proto_sensor_pb.ServerSensorRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_sensor_pb.ServerSensorResponse>;
    serverStream(request: proto_sensor_pb.ServerSensorRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_sensor_pb.ServerSensorResponse>;
}

export class SensorServiceClient extends grpc.Client implements ISensorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public serverStream(request: proto_sensor_pb.ServerSensorRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_sensor_pb.ServerSensorResponse>;
    public serverStream(request: proto_sensor_pb.ServerSensorRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_sensor_pb.ServerSensorResponse>;
}
