// package: pb
// file: proto/services/pit.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_pit_services_pb from "../../proto/services/pit.services_pb";
import * as proto_entities_pit_pb from "../../proto/entities/pit_pb";

interface IPitServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPit: IPitServiceService_ICreatePit;
    retrievePit: IPitServiceService_IRetrievePit;
    retrievePits: IPitServiceService_IRetrievePits;
    updatePit: IPitServiceService_IUpdatePit;
    deletePit: IPitServiceService_IDeletePit;
}

interface IPitServiceService_ICreatePit extends grpc.MethodDefinition<proto_services_pit_services_pb.PitRequest, proto_services_pit_services_pb.PitResponse> {
    path: string; // "/pb.PitService/CreatePit"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_pit_services_pb.PitRequest>;
    requestDeserialize: grpc.deserialize<proto_services_pit_services_pb.PitRequest>;
    responseSerialize: grpc.serialize<proto_services_pit_services_pb.PitResponse>;
    responseDeserialize: grpc.deserialize<proto_services_pit_services_pb.PitResponse>;
}
interface IPitServiceService_IRetrievePit extends grpc.MethodDefinition<proto_services_pit_services_pb.PitRequest, proto_services_pit_services_pb.PitResponse> {
    path: string; // "/pb.PitService/RetrievePit"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_pit_services_pb.PitRequest>;
    requestDeserialize: grpc.deserialize<proto_services_pit_services_pb.PitRequest>;
    responseSerialize: grpc.serialize<proto_services_pit_services_pb.PitResponse>;
    responseDeserialize: grpc.deserialize<proto_services_pit_services_pb.PitResponse>;
}
interface IPitServiceService_IRetrievePits extends grpc.MethodDefinition<proto_services_pit_services_pb.PitRequest, proto_services_pit_services_pb.PitsResponse> {
    path: string; // "/pb.PitService/RetrievePits"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_pit_services_pb.PitRequest>;
    requestDeserialize: grpc.deserialize<proto_services_pit_services_pb.PitRequest>;
    responseSerialize: grpc.serialize<proto_services_pit_services_pb.PitsResponse>;
    responseDeserialize: grpc.deserialize<proto_services_pit_services_pb.PitsResponse>;
}
interface IPitServiceService_IUpdatePit extends grpc.MethodDefinition<proto_services_pit_services_pb.PitRequest, proto_services_pit_services_pb.PitResponse> {
    path: string; // "/pb.PitService/UpdatePit"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_pit_services_pb.PitRequest>;
    requestDeserialize: grpc.deserialize<proto_services_pit_services_pb.PitRequest>;
    responseSerialize: grpc.serialize<proto_services_pit_services_pb.PitResponse>;
    responseDeserialize: grpc.deserialize<proto_services_pit_services_pb.PitResponse>;
}
interface IPitServiceService_IDeletePit extends grpc.MethodDefinition<proto_services_pit_services_pb.PitRequest, proto_services_pit_services_pb.PitResponse> {
    path: string; // "/pb.PitService/DeletePit"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_pit_services_pb.PitRequest>;
    requestDeserialize: grpc.deserialize<proto_services_pit_services_pb.PitRequest>;
    responseSerialize: grpc.serialize<proto_services_pit_services_pb.PitResponse>;
    responseDeserialize: grpc.deserialize<proto_services_pit_services_pb.PitResponse>;
}

export const PitServiceService: IPitServiceService;

export interface IPitServiceServer {
    createPit: grpc.handleUnaryCall<proto_services_pit_services_pb.PitRequest, proto_services_pit_services_pb.PitResponse>;
    retrievePit: grpc.handleUnaryCall<proto_services_pit_services_pb.PitRequest, proto_services_pit_services_pb.PitResponse>;
    retrievePits: grpc.handleUnaryCall<proto_services_pit_services_pb.PitRequest, proto_services_pit_services_pb.PitsResponse>;
    updatePit: grpc.handleUnaryCall<proto_services_pit_services_pb.PitRequest, proto_services_pit_services_pb.PitResponse>;
    deletePit: grpc.handleUnaryCall<proto_services_pit_services_pb.PitRequest, proto_services_pit_services_pb.PitResponse>;
}

export interface IPitServiceClient {
    createPit(request: proto_services_pit_services_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    createPit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    createPit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    retrievePit(request: proto_services_pit_services_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    retrievePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    retrievePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    retrievePits(request: proto_services_pit_services_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    retrievePits(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    retrievePits(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    updatePit(request: proto_services_pit_services_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    updatePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    updatePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    deletePit(request: proto_services_pit_services_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    deletePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    deletePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
}

export class PitServiceClient extends grpc.Client implements IPitServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPit(request: proto_services_pit_services_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public createPit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public createPit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public retrievePit(request: proto_services_pit_services_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public retrievePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public retrievePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public retrievePits(request: proto_services_pit_services_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    public retrievePits(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    public retrievePits(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitsResponse) => void): grpc.ClientUnaryCall;
    public updatePit(request: proto_services_pit_services_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public updatePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public updatePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public deletePit(request: proto_services_pit_services_pb.PitRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public deletePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
    public deletePit(request: proto_services_pit_services_pb.PitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pit_services_pb.PitResponse) => void): grpc.ClientUnaryCall;
}
