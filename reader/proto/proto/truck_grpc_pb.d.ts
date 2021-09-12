// package: pb
// file: proto/truck.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_truck_pb from "../proto/truck_pb";
import * as proto_contractor_pb from "../proto/contractor_pb";

interface ITruckServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTruck: ITruckServiceService_ICreateTruck;
    retrieveTruck: ITruckServiceService_IRetrieveTruck;
    retrieveTrucks: ITruckServiceService_IRetrieveTrucks;
    updateTruck: ITruckServiceService_IUpdateTruck;
    deleteTruck: ITruckServiceService_IDeleteTruck;
}

interface ITruckServiceService_ICreateTruck extends grpc.MethodDefinition<proto_truck_pb.TruckRequest, proto_truck_pb.TruckResponse> {
    path: "/pb.TruckService/CreateTruck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_truck_pb.TruckRequest>;
    requestDeserialize: grpc.deserialize<proto_truck_pb.TruckRequest>;
    responseSerialize: grpc.serialize<proto_truck_pb.TruckResponse>;
    responseDeserialize: grpc.deserialize<proto_truck_pb.TruckResponse>;
}
interface ITruckServiceService_IRetrieveTruck extends grpc.MethodDefinition<proto_truck_pb.TruckRequest, proto_truck_pb.TruckResponse> {
    path: "/pb.TruckService/RetrieveTruck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_truck_pb.TruckRequest>;
    requestDeserialize: grpc.deserialize<proto_truck_pb.TruckRequest>;
    responseSerialize: grpc.serialize<proto_truck_pb.TruckResponse>;
    responseDeserialize: grpc.deserialize<proto_truck_pb.TruckResponse>;
}
interface ITruckServiceService_IRetrieveTrucks extends grpc.MethodDefinition<proto_truck_pb.TruckRequest, proto_truck_pb.TrucksResponse> {
    path: "/pb.TruckService/RetrieveTrucks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_truck_pb.TruckRequest>;
    requestDeserialize: grpc.deserialize<proto_truck_pb.TruckRequest>;
    responseSerialize: grpc.serialize<proto_truck_pb.TrucksResponse>;
    responseDeserialize: grpc.deserialize<proto_truck_pb.TrucksResponse>;
}
interface ITruckServiceService_IUpdateTruck extends grpc.MethodDefinition<proto_truck_pb.TruckRequest, proto_truck_pb.TruckResponse> {
    path: "/pb.TruckService/UpdateTruck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_truck_pb.TruckRequest>;
    requestDeserialize: grpc.deserialize<proto_truck_pb.TruckRequest>;
    responseSerialize: grpc.serialize<proto_truck_pb.TruckResponse>;
    responseDeserialize: grpc.deserialize<proto_truck_pb.TruckResponse>;
}
interface ITruckServiceService_IDeleteTruck extends grpc.MethodDefinition<proto_truck_pb.TruckRequest, proto_truck_pb.TruckResponse> {
    path: "/pb.TruckService/DeleteTruck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_truck_pb.TruckRequest>;
    requestDeserialize: grpc.deserialize<proto_truck_pb.TruckRequest>;
    responseSerialize: grpc.serialize<proto_truck_pb.TruckResponse>;
    responseDeserialize: grpc.deserialize<proto_truck_pb.TruckResponse>;
}

export const TruckServiceService: ITruckServiceService;

export interface ITruckServiceServer {
    createTruck: grpc.handleUnaryCall<proto_truck_pb.TruckRequest, proto_truck_pb.TruckResponse>;
    retrieveTruck: grpc.handleUnaryCall<proto_truck_pb.TruckRequest, proto_truck_pb.TruckResponse>;
    retrieveTrucks: grpc.handleUnaryCall<proto_truck_pb.TruckRequest, proto_truck_pb.TrucksResponse>;
    updateTruck: grpc.handleUnaryCall<proto_truck_pb.TruckRequest, proto_truck_pb.TruckResponse>;
    deleteTruck: grpc.handleUnaryCall<proto_truck_pb.TruckRequest, proto_truck_pb.TruckResponse>;
}

export interface ITruckServiceClient {
    createTruck(request: proto_truck_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    createTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    createTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    retrieveTruck(request: proto_truck_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    retrieveTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    retrieveTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    retrieveTrucks(request: proto_truck_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    retrieveTrucks(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    retrieveTrucks(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    updateTruck(request: proto_truck_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    updateTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    updateTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    deleteTruck(request: proto_truck_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    deleteTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    deleteTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
}

export class TruckServiceClient extends grpc.Client implements ITruckServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createTruck(request: proto_truck_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public createTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public createTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruck(request: proto_truck_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public retrieveTrucks(request: proto_truck_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    public retrieveTrucks(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    public retrieveTrucks(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    public updateTruck(request: proto_truck_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public updateTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public updateTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public deleteTruck(request: proto_truck_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public deleteTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public deleteTruck(request: proto_truck_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_truck_pb.TruckResponse) => void): grpc.ClientUnaryCall;
}
