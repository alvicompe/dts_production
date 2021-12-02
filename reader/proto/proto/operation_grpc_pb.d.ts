// package: pb
// file: proto/operation.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_operation_pb from "../proto/operation_pb";
import * as proto_truck_pb from "../proto/truck_pb";
import * as proto_excavator_pb from "../proto/excavator_pb";
import * as proto_road_pb from "../proto/road_pb";
import * as proto_cycle_pb from "../proto/cycle_pb";
import * as proto_load_pb from "../proto/load_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IOperationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOperation: IOperationServiceService_ICreateOperation;
    retrieveOperation: IOperationServiceService_IRetrieveOperation;
    retrieveOperations: IOperationServiceService_IRetrieveOperations;
    updateOperation: IOperationServiceService_IUpdateOperation;
    deleteOperation: IOperationServiceService_IDeleteOperation;
    removeTrucksOperation: IOperationServiceService_IRemoveTrucksOperation;
    reassigmentTrucksOperation: IOperationServiceService_IReassigmentTrucksOperation;
    finalizeOperation: IOperationServiceService_IFinalizeOperation;
}

interface IOperationServiceService_ICreateOperation extends grpc.MethodDefinition<proto_operation_pb.OperationRequest, proto_operation_pb.OperationResponse> {
    path: "/pb.OperationService/CreateOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_operation_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_operation_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_operation_pb.OperationResponse>;
    responseDeserialize: grpc.deserialize<proto_operation_pb.OperationResponse>;
}
interface IOperationServiceService_IRetrieveOperation extends grpc.MethodDefinition<proto_operation_pb.OperationRequest, proto_operation_pb.OperationResponse> {
    path: "/pb.OperationService/RetrieveOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_operation_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_operation_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_operation_pb.OperationResponse>;
    responseDeserialize: grpc.deserialize<proto_operation_pb.OperationResponse>;
}
interface IOperationServiceService_IRetrieveOperations extends grpc.MethodDefinition<proto_operation_pb.OperationRequest, proto_operation_pb.OperationsResponse> {
    path: "/pb.OperationService/RetrieveOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_operation_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_operation_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_operation_pb.OperationsResponse>;
    responseDeserialize: grpc.deserialize<proto_operation_pb.OperationsResponse>;
}
interface IOperationServiceService_IUpdateOperation extends grpc.MethodDefinition<proto_operation_pb.OperationRequest, proto_operation_pb.OperationResponse> {
    path: "/pb.OperationService/UpdateOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_operation_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_operation_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_operation_pb.OperationResponse>;
    responseDeserialize: grpc.deserialize<proto_operation_pb.OperationResponse>;
}
interface IOperationServiceService_IDeleteOperation extends grpc.MethodDefinition<proto_operation_pb.OperationRequest, proto_operation_pb.OperationResponse> {
    path: "/pb.OperationService/DeleteOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_operation_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_operation_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_operation_pb.OperationResponse>;
    responseDeserialize: grpc.deserialize<proto_operation_pb.OperationResponse>;
}
interface IOperationServiceService_IRemoveTrucksOperation extends grpc.MethodDefinition<proto_operation_pb.OperationRequest, proto_operation_pb.OperationResponse> {
    path: "/pb.OperationService/RemoveTrucksOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_operation_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_operation_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_operation_pb.OperationResponse>;
    responseDeserialize: grpc.deserialize<proto_operation_pb.OperationResponse>;
}
interface IOperationServiceService_IReassigmentTrucksOperation extends grpc.MethodDefinition<proto_operation_pb.OperationReassigmentRequest, proto_operation_pb.OperationReassigmentResponse> {
    path: "/pb.OperationService/ReassigmentTrucksOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_operation_pb.OperationReassigmentRequest>;
    requestDeserialize: grpc.deserialize<proto_operation_pb.OperationReassigmentRequest>;
    responseSerialize: grpc.serialize<proto_operation_pb.OperationReassigmentResponse>;
    responseDeserialize: grpc.deserialize<proto_operation_pb.OperationReassigmentResponse>;
}
interface IOperationServiceService_IFinalizeOperation extends grpc.MethodDefinition<proto_operation_pb.OperationRequest, proto_operation_pb.OperationFinalizeResponse> {
    path: "/pb.OperationService/FinalizeOperation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_operation_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_operation_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_operation_pb.OperationFinalizeResponse>;
    responseDeserialize: grpc.deserialize<proto_operation_pb.OperationFinalizeResponse>;
}

export const OperationServiceService: IOperationServiceService;

export interface IOperationServiceServer {
    createOperation: grpc.handleUnaryCall<proto_operation_pb.OperationRequest, proto_operation_pb.OperationResponse>;
    retrieveOperation: grpc.handleUnaryCall<proto_operation_pb.OperationRequest, proto_operation_pb.OperationResponse>;
    retrieveOperations: grpc.handleUnaryCall<proto_operation_pb.OperationRequest, proto_operation_pb.OperationsResponse>;
    updateOperation: grpc.handleUnaryCall<proto_operation_pb.OperationRequest, proto_operation_pb.OperationResponse>;
    deleteOperation: grpc.handleUnaryCall<proto_operation_pb.OperationRequest, proto_operation_pb.OperationResponse>;
    removeTrucksOperation: grpc.handleUnaryCall<proto_operation_pb.OperationRequest, proto_operation_pb.OperationResponse>;
    reassigmentTrucksOperation: grpc.handleUnaryCall<proto_operation_pb.OperationReassigmentRequest, proto_operation_pb.OperationReassigmentResponse>;
    finalizeOperation: grpc.handleUnaryCall<proto_operation_pb.OperationRequest, proto_operation_pb.OperationFinalizeResponse>;
}

export interface IOperationServiceClient {
    createOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    createOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    createOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    retrieveOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    retrieveOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    retrieveOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    retrieveOperations(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    retrieveOperations(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    retrieveOperations(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    updateOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    updateOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    updateOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    deleteOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    deleteOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    deleteOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    removeTrucksOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    removeTrucksOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    removeTrucksOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    reassigmentTrucksOperation(request: proto_operation_pb.OperationReassigmentRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    reassigmentTrucksOperation(request: proto_operation_pb.OperationReassigmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    reassigmentTrucksOperation(request: proto_operation_pb.OperationReassigmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    finalizeOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
    finalizeOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
    finalizeOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
}

export class OperationServiceClient extends grpc.Client implements IOperationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public createOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public createOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperations(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperations(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperations(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public updateOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public updateOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public updateOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public removeTrucksOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public removeTrucksOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public removeTrucksOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public reassigmentTrucksOperation(request: proto_operation_pb.OperationReassigmentRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    public reassigmentTrucksOperation(request: proto_operation_pb.OperationReassigmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    public reassigmentTrucksOperation(request: proto_operation_pb.OperationReassigmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    public finalizeOperation(request: proto_operation_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
    public finalizeOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
    public finalizeOperation(request: proto_operation_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_operation_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
}
