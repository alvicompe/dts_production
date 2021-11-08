/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_stock_pb from '../proto/stock_pb';


export class StockServiceClient {
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

  methodInfoCreateStock = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_stock_pb.StockResponse,
    (request: proto_stock_pb.StockRequest) => {
      return request.serializeBinary();
    },
    proto_stock_pb.StockResponse.deserializeBinary
  );

  createStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_stock_pb.StockResponse>;

  createStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_stock_pb.StockResponse) => void): grpcWeb.ClientReadableStream<proto_stock_pb.StockResponse>;

  createStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_stock_pb.StockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.StockService/CreateStock',
        request,
        metadata || {},
        this.methodInfoCreateStock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.StockService/CreateStock',
    request,
    metadata || {},
    this.methodInfoCreateStock);
  }

  methodInfoRetrieveStock = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_stock_pb.StockResponse,
    (request: proto_stock_pb.StockRequest) => {
      return request.serializeBinary();
    },
    proto_stock_pb.StockResponse.deserializeBinary
  );

  retrieveStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_stock_pb.StockResponse>;

  retrieveStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_stock_pb.StockResponse) => void): grpcWeb.ClientReadableStream<proto_stock_pb.StockResponse>;

  retrieveStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_stock_pb.StockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.StockService/RetrieveStock',
        request,
        metadata || {},
        this.methodInfoRetrieveStock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.StockService/RetrieveStock',
    request,
    metadata || {},
    this.methodInfoRetrieveStock);
  }

  methodInfoRetrieveStocks = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_stock_pb.StocksResponse,
    (request: proto_stock_pb.StockRequest) => {
      return request.serializeBinary();
    },
    proto_stock_pb.StocksResponse.deserializeBinary
  );

  retrieveStocks(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_stock_pb.StocksResponse>;

  retrieveStocks(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_stock_pb.StocksResponse) => void): grpcWeb.ClientReadableStream<proto_stock_pb.StocksResponse>;

  retrieveStocks(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_stock_pb.StocksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.StockService/RetrieveStocks',
        request,
        metadata || {},
        this.methodInfoRetrieveStocks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.StockService/RetrieveStocks',
    request,
    metadata || {},
    this.methodInfoRetrieveStocks);
  }

  methodInfoUpdateStock = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_stock_pb.StockResponse,
    (request: proto_stock_pb.StockRequest) => {
      return request.serializeBinary();
    },
    proto_stock_pb.StockResponse.deserializeBinary
  );

  updateStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_stock_pb.StockResponse>;

  updateStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_stock_pb.StockResponse) => void): grpcWeb.ClientReadableStream<proto_stock_pb.StockResponse>;

  updateStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_stock_pb.StockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.StockService/UpdateStock',
        request,
        metadata || {},
        this.methodInfoUpdateStock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.StockService/UpdateStock',
    request,
    metadata || {},
    this.methodInfoUpdateStock);
  }

  methodInfoDeleteStock = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_stock_pb.StockResponse,
    (request: proto_stock_pb.StockRequest) => {
      return request.serializeBinary();
    },
    proto_stock_pb.StockResponse.deserializeBinary
  );

  deleteStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_stock_pb.StockResponse>;

  deleteStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_stock_pb.StockResponse) => void): grpcWeb.ClientReadableStream<proto_stock_pb.StockResponse>;

  deleteStock(
    request: proto_stock_pb.StockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_stock_pb.StockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.StockService/DeleteStock',
        request,
        metadata || {},
        this.methodInfoDeleteStock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.StockService/DeleteStock',
    request,
    metadata || {},
    this.methodInfoDeleteStock);
  }

}

