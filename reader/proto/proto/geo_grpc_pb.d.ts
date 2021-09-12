// package: pb
// file: proto/geo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_geo_pb from "../proto/geo_pb";
import * as proto_material_pb from "../proto/material_pb";
import * as proto_geofence_pb from "../proto/geofence_pb";
import * as proto_road_pb from "../proto/road_pb";
import * as proto_pit_pb from "../proto/pit_pb";
import * as proto_pad_pb from "../proto/pad_pb";
import * as proto_dme_pb from "../proto/dme_pb";
import * as proto_stock_pb from "../proto/stock_pb";

interface IGeoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    uploadGeo: IGeoServiceService_IUploadGeo;
    createGeo: IGeoServiceService_ICreateGeo;
    retrieveGeo: IGeoServiceService_IRetrieveGeo;
    retrieveGeos: IGeoServiceService_IRetrieveGeos;
    updateGeo: IGeoServiceService_IUpdateGeo;
    deleteGeo: IGeoServiceService_IDeleteGeo;
}

interface IGeoServiceService_IUploadGeo extends grpc.MethodDefinition<proto_geo_pb.GeoChunkRequest, proto_geo_pb.GeoChunkResponse> {
    path: "/pb.GeoService/UploadGeo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geo_pb.GeoChunkRequest>;
    requestDeserialize: grpc.deserialize<proto_geo_pb.GeoChunkRequest>;
    responseSerialize: grpc.serialize<proto_geo_pb.GeoChunkResponse>;
    responseDeserialize: grpc.deserialize<proto_geo_pb.GeoChunkResponse>;
}
interface IGeoServiceService_ICreateGeo extends grpc.MethodDefinition<proto_geo_pb.GeoRequest, proto_geo_pb.GeoResponse> {
    path: "/pb.GeoService/CreateGeo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geo_pb.GeoRequest>;
    requestDeserialize: grpc.deserialize<proto_geo_pb.GeoRequest>;
    responseSerialize: grpc.serialize<proto_geo_pb.GeoResponse>;
    responseDeserialize: grpc.deserialize<proto_geo_pb.GeoResponse>;
}
interface IGeoServiceService_IRetrieveGeo extends grpc.MethodDefinition<proto_geo_pb.GeoRequest, proto_geo_pb.GeoResponse> {
    path: "/pb.GeoService/RetrieveGeo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geo_pb.GeoRequest>;
    requestDeserialize: grpc.deserialize<proto_geo_pb.GeoRequest>;
    responseSerialize: grpc.serialize<proto_geo_pb.GeoResponse>;
    responseDeserialize: grpc.deserialize<proto_geo_pb.GeoResponse>;
}
interface IGeoServiceService_IRetrieveGeos extends grpc.MethodDefinition<proto_geo_pb.GeoRequest, proto_geo_pb.GeosResponse> {
    path: "/pb.GeoService/RetrieveGeos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geo_pb.GeoRequest>;
    requestDeserialize: grpc.deserialize<proto_geo_pb.GeoRequest>;
    responseSerialize: grpc.serialize<proto_geo_pb.GeosResponse>;
    responseDeserialize: grpc.deserialize<proto_geo_pb.GeosResponse>;
}
interface IGeoServiceService_IUpdateGeo extends grpc.MethodDefinition<proto_geo_pb.GeoRequest, proto_geo_pb.GeoResponse> {
    path: "/pb.GeoService/UpdateGeo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geo_pb.GeoRequest>;
    requestDeserialize: grpc.deserialize<proto_geo_pb.GeoRequest>;
    responseSerialize: grpc.serialize<proto_geo_pb.GeoResponse>;
    responseDeserialize: grpc.deserialize<proto_geo_pb.GeoResponse>;
}
interface IGeoServiceService_IDeleteGeo extends grpc.MethodDefinition<proto_geo_pb.GeoRequest, proto_geo_pb.GeoResponse> {
    path: "/pb.GeoService/DeleteGeo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geo_pb.GeoRequest>;
    requestDeserialize: grpc.deserialize<proto_geo_pb.GeoRequest>;
    responseSerialize: grpc.serialize<proto_geo_pb.GeoResponse>;
    responseDeserialize: grpc.deserialize<proto_geo_pb.GeoResponse>;
}

export const GeoServiceService: IGeoServiceService;

export interface IGeoServiceServer {
    uploadGeo: grpc.handleUnaryCall<proto_geo_pb.GeoChunkRequest, proto_geo_pb.GeoChunkResponse>;
    createGeo: grpc.handleUnaryCall<proto_geo_pb.GeoRequest, proto_geo_pb.GeoResponse>;
    retrieveGeo: grpc.handleUnaryCall<proto_geo_pb.GeoRequest, proto_geo_pb.GeoResponse>;
    retrieveGeos: grpc.handleUnaryCall<proto_geo_pb.GeoRequest, proto_geo_pb.GeosResponse>;
    updateGeo: grpc.handleUnaryCall<proto_geo_pb.GeoRequest, proto_geo_pb.GeoResponse>;
    deleteGeo: grpc.handleUnaryCall<proto_geo_pb.GeoRequest, proto_geo_pb.GeoResponse>;
}

export interface IGeoServiceClient {
    uploadGeo(request: proto_geo_pb.GeoChunkRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    uploadGeo(request: proto_geo_pb.GeoChunkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    uploadGeo(request: proto_geo_pb.GeoChunkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    createGeo(request: proto_geo_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    createGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    createGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    retrieveGeo(request: proto_geo_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    retrieveGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    retrieveGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    retrieveGeos(request: proto_geo_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    retrieveGeos(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    retrieveGeos(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    updateGeo(request: proto_geo_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    updateGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    updateGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    deleteGeo(request: proto_geo_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    deleteGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    deleteGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
}

export class GeoServiceClient extends grpc.Client implements IGeoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public uploadGeo(request: proto_geo_pb.GeoChunkRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    public uploadGeo(request: proto_geo_pb.GeoChunkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    public uploadGeo(request: proto_geo_pb.GeoChunkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    public createGeo(request: proto_geo_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public createGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public createGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeo(request: proto_geo_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeos(request: proto_geo_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeos(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeos(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    public updateGeo(request: proto_geo_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public updateGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public updateGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public deleteGeo(request: proto_geo_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public deleteGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public deleteGeo(request: proto_geo_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_pb.GeoResponse) => void): grpc.ClientUnaryCall;
}
