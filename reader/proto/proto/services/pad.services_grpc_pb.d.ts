// package: pb
// file: proto/services/pad.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_pad_services_pb from "../../proto/services/pad.services_pb";
import * as proto_entities_pad_pb from "../../proto/entities/pad_pb";

interface IPadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPad: IPadServiceService_ICreatePad;
    retrievePad: IPadServiceService_IRetrievePad;
    retrievePads: IPadServiceService_IRetrievePads;
    updatePad: IPadServiceService_IUpdatePad;
    deletePad: IPadServiceService_IDeletePad;
}

interface IPadServiceService_ICreatePad extends grpc.MethodDefinition<proto_services_pad_services_pb.PadRequest, proto_services_pad_services_pb.PadResponse> {
    path: string; // "/pb.PadService/CreatePad"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_pad_services_pb.PadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_pad_services_pb.PadRequest>;
    responseSerialize: grpc.serialize<proto_services_pad_services_pb.PadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_pad_services_pb.PadResponse>;
}
interface IPadServiceService_IRetrievePad extends grpc.MethodDefinition<proto_services_pad_services_pb.PadRequest, proto_services_pad_services_pb.PadResponse> {
    path: string; // "/pb.PadService/RetrievePad"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_pad_services_pb.PadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_pad_services_pb.PadRequest>;
    responseSerialize: grpc.serialize<proto_services_pad_services_pb.PadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_pad_services_pb.PadResponse>;
}
interface IPadServiceService_IRetrievePads extends grpc.MethodDefinition<proto_services_pad_services_pb.PadRequest, proto_services_pad_services_pb.PadsResponse> {
    path: string; // "/pb.PadService/RetrievePads"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_pad_services_pb.PadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_pad_services_pb.PadRequest>;
    responseSerialize: grpc.serialize<proto_services_pad_services_pb.PadsResponse>;
    responseDeserialize: grpc.deserialize<proto_services_pad_services_pb.PadsResponse>;
}
interface IPadServiceService_IUpdatePad extends grpc.MethodDefinition<proto_services_pad_services_pb.PadRequest, proto_services_pad_services_pb.PadResponse> {
    path: string; // "/pb.PadService/UpdatePad"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_pad_services_pb.PadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_pad_services_pb.PadRequest>;
    responseSerialize: grpc.serialize<proto_services_pad_services_pb.PadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_pad_services_pb.PadResponse>;
}
interface IPadServiceService_IDeletePad extends grpc.MethodDefinition<proto_services_pad_services_pb.PadRequest, proto_services_pad_services_pb.PadResponse> {
    path: string; // "/pb.PadService/DeletePad"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_pad_services_pb.PadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_pad_services_pb.PadRequest>;
    responseSerialize: grpc.serialize<proto_services_pad_services_pb.PadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_pad_services_pb.PadResponse>;
}

export const PadServiceService: IPadServiceService;

export interface IPadServiceServer {
    createPad: grpc.handleUnaryCall<proto_services_pad_services_pb.PadRequest, proto_services_pad_services_pb.PadResponse>;
    retrievePad: grpc.handleUnaryCall<proto_services_pad_services_pb.PadRequest, proto_services_pad_services_pb.PadResponse>;
    retrievePads: grpc.handleUnaryCall<proto_services_pad_services_pb.PadRequest, proto_services_pad_services_pb.PadsResponse>;
    updatePad: grpc.handleUnaryCall<proto_services_pad_services_pb.PadRequest, proto_services_pad_services_pb.PadResponse>;
    deletePad: grpc.handleUnaryCall<proto_services_pad_services_pb.PadRequest, proto_services_pad_services_pb.PadResponse>;
}

export interface IPadServiceClient {
    createPad(request: proto_services_pad_services_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    createPad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    createPad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    retrievePad(request: proto_services_pad_services_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    retrievePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    retrievePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    retrievePads(request: proto_services_pad_services_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    retrievePads(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    retrievePads(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    updatePad(request: proto_services_pad_services_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    updatePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    updatePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    deletePad(request: proto_services_pad_services_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    deletePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    deletePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
}

export class PadServiceClient extends grpc.Client implements IPadServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPad(request: proto_services_pad_services_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public createPad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public createPad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public retrievePad(request: proto_services_pad_services_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public retrievePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public retrievePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public retrievePads(request: proto_services_pad_services_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    public retrievePads(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    public retrievePads(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadsResponse) => void): grpc.ClientUnaryCall;
    public updatePad(request: proto_services_pad_services_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public updatePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public updatePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public deletePad(request: proto_services_pad_services_pb.PadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public deletePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
    public deletePad(request: proto_services_pad_services_pb.PadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_pad_services_pb.PadResponse) => void): grpc.ClientUnaryCall;
}
