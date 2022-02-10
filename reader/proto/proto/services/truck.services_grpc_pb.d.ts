// package: pb
// file: proto/services/truck.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_truck_services_pb from "../../proto/services/truck.services_pb";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
<<<<<<< HEAD

interface ITruckServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTruck: ITruckServiceService_ICreateTruck;
    retrieveTruck: ITruckServiceService_IRetrieveTruck;
    retrieveTrucks: ITruckServiceService_IRetrieveTrucks;
    updateTruck: ITruckServiceService_IUpdateTruck;
    deleteTruck: ITruckServiceService_IDeleteTruck;
=======
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ITruckServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTruck: ITruckServiceService_ICreateTruck;
    createTruckList: ITruckServiceService_ICreateTruckList;
    retrieveTruck: ITruckServiceService_IRetrieveTruck;
    retrieveTruckHyteraList: ITruckServiceService_IRetrieveTruckHyteraList;
    retrieveTrucks: ITruckServiceService_IRetrieveTrucks;
    updateTruck: ITruckServiceService_IUpdateTruck;
    deleteTruck: ITruckServiceService_IDeleteTruck;
    deleteTruckList: ITruckServiceService_IDeleteTruckList;
>>>>>>> staging
}

interface ITruckServiceService_ICreateTruck extends grpc.MethodDefinition<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse> {
    path: string; // "/pb.TruckService/CreateTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_truck_services_pb.TruckRequest>;
    requestDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckRequest>;
    responseSerialize: grpc.serialize<proto_services_truck_services_pb.TruckResponse>;
    responseDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckResponse>;
}
<<<<<<< HEAD
=======
interface ITruckServiceService_ICreateTruckList extends grpc.MethodDefinition<proto_services_truck_services_pb.TruckListRequest, proto_services_truck_services_pb.TruckListResponse> {
    path: string; // "/pb.TruckService/CreateTruckList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_truck_services_pb.TruckListRequest>;
    requestDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckListRequest>;
    responseSerialize: grpc.serialize<proto_services_truck_services_pb.TruckListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckListResponse>;
}
>>>>>>> staging
interface ITruckServiceService_IRetrieveTruck extends grpc.MethodDefinition<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse> {
    path: string; // "/pb.TruckService/RetrieveTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_truck_services_pb.TruckRequest>;
    requestDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckRequest>;
    responseSerialize: grpc.serialize<proto_services_truck_services_pb.TruckResponse>;
    responseDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckResponse>;
}
<<<<<<< HEAD
=======
interface ITruckServiceService_IRetrieveTruckHyteraList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_truck_services_pb.TruckListResponse> {
    path: string; // "/pb.TruckService/RetrieveTruckHyteraList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_truck_services_pb.TruckListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckListResponse>;
}
>>>>>>> staging
interface ITruckServiceService_IRetrieveTrucks extends grpc.MethodDefinition<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TrucksResponse> {
    path: string; // "/pb.TruckService/RetrieveTrucks"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_truck_services_pb.TruckRequest>;
    requestDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckRequest>;
    responseSerialize: grpc.serialize<proto_services_truck_services_pb.TrucksResponse>;
    responseDeserialize: grpc.deserialize<proto_services_truck_services_pb.TrucksResponse>;
}
interface ITruckServiceService_IUpdateTruck extends grpc.MethodDefinition<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse> {
    path: string; // "/pb.TruckService/UpdateTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_truck_services_pb.TruckRequest>;
    requestDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckRequest>;
    responseSerialize: grpc.serialize<proto_services_truck_services_pb.TruckResponse>;
    responseDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckResponse>;
}
interface ITruckServiceService_IDeleteTruck extends grpc.MethodDefinition<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse> {
    path: string; // "/pb.TruckService/DeleteTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_truck_services_pb.TruckRequest>;
    requestDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckRequest>;
    responseSerialize: grpc.serialize<proto_services_truck_services_pb.TruckResponse>;
    responseDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckResponse>;
}
<<<<<<< HEAD
=======
interface ITruckServiceService_IDeleteTruckList extends grpc.MethodDefinition<proto_services_truck_services_pb.TruckListRequest, proto_services_truck_services_pb.TruckListResponse> {
    path: string; // "/pb.TruckService/DeleteTruckList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_truck_services_pb.TruckListRequest>;
    requestDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckListRequest>;
    responseSerialize: grpc.serialize<proto_services_truck_services_pb.TruckListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_truck_services_pb.TruckListResponse>;
}
>>>>>>> staging

export const TruckServiceService: ITruckServiceService;

export interface ITruckServiceServer {
    createTruck: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse>;
<<<<<<< HEAD
    retrieveTruck: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse>;
    retrieveTrucks: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TrucksResponse>;
    updateTruck: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse>;
    deleteTruck: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse>;
=======
    createTruckList: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckListRequest, proto_services_truck_services_pb.TruckListResponse>;
    retrieveTruck: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse>;
    retrieveTruckHyteraList: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_truck_services_pb.TruckListResponse>;
    retrieveTrucks: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TrucksResponse>;
    updateTruck: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse>;
    deleteTruck: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckRequest, proto_services_truck_services_pb.TruckResponse>;
    deleteTruckList: grpc.handleUnaryCall<proto_services_truck_services_pb.TruckListRequest, proto_services_truck_services_pb.TruckListResponse>;
>>>>>>> staging
}

export interface ITruckServiceClient {
    createTruck(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    createTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    createTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
<<<<<<< HEAD
    retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
=======
    createTruckList(request: proto_services_truck_services_pb.TruckListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    createTruckList(request: proto_services_truck_services_pb.TruckListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    createTruckList(request: proto_services_truck_services_pb.TruckListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    retrieveTruckHyteraList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    retrieveTruckHyteraList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    retrieveTruckHyteraList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
>>>>>>> staging
    retrieveTrucks(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    retrieveTrucks(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    retrieveTrucks(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    updateTruck(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    updateTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    updateTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    deleteTruck(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    deleteTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    deleteTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
<<<<<<< HEAD
=======
    deleteTruckList(request: proto_services_truck_services_pb.TruckListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    deleteTruckList(request: proto_services_truck_services_pb.TruckListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    deleteTruckList(request: proto_services_truck_services_pb.TruckListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
>>>>>>> staging
}

export class TruckServiceClient extends grpc.Client implements ITruckServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createTruck(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public createTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public createTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
<<<<<<< HEAD
    public retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
=======
    public createTruckList(request: proto_services_truck_services_pb.TruckListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    public createTruckList(request: proto_services_truck_services_pb.TruckListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    public createTruckList(request: proto_services_truck_services_pb.TruckListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruckHyteraList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruckHyteraList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    public retrieveTruckHyteraList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
>>>>>>> staging
    public retrieveTrucks(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    public retrieveTrucks(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    public retrieveTrucks(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TrucksResponse) => void): grpc.ClientUnaryCall;
    public updateTruck(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public updateTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public updateTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public deleteTruck(request: proto_services_truck_services_pb.TruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public deleteTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
    public deleteTruck(request: proto_services_truck_services_pb.TruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckResponse) => void): grpc.ClientUnaryCall;
<<<<<<< HEAD
=======
    public deleteTruckList(request: proto_services_truck_services_pb.TruckListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    public deleteTruckList(request: proto_services_truck_services_pb.TruckListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
    public deleteTruckList(request: proto_services_truck_services_pb.TruckListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_truck_services_pb.TruckListResponse) => void): grpc.ClientUnaryCall;
>>>>>>> staging
}
