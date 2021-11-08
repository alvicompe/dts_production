/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_grid_pb from '../proto/grid_pb';


export class GridServiceClient {
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

  methodInfoCreateGrid = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_grid_pb.GridResponse,
    (request: proto_grid_pb.GridRequest) => {
      return request.serializeBinary();
    },
    proto_grid_pb.GridResponse.deserializeBinary
  );

  createGrid(
    request: proto_grid_pb.GridRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_grid_pb.GridResponse>;

  createGrid(
    request: proto_grid_pb.GridRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_grid_pb.GridResponse) => void): grpcWeb.ClientReadableStream<proto_grid_pb.GridResponse>;

  createGrid(
    request: proto_grid_pb.GridRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_grid_pb.GridResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.GridService/CreateGrid',
        request,
        metadata || {},
        this.methodInfoCreateGrid,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.GridService/CreateGrid',
    request,
    metadata || {},
    this.methodInfoCreateGrid);
  }

}

