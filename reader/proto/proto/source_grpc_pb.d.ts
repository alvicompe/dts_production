// package: pb
// file: proto/source.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_source_pb from "../proto/source_pb";

interface ISourceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    load: ISourceServiceService_ILoad;
}

interface ISourceServiceService_ILoad extends grpc.MethodDefinition<proto_source_pb.SourceRequest, proto_source_pb.SourceResponse> {
    path: string; // "/pb.SourceService/Load"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_source_pb.SourceRequest>;
    requestDeserialize: grpc.deserialize<proto_source_pb.SourceRequest>;
    responseSerialize: grpc.serialize<proto_source_pb.SourceResponse>;
    responseDeserialize: grpc.deserialize<proto_source_pb.SourceResponse>;
}

export const SourceServiceService: ISourceServiceService;

export interface ISourceServiceServer {
    load: grpc.handleUnaryCall<proto_source_pb.SourceRequest, proto_source_pb.SourceResponse>;
}

export interface ISourceServiceClient {
    load(request: proto_source_pb.SourceRequest, callback: (error: grpc.ServiceError | null, response: proto_source_pb.SourceResponse) => void): grpc.ClientUnaryCall;
    load(request: proto_source_pb.SourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_source_pb.SourceResponse) => void): grpc.ClientUnaryCall;
    load(request: proto_source_pb.SourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_source_pb.SourceResponse) => void): grpc.ClientUnaryCall;
}

export class SourceServiceClient extends grpc.Client implements ISourceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public load(request: proto_source_pb.SourceRequest, callback: (error: grpc.ServiceError | null, response: proto_source_pb.SourceResponse) => void): grpc.ClientUnaryCall;
    public load(request: proto_source_pb.SourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_source_pb.SourceResponse) => void): grpc.ClientUnaryCall;
    public load(request: proto_source_pb.SourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_source_pb.SourceResponse) => void): grpc.ClientUnaryCall;
}
