// package: pb
// file: proto/services/operation.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_operation_services_pb from "../../proto/services/operation.services_pb";
import * as proto_entities_operation_pb from "../../proto/entities/operation_pb";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
import * as proto_entities_truck_state_message_pb from "../../proto/entities/truck_state_message_pb";

interface IOperationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOperation: IOperationServiceService_ICreateOperation;
    retrieveOperation: IOperationServiceService_IRetrieveOperation;
    retrieveOperations: IOperationServiceService_IRetrieveOperations;
    updateOperation: IOperationServiceService_IUpdateOperation;
    deleteOperation: IOperationServiceService_IDeleteOperation;
    removeTrucksOperation: IOperationServiceService_IRemoveTrucksOperation;
    reassigmentTrucksOperation: IOperationServiceService_IReassigmentTrucksOperation;
    finalizeOperation: IOperationServiceService_IFinalizeOperation;
    migrateOperation: IOperationServiceService_IMigrateOperation;
}

interface IOperationServiceService_ICreateOperation extends grpc.MethodDefinition<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationResponse> {
    path: string; // "/pb.OperationService/CreateOperation"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_operation_services_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_services_operation_services_pb.OperationResponse>;
    responseDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationResponse>;
}
interface IOperationServiceService_IRetrieveOperation extends grpc.MethodDefinition<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationResponse> {
    path: string; // "/pb.OperationService/RetrieveOperation"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_operation_services_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_services_operation_services_pb.OperationResponse>;
    responseDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationResponse>;
}
interface IOperationServiceService_IRetrieveOperations extends grpc.MethodDefinition<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationsResponse> {
    path: string; // "/pb.OperationService/RetrieveOperations"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_operation_services_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_services_operation_services_pb.OperationsResponse>;
    responseDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationsResponse>;
}
interface IOperationServiceService_IUpdateOperation extends grpc.MethodDefinition<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationResponse> {
    path: string; // "/pb.OperationService/UpdateOperation"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_operation_services_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_services_operation_services_pb.OperationResponse>;
    responseDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationResponse>;
}
interface IOperationServiceService_IDeleteOperation extends grpc.MethodDefinition<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationResponse> {
    path: string; // "/pb.OperationService/DeleteOperation"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_operation_services_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_services_operation_services_pb.OperationResponse>;
    responseDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationResponse>;
}
interface IOperationServiceService_IRemoveTrucksOperation extends grpc.MethodDefinition<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationResponse> {
    path: string; // "/pb.OperationService/RemoveTrucksOperation"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_operation_services_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_services_operation_services_pb.OperationResponse>;
    responseDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationResponse>;
}
interface IOperationServiceService_IReassigmentTrucksOperation extends grpc.MethodDefinition<proto_services_operation_services_pb.OperationReassigmentRequest, proto_services_operation_services_pb.OperationReassigmentResponse> {
    path: string; // "/pb.OperationService/ReassigmentTrucksOperation"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_operation_services_pb.OperationReassigmentRequest>;
    requestDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationReassigmentRequest>;
    responseSerialize: grpc.serialize<proto_services_operation_services_pb.OperationReassigmentResponse>;
    responseDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationReassigmentResponse>;
}
interface IOperationServiceService_IFinalizeOperation extends grpc.MethodDefinition<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationFinalizeResponse> {
    path: string; // "/pb.OperationService/FinalizeOperation"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_operation_services_pb.OperationRequest>;
    requestDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationRequest>;
    responseSerialize: grpc.serialize<proto_services_operation_services_pb.OperationFinalizeResponse>;
    responseDeserialize: grpc.deserialize<proto_services_operation_services_pb.OperationFinalizeResponse>;
}
interface IOperationServiceService_IMigrateOperation extends grpc.MethodDefinition<proto_services_operation_services_pb.MigrateOperationRequest, proto_services_operation_services_pb.MigrateOperationResponse> {
    path: string; // "/pb.OperationService/MigrateOperation"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_operation_services_pb.MigrateOperationRequest>;
    requestDeserialize: grpc.deserialize<proto_services_operation_services_pb.MigrateOperationRequest>;
    responseSerialize: grpc.serialize<proto_services_operation_services_pb.MigrateOperationResponse>;
    responseDeserialize: grpc.deserialize<proto_services_operation_services_pb.MigrateOperationResponse>;
}

export const OperationServiceService: IOperationServiceService;

export interface IOperationServiceServer {
    createOperation: grpc.handleUnaryCall<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationResponse>;
    retrieveOperation: grpc.handleUnaryCall<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationResponse>;
    retrieveOperations: grpc.handleUnaryCall<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationsResponse>;
    updateOperation: grpc.handleUnaryCall<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationResponse>;
    deleteOperation: grpc.handleUnaryCall<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationResponse>;
    removeTrucksOperation: grpc.handleUnaryCall<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationResponse>;
    reassigmentTrucksOperation: grpc.handleUnaryCall<proto_services_operation_services_pb.OperationReassigmentRequest, proto_services_operation_services_pb.OperationReassigmentResponse>;
    finalizeOperation: grpc.handleUnaryCall<proto_services_operation_services_pb.OperationRequest, proto_services_operation_services_pb.OperationFinalizeResponse>;
    migrateOperation: grpc.handleUnaryCall<proto_services_operation_services_pb.MigrateOperationRequest, proto_services_operation_services_pb.MigrateOperationResponse>;
}

export interface IOperationServiceClient {
    createOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    createOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    createOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    retrieveOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    retrieveOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    retrieveOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    retrieveOperations(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    retrieveOperations(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    retrieveOperations(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    updateOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    updateOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    updateOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    deleteOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    deleteOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    deleteOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    removeTrucksOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    removeTrucksOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    removeTrucksOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    reassigmentTrucksOperation(request: proto_services_operation_services_pb.OperationReassigmentRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    reassigmentTrucksOperation(request: proto_services_operation_services_pb.OperationReassigmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    reassigmentTrucksOperation(request: proto_services_operation_services_pb.OperationReassigmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    finalizeOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
    finalizeOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
    finalizeOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
    migrateOperation(request: proto_services_operation_services_pb.MigrateOperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.MigrateOperationResponse) => void): grpc.ClientUnaryCall;
    migrateOperation(request: proto_services_operation_services_pb.MigrateOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.MigrateOperationResponse) => void): grpc.ClientUnaryCall;
    migrateOperation(request: proto_services_operation_services_pb.MigrateOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.MigrateOperationResponse) => void): grpc.ClientUnaryCall;
}

export class OperationServiceClient extends grpc.Client implements IOperationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public createOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public createOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperations(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperations(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public retrieveOperations(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public updateOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public updateOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public updateOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public removeTrucksOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public removeTrucksOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public removeTrucksOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationResponse) => void): grpc.ClientUnaryCall;
    public reassigmentTrucksOperation(request: proto_services_operation_services_pb.OperationReassigmentRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    public reassigmentTrucksOperation(request: proto_services_operation_services_pb.OperationReassigmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    public reassigmentTrucksOperation(request: proto_services_operation_services_pb.OperationReassigmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationReassigmentResponse) => void): grpc.ClientUnaryCall;
    public finalizeOperation(request: proto_services_operation_services_pb.OperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
    public finalizeOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
    public finalizeOperation(request: proto_services_operation_services_pb.OperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.OperationFinalizeResponse) => void): grpc.ClientUnaryCall;
    public migrateOperation(request: proto_services_operation_services_pb.MigrateOperationRequest, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.MigrateOperationResponse) => void): grpc.ClientUnaryCall;
    public migrateOperation(request: proto_services_operation_services_pb.MigrateOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.MigrateOperationResponse) => void): grpc.ClientUnaryCall;
    public migrateOperation(request: proto_services_operation_services_pb.MigrateOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_operation_services_pb.MigrateOperationResponse) => void): grpc.ClientUnaryCall;
}
