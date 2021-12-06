// package: pb
// file: proto/dme.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_dme_pb from "../proto/dme_pb";
import * as proto_cell_pb from "../proto/cell_pb";

interface IDmeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createDme: IDmeServiceService_ICreateDme;
    retrieveDme: IDmeServiceService_IRetrieveDme;
    retrieveDmes: IDmeServiceService_IRetrieveDmes;
    updateDme: IDmeServiceService_IUpdateDme;
    deleteDme: IDmeServiceService_IDeleteDme;
}

interface IDmeServiceService_ICreateDme extends grpc.MethodDefinition<proto_dme_pb.DmeRequest, proto_dme_pb.DmeResponse> {
    path: "/pb.DmeService/CreateDme";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_dme_pb.DmeRequest>;
    requestDeserialize: grpc.deserialize<proto_dme_pb.DmeRequest>;
    responseSerialize: grpc.serialize<proto_dme_pb.DmeResponse>;
    responseDeserialize: grpc.deserialize<proto_dme_pb.DmeResponse>;
}
interface IDmeServiceService_IRetrieveDme extends grpc.MethodDefinition<proto_dme_pb.DmeRequest, proto_dme_pb.DmeResponse> {
    path: "/pb.DmeService/RetrieveDme";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_dme_pb.DmeRequest>;
    requestDeserialize: grpc.deserialize<proto_dme_pb.DmeRequest>;
    responseSerialize: grpc.serialize<proto_dme_pb.DmeResponse>;
    responseDeserialize: grpc.deserialize<proto_dme_pb.DmeResponse>;
}
interface IDmeServiceService_IRetrieveDmes extends grpc.MethodDefinition<proto_dme_pb.DmeRequest, proto_dme_pb.DmesResponse> {
    path: "/pb.DmeService/RetrieveDmes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_dme_pb.DmeRequest>;
    requestDeserialize: grpc.deserialize<proto_dme_pb.DmeRequest>;
    responseSerialize: grpc.serialize<proto_dme_pb.DmesResponse>;
    responseDeserialize: grpc.deserialize<proto_dme_pb.DmesResponse>;
}
interface IDmeServiceService_IUpdateDme extends grpc.MethodDefinition<proto_dme_pb.DmeRequest, proto_dme_pb.DmeResponse> {
    path: "/pb.DmeService/UpdateDme";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_dme_pb.DmeRequest>;
    requestDeserialize: grpc.deserialize<proto_dme_pb.DmeRequest>;
    responseSerialize: grpc.serialize<proto_dme_pb.DmeResponse>;
    responseDeserialize: grpc.deserialize<proto_dme_pb.DmeResponse>;
}
interface IDmeServiceService_IDeleteDme extends grpc.MethodDefinition<proto_dme_pb.DmeRequest, proto_dme_pb.DmeResponse> {
    path: "/pb.DmeService/DeleteDme";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_dme_pb.DmeRequest>;
    requestDeserialize: grpc.deserialize<proto_dme_pb.DmeRequest>;
    responseSerialize: grpc.serialize<proto_dme_pb.DmeResponse>;
    responseDeserialize: grpc.deserialize<proto_dme_pb.DmeResponse>;
}

export const DmeServiceService: IDmeServiceService;

export interface IDmeServiceServer {
    createDme: grpc.handleUnaryCall<proto_dme_pb.DmeRequest, proto_dme_pb.DmeResponse>;
    retrieveDme: grpc.handleUnaryCall<proto_dme_pb.DmeRequest, proto_dme_pb.DmeResponse>;
    retrieveDmes: grpc.handleUnaryCall<proto_dme_pb.DmeRequest, proto_dme_pb.DmesResponse>;
    updateDme: grpc.handleUnaryCall<proto_dme_pb.DmeRequest, proto_dme_pb.DmeResponse>;
    deleteDme: grpc.handleUnaryCall<proto_dme_pb.DmeRequest, proto_dme_pb.DmeResponse>;
}

export interface IDmeServiceClient {
    createDme(request: proto_dme_pb.DmeRequest, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    createDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    createDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    retrieveDme(request: proto_dme_pb.DmeRequest, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    retrieveDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    retrieveDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    retrieveDmes(request: proto_dme_pb.DmeRequest, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmesResponse) => void): grpc.ClientUnaryCall;
    retrieveDmes(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmesResponse) => void): grpc.ClientUnaryCall;
    retrieveDmes(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmesResponse) => void): grpc.ClientUnaryCall;
    updateDme(request: proto_dme_pb.DmeRequest, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    updateDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    updateDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    deleteDme(request: proto_dme_pb.DmeRequest, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    deleteDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    deleteDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
}

export class DmeServiceClient extends grpc.Client implements IDmeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createDme(request: proto_dme_pb.DmeRequest, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public createDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public createDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public retrieveDme(request: proto_dme_pb.DmeRequest, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public retrieveDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public retrieveDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public retrieveDmes(request: proto_dme_pb.DmeRequest, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmesResponse) => void): grpc.ClientUnaryCall;
    public retrieveDmes(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmesResponse) => void): grpc.ClientUnaryCall;
    public retrieveDmes(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmesResponse) => void): grpc.ClientUnaryCall;
    public updateDme(request: proto_dme_pb.DmeRequest, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public updateDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public updateDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public deleteDme(request: proto_dme_pb.DmeRequest, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public deleteDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
    public deleteDme(request: proto_dme_pb.DmeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_dme_pb.DmeResponse) => void): grpc.ClientUnaryCall;
}
