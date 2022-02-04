// package: pb
// file: proto/services/excavator.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_excavator_services_pb from "../../proto/services/excavator.services_pb";
import * as proto_entities_excavator_pb from "../../proto/entities/excavator_pb";

interface IExcavatorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createExcavator: IExcavatorServiceService_ICreateExcavator;
    retrieveExcavator: IExcavatorServiceService_IRetrieveExcavator;
    retrieveExcavators: IExcavatorServiceService_IRetrieveExcavators;
    updateExcavator: IExcavatorServiceService_IUpdateExcavator;
    deleteExcavator: IExcavatorServiceService_IDeleteExcavator;
}

interface IExcavatorServiceService_ICreateExcavator extends grpc.MethodDefinition<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse> {
    path: string; // "/pb.ExcavatorService/CreateExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorRequest>;
    responseSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorResponse>;
    responseDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorResponse>;
}
interface IExcavatorServiceService_IRetrieveExcavator extends grpc.MethodDefinition<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse> {
    path: string; // "/pb.ExcavatorService/RetrieveExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorRequest>;
    responseSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorResponse>;
    responseDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorResponse>;
}
interface IExcavatorServiceService_IRetrieveExcavators extends grpc.MethodDefinition<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorsResponse> {
    path: string; // "/pb.ExcavatorService/RetrieveExcavators"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorRequest>;
    responseSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorsResponse>;
    responseDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorsResponse>;
}
interface IExcavatorServiceService_IUpdateExcavator extends grpc.MethodDefinition<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse> {
    path: string; // "/pb.ExcavatorService/UpdateExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorRequest>;
    responseSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorResponse>;
    responseDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorResponse>;
}
interface IExcavatorServiceService_IDeleteExcavator extends grpc.MethodDefinition<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse> {
    path: string; // "/pb.ExcavatorService/DeleteExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorRequest>;
    responseSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorResponse>;
    responseDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorResponse>;
}

export const ExcavatorServiceService: IExcavatorServiceService;

export interface IExcavatorServiceServer {
    createExcavator: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse>;
    retrieveExcavator: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse>;
    retrieveExcavators: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorsResponse>;
    updateExcavator: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse>;
    deleteExcavator: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse>;
}

export interface IExcavatorServiceClient {
    createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
}

export class ExcavatorServiceClient extends grpc.Client implements IExcavatorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    public updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
}
