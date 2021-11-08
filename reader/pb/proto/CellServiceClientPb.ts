/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_cell_pb from '../proto/cell_pb';


export class CellServiceClient {
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

  methodInfoCreateCell = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_cell_pb.CellResponse,
    (request: proto_cell_pb.CellRequest) => {
      return request.serializeBinary();
    },
    proto_cell_pb.CellResponse.deserializeBinary
  );

  createCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_cell_pb.CellResponse>;

  createCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_cell_pb.CellResponse) => void): grpcWeb.ClientReadableStream<proto_cell_pb.CellResponse>;

  createCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_cell_pb.CellResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CellService/CreateCell',
        request,
        metadata || {},
        this.methodInfoCreateCell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CellService/CreateCell',
    request,
    metadata || {},
    this.methodInfoCreateCell);
  }

  methodInfoRetrieveCell = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_cell_pb.CellResponse,
    (request: proto_cell_pb.CellRequest) => {
      return request.serializeBinary();
    },
    proto_cell_pb.CellResponse.deserializeBinary
  );

  retrieveCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_cell_pb.CellResponse>;

  retrieveCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_cell_pb.CellResponse) => void): grpcWeb.ClientReadableStream<proto_cell_pb.CellResponse>;

  retrieveCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_cell_pb.CellResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CellService/RetrieveCell',
        request,
        metadata || {},
        this.methodInfoRetrieveCell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CellService/RetrieveCell',
    request,
    metadata || {},
    this.methodInfoRetrieveCell);
  }

  methodInfoRetrieveCells = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_cell_pb.CellsResponse,
    (request: proto_cell_pb.CellRequest) => {
      return request.serializeBinary();
    },
    proto_cell_pb.CellsResponse.deserializeBinary
  );

  retrieveCells(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_cell_pb.CellsResponse>;

  retrieveCells(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_cell_pb.CellsResponse) => void): grpcWeb.ClientReadableStream<proto_cell_pb.CellsResponse>;

  retrieveCells(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_cell_pb.CellsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CellService/RetrieveCells',
        request,
        metadata || {},
        this.methodInfoRetrieveCells,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CellService/RetrieveCells',
    request,
    metadata || {},
    this.methodInfoRetrieveCells);
  }

  methodInfoUpdateCell = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_cell_pb.CellResponse,
    (request: proto_cell_pb.CellRequest) => {
      return request.serializeBinary();
    },
    proto_cell_pb.CellResponse.deserializeBinary
  );

  updateCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_cell_pb.CellResponse>;

  updateCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_cell_pb.CellResponse) => void): grpcWeb.ClientReadableStream<proto_cell_pb.CellResponse>;

  updateCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_cell_pb.CellResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CellService/UpdateCell',
        request,
        metadata || {},
        this.methodInfoUpdateCell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CellService/UpdateCell',
    request,
    metadata || {},
    this.methodInfoUpdateCell);
  }

  methodInfoDeleteCell = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_cell_pb.CellResponse,
    (request: proto_cell_pb.CellRequest) => {
      return request.serializeBinary();
    },
    proto_cell_pb.CellResponse.deserializeBinary
  );

  deleteCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_cell_pb.CellResponse>;

  deleteCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_cell_pb.CellResponse) => void): grpcWeb.ClientReadableStream<proto_cell_pb.CellResponse>;

  deleteCell(
    request: proto_cell_pb.CellRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_cell_pb.CellResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CellService/DeleteCell',
        request,
        metadata || {},
        this.methodInfoDeleteCell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CellService/DeleteCell',
    request,
    metadata || {},
    this.methodInfoDeleteCell);
  }

}

