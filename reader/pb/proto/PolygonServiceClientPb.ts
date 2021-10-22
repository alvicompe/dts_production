/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_polygon_pb from '../proto/polygon_pb';


export class PolygonServiceClient {
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

  methodInfoCreatePolygon = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_polygon_pb.PolygonResponse,
    (request: proto_polygon_pb.PolygonRequest) => {
      return request.serializeBinary();
    },
    proto_polygon_pb.PolygonResponse.deserializeBinary
  );

  createPolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_polygon_pb.PolygonResponse>;

  createPolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_polygon_pb.PolygonResponse) => void): grpcWeb.ClientReadableStream<proto_polygon_pb.PolygonResponse>;

  createPolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_polygon_pb.PolygonResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PolygonService/CreatePolygon',
        request,
        metadata || {},
        this.methodInfoCreatePolygon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PolygonService/CreatePolygon',
    request,
    metadata || {},
    this.methodInfoCreatePolygon);
  }

  methodInfoRetrievePolygon = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_polygon_pb.PolygonResponse,
    (request: proto_polygon_pb.PolygonRequest) => {
      return request.serializeBinary();
    },
    proto_polygon_pb.PolygonResponse.deserializeBinary
  );

  retrievePolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_polygon_pb.PolygonResponse>;

  retrievePolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_polygon_pb.PolygonResponse) => void): grpcWeb.ClientReadableStream<proto_polygon_pb.PolygonResponse>;

  retrievePolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_polygon_pb.PolygonResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PolygonService/RetrievePolygon',
        request,
        metadata || {},
        this.methodInfoRetrievePolygon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PolygonService/RetrievePolygon',
    request,
    metadata || {},
    this.methodInfoRetrievePolygon);
  }

  methodInfoRetrievePolygons = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_polygon_pb.PolygonsResponse,
    (request: proto_polygon_pb.PolygonRequest) => {
      return request.serializeBinary();
    },
    proto_polygon_pb.PolygonsResponse.deserializeBinary
  );

  retrievePolygons(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_polygon_pb.PolygonsResponse>;

  retrievePolygons(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_polygon_pb.PolygonsResponse) => void): grpcWeb.ClientReadableStream<proto_polygon_pb.PolygonsResponse>;

  retrievePolygons(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_polygon_pb.PolygonsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PolygonService/RetrievePolygons',
        request,
        metadata || {},
        this.methodInfoRetrievePolygons,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PolygonService/RetrievePolygons',
    request,
    metadata || {},
    this.methodInfoRetrievePolygons);
  }

  methodInfoUpdatePolygon = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_polygon_pb.PolygonResponse,
    (request: proto_polygon_pb.PolygonRequest) => {
      return request.serializeBinary();
    },
    proto_polygon_pb.PolygonResponse.deserializeBinary
  );

  updatePolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_polygon_pb.PolygonResponse>;

  updatePolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_polygon_pb.PolygonResponse) => void): grpcWeb.ClientReadableStream<proto_polygon_pb.PolygonResponse>;

  updatePolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_polygon_pb.PolygonResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PolygonService/UpdatePolygon',
        request,
        metadata || {},
        this.methodInfoUpdatePolygon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PolygonService/UpdatePolygon',
    request,
    metadata || {},
    this.methodInfoUpdatePolygon);
  }

  methodInfoDeletePolygon = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_polygon_pb.PolygonResponse,
    (request: proto_polygon_pb.PolygonRequest) => {
      return request.serializeBinary();
    },
    proto_polygon_pb.PolygonResponse.deserializeBinary
  );

  deletePolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_polygon_pb.PolygonResponse>;

  deletePolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_polygon_pb.PolygonResponse) => void): grpcWeb.ClientReadableStream<proto_polygon_pb.PolygonResponse>;

  deletePolygon(
    request: proto_polygon_pb.PolygonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_polygon_pb.PolygonResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PolygonService/DeletePolygon',
        request,
        metadata || {},
        this.methodInfoDeletePolygon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PolygonService/DeletePolygon',
    request,
    metadata || {},
    this.methodInfoDeletePolygon);
  }

}

