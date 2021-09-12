// package: pb
// file: proto/geofence.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_geofence_pb from "../proto/geofence_pb";
import * as proto_point_pb from "../proto/point_pb";

interface IGeofenceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createGeofence: IGeofenceServiceService_ICreateGeofence;
    retrieveGeofence: IGeofenceServiceService_IRetrieveGeofence;
    retrieveGeofences: IGeofenceServiceService_IRetrieveGeofences;
    updateGeofence: IGeofenceServiceService_IUpdateGeofence;
    deleteGeofence: IGeofenceServiceService_IDeleteGeofence;
}

interface IGeofenceServiceService_ICreateGeofence extends grpc.MethodDefinition<proto_geofence_pb.GeofenceRequest, proto_geofence_pb.GeofenceResponse> {
    path: "/pb.GeofenceService/CreateGeofence";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geofence_pb.GeofenceRequest>;
    requestDeserialize: grpc.deserialize<proto_geofence_pb.GeofenceRequest>;
    responseSerialize: grpc.serialize<proto_geofence_pb.GeofenceResponse>;
    responseDeserialize: grpc.deserialize<proto_geofence_pb.GeofenceResponse>;
}
interface IGeofenceServiceService_IRetrieveGeofence extends grpc.MethodDefinition<proto_geofence_pb.GeofenceRequest, proto_geofence_pb.GeofenceResponse> {
    path: "/pb.GeofenceService/RetrieveGeofence";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geofence_pb.GeofenceRequest>;
    requestDeserialize: grpc.deserialize<proto_geofence_pb.GeofenceRequest>;
    responseSerialize: grpc.serialize<proto_geofence_pb.GeofenceResponse>;
    responseDeserialize: grpc.deserialize<proto_geofence_pb.GeofenceResponse>;
}
interface IGeofenceServiceService_IRetrieveGeofences extends grpc.MethodDefinition<proto_geofence_pb.GeofenceRequest, proto_geofence_pb.GeofencesResponse> {
    path: "/pb.GeofenceService/RetrieveGeofences";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geofence_pb.GeofenceRequest>;
    requestDeserialize: grpc.deserialize<proto_geofence_pb.GeofenceRequest>;
    responseSerialize: grpc.serialize<proto_geofence_pb.GeofencesResponse>;
    responseDeserialize: grpc.deserialize<proto_geofence_pb.GeofencesResponse>;
}
interface IGeofenceServiceService_IUpdateGeofence extends grpc.MethodDefinition<proto_geofence_pb.GeofenceRequest, proto_geofence_pb.GeofenceResponse> {
    path: "/pb.GeofenceService/UpdateGeofence";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geofence_pb.GeofenceRequest>;
    requestDeserialize: grpc.deserialize<proto_geofence_pb.GeofenceRequest>;
    responseSerialize: grpc.serialize<proto_geofence_pb.GeofenceResponse>;
    responseDeserialize: grpc.deserialize<proto_geofence_pb.GeofenceResponse>;
}
interface IGeofenceServiceService_IDeleteGeofence extends grpc.MethodDefinition<proto_geofence_pb.GeofenceRequest, proto_geofence_pb.GeofenceResponse> {
    path: "/pb.GeofenceService/DeleteGeofence";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geofence_pb.GeofenceRequest>;
    requestDeserialize: grpc.deserialize<proto_geofence_pb.GeofenceRequest>;
    responseSerialize: grpc.serialize<proto_geofence_pb.GeofenceResponse>;
    responseDeserialize: grpc.deserialize<proto_geofence_pb.GeofenceResponse>;
}

export const GeofenceServiceService: IGeofenceServiceService;

export interface IGeofenceServiceServer {
    createGeofence: grpc.handleUnaryCall<proto_geofence_pb.GeofenceRequest, proto_geofence_pb.GeofenceResponse>;
    retrieveGeofence: grpc.handleUnaryCall<proto_geofence_pb.GeofenceRequest, proto_geofence_pb.GeofenceResponse>;
    retrieveGeofences: grpc.handleUnaryCall<proto_geofence_pb.GeofenceRequest, proto_geofence_pb.GeofencesResponse>;
    updateGeofence: grpc.handleUnaryCall<proto_geofence_pb.GeofenceRequest, proto_geofence_pb.GeofenceResponse>;
    deleteGeofence: grpc.handleUnaryCall<proto_geofence_pb.GeofenceRequest, proto_geofence_pb.GeofenceResponse>;
}

export interface IGeofenceServiceClient {
    createGeofence(request: proto_geofence_pb.GeofenceRequest, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    createGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    createGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    retrieveGeofence(request: proto_geofence_pb.GeofenceRequest, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    retrieveGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    retrieveGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    retrieveGeofences(request: proto_geofence_pb.GeofenceRequest, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofencesResponse) => void): grpc.ClientUnaryCall;
    retrieveGeofences(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofencesResponse) => void): grpc.ClientUnaryCall;
    retrieveGeofences(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofencesResponse) => void): grpc.ClientUnaryCall;
    updateGeofence(request: proto_geofence_pb.GeofenceRequest, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    updateGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    updateGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    deleteGeofence(request: proto_geofence_pb.GeofenceRequest, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    deleteGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    deleteGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
}

export class GeofenceServiceClient extends grpc.Client implements IGeofenceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createGeofence(request: proto_geofence_pb.GeofenceRequest, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public createGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public createGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeofence(request: proto_geofence_pb.GeofenceRequest, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeofences(request: proto_geofence_pb.GeofenceRequest, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofencesResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeofences(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofencesResponse) => void): grpc.ClientUnaryCall;
    public retrieveGeofences(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofencesResponse) => void): grpc.ClientUnaryCall;
    public updateGeofence(request: proto_geofence_pb.GeofenceRequest, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public updateGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public updateGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public deleteGeofence(request: proto_geofence_pb.GeofenceRequest, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public deleteGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
    public deleteGeofence(request: proto_geofence_pb.GeofenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geofence_pb.GeofenceResponse) => void): grpc.ClientUnaryCall;
}
