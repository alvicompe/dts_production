// package: pb
// file: proto/services/geo.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_geo_services_pb from "../../proto/services/geo.services_pb";
import * as proto_entities_geo_pb from "../../proto/entities/geo_pb";

interface IGeoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    uploadGeo: IGeoServiceService_IUploadGeo;
    createGeo: IGeoServiceService_ICreateGeo;
    retrieveGeo: IGeoServiceService_IRetrieveGeo;
    retrieveGeos: IGeoServiceService_IRetrieveGeos;
    updateGeo: IGeoServiceService_IUpdateGeo;
    deleteGeo: IGeoServiceService_IDeleteGeo;
}

interface IGeoServiceService_IUploadGeo extends grpc.MethodDefinition<proto_services_geo_services_pb.GeoChunkRequest, proto_services_geo_services_pb.GeoChunkResponse> {
    path: string; // "/pb.GeoService/UploadGeo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_geo_services_pb.GeoChunkRequest>;
    requestDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoChunkRequest>;
    responseSerialize: grpc.serialize<proto_services_geo_services_pb.GeoChunkResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoChunkResponse>;
}
interface IGeoServiceService_ICreateGeo extends grpc.MethodDefinition<proto_services_geo_services_pb.GeoRequest, proto_services_geo_services_pb.GeoResponse> {
    path: string; // "/pb.GeoService/CreateGeo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_geo_services_pb.GeoRequest>;
    requestDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoRequest>;
    responseSerialize: grpc.serialize<proto_services_geo_services_pb.GeoResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoResponse>;
}
interface IGeoServiceService_IRetrieveGeo extends grpc.MethodDefinition<proto_services_geo_services_pb.GeoRequest, proto_services_geo_services_pb.GeoResponse> {
    path: string; // "/pb.GeoService/RetrieveGeo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_geo_services_pb.GeoRequest>;
    requestDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoRequest>;
    responseSerialize: grpc.serialize<proto_services_geo_services_pb.GeoResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoResponse>;
}
interface IGeoServiceService_IRetrieveGeos extends grpc.MethodDefinition<proto_services_geo_services_pb.GeoEmptyRequest, proto_services_geo_services_pb.GeosResponse> {
    path: string; // "/pb.GeoService/RetrieveGeos"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_geo_services_pb.GeoEmptyRequest>;
    requestDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoEmptyRequest>;
    responseSerialize: grpc.serialize<proto_services_geo_services_pb.GeosResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeosResponse>;
}
interface IGeoServiceService_IUpdateGeo extends grpc.MethodDefinition<proto_services_geo_services_pb.GeoRequest, proto_services_geo_services_pb.GeoResponse> {
    path: string; // "/pb.GeoService/UpdateGeo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_geo_services_pb.GeoRequest>;
    requestDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoRequest>;
    responseSerialize: grpc.serialize<proto_services_geo_services_pb.GeoResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoResponse>;
}
interface IGeoServiceService_IDeleteGeo extends grpc.MethodDefinition<proto_services_geo_services_pb.GeoRequest, proto_services_geo_services_pb.GeoResponse> {
    path: string; // "/pb.GeoService/DeleteGeo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_geo_services_pb.GeoRequest>;
    requestDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoRequest>;
    responseSerialize: grpc.serialize<proto_services_geo_services_pb.GeoResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_services_pb.GeoResponse>;
}

export const GeoServiceService: IGeoServiceService;

export interface IGeoServiceServer {
    uploadGeo: grpc.handleUnaryCall<proto_services_geo_services_pb.GeoChunkRequest, proto_services_geo_services_pb.GeoChunkResponse>;
    createGeo: grpc.handleUnaryCall<proto_services_geo_services_pb.GeoRequest, proto_services_geo_services_pb.GeoResponse>;
    retrieveGeo: grpc.handleUnaryCall<proto_services_geo_services_pb.GeoRequest, proto_services_geo_services_pb.GeoResponse>;
    retrieveGeos: grpc.handleUnaryCall<proto_services_geo_services_pb.GeoEmptyRequest, proto_services_geo_services_pb.GeosResponse>;
    updateGeo: grpc.handleUnaryCall<proto_services_geo_services_pb.GeoRequest, proto_services_geo_services_pb.GeoResponse>;
    deleteGeo: grpc.handleUnaryCall<proto_services_geo_services_pb.GeoRequest, proto_services_geo_services_pb.GeoResponse>;
}

export interface IGeoServiceClient {
    uploadGeo(request: proto_services_geo_services_pb.GeoChunkRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    uploadGeo(request: proto_services_geo_services_pb.GeoChunkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    uploadGeo(request: proto_services_geo_services_pb.GeoChunkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    createGeo(request: proto_services_geo_services_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    createGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    createGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    retrieveGeo(request: proto_services_geo_services_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    retrieveGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    retrieveGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    retrieveGeos(request: proto_services_geo_services_pb.GeoEmptyRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    retrieveGeos(request: proto_services_geo_services_pb.GeoEmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    retrieveGeos(request: proto_services_geo_services_pb.GeoEmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    updateGeo(request: proto_services_geo_services_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    updateGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    updateGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    deleteGeo(request: proto_services_geo_services_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    deleteGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    deleteGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
}

export class GeoServiceClient extends grpc.Client implements IGeoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public uploadGeo(request: proto_services_geo_services_pb.GeoChunkRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    public uploadGeo(request: proto_services_geo_services_pb.GeoChunkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    public uploadGeo(request: proto_services_geo_services_pb.GeoChunkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoChunkResponse) => void): grpc.ClientUnaryCall;
    public createGeo(request: proto_services_geo_services_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public createGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public createGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeo(request: proto_services_geo_services_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeos(request: proto_services_geo_services_pb.GeoEmptyRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeos(request: proto_services_geo_services_pb.GeoEmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeos(request: proto_services_geo_services_pb.GeoEmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeosResponse) => void): grpc.ClientUnaryCall;
    public updateGeo(request: proto_services_geo_services_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public updateGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public updateGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public deleteGeo(request: proto_services_geo_services_pb.GeoRequest, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public deleteGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
    public deleteGeo(request: proto_services_geo_services_pb.GeoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_services_pb.GeoResponse) => void): grpc.ClientUnaryCall;
}
