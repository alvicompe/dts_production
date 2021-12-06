// package: pb
// file: proto/pad.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_pad_pb from "../proto/pad_pb";
import * as proto_cell_pb from "../proto/cell_pb";

interface IPadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPad: IPadServiceService_ICreatePad;
    retrievePad: IPadServiceService_IRetrievePad;
    retrievePads: IPadServiceService_IRetrievePads;
    updatePad: IPadServiceService_IUpdatePad;
    deletePad: IPadServiceService_IDeletePad;
}

interface IPadServiceService_ICreatePad extends grpc.MethodDefinition<proto_pad_pb.PadRequest, proto_pad_pb.PadResponse> {
    path: "/pb.PadService/CreatePad";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pad_pb.PadRequest>;
    requestDeserialize: grpc.deserialize<proto_pad_pb.PadRequest>;
    responseSerialize: grpc.serialize<proto_pad_pb.PadResponse>;
    responseDeserialize: grpc.deserialize<proto_pad_pb.PadResponse>;
}
interface IPadServiceService_IRetrievePad extends grpc.MethodDefinition<proto_pad_pb.PadRequest, proto_pad_pb.PadResponse> {
    path: "/pb.PadService/RetrievePad";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pad_pb.PadRequest>;
    requestDeserialize: grpc.deserialize<proto_pad_pb.PadRequest>;
    responseSerialize: grpc.serialize<proto_pad_pb.PadResponse>;
    responseDeserialize: grpc.deserialize<proto_pad_pb.PadResponse>;
}
interface IPadServiceService_IRetrievePads extends grpc.MethodDefinition<proto_pad_pb.PadRequest, proto_pad_pb.PadsResponse> {
    path: "/pb.PadService/RetrievePads";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pad_pb.PadRequest>;
    requestDeserialize: grpc.deserialize<proto_pad_pb.PadRequest>;
    responseSerialize: grpc.serialize<proto_pad_pb.PadsResponse>;
    responseDeserialize: grpc.deserialize<proto_pad_pb.PadsResponse>;
}
interface IPadServiceService_IUpdatePad extends grpc.MethodDefinition<proto_pad_pb.PadRequest, proto_pad_pb.PadResponse> {
    path: "/pb.PadService/UpdatePad";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pad_pb.PadRequest>;
    requestDeserialize: grpc.deserialize<proto_pad_pb.PadRequest>;
    responseSerialize: grpc.serialize<proto_pad_pb.PadResponse>;
    responseDeserialize: grpc.deserialize<proto_pad_pb.PadResponse>;
}
interface IPadServiceService_IDeletePad extends grpc.MethodDefinition<proto_pad_pb.PadRequest, proto_pad_pb.PadResponse> {
    path: "/pb.PadService/DeletePad";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_pad_pb.PadRequest>;
    requestDeserialize: grpc.deserialize<proto_pad_pb.PadRequest>;
    responseSerialize: grpc.serialize<proto_pad_pb.PadResponse>;
    responseDeserialize: grpc.deserialize<proto_pad_pb.PadResponse>;
}

export const PadServiceService: IPadServiceService;

export interface IPadServiceServer {
    createPad: grpc.handleUnaryCall<proto_pad_pb.PadRequest, proto_pad_pb.PadResponse>;
    retrievePad: grpc.handleUnaryCall<proto_pad_pb.PadRequest, proto_pad_pb.PadResponse>;
    retrievePads: grpc.handleUnaryCall<proto_pad_pb.PadRequest, proto_pad_pb.PadsResponse>;
    updatePad: grpc.handleUnaryCall<proto_pad_pb.PadRequest, proto_pad_pb.PadResponse>;
    deletePad: grpc.handleUnaryCall<proto_pad_pb.PadRequest, proto_pad_pb.PadResponse>;
}

export interface IPadServiceClient {
    createPad(request: proto_pad_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    createPad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    createPad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    retrievePad(request: proto_pad_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    retrievePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    retrievePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    retrievePads(request: proto_pad_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    retrievePads(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    retrievePads(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    updatePad(request: proto_pad_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    updatePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    updatePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    deletePad(request: proto_pad_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    deletePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    deletePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
}

export class PadServiceClient extends grpc.Client implements IPadServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPad(request: proto_pad_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public createPad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public createPad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public retrievePad(request: proto_pad_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public retrievePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public retrievePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public retrievePads(request: proto_pad_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    public retrievePads(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    public retrievePads(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    public updatePad(request: proto_pad_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public updatePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public updatePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public deletePad(request: proto_pad_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public deletePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public deletePad(request: proto_pad_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_pad_pb.PadResponse) => void): grpc.ClientUnaryCall;
}
