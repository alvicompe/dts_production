/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_road_pb from '../proto/road_pb';


export class RoadServiceClient {
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

  methodInfoCreateRoad = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_road_pb.RoadResponse,
    (request: proto_road_pb.RoadRequest) => {
      return request.serializeBinary();
    },
    proto_road_pb.RoadResponse.deserializeBinary
  );

  createRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_road_pb.RoadResponse>;

  createRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_road_pb.RoadResponse) => void): grpcWeb.ClientReadableStream<proto_road_pb.RoadResponse>;

  createRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_road_pb.RoadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.RoadService/CreateRoad',
        request,
        metadata || {},
        this.methodInfoCreateRoad,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.RoadService/CreateRoad',
    request,
    metadata || {},
    this.methodInfoCreateRoad);
  }

  methodInfoRetrieveRoad = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_road_pb.RoadResponse,
    (request: proto_road_pb.RoadRequest) => {
      return request.serializeBinary();
    },
    proto_road_pb.RoadResponse.deserializeBinary
  );

  retrieveRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_road_pb.RoadResponse>;

  retrieveRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_road_pb.RoadResponse) => void): grpcWeb.ClientReadableStream<proto_road_pb.RoadResponse>;

  retrieveRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_road_pb.RoadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.RoadService/RetrieveRoad',
        request,
        metadata || {},
        this.methodInfoRetrieveRoad,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.RoadService/RetrieveRoad',
    request,
    metadata || {},
    this.methodInfoRetrieveRoad);
  }

  methodInfoRetrieveRoads = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_road_pb.RoadsResponse,
    (request: proto_road_pb.RoadRequest) => {
      return request.serializeBinary();
    },
    proto_road_pb.RoadsResponse.deserializeBinary
  );

  retrieveRoads(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_road_pb.RoadsResponse>;

  retrieveRoads(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_road_pb.RoadsResponse) => void): grpcWeb.ClientReadableStream<proto_road_pb.RoadsResponse>;

  retrieveRoads(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_road_pb.RoadsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.RoadService/RetrieveRoads',
        request,
        metadata || {},
        this.methodInfoRetrieveRoads,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.RoadService/RetrieveRoads',
    request,
    metadata || {},
    this.methodInfoRetrieveRoads);
  }

  methodInfoUpdateRoad = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_road_pb.RoadResponse,
    (request: proto_road_pb.RoadRequest) => {
      return request.serializeBinary();
    },
    proto_road_pb.RoadResponse.deserializeBinary
  );

  updateRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_road_pb.RoadResponse>;

  updateRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_road_pb.RoadResponse) => void): grpcWeb.ClientReadableStream<proto_road_pb.RoadResponse>;

  updateRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_road_pb.RoadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.RoadService/UpdateRoad',
        request,
        metadata || {},
        this.methodInfoUpdateRoad,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.RoadService/UpdateRoad',
    request,
    metadata || {},
    this.methodInfoUpdateRoad);
  }

  methodInfoDeleteRoad = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_road_pb.RoadResponse,
    (request: proto_road_pb.RoadRequest) => {
      return request.serializeBinary();
    },
    proto_road_pb.RoadResponse.deserializeBinary
  );

  deleteRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_road_pb.RoadResponse>;

  deleteRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_road_pb.RoadResponse) => void): grpcWeb.ClientReadableStream<proto_road_pb.RoadResponse>;

  deleteRoad(
    request: proto_road_pb.RoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_road_pb.RoadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.RoadService/DeleteRoad',
        request,
        metadata || {},
        this.methodInfoDeleteRoad,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.RoadService/DeleteRoad',
    request,
    metadata || {},
    this.methodInfoDeleteRoad);
  }

}

