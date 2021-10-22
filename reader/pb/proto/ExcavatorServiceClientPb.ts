/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_excavator_pb from '../proto/excavator_pb';


export class ExcavatorServiceClient {
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

  methodInfoCreateExcavator = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_excavator_pb.ExcavatorResponse,
    (request: proto_excavator_pb.ExcavatorRequest) => {
      return request.serializeBinary();
    },
    proto_excavator_pb.ExcavatorResponse.deserializeBinary
  );

  createExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_excavator_pb.ExcavatorResponse>;

  createExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_excavator_pb.ExcavatorResponse) => void): grpcWeb.ClientReadableStream<proto_excavator_pb.ExcavatorResponse>;

  createExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_excavator_pb.ExcavatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExcavatorService/CreateExcavator',
        request,
        metadata || {},
        this.methodInfoCreateExcavator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExcavatorService/CreateExcavator',
    request,
    metadata || {},
    this.methodInfoCreateExcavator);
  }

  methodInfoRetrieveExcavator = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_excavator_pb.ExcavatorResponse,
    (request: proto_excavator_pb.ExcavatorRequest) => {
      return request.serializeBinary();
    },
    proto_excavator_pb.ExcavatorResponse.deserializeBinary
  );

  retrieveExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_excavator_pb.ExcavatorResponse>;

  retrieveExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_excavator_pb.ExcavatorResponse) => void): grpcWeb.ClientReadableStream<proto_excavator_pb.ExcavatorResponse>;

  retrieveExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_excavator_pb.ExcavatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExcavatorService/RetrieveExcavator',
        request,
        metadata || {},
        this.methodInfoRetrieveExcavator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExcavatorService/RetrieveExcavator',
    request,
    metadata || {},
    this.methodInfoRetrieveExcavator);
  }

  methodInfoRetrieveExcavators = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_excavator_pb.ExcavatorsResponse,
    (request: proto_excavator_pb.ExcavatorRequest) => {
      return request.serializeBinary();
    },
    proto_excavator_pb.ExcavatorsResponse.deserializeBinary
  );

  retrieveExcavators(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_excavator_pb.ExcavatorsResponse>;

  retrieveExcavators(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_excavator_pb.ExcavatorsResponse) => void): grpcWeb.ClientReadableStream<proto_excavator_pb.ExcavatorsResponse>;

  retrieveExcavators(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_excavator_pb.ExcavatorsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExcavatorService/RetrieveExcavators',
        request,
        metadata || {},
        this.methodInfoRetrieveExcavators,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExcavatorService/RetrieveExcavators',
    request,
    metadata || {},
    this.methodInfoRetrieveExcavators);
  }

  methodInfoUpdateExcavator = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_excavator_pb.ExcavatorResponse,
    (request: proto_excavator_pb.ExcavatorRequest) => {
      return request.serializeBinary();
    },
    proto_excavator_pb.ExcavatorResponse.deserializeBinary
  );

  updateExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_excavator_pb.ExcavatorResponse>;

  updateExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_excavator_pb.ExcavatorResponse) => void): grpcWeb.ClientReadableStream<proto_excavator_pb.ExcavatorResponse>;

  updateExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_excavator_pb.ExcavatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExcavatorService/UpdateExcavator',
        request,
        metadata || {},
        this.methodInfoUpdateExcavator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExcavatorService/UpdateExcavator',
    request,
    metadata || {},
    this.methodInfoUpdateExcavator);
  }

  methodInfoDeleteExcavator = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_excavator_pb.ExcavatorResponse,
    (request: proto_excavator_pb.ExcavatorRequest) => {
      return request.serializeBinary();
    },
    proto_excavator_pb.ExcavatorResponse.deserializeBinary
  );

  deleteExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_excavator_pb.ExcavatorResponse>;

  deleteExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_excavator_pb.ExcavatorResponse) => void): grpcWeb.ClientReadableStream<proto_excavator_pb.ExcavatorResponse>;

  deleteExcavator(
    request: proto_excavator_pb.ExcavatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_excavator_pb.ExcavatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExcavatorService/DeleteExcavator',
        request,
        metadata || {},
        this.methodInfoDeleteExcavator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExcavatorService/DeleteExcavator',
    request,
    metadata || {},
    this.methodInfoDeleteExcavator);
  }

}

