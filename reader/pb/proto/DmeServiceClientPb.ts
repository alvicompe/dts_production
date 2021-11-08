/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_dme_pb from '../proto/dme_pb';


export class DmeServiceClient {
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

  methodInfoCreateDme = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_dme_pb.DmeResponse,
    (request: proto_dme_pb.DmeRequest) => {
      return request.serializeBinary();
    },
    proto_dme_pb.DmeResponse.deserializeBinary
  );

  createDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_dme_pb.DmeResponse>;

  createDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_dme_pb.DmeResponse) => void): grpcWeb.ClientReadableStream<proto_dme_pb.DmeResponse>;

  createDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_dme_pb.DmeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.DmeService/CreateDme',
        request,
        metadata || {},
        this.methodInfoCreateDme,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.DmeService/CreateDme',
    request,
    metadata || {},
    this.methodInfoCreateDme);
  }

  methodInfoRetrieveDme = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_dme_pb.DmeResponse,
    (request: proto_dme_pb.DmeRequest) => {
      return request.serializeBinary();
    },
    proto_dme_pb.DmeResponse.deserializeBinary
  );

  retrieveDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_dme_pb.DmeResponse>;

  retrieveDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_dme_pb.DmeResponse) => void): grpcWeb.ClientReadableStream<proto_dme_pb.DmeResponse>;

  retrieveDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_dme_pb.DmeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.DmeService/RetrieveDme',
        request,
        metadata || {},
        this.methodInfoRetrieveDme,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.DmeService/RetrieveDme',
    request,
    metadata || {},
    this.methodInfoRetrieveDme);
  }

  methodInfoRetrieveDmes = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_dme_pb.DmesResponse,
    (request: proto_dme_pb.DmeRequest) => {
      return request.serializeBinary();
    },
    proto_dme_pb.DmesResponse.deserializeBinary
  );

  retrieveDmes(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_dme_pb.DmesResponse>;

  retrieveDmes(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_dme_pb.DmesResponse) => void): grpcWeb.ClientReadableStream<proto_dme_pb.DmesResponse>;

  retrieveDmes(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_dme_pb.DmesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.DmeService/RetrieveDmes',
        request,
        metadata || {},
        this.methodInfoRetrieveDmes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.DmeService/RetrieveDmes',
    request,
    metadata || {},
    this.methodInfoRetrieveDmes);
  }

  methodInfoUpdateDme = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_dme_pb.DmeResponse,
    (request: proto_dme_pb.DmeRequest) => {
      return request.serializeBinary();
    },
    proto_dme_pb.DmeResponse.deserializeBinary
  );

  updateDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_dme_pb.DmeResponse>;

  updateDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_dme_pb.DmeResponse) => void): grpcWeb.ClientReadableStream<proto_dme_pb.DmeResponse>;

  updateDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_dme_pb.DmeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.DmeService/UpdateDme',
        request,
        metadata || {},
        this.methodInfoUpdateDme,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.DmeService/UpdateDme',
    request,
    metadata || {},
    this.methodInfoUpdateDme);
  }

  methodInfoDeleteDme = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_dme_pb.DmeResponse,
    (request: proto_dme_pb.DmeRequest) => {
      return request.serializeBinary();
    },
    proto_dme_pb.DmeResponse.deserializeBinary
  );

  deleteDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_dme_pb.DmeResponse>;

  deleteDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_dme_pb.DmeResponse) => void): grpcWeb.ClientReadableStream<proto_dme_pb.DmeResponse>;

  deleteDme(
    request: proto_dme_pb.DmeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_dme_pb.DmeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.DmeService/DeleteDme',
        request,
        metadata || {},
        this.methodInfoDeleteDme,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.DmeService/DeleteDme',
    request,
    metadata || {},
    this.methodInfoDeleteDme);
  }

}

