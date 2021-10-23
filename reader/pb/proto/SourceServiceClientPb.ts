/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_source_pb from '../proto/source_pb';


export class SourceServiceClient {
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

  methodInfoLoad = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_source_pb.SourceResponse,
    (request: proto_source_pb.SourceRequest) => {
      return request.serializeBinary();
    },
    proto_source_pb.SourceResponse.deserializeBinary
  );

  load(
    request: proto_source_pb.SourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_source_pb.SourceResponse>;

  load(
    request: proto_source_pb.SourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_source_pb.SourceResponse) => void): grpcWeb.ClientReadableStream<proto_source_pb.SourceResponse>;

  load(
    request: proto_source_pb.SourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_source_pb.SourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.SourceService/Load',
        request,
        metadata || {},
        this.methodInfoLoad,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.SourceService/Load',
    request,
    metadata || {},
    this.methodInfoLoad);
  }

}
