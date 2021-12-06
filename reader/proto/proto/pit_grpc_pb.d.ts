// package: pb
// file: proto/pit.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_pit_pb from "../proto/pit_pb";
import * as proto_project_pb from "../proto/project_pb";

interface IPitServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPit: IPitServiceService_ICreatePit;
    retrievePit: IPitServiceService_IRetrievePit;
    retrievePits: IPitServiceService_IRetrievePits;
    updatePit: IPitServiceService_IUpdatePit;
    deletePit: IPitServiceService_IDeletePit;
}

interface IPitServiceService_ICreatePit extends grpc.MethodDefinition<proto_pit_pb.PitRequest, proto_pit_pb.PitResponse> {
    path: "/pb.PitService/CreatePit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pit_pb.PitRequest>;
    requestDeserialize: grpc.deserialize<proto_pit_pb.PitRequest>;
    responseSerialize: grpc.serialize<proto_pit_pb.PitResponse>;
    responseDeserialize: grpc.deserialize<proto_pit_pb.PitResponse>;
}
interface IPitServiceService_IRetrievePit extends grpc.MethodDefinition<proto_pit_pb.PitRequest, proto_pit_pb.PitResponse> {
    path: "/pb.PitService/RetrievePit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pit_pb.PitRequest>;
    requestDeserialize: grpc.deserialize<proto_pit_pb.PitRequest>;
    responseSerialize: grpc.serialize<proto_pit_pb.PitResponse>;
    responseDeserialize: grpc.deserialize<proto_pit_pb.PitResponse>;
}
interface IPitServiceService_IRetrievePits extends grpc.MethodDefinition<proto_pit_pb.PitRequest, proto_pit_pb.PitsResponse> {
    path: "/pb.PitService/RetrievePits";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pit_pb.PitRequest>;
    requestDeserialize: grpc.deserialize<proto_pit_pb.PitRequest>;
    responseSerialize: grpc.serialize<proto_pit_pb.PitsResponse>;
    responseDeserialize: grpc.deserialize<proto_pit_pb.PitsResponse>;
}
interface IPitServiceService_IUpdatePit extends grpc.MethodDefinition<proto_pit_pb.PitRequest, proto_pit_pb.PitResponse> {
    path: "/pb.PitService/UpdatePit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pit_pb.PitRequest>;
    requestDeserialize: grpc.deserialize<proto_pit_pb.PitRequest>;
    responseSerialize: grpc.serialize<proto_pit_pb.PitResponse>;
    responseDeserialize: grpc.deserialize<proto_pit_pb.PitResponse>;
}
interface IPitServiceService_IDeletePit extends grpc.MethodDefinition<proto_pit_pb.PitRequest, proto_pit_pb.PitResponse> {
    path: "/pb.PitService/DeletePit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pit_pb.PitRequest>;
    requestDeserialize: grpc.deserialize<proto_pit_pb.PitRequest>;
    responseSerialize: grpc.serialize<proto_pit_pb.PitResponse>;
    responseDeserialize: grpc.deserialize<proto_pit_pb.PitResponse>;
}

export const PitServiceService: IPitServiceService;

export interface IPitServiceServer {
    createPit: grpc.handleUnaryCall<proto_pit_pb.PitRequest, proto_pit_pb.PitResponse>;
    retrievePit: grpc.handleUnaryCall<proto_pit_pb.PitRequest, proto_pit_pb.PitResponse>;
    retrievePits: grpc.handleUnaryCall<proto_pit_pb.PitRequest, proto_pit_pb.PitsResponse>;
    updatePit: grpc.handleUnaryCall<proto_pit_pb.PitRequest, proto_pit_pb.PitResponse>;
    deletePit: grpc.handleUnaryCall<proto_pit_pb.PitRequest, proto_pit_pb.PitResponse>;
}

export interface IPitServiceClient {
    createPit(request: proto_pit_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    createPit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    createPit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    retrievePit(request: proto_pit_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    retrievePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    retrievePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    retrievePits(request: proto_pit_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    retrievePits(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    retrievePits(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    updatePit(request: proto_pit_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    updatePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    updatePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    deletePit(request: proto_pit_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    deletePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    deletePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
}

export class PitServiceClient extends grpc.Client implements IPitServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPit(request: proto_pit_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public createPit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public createPit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public retrievePit(request: proto_pit_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public retrievePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public retrievePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public retrievePits(request: proto_pit_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    public retrievePits(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    public retrievePits(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    public updatePit(request: proto_pit_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public updatePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public updatePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public deletePit(request: proto_pit_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public deletePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public deletePit(request: proto_pit_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pit_pb.PitResponse) => void): grpc.ClientUnaryCall;
}
