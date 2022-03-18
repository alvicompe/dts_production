// package: pb
// file: proto/services/sensor.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_sensor_services_pb from "../../proto/services/sensor.services_pb";
import * as proto_entities_sensor_pb from "../../proto/entities/sensor_pb";

interface ISensorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    serverStream: ISensorServiceService_IServerStream;
}

interface ISensorServiceService_IServerStream extends grpc.MethodDefinition<proto_services_sensor_services_pb.ServerSensorRequest, proto_services_sensor_services_pb.ServerSensorResponse> {
    path: string; // "/pb.SensorService/ServerStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_services_sensor_services_pb.ServerSensorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_sensor_services_pb.ServerSensorRequest>;
    responseSerialize: grpc.serialize<proto_services_sensor_services_pb.ServerSensorResponse>;
    responseDeserialize: grpc.deserialize<proto_services_sensor_services_pb.ServerSensorResponse>;
}

export const SensorServiceService: ISensorServiceService;

export interface ISensorServiceServer {
    serverStream: grpc.handleServerStreamingCall<proto_services_sensor_services_pb.ServerSensorRequest, proto_services_sensor_services_pb.ServerSensorResponse>;
}

export interface ISensorServiceClient {
    serverStream(request: proto_services_sensor_services_pb.ServerSensorRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_sensor_services_pb.ServerSensorResponse>;
    serverStream(request: proto_services_sensor_services_pb.ServerSensorRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_sensor_services_pb.ServerSensorResponse>;
}

export class SensorServiceClient extends grpc.Client implements ISensorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public serverStream(request: proto_services_sensor_services_pb.ServerSensorRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_sensor_services_pb.ServerSensorResponse>;
    public serverStream(request: proto_services_sensor_services_pb.ServerSensorRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_sensor_services_pb.ServerSensorResponse>;
}
