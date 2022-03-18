// package: pb
// file: proto/services/excavator.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_excavator_services_pb from "../../proto/services/excavator.services_pb";
import * as proto_entities_excavator_pb from "../../proto/entities/excavator_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IExcavatorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createExcavator: IExcavatorServiceService_ICreateExcavator;
    createExcavatorList: IExcavatorServiceService_ICreateExcavatorList;
    retrieveExcavator: IExcavatorServiceService_IRetrieveExcavator;
    retrieveExcavators: IExcavatorServiceService_IRetrieveExcavators;
    retrieveExcavatorHyteraList: IExcavatorServiceService_IRetrieveExcavatorHyteraList;
    updateExcavator: IExcavatorServiceService_IUpdateExcavator;
    deleteExcavator: IExcavatorServiceService_IDeleteExcavator;
    deleteExcavatorList: IExcavatorServiceService_IDeleteExcavatorList;
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
interface IExcavatorServiceService_ICreateExcavatorList extends grpc.MethodDefinition<proto_services_excavator_services_pb.ExcavatorListRequest, proto_services_excavator_services_pb.ExcavatorListResponse> {
    path: string; // "/pb.ExcavatorService/CreateExcavatorList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorListRequest>;
    requestDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorListRequest>;
    responseSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorListResponse>;
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
interface IExcavatorServiceService_IRetrieveExcavatorHyteraList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_excavator_services_pb.ExcavatorListResponse> {
    path: string; // "/pb.ExcavatorService/RetrieveExcavatorHyteraList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorListResponse>;
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
interface IExcavatorServiceService_IDeleteExcavatorList extends grpc.MethodDefinition<proto_services_excavator_services_pb.ExcavatorListRequest, proto_services_excavator_services_pb.ExcavatorListResponse> {
    path: string; // "/pb.ExcavatorService/DeleteExcavatorList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorListRequest>;
    requestDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorListRequest>;
    responseSerialize: grpc.serialize<proto_services_excavator_services_pb.ExcavatorListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_excavator_services_pb.ExcavatorListResponse>;
}

export const ExcavatorServiceService: IExcavatorServiceService;

export interface IExcavatorServiceServer {
    createExcavator: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse>;
    createExcavatorList: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorListRequest, proto_services_excavator_services_pb.ExcavatorListResponse>;
    retrieveExcavator: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse>;
    retrieveExcavators: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorsResponse>;
    retrieveExcavatorHyteraList: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_excavator_services_pb.ExcavatorListResponse>;
    updateExcavator: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse>;
    deleteExcavator: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorRequest, proto_services_excavator_services_pb.ExcavatorResponse>;
    deleteExcavatorList: grpc.handleUnaryCall<proto_services_excavator_services_pb.ExcavatorListRequest, proto_services_excavator_services_pb.ExcavatorListResponse>;
}

export interface IExcavatorServiceClient {
    createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    createExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    createExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    createExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavatorHyteraList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavatorHyteraList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    retrieveExcavatorHyteraList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    deleteExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    deleteExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    deleteExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
}

export class ExcavatorServiceClient extends grpc.Client implements IExcavatorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public createExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public createExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    public createExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    public createExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavators(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorsResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavatorHyteraList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavatorHyteraList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    public retrieveExcavatorHyteraList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    public updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public updateExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public deleteExcavator(request: proto_services_excavator_services_pb.ExcavatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorResponse) => void): grpc.ClientUnaryCall;
    public deleteExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    public deleteExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
    public deleteExcavatorList(request: proto_services_excavator_services_pb.ExcavatorListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_excavator_services_pb.ExcavatorListResponse) => void): grpc.ClientUnaryCall;
}
