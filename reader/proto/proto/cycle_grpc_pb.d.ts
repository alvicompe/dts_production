// package: pb
// file: proto/cycle.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_cycle_pb from "../proto/cycle_pb";
import * as proto_truck_pb from "../proto/truck_pb";
import * as proto_excavator_pb from "../proto/excavator_pb";
import * as proto_material_pb from "../proto/material_pb";
import * as proto_streaming_pb from "../proto/streaming_pb";
import * as proto_load_pb from "../proto/load_pb";

interface ICycleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCycle: ICycleServiceService_ICreateCycle;
    retrieveCycle: ICycleServiceService_IRetrieveCycle;
    retrieveCycles: ICycleServiceService_IRetrieveCycles;
    updateCycle: ICycleServiceService_IUpdateCycle;
    deleteCycle: ICycleServiceService_IDeleteCycle;
}

interface ICycleServiceService_ICreateCycle extends grpc.MethodDefinition<proto_cycle_pb.CycleRequest, proto_cycle_pb.CycleResponse> {
    path: "/pb.CycleService/CreateCycle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_cycle_pb.CycleRequest>;
    requestDeserialize: grpc.deserialize<proto_cycle_pb.CycleRequest>;
    responseSerialize: grpc.serialize<proto_cycle_pb.CycleResponse>;
    responseDeserialize: grpc.deserialize<proto_cycle_pb.CycleResponse>;
}
interface ICycleServiceService_IRetrieveCycle extends grpc.MethodDefinition<proto_cycle_pb.CycleRequest, proto_cycle_pb.CycleResponse> {
    path: "/pb.CycleService/RetrieveCycle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_cycle_pb.CycleRequest>;
    requestDeserialize: grpc.deserialize<proto_cycle_pb.CycleRequest>;
    responseSerialize: grpc.serialize<proto_cycle_pb.CycleResponse>;
    responseDeserialize: grpc.deserialize<proto_cycle_pb.CycleResponse>;
}
interface ICycleServiceService_IRetrieveCycles extends grpc.MethodDefinition<proto_cycle_pb.CycleRequest, proto_cycle_pb.CyclesResponse> {
    path: "/pb.CycleService/RetrieveCycles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_cycle_pb.CycleRequest>;
    requestDeserialize: grpc.deserialize<proto_cycle_pb.CycleRequest>;
    responseSerialize: grpc.serialize<proto_cycle_pb.CyclesResponse>;
    responseDeserialize: grpc.deserialize<proto_cycle_pb.CyclesResponse>;
}
interface ICycleServiceService_IUpdateCycle extends grpc.MethodDefinition<proto_cycle_pb.CycleRequest, proto_cycle_pb.CycleResponse> {
    path: "/pb.CycleService/UpdateCycle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_cycle_pb.CycleRequest>;
    requestDeserialize: grpc.deserialize<proto_cycle_pb.CycleRequest>;
    responseSerialize: grpc.serialize<proto_cycle_pb.CycleResponse>;
    responseDeserialize: grpc.deserialize<proto_cycle_pb.CycleResponse>;
}
interface ICycleServiceService_IDeleteCycle extends grpc.MethodDefinition<proto_cycle_pb.CycleRequest, proto_cycle_pb.CycleResponse> {
    path: "/pb.CycleService/DeleteCycle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_cycle_pb.CycleRequest>;
    requestDeserialize: grpc.deserialize<proto_cycle_pb.CycleRequest>;
    responseSerialize: grpc.serialize<proto_cycle_pb.CycleResponse>;
    responseDeserialize: grpc.deserialize<proto_cycle_pb.CycleResponse>;
}

export const CycleServiceService: ICycleServiceService;

export interface ICycleServiceServer {
    createCycle: grpc.handleUnaryCall<proto_cycle_pb.CycleRequest, proto_cycle_pb.CycleResponse>;
    retrieveCycle: grpc.handleUnaryCall<proto_cycle_pb.CycleRequest, proto_cycle_pb.CycleResponse>;
    retrieveCycles: grpc.handleUnaryCall<proto_cycle_pb.CycleRequest, proto_cycle_pb.CyclesResponse>;
    updateCycle: grpc.handleUnaryCall<proto_cycle_pb.CycleRequest, proto_cycle_pb.CycleResponse>;
    deleteCycle: grpc.handleUnaryCall<proto_cycle_pb.CycleRequest, proto_cycle_pb.CycleResponse>;
}

export interface ICycleServiceClient {
    createCycle(request: proto_cycle_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    createCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    createCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    retrieveCycle(request: proto_cycle_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    retrieveCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    retrieveCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    retrieveCycles(request: proto_cycle_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    retrieveCycles(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    retrieveCycles(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    updateCycle(request: proto_cycle_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    updateCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    updateCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    deleteCycle(request: proto_cycle_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    deleteCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    deleteCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
}

export class CycleServiceClient extends grpc.Client implements ICycleServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createCycle(request: proto_cycle_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public createCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public createCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycle(request: proto_cycle_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycles(request: proto_cycle_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycles(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycles(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public updateCycle(request: proto_cycle_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public updateCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public updateCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public deleteCycle(request: proto_cycle_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public deleteCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public deleteCycle(request: proto_cycle_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cycle_pb.CycleResponse) => void): grpc.ClientUnaryCall;
}
