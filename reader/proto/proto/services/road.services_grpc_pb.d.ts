// package: pb
// file: proto/services/road.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_road_services_pb from "../../proto/services/road.services_pb";
import * as proto_entities_road_pb from "../../proto/entities/road_pb";

interface IRoadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createRoad: IRoadServiceService_ICreateRoad;
    retrieveRoad: IRoadServiceService_IRetrieveRoad;
    retrieveRoads: IRoadServiceService_IRetrieveRoads;
    updateRoad: IRoadServiceService_IUpdateRoad;
    deleteRoad: IRoadServiceService_IDeleteRoad;
}

interface IRoadServiceService_ICreateRoad extends grpc.MethodDefinition<proto_services_road_services_pb.RoadRequest, proto_services_road_services_pb.RoadResponse> {
    path: string; // "/pb.RoadService/CreateRoad"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_road_services_pb.RoadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_road_services_pb.RoadRequest>;
    responseSerialize: grpc.serialize<proto_services_road_services_pb.RoadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_road_services_pb.RoadResponse>;
}
interface IRoadServiceService_IRetrieveRoad extends grpc.MethodDefinition<proto_services_road_services_pb.RoadRequest, proto_services_road_services_pb.RoadResponse> {
    path: string; // "/pb.RoadService/RetrieveRoad"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_road_services_pb.RoadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_road_services_pb.RoadRequest>;
    responseSerialize: grpc.serialize<proto_services_road_services_pb.RoadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_road_services_pb.RoadResponse>;
}
interface IRoadServiceService_IRetrieveRoads extends grpc.MethodDefinition<proto_services_road_services_pb.RoadRequest, proto_services_road_services_pb.RoadsResponse> {
    path: string; // "/pb.RoadService/RetrieveRoads"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_road_services_pb.RoadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_road_services_pb.RoadRequest>;
    responseSerialize: grpc.serialize<proto_services_road_services_pb.RoadsResponse>;
    responseDeserialize: grpc.deserialize<proto_services_road_services_pb.RoadsResponse>;
}
interface IRoadServiceService_IUpdateRoad extends grpc.MethodDefinition<proto_services_road_services_pb.RoadRequest, proto_services_road_services_pb.RoadResponse> {
    path: string; // "/pb.RoadService/UpdateRoad"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_road_services_pb.RoadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_road_services_pb.RoadRequest>;
    responseSerialize: grpc.serialize<proto_services_road_services_pb.RoadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_road_services_pb.RoadResponse>;
}
interface IRoadServiceService_IDeleteRoad extends grpc.MethodDefinition<proto_services_road_services_pb.RoadRequest, proto_services_road_services_pb.RoadResponse> {
    path: string; // "/pb.RoadService/DeleteRoad"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_road_services_pb.RoadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_road_services_pb.RoadRequest>;
    responseSerialize: grpc.serialize<proto_services_road_services_pb.RoadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_road_services_pb.RoadResponse>;
}

export const RoadServiceService: IRoadServiceService;

export interface IRoadServiceServer {
    createRoad: grpc.handleUnaryCall<proto_services_road_services_pb.RoadRequest, proto_services_road_services_pb.RoadResponse>;
    retrieveRoad: grpc.handleUnaryCall<proto_services_road_services_pb.RoadRequest, proto_services_road_services_pb.RoadResponse>;
    retrieveRoads: grpc.handleUnaryCall<proto_services_road_services_pb.RoadRequest, proto_services_road_services_pb.RoadsResponse>;
    updateRoad: grpc.handleUnaryCall<proto_services_road_services_pb.RoadRequest, proto_services_road_services_pb.RoadResponse>;
    deleteRoad: grpc.handleUnaryCall<proto_services_road_services_pb.RoadRequest, proto_services_road_services_pb.RoadResponse>;
}

export interface IRoadServiceClient {
    createRoad(request: proto_services_road_services_pb.RoadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    createRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    createRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    retrieveRoad(request: proto_services_road_services_pb.RoadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    retrieveRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    retrieveRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    retrieveRoads(request: proto_services_road_services_pb.RoadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadsResponse) => void): grpc.ClientUnaryCall;
    retrieveRoads(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadsResponse) => void): grpc.ClientUnaryCall;
    retrieveRoads(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadsResponse) => void): grpc.ClientUnaryCall;
    updateRoad(request: proto_services_road_services_pb.RoadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    updateRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    updateRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    deleteRoad(request: proto_services_road_services_pb.RoadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    deleteRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    deleteRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
}

export class RoadServiceClient extends grpc.Client implements IRoadServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createRoad(request: proto_services_road_services_pb.RoadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public createRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public createRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public retrieveRoad(request: proto_services_road_services_pb.RoadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public retrieveRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public retrieveRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public retrieveRoads(request: proto_services_road_services_pb.RoadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadsResponse) => void): grpc.ClientUnaryCall;
    public retrieveRoads(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadsResponse) => void): grpc.ClientUnaryCall;
    public retrieveRoads(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadsResponse) => void): grpc.ClientUnaryCall;
    public updateRoad(request: proto_services_road_services_pb.RoadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public updateRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public updateRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public deleteRoad(request: proto_services_road_services_pb.RoadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public deleteRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
    public deleteRoad(request: proto_services_road_services_pb.RoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_road_services_pb.RoadResponse) => void): grpc.ClientUnaryCall;
}
