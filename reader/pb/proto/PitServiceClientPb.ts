/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_pit_pb from '../proto/pit_pb';


export class PitServiceClient {
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

  methodInfoCreatePit = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_pit_pb.PitResponse,
    (request: proto_pit_pb.PitRequest) => {
      return request.serializeBinary();
    },
    proto_pit_pb.PitResponse.deserializeBinary
  );

  createPit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_pit_pb.PitResponse>;

  createPit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_pit_pb.PitResponse) => void): grpcWeb.ClientReadableStream<proto_pit_pb.PitResponse>;

  createPit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_pit_pb.PitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PitService/CreatePit',
        request,
        metadata || {},
        this.methodInfoCreatePit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PitService/CreatePit',
    request,
    metadata || {},
    this.methodInfoCreatePit);
  }

  methodInfoRetrievePit = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_pit_pb.PitResponse,
    (request: proto_pit_pb.PitRequest) => {
      return request.serializeBinary();
    },
    proto_pit_pb.PitResponse.deserializeBinary
  );

  retrievePit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_pit_pb.PitResponse>;

  retrievePit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_pit_pb.PitResponse) => void): grpcWeb.ClientReadableStream<proto_pit_pb.PitResponse>;

  retrievePit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_pit_pb.PitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PitService/RetrievePit',
        request,
        metadata || {},
        this.methodInfoRetrievePit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PitService/RetrievePit',
    request,
    metadata || {},
    this.methodInfoRetrievePit);
  }

  methodInfoRetrievePits = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_pit_pb.PitsResponse,
    (request: proto_pit_pb.PitRequest) => {
      return request.serializeBinary();
    },
    proto_pit_pb.PitsResponse.deserializeBinary
  );

  retrievePits(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_pit_pb.PitsResponse>;

  retrievePits(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_pit_pb.PitsResponse) => void): grpcWeb.ClientReadableStream<proto_pit_pb.PitsResponse>;

  retrievePits(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_pit_pb.PitsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PitService/RetrievePits',
        request,
        metadata || {},
        this.methodInfoRetrievePits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PitService/RetrievePits',
    request,
    metadata || {},
    this.methodInfoRetrievePits);
  }

  methodInfoUpdatePit = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_pit_pb.PitResponse,
    (request: proto_pit_pb.PitRequest) => {
      return request.serializeBinary();
    },
    proto_pit_pb.PitResponse.deserializeBinary
  );

  updatePit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_pit_pb.PitResponse>;

  updatePit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_pit_pb.PitResponse) => void): grpcWeb.ClientReadableStream<proto_pit_pb.PitResponse>;

  updatePit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_pit_pb.PitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PitService/UpdatePit',
        request,
        metadata || {},
        this.methodInfoUpdatePit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PitService/UpdatePit',
    request,
    metadata || {},
    this.methodInfoUpdatePit);
  }

  methodInfoDeletePit = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_pit_pb.PitResponse,
    (request: proto_pit_pb.PitRequest) => {
      return request.serializeBinary();
    },
    proto_pit_pb.PitResponse.deserializeBinary
  );

  deletePit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_pit_pb.PitResponse>;

  deletePit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_pit_pb.PitResponse) => void): grpcWeb.ClientReadableStream<proto_pit_pb.PitResponse>;

  deletePit(
    request: proto_pit_pb.PitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_pit_pb.PitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PitService/DeletePit',
        request,
        metadata || {},
        this.methodInfoDeletePit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PitService/DeletePit',
    request,
    metadata || {},
    this.methodInfoDeletePit);
  }

}

