/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_bench_pb from '../proto/bench_pb';


export class BenchServiceClient {
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

  methodInfoCreateBench = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_bench_pb.BenchResponse,
    (request: proto_bench_pb.BenchRequest) => {
      return request.serializeBinary();
    },
    proto_bench_pb.BenchResponse.deserializeBinary
  );

  createBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_bench_pb.BenchResponse>;

  createBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_bench_pb.BenchResponse) => void): grpcWeb.ClientReadableStream<proto_bench_pb.BenchResponse>;

  createBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_bench_pb.BenchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.BenchService/CreateBench',
        request,
        metadata || {},
        this.methodInfoCreateBench,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.BenchService/CreateBench',
    request,
    metadata || {},
    this.methodInfoCreateBench);
  }

  methodInfoRetrieveBench = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_bench_pb.BenchResponse,
    (request: proto_bench_pb.BenchRequest) => {
      return request.serializeBinary();
    },
    proto_bench_pb.BenchResponse.deserializeBinary
  );

  retrieveBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_bench_pb.BenchResponse>;

  retrieveBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_bench_pb.BenchResponse) => void): grpcWeb.ClientReadableStream<proto_bench_pb.BenchResponse>;

  retrieveBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_bench_pb.BenchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.BenchService/RetrieveBench',
        request,
        metadata || {},
        this.methodInfoRetrieveBench,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.BenchService/RetrieveBench',
    request,
    metadata || {},
    this.methodInfoRetrieveBench);
  }

  methodInfoRetrieveBenches = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_bench_pb.BenchesResponse,
    (request: proto_bench_pb.BenchRequest) => {
      return request.serializeBinary();
    },
    proto_bench_pb.BenchesResponse.deserializeBinary
  );

  retrieveBenches(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_bench_pb.BenchesResponse>;

  retrieveBenches(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_bench_pb.BenchesResponse) => void): grpcWeb.ClientReadableStream<proto_bench_pb.BenchesResponse>;

  retrieveBenches(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_bench_pb.BenchesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.BenchService/RetrieveBenches',
        request,
        metadata || {},
        this.methodInfoRetrieveBenches,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.BenchService/RetrieveBenches',
    request,
    metadata || {},
    this.methodInfoRetrieveBenches);
  }

  methodInfoUpdateBench = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_bench_pb.BenchResponse,
    (request: proto_bench_pb.BenchRequest) => {
      return request.serializeBinary();
    },
    proto_bench_pb.BenchResponse.deserializeBinary
  );

  updateBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_bench_pb.BenchResponse>;

  updateBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_bench_pb.BenchResponse) => void): grpcWeb.ClientReadableStream<proto_bench_pb.BenchResponse>;

  updateBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_bench_pb.BenchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.BenchService/UpdateBench',
        request,
        metadata || {},
        this.methodInfoUpdateBench,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.BenchService/UpdateBench',
    request,
    metadata || {},
    this.methodInfoUpdateBench);
  }

  methodInfoDeleteBench = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_bench_pb.BenchResponse,
    (request: proto_bench_pb.BenchRequest) => {
      return request.serializeBinary();
    },
    proto_bench_pb.BenchResponse.deserializeBinary
  );

  deleteBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_bench_pb.BenchResponse>;

  deleteBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_bench_pb.BenchResponse) => void): grpcWeb.ClientReadableStream<proto_bench_pb.BenchResponse>;

  deleteBench(
    request: proto_bench_pb.BenchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_bench_pb.BenchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.BenchService/DeleteBench',
        request,
        metadata || {},
        this.methodInfoDeleteBench,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.BenchService/DeleteBench',
    request,
    metadata || {},
    this.methodInfoDeleteBench);
  }

}

