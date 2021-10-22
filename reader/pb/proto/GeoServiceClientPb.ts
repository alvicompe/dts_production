/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_geo_pb from '../proto/geo_pb';


export class GeoServiceClient {
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

  methodInfoUploadGeo = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geo_pb.GeoChunkResponse,
    (request: proto_geo_pb.GeoChunkRequest) => {
      return request.serializeBinary();
    },
    proto_geo_pb.GeoChunkResponse.deserializeBinary
  );

  uploadGeo(
    request: proto_geo_pb.GeoChunkRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geo_pb.GeoChunkResponse>;

  uploadGeo(
    request: proto_geo_pb.GeoChunkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geo_pb.GeoChunkResponse) => void): grpcWeb.ClientReadableStream<proto_geo_pb.GeoChunkResponse>;

  uploadGeo(
    request: proto_geo_pb.GeoChunkRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geo_pb.GeoChunkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeoService/UploadGeo',
        request,
        metadata || {},
        this.methodInfoUploadGeo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeoService/UploadGeo',
    request,
    metadata || {},
    this.methodInfoUploadGeo);
  }

  methodInfoCreateGeo = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geo_pb.GeoResponse,
    (request: proto_geo_pb.GeoRequest) => {
      return request.serializeBinary();
    },
    proto_geo_pb.GeoResponse.deserializeBinary
  );

  createGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geo_pb.GeoResponse>;

  createGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geo_pb.GeoResponse) => void): grpcWeb.ClientReadableStream<proto_geo_pb.GeoResponse>;

  createGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geo_pb.GeoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeoService/CreateGeo',
        request,
        metadata || {},
        this.methodInfoCreateGeo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeoService/CreateGeo',
    request,
    metadata || {},
    this.methodInfoCreateGeo);
  }

  methodInfoRetrieveGeo = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geo_pb.GeoResponse,
    (request: proto_geo_pb.GeoRequest) => {
      return request.serializeBinary();
    },
    proto_geo_pb.GeoResponse.deserializeBinary
  );

  retrieveGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geo_pb.GeoResponse>;

  retrieveGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geo_pb.GeoResponse) => void): grpcWeb.ClientReadableStream<proto_geo_pb.GeoResponse>;

  retrieveGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geo_pb.GeoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeoService/RetrieveGeo',
        request,
        metadata || {},
        this.methodInfoRetrieveGeo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeoService/RetrieveGeo',
    request,
    metadata || {},
    this.methodInfoRetrieveGeo);
  }

  methodInfoRetrieveGeos = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geo_pb.GeosResponse,
    (request: proto_geo_pb.GeoRequest) => {
      return request.serializeBinary();
    },
    proto_geo_pb.GeosResponse.deserializeBinary
  );

  retrieveGeos(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geo_pb.GeosResponse>;

  retrieveGeos(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geo_pb.GeosResponse) => void): grpcWeb.ClientReadableStream<proto_geo_pb.GeosResponse>;

  retrieveGeos(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geo_pb.GeosResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeoService/RetrieveGeos',
        request,
        metadata || {},
        this.methodInfoRetrieveGeos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeoService/RetrieveGeos',
    request,
    metadata || {},
    this.methodInfoRetrieveGeos);
  }

  methodInfoUpdateGeo = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geo_pb.GeoResponse,
    (request: proto_geo_pb.GeoRequest) => {
      return request.serializeBinary();
    },
    proto_geo_pb.GeoResponse.deserializeBinary
  );

  updateGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geo_pb.GeoResponse>;

  updateGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geo_pb.GeoResponse) => void): grpcWeb.ClientReadableStream<proto_geo_pb.GeoResponse>;

  updateGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geo_pb.GeoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeoService/UpdateGeo',
        request,
        metadata || {},
        this.methodInfoUpdateGeo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeoService/UpdateGeo',
    request,
    metadata || {},
    this.methodInfoUpdateGeo);
  }

  methodInfoDeleteGeo = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_geo_pb.GeoResponse,
    (request: proto_geo_pb.GeoRequest) => {
      return request.serializeBinary();
    },
    proto_geo_pb.GeoResponse.deserializeBinary
  );

  deleteGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_geo_pb.GeoResponse>;

  deleteGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_geo_pb.GeoResponse) => void): grpcWeb.ClientReadableStream<proto_geo_pb.GeoResponse>;

  deleteGeo(
    request: proto_geo_pb.GeoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_geo_pb.GeoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GeoService/DeleteGeo',
        request,
        metadata || {},
        this.methodInfoDeleteGeo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GeoService/DeleteGeo',
    request,
    metadata || {},
    this.methodInfoDeleteGeo);
  }

}

