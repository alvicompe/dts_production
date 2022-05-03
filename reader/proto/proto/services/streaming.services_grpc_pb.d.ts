// package: pb
// file: proto/services/streaming.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_streaming_services_pb from "../../proto/services/streaming.services_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as proto_entities_streaming_pb from "../../proto/entities/streaming_pb";

interface ITruckInfoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    serverStream: ITruckInfoServiceService_IServerStream;
}

interface ITruckInfoServiceService_IServerStream extends grpc.MethodDefinition<proto_services_streaming_services_pb.TruckInfoRequest, proto_services_streaming_services_pb.TruckInfoResponse> {
    path: string; // "/pb.TruckInfoService/ServerStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_services_streaming_services_pb.TruckInfoRequest>;
    requestDeserialize: grpc.deserialize<proto_services_streaming_services_pb.TruckInfoRequest>;
    responseSerialize: grpc.serialize<proto_services_streaming_services_pb.TruckInfoResponse>;
    responseDeserialize: grpc.deserialize<proto_services_streaming_services_pb.TruckInfoResponse>;
}

export const TruckInfoServiceService: ITruckInfoServiceService;

export interface ITruckInfoServiceServer {
    serverStream: grpc.handleServerStreamingCall<proto_services_streaming_services_pb.TruckInfoRequest, proto_services_streaming_services_pb.TruckInfoResponse>;
}

export interface ITruckInfoServiceClient {
    serverStream(request: proto_services_streaming_services_pb.TruckInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_streaming_services_pb.TruckInfoResponse>;
    serverStream(request: proto_services_streaming_services_pb.TruckInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_streaming_services_pb.TruckInfoResponse>;
}

export class TruckInfoServiceClient extends grpc.Client implements ITruckInfoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public serverStream(request: proto_services_streaming_services_pb.TruckInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_streaming_services_pb.TruckInfoResponse>;
    public serverStream(request: proto_services_streaming_services_pb.TruckInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_streaming_services_pb.TruckInfoResponse>;
}

interface IExcavatorInfoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    serverStream: IExcavatorInfoServiceService_IServerStream;
}

interface IExcavatorInfoServiceService_IServerStream extends grpc.MethodDefinition<proto_services_streaming_services_pb.ExcavatorInfoRequest, proto_services_streaming_services_pb.ExcavatorInfoResponse> {
    path: string; // "/pb.ExcavatorInfoService/ServerStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_services_streaming_services_pb.ExcavatorInfoRequest>;
    requestDeserialize: grpc.deserialize<proto_services_streaming_services_pb.ExcavatorInfoRequest>;
    responseSerialize: grpc.serialize<proto_services_streaming_services_pb.ExcavatorInfoResponse>;
    responseDeserialize: grpc.deserialize<proto_services_streaming_services_pb.ExcavatorInfoResponse>;
}

export const ExcavatorInfoServiceService: IExcavatorInfoServiceService;

export interface IExcavatorInfoServiceServer {
    serverStream: grpc.handleServerStreamingCall<proto_services_streaming_services_pb.ExcavatorInfoRequest, proto_services_streaming_services_pb.ExcavatorInfoResponse>;
}

export interface IExcavatorInfoServiceClient {
    serverStream(request: proto_services_streaming_services_pb.ExcavatorInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_streaming_services_pb.ExcavatorInfoResponse>;
    serverStream(request: proto_services_streaming_services_pb.ExcavatorInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_streaming_services_pb.ExcavatorInfoResponse>;
}

export class ExcavatorInfoServiceClient extends grpc.Client implements IExcavatorInfoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public serverStream(request: proto_services_streaming_services_pb.ExcavatorInfoRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_streaming_services_pb.ExcavatorInfoResponse>;
    public serverStream(request: proto_services_streaming_services_pb.ExcavatorInfoRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_streaming_services_pb.ExcavatorInfoResponse>;
}

interface ISocketStreamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    socketStream: ISocketStreamServiceService_ISocketStream;
    truckInfoStream: ISocketStreamServiceService_ITruckInfoStream;
    excavatorInfoStream: ISocketStreamServiceService_IExcavatorInfoStream;
}

interface ISocketStreamServiceService_ISocketStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_entities_streaming_pb.Socket> {
    path: string; // "/pb.SocketStreamService/SocketStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_entities_streaming_pb.Socket>;
    responseDeserialize: grpc.deserialize<proto_entities_streaming_pb.Socket>;
}
interface ISocketStreamServiceService_ITruckInfoStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_entities_streaming_pb.TruckInfo> {
    path: string; // "/pb.SocketStreamService/TruckInfoStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_entities_streaming_pb.TruckInfo>;
    responseDeserialize: grpc.deserialize<proto_entities_streaming_pb.TruckInfo>;
}
interface ISocketStreamServiceService_IExcavatorInfoStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_entities_streaming_pb.ExcavatorInfo> {
    path: string; // "/pb.SocketStreamService/ExcavatorInfoStream"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_entities_streaming_pb.ExcavatorInfo>;
    responseDeserialize: grpc.deserialize<proto_entities_streaming_pb.ExcavatorInfo>;
}

export const SocketStreamServiceService: ISocketStreamServiceService;

export interface ISocketStreamServiceServer {
    socketStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, proto_entities_streaming_pb.Socket>;
    truckInfoStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, proto_entities_streaming_pb.TruckInfo>;
    excavatorInfoStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, proto_entities_streaming_pb.ExcavatorInfo>;
}

export interface ISocketStreamServiceClient {
    socketStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.Socket>;
    socketStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.Socket>;
    truckInfoStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.TruckInfo>;
    truckInfoStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.TruckInfo>;
    excavatorInfoStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.ExcavatorInfo>;
    excavatorInfoStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.ExcavatorInfo>;
}

export class SocketStreamServiceClient extends grpc.Client implements ISocketStreamServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public socketStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.Socket>;
    public socketStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.Socket>;
    public truckInfoStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.TruckInfo>;
    public truckInfoStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.TruckInfo>;
    public excavatorInfoStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.ExcavatorInfo>;
    public excavatorInfoStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_entities_streaming_pb.ExcavatorInfo>;
}
