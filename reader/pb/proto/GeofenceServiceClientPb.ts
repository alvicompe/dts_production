/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_geofence_pb from '../proto/geofence_pb';


export class GeofenceServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateGeofence = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geofence_pb.GeofenceResponse,
    (request: proto_geofence_pb.GeofenceRequest) => {
      return request.serializeBinary();
    },
    proto_geofence_pb.GeofenceResponse.deserializeBinary
  );

  createGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geofence_pb.GeofenceResponse>;

  createGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geofence_pb.GeofenceResponse) => void): grpcWeb.ClientReadableStream<proto_geofence_pb.GeofenceResponse>;

  createGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geofence_pb.GeofenceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeofenceService/CreateGeofence',
        request,
        metadata || {},
        this.methodInfoCreateGeofence,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeofenceService/CreateGeofence',
    request,
    metadata || {},
    this.methodInfoCreateGeofence);
  }

  methodInfoRetrieveGeofence = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geofence_pb.GeofenceResponse,
    (request: proto_geofence_pb.GeofenceRequest) => {
      return request.serializeBinary();
    },
    proto_geofence_pb.GeofenceResponse.deserializeBinary
  );

  retrieveGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geofence_pb.GeofenceResponse>;

  retrieveGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geofence_pb.GeofenceResponse) => void): grpcWeb.ClientReadableStream<proto_geofence_pb.GeofenceResponse>;

  retrieveGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geofence_pb.GeofenceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeofenceService/RetrieveGeofence',
        request,
        metadata || {},
        this.methodInfoRetrieveGeofence,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeofenceService/RetrieveGeofence',
    request,
    metadata || {},
    this.methodInfoRetrieveGeofence);
  }

  methodInfoRetrieveGeofences = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geofence_pb.GeofencesResponse,
    (request: proto_geofence_pb.GeofenceRequest) => {
      return request.serializeBinary();
    },
    proto_geofence_pb.GeofencesResponse.deserializeBinary
  );

  retrieveGeofences(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geofence_pb.GeofencesResponse>;

  retrieveGeofences(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geofence_pb.GeofencesResponse) => void): grpcWeb.ClientReadableStream<proto_geofence_pb.GeofencesResponse>;

  retrieveGeofences(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geofence_pb.GeofencesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeofenceService/RetrieveGeofences',
        request,
        metadata || {},
        this.methodInfoRetrieveGeofences,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeofenceService/RetrieveGeofences',
    request,
    metadata || {},
    this.methodInfoRetrieveGeofences);
  }

  methodInfoUpdateGeofence = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geofence_pb.GeofenceResponse,
    (request: proto_geofence_pb.GeofenceRequest) => {
      return request.serializeBinary();
    },
    proto_geofence_pb.GeofenceResponse.deserializeBinary
  );

  updateGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geofence_pb.GeofenceResponse>;

  updateGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geofence_pb.GeofenceResponse) => void): grpcWeb.ClientReadableStream<proto_geofence_pb.GeofenceResponse>;

  updateGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geofence_pb.GeofenceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeofenceService/UpdateGeofence',
        request,
        metadata || {},
        this.methodInfoUpdateGeofence,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeofenceService/UpdateGeofence',
    request,
    metadata || {},
    this.methodInfoUpdateGeofence);
  }

  methodInfoDeleteGeofence = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geofence_pb.GeofenceResponse,
    (request: proto_geofence_pb.GeofenceRequest) => {
      return request.serializeBinary();
    },
    proto_geofence_pb.GeofenceResponse.deserializeBinary
  );

  deleteGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geofence_pb.GeofenceResponse>;

  deleteGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geofence_pb.GeofenceResponse) => void): grpcWeb.ClientReadableStream<proto_geofence_pb.GeofenceResponse>;

  deleteGeofence(
    request: proto_geofence_pb.GeofenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geofence_pb.GeofenceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeofenceService/DeleteGeofence',
        request,
        metadata || {},
        this.methodInfoDeleteGeofence,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeofenceService/DeleteGeofence',
    request,
    metadata || {},
    this.methodInfoDeleteGeofence);
  }

}

