// package: pb
// file: proto/services/yellow_machinery.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_yellow_machinery_services_pb from "../../proto/services/yellow_machinery.services_pb";
import * as proto_entities_yellow_machinery_pb from "../../proto/entities/yellow_machinery_pb";

interface IYellowMachineryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createYellowMachinery: IYellowMachineryServiceService_ICreateYellowMachinery;
    retrieveYellowMachinery: IYellowMachineryServiceService_IRetrieveYellowMachinery;
    listYellowMachinery: IYellowMachineryServiceService_IListYellowMachinery;
    updateYellowMachinery: IYellowMachineryServiceService_IUpdateYellowMachinery;
    deleteYellowMachinery: IYellowMachineryServiceService_IDeleteYellowMachinery;
}

interface IYellowMachineryServiceService_ICreateYellowMachinery extends grpc.MethodDefinition<proto_services_yellow_machinery_services_pb.YellowMachineryRequest, proto_services_yellow_machinery_services_pb.YellowMachineryResponse> {
    path: string; // "/pb.YellowMachineryService/CreateYellowMachinery"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_yellow_machinery_services_pb.YellowMachineryRequest>;
    requestDeserialize: grpc.deserialize<proto_services_yellow_machinery_services_pb.YellowMachineryRequest>;
    responseSerialize: grpc.serialize<proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
    responseDeserialize: grpc.deserialize<proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
}
interface IYellowMachineryServiceService_IRetrieveYellowMachinery extends grpc.MethodDefinition<proto_services_yellow_machinery_services_pb.YellowMachineryRequest, proto_services_yellow_machinery_services_pb.YellowMachineryResponse> {
    path: string; // "/pb.YellowMachineryService/RetrieveYellowMachinery"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_yellow_machinery_services_pb.YellowMachineryRequest>;
    requestDeserialize: grpc.deserialize<proto_services_yellow_machinery_services_pb.YellowMachineryRequest>;
    responseSerialize: grpc.serialize<proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
    responseDeserialize: grpc.deserialize<proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
}
interface IYellowMachineryServiceService_IListYellowMachinery extends grpc.MethodDefinition<proto_services_yellow_machinery_services_pb.YellowMachineryRequest, proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse> {
    path: string; // "/pb.YellowMachineryService/ListYellowMachinery"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_yellow_machinery_services_pb.YellowMachineryRequest>;
    requestDeserialize: grpc.deserialize<proto_services_yellow_machinery_services_pb.YellowMachineryRequest>;
    responseSerialize: grpc.serialize<proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse>;
    responseDeserialize: grpc.deserialize<proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse>;
}
interface IYellowMachineryServiceService_IUpdateYellowMachinery extends grpc.MethodDefinition<proto_services_yellow_machinery_services_pb.YellowMachineryRequest, proto_services_yellow_machinery_services_pb.YellowMachineryResponse> {
    path: string; // "/pb.YellowMachineryService/UpdateYellowMachinery"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_yellow_machinery_services_pb.YellowMachineryRequest>;
    requestDeserialize: grpc.deserialize<proto_services_yellow_machinery_services_pb.YellowMachineryRequest>;
    responseSerialize: grpc.serialize<proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
    responseDeserialize: grpc.deserialize<proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
}
interface IYellowMachineryServiceService_IDeleteYellowMachinery extends grpc.MethodDefinition<proto_services_yellow_machinery_services_pb.YellowMachineryRequest, proto_services_yellow_machinery_services_pb.YellowMachineryResponse> {
    path: string; // "/pb.YellowMachineryService/DeleteYellowMachinery"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_yellow_machinery_services_pb.YellowMachineryRequest>;
    requestDeserialize: grpc.deserialize<proto_services_yellow_machinery_services_pb.YellowMachineryRequest>;
    responseSerialize: grpc.serialize<proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
    responseDeserialize: grpc.deserialize<proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
}

export const YellowMachineryServiceService: IYellowMachineryServiceService;

export interface IYellowMachineryServiceServer {
    createYellowMachinery: grpc.handleUnaryCall<proto_services_yellow_machinery_services_pb.YellowMachineryRequest, proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
    retrieveYellowMachinery: grpc.handleUnaryCall<proto_services_yellow_machinery_services_pb.YellowMachineryRequest, proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
    listYellowMachinery: grpc.handleUnaryCall<proto_services_yellow_machinery_services_pb.YellowMachineryRequest, proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse>;
    updateYellowMachinery: grpc.handleUnaryCall<proto_services_yellow_machinery_services_pb.YellowMachineryRequest, proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
    deleteYellowMachinery: grpc.handleUnaryCall<proto_services_yellow_machinery_services_pb.YellowMachineryRequest, proto_services_yellow_machinery_services_pb.YellowMachineryResponse>;
}

export interface IYellowMachineryServiceClient {
    createYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    createYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    createYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    retrieveYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    retrieveYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    retrieveYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    listYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse) => void): grpc.ClientUnaryCall;
    listYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse) => void): grpc.ClientUnaryCall;
    listYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse) => void): grpc.ClientUnaryCall;
    updateYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    updateYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    updateYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    deleteYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    deleteYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    deleteYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
}

export class YellowMachineryServiceClient extends grpc.Client implements IYellowMachineryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public createYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public createYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public retrieveYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public retrieveYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public retrieveYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public listYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public listYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public listYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public updateYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public updateYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public updateYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public deleteYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public deleteYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
    public deleteYellowMachinery(request: proto_services_yellow_machinery_services_pb.YellowMachineryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_yellow_machinery_services_pb.YellowMachineryResponse) => void): grpc.ClientUnaryCall;
}
