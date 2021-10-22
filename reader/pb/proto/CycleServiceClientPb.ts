/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_cycle_pb from '../proto/cycle_pb';


export class CycleServiceClient {
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

  methodInfoCreateCycle = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_cycle_pb.CycleResponse,
    (request: proto_cycle_pb.CycleRequest) => {
      return request.serializeBinary();
    },
    proto_cycle_pb.CycleResponse.deserializeBinary
  );

  createCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_cycle_pb.CycleResponse>;

  createCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_cycle_pb.CycleResponse) => void): grpcWeb.ClientReadableStream<proto_cycle_pb.CycleResponse>;

  createCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_cycle_pb.CycleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CycleService/CreateCycle',
        request,
        metadata || {},
        this.methodInfoCreateCycle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CycleService/CreateCycle',
    request,
    metadata || {},
    this.methodInfoCreateCycle);
  }

  methodInfoRetrieveCycle = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_cycle_pb.CycleResponse,
    (request: proto_cycle_pb.CycleRequest) => {
      return request.serializeBinary();
    },
    proto_cycle_pb.CycleResponse.deserializeBinary
  );

  retrieveCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_cycle_pb.CycleResponse>;

  retrieveCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_cycle_pb.CycleResponse) => void): grpcWeb.ClientReadableStream<proto_cycle_pb.CycleResponse>;

  retrieveCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_cycle_pb.CycleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CycleService/RetrieveCycle',
        request,
        metadata || {},
        this.methodInfoRetrieveCycle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CycleService/RetrieveCycle',
    request,
    metadata || {},
    this.methodInfoRetrieveCycle);
  }

  methodInfoRetrieveCycles = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_cycle_pb.CyclesResponse,
    (request: proto_cycle_pb.CycleRequest) => {
      return request.serializeBinary();
    },
    proto_cycle_pb.CyclesResponse.deserializeBinary
  );

  retrieveCycles(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_cycle_pb.CyclesResponse>;

  retrieveCycles(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_cycle_pb.CyclesResponse) => void): grpcWeb.ClientReadableStream<proto_cycle_pb.CyclesResponse>;

  retrieveCycles(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_cycle_pb.CyclesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CycleService/RetrieveCycles',
        request,
        metadata || {},
        this.methodInfoRetrieveCycles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CycleService/RetrieveCycles',
    request,
    metadata || {},
    this.methodInfoRetrieveCycles);
  }

  methodInfoUpdateCycle = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_cycle_pb.CycleResponse,
    (request: proto_cycle_pb.CycleRequest) => {
      return request.serializeBinary();
    },
    proto_cycle_pb.CycleResponse.deserializeBinary
  );

  updateCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_cycle_pb.CycleResponse>;

  updateCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_cycle_pb.CycleResponse) => void): grpcWeb.ClientReadableStream<proto_cycle_pb.CycleResponse>;

  updateCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_cycle_pb.CycleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CycleService/UpdateCycle',
        request,
        metadata || {},
        this.methodInfoUpdateCycle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CycleService/UpdateCycle',
    request,
    metadata || {},
    this.methodInfoUpdateCycle);
  }

  methodInfoDeleteCycle = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_cycle_pb.CycleResponse,
    (request: proto_cycle_pb.CycleRequest) => {
      return request.serializeBinary();
    },
    proto_cycle_pb.CycleResponse.deserializeBinary
  );

  deleteCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_cycle_pb.CycleResponse>;

  deleteCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_cycle_pb.CycleResponse) => void): grpcWeb.ClientReadableStream<proto_cycle_pb.CycleResponse>;

  deleteCycle(
    request: proto_cycle_pb.CycleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_cycle_pb.CycleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CycleService/DeleteCycle',
        request,
        metadata || {},
        this.methodInfoDeleteCycle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CycleService/DeleteCycle',
    request,
    metadata || {},
    this.methodInfoDeleteCycle);
  }

}

