/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_streaming_pb from '../proto/streaming_pb';


export class TruckInfoServiceClient {
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

  methodInfoServerStream = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_streaming_pb.TruckInfoResponse,
    (request: proto_streaming_pb.TruckInfoRequest) => {
      return request.serializeBinary();
    },
    proto_streaming_pb.TruckInfoResponse.deserializeBinary
  );

  serverStream(
    request: proto_streaming_pb.TruckInfoRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/pb.TruckInfoService/ServerStream',
      request,
      metadata || {},
      this.methodInfoServerStream);
  }

}

export class ExcavatorInfoServiceClient {
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

  methodInfoServerStream = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_streaming_pb.ExcavatorInfoResponse,
    (request: proto_streaming_pb.ExcavatorInfoRequest) => {
      return request.serializeBinary();
    },
    proto_streaming_pb.ExcavatorInfoResponse.deserializeBinary
  );

  serverStream(
    request: proto_streaming_pb.ExcavatorInfoRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/pb.ExcavatorInfoService/ServerStream',
      request,
      metadata || {},
      this.methodInfoServerStream);
  }

}

