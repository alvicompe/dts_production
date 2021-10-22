/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_pad_pb from '../proto/pad_pb';


export class PadServiceClient {
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

  methodInfoCreatePad = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_pad_pb.PadResponse,
    (request: proto_pad_pb.PadRequest) => {
      return request.serializeBinary();
    },
    proto_pad_pb.PadResponse.deserializeBinary
  );

  createPad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_pad_pb.PadResponse>;

  createPad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_pad_pb.PadResponse) => void): grpcWeb.ClientReadableStream<proto_pad_pb.PadResponse>;

  createPad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_pad_pb.PadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PadService/CreatePad',
        request,
        metadata || {},
        this.methodInfoCreatePad,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PadService/CreatePad',
    request,
    metadata || {},
    this.methodInfoCreatePad);
  }

  methodInfoRetrievePad = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_pad_pb.PadResponse,
    (request: proto_pad_pb.PadRequest) => {
      return request.serializeBinary();
    },
    proto_pad_pb.PadResponse.deserializeBinary
  );

  retrievePad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_pad_pb.PadResponse>;

  retrievePad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_pad_pb.PadResponse) => void): grpcWeb.ClientReadableStream<proto_pad_pb.PadResponse>;

  retrievePad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_pad_pb.PadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PadService/RetrievePad',
        request,
        metadata || {},
        this.methodInfoRetrievePad,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PadService/RetrievePad',
    request,
    metadata || {},
    this.methodInfoRetrievePad);
  }

  methodInfoRetrievePads = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_pad_pb.PadsResponse,
    (request: proto_pad_pb.PadRequest) => {
      return request.serializeBinary();
    },
    proto_pad_pb.PadsResponse.deserializeBinary
  );

  retrievePads(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_pad_pb.PadsResponse>;

  retrievePads(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_pad_pb.PadsResponse) => void): grpcWeb.ClientReadableStream<proto_pad_pb.PadsResponse>;

  retrievePads(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_pad_pb.PadsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PadService/RetrievePads',
        request,
        metadata || {},
        this.methodInfoRetrievePads,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PadService/RetrievePads',
    request,
    metadata || {},
    this.methodInfoRetrievePads);
  }

  methodInfoUpdatePad = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_pad_pb.PadResponse,
    (request: proto_pad_pb.PadRequest) => {
      return request.serializeBinary();
    },
    proto_pad_pb.PadResponse.deserializeBinary
  );

  updatePad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_pad_pb.PadResponse>;

  updatePad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_pad_pb.PadResponse) => void): grpcWeb.ClientReadableStream<proto_pad_pb.PadResponse>;

  updatePad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_pad_pb.PadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PadService/UpdatePad',
        request,
        metadata || {},
        this.methodInfoUpdatePad,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PadService/UpdatePad',
    request,
    metadata || {},
    this.methodInfoUpdatePad);
  }

  methodInfoDeletePad = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_pad_pb.PadResponse,
    (request: proto_pad_pb.PadRequest) => {
      return request.serializeBinary();
    },
    proto_pad_pb.PadResponse.deserializeBinary
  );

  deletePad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_pad_pb.PadResponse>;

  deletePad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_pad_pb.PadResponse) => void): grpcWeb.ClientReadableStream<proto_pad_pb.PadResponse>;

  deletePad(
    request: proto_pad_pb.PadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_pad_pb.PadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PadService/DeletePad',
        request,
        metadata || {},
        this.methodInfoDeletePad,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PadService/DeletePad',
    request,
    metadata || {},
    this.methodInfoDeletePad);
  }

}

