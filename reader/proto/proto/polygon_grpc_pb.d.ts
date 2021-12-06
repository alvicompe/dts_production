// package: pb
// file: proto/polygon.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_polygon_pb from "../proto/polygon_pb";
import * as proto_point_pb from "../proto/point_pb";
import * as proto_material_pb from "../proto/material_pb";

interface IPolygonServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPolygon: IPolygonServiceService_ICreatePolygon;
    retrievePolygon: IPolygonServiceService_IRetrievePolygon;
    retrievePolygons: IPolygonServiceService_IRetrievePolygons;
    retrievePolygonByProjectName: IPolygonServiceService_IRetrievePolygonByProjectName;
    updatePolygon: IPolygonServiceService_IUpdatePolygon;
    deletePolygon: IPolygonServiceService_IDeletePolygon;
    finalizePolygonList: IPolygonServiceService_IFinalizePolygonList;
}

interface IPolygonServiceService_ICreatePolygon extends grpc.MethodDefinition<proto_polygon_pb.PolygonRequest, proto_polygon_pb.PolygonResponse> {
    path: "/pb.PolygonService/CreatePolygon";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_polygon_pb.PolygonRequest>;
    requestDeserialize: grpc.deserialize<proto_polygon_pb.PolygonRequest>;
    responseSerialize: grpc.serialize<proto_polygon_pb.PolygonResponse>;
    responseDeserialize: grpc.deserialize<proto_polygon_pb.PolygonResponse>;
}
interface IPolygonServiceService_IRetrievePolygon extends grpc.MethodDefinition<proto_polygon_pb.PolygonRequest, proto_polygon_pb.PolygonResponse> {
    path: "/pb.PolygonService/RetrievePolygon";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_polygon_pb.PolygonRequest>;
    requestDeserialize: grpc.deserialize<proto_polygon_pb.PolygonRequest>;
    responseSerialize: grpc.serialize<proto_polygon_pb.PolygonResponse>;
    responseDeserialize: grpc.deserialize<proto_polygon_pb.PolygonResponse>;
}
interface IPolygonServiceService_IRetrievePolygons extends grpc.MethodDefinition<proto_polygon_pb.PolygonRequest, proto_polygon_pb.PolygonsResponse> {
    path: "/pb.PolygonService/RetrievePolygons";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_polygon_pb.PolygonRequest>;
    requestDeserialize: grpc.deserialize<proto_polygon_pb.PolygonRequest>;
    responseSerialize: grpc.serialize<proto_polygon_pb.PolygonsResponse>;
    responseDeserialize: grpc.deserialize<proto_polygon_pb.PolygonsResponse>;
}
interface IPolygonServiceService_IRetrievePolygonByProjectName extends grpc.MethodDefinition<proto_polygon_pb.RetrievePolygonByProjectNameRequest, proto_polygon_pb.PolygonResponse> {
    path: "/pb.PolygonService/RetrievePolygonByProjectName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_polygon_pb.RetrievePolygonByProjectNameRequest>;
    requestDeserialize: grpc.deserialize<proto_polygon_pb.RetrievePolygonByProjectNameRequest>;
    responseSerialize: grpc.serialize<proto_polygon_pb.PolygonResponse>;
    responseDeserialize: grpc.deserialize<proto_polygon_pb.PolygonResponse>;
}
interface IPolygonServiceService_IUpdatePolygon extends grpc.MethodDefinition<proto_polygon_pb.PolygonRequest, proto_polygon_pb.PolygonResponse> {
    path: "/pb.PolygonService/UpdatePolygon";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_polygon_pb.PolygonRequest>;
    requestDeserialize: grpc.deserialize<proto_polygon_pb.PolygonRequest>;
    responseSerialize: grpc.serialize<proto_polygon_pb.PolygonResponse>;
    responseDeserialize: grpc.deserialize<proto_polygon_pb.PolygonResponse>;
}
interface IPolygonServiceService_IDeletePolygon extends grpc.MethodDefinition<proto_polygon_pb.PolygonRequest, proto_polygon_pb.PolygonResponse> {
    path: "/pb.PolygonService/DeletePolygon";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_polygon_pb.PolygonRequest>;
    requestDeserialize: grpc.deserialize<proto_polygon_pb.PolygonRequest>;
    responseSerialize: grpc.serialize<proto_polygon_pb.PolygonResponse>;
    responseDeserialize: grpc.deserialize<proto_polygon_pb.PolygonResponse>;
}
interface IPolygonServiceService_IFinalizePolygonList extends grpc.MethodDefinition<proto_polygon_pb.PolygonListRequest, proto_polygon_pb.PolygonListResponse> {
    path: "/pb.PolygonService/FinalizePolygonList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_polygon_pb.PolygonListRequest>;
    requestDeserialize: grpc.deserialize<proto_polygon_pb.PolygonListRequest>;
    responseSerialize: grpc.serialize<proto_polygon_pb.PolygonListResponse>;
    responseDeserialize: grpc.deserialize<proto_polygon_pb.PolygonListResponse>;
}

export const PolygonServiceService: IPolygonServiceService;

export interface IPolygonServiceServer {
    createPolygon: grpc.handleUnaryCall<proto_polygon_pb.PolygonRequest, proto_polygon_pb.PolygonResponse>;
    retrievePolygon: grpc.handleUnaryCall<proto_polygon_pb.PolygonRequest, proto_polygon_pb.PolygonResponse>;
    retrievePolygons: grpc.handleUnaryCall<proto_polygon_pb.PolygonRequest, proto_polygon_pb.PolygonsResponse>;
    retrievePolygonByProjectName: grpc.handleUnaryCall<proto_polygon_pb.RetrievePolygonByProjectNameRequest, proto_polygon_pb.PolygonResponse>;
    updatePolygon: grpc.handleUnaryCall<proto_polygon_pb.PolygonRequest, proto_polygon_pb.PolygonResponse>;
    deletePolygon: grpc.handleUnaryCall<proto_polygon_pb.PolygonRequest, proto_polygon_pb.PolygonResponse>;
    finalizePolygonList: grpc.handleUnaryCall<proto_polygon_pb.PolygonListRequest, proto_polygon_pb.PolygonListResponse>;
}

export interface IPolygonServiceClient {
    createPolygon(request: proto_polygon_pb.PolygonRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    createPolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    createPolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    retrievePolygon(request: proto_polygon_pb.PolygonRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    retrievePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    retrievePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    retrievePolygons(request: proto_polygon_pb.PolygonRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonsResponse) => void): grpc.ClientUnaryCall;
    retrievePolygons(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonsResponse) => void): grpc.ClientUnaryCall;
    retrievePolygons(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonsResponse) => void): grpc.ClientUnaryCall;
    retrievePolygonByProjectName(request: proto_polygon_pb.RetrievePolygonByProjectNameRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    retrievePolygonByProjectName(request: proto_polygon_pb.RetrievePolygonByProjectNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    retrievePolygonByProjectName(request: proto_polygon_pb.RetrievePolygonByProjectNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    updatePolygon(request: proto_polygon_pb.PolygonRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    updatePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    updatePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    deletePolygon(request: proto_polygon_pb.PolygonRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    deletePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    deletePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    finalizePolygonList(request: proto_polygon_pb.PolygonListRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonListResponse) => void): grpc.ClientUnaryCall;
    finalizePolygonList(request: proto_polygon_pb.PolygonListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonListResponse) => void): grpc.ClientUnaryCall;
    finalizePolygonList(request: proto_polygon_pb.PolygonListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonListResponse) => void): grpc.ClientUnaryCall;
}

export class PolygonServiceClient extends grpc.Client implements IPolygonServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPolygon(request: proto_polygon_pb.PolygonRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public createPolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public createPolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public retrievePolygon(request: proto_polygon_pb.PolygonRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public retrievePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public retrievePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public retrievePolygons(request: proto_polygon_pb.PolygonRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonsResponse) => void): grpc.ClientUnaryCall;
    public retrievePolygons(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonsResponse) => void): grpc.ClientUnaryCall;
    public retrievePolygons(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonsResponse) => void): grpc.ClientUnaryCall;
    public retrievePolygonByProjectName(request: proto_polygon_pb.RetrievePolygonByProjectNameRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public retrievePolygonByProjectName(request: proto_polygon_pb.RetrievePolygonByProjectNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public retrievePolygonByProjectName(request: proto_polygon_pb.RetrievePolygonByProjectNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public updatePolygon(request: proto_polygon_pb.PolygonRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public updatePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public updatePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public deletePolygon(request: proto_polygon_pb.PolygonRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public deletePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public deletePolygon(request: proto_polygon_pb.PolygonRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonResponse) => void): grpc.ClientUnaryCall;
    public finalizePolygonList(request: proto_polygon_pb.PolygonListRequest, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonListResponse) => void): grpc.ClientUnaryCall;
    public finalizePolygonList(request: proto_polygon_pb.PolygonListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonListResponse) => void): grpc.ClientUnaryCall;
    public finalizePolygonList(request: proto_polygon_pb.PolygonListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_polygon_pb.PolygonListResponse) => void): grpc.ClientUnaryCall;
}
