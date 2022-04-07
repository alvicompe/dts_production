// package: pb
// file: proto/services/source.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_source_services_pb from "../../proto/services/source.services_pb";

interface ISourceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    load: ISourceServiceService_ILoad;
}

interface ISourceServiceService_ILoad extends grpc.MethodDefinition<proto_services_source_services_pb.SourceRequest, proto_services_source_services_pb.SourceResponse> {
    path: string; // "/pb.SourceService/Load"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_source_services_pb.SourceRequest>;
    requestDeserialize: grpc.deserialize<proto_services_source_services_pb.SourceRequest>;
    responseSerialize: grpc.serialize<proto_services_source_services_pb.SourceResponse>;
    responseDeserialize: grpc.deserialize<proto_services_source_services_pb.SourceResponse>;
}

export const SourceServiceService: ISourceServiceService;

export interface ISourceServiceServer {
    load: grpc.handleUnaryCall<proto_services_source_services_pb.SourceRequest, proto_services_source_services_pb.SourceResponse>;
}

export interface ISourceServiceClient {
    load(request: proto_services_source_services_pb.SourceRequest, callback: (error: grpc.ServiceError | null, response: proto_services_source_services_pb.SourceResponse) => void): grpc.ClientUnaryCall;
    load(request: proto_services_source_services_pb.SourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_source_services_pb.SourceResponse) => void): grpc.ClientUnaryCall;
    load(request: proto_services_source_services_pb.SourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_source_services_pb.SourceResponse) => void): grpc.ClientUnaryCall;
}

export class SourceServiceClient extends grpc.Client implements ISourceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public load(request: proto_services_source_services_pb.SourceRequest, callback: (error: grpc.ServiceError | null, response: proto_services_source_services_pb.SourceResponse) => void): grpc.ClientUnaryCall;
    public load(request: proto_services_source_services_pb.SourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_source_services_pb.SourceResponse) => void): grpc.ClientUnaryCall;
    public load(request: proto_services_source_services_pb.SourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_source_services_pb.SourceResponse) => void): grpc.ClientUnaryCall;
}
