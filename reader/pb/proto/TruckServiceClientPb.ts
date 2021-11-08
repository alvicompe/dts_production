/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_truck_pb from '../proto/truck_pb';


export class TruckServiceClient {
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

  methodInfoCreateTruck = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_truck_pb.TruckResponse,
    (request: proto_truck_pb.TruckRequest) => {
      return request.serializeBinary();
    },
    proto_truck_pb.TruckResponse.deserializeBinary
  );

  createTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_truck_pb.TruckResponse>;

  createTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_truck_pb.TruckResponse) => void): grpcWeb.ClientReadableStream<proto_truck_pb.TruckResponse>;

  createTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_truck_pb.TruckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.TruckService/CreateTruck',
        request,
        metadata || {},
        this.methodInfoCreateTruck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.TruckService/CreateTruck',
    request,
    metadata || {},
    this.methodInfoCreateTruck);
  }

  methodInfoRetrieveTruck = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_truck_pb.TruckResponse,
    (request: proto_truck_pb.TruckRequest) => {
      return request.serializeBinary();
    },
    proto_truck_pb.TruckResponse.deserializeBinary
  );

  retrieveTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_truck_pb.TruckResponse>;

  retrieveTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_truck_pb.TruckResponse) => void): grpcWeb.ClientReadableStream<proto_truck_pb.TruckResponse>;

  retrieveTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_truck_pb.TruckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.TruckService/RetrieveTruck',
        request,
        metadata || {},
        this.methodInfoRetrieveTruck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.TruckService/RetrieveTruck',
    request,
    metadata || {},
    this.methodInfoRetrieveTruck);
  }

  methodInfoRetrieveTrucks = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_truck_pb.TrucksResponse,
    (request: proto_truck_pb.TruckRequest) => {
      return request.serializeBinary();
    },
    proto_truck_pb.TrucksResponse.deserializeBinary
  );

  retrieveTrucks(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_truck_pb.TrucksResponse>;

  retrieveTrucks(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_truck_pb.TrucksResponse) => void): grpcWeb.ClientReadableStream<proto_truck_pb.TrucksResponse>;

  retrieveTrucks(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_truck_pb.TrucksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.TruckService/RetrieveTrucks',
        request,
        metadata || {},
        this.methodInfoRetrieveTrucks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.TruckService/RetrieveTrucks',
    request,
    metadata || {},
    this.methodInfoRetrieveTrucks);
  }

  methodInfoUpdateTruck = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_truck_pb.TruckResponse,
    (request: proto_truck_pb.TruckRequest) => {
      return request.serializeBinary();
    },
    proto_truck_pb.TruckResponse.deserializeBinary
  );

  updateTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_truck_pb.TruckResponse>;

  updateTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_truck_pb.TruckResponse) => void): grpcWeb.ClientReadableStream<proto_truck_pb.TruckResponse>;

  updateTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_truck_pb.TruckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.TruckService/UpdateTruck',
        request,
        metadata || {},
        this.methodInfoUpdateTruck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.TruckService/UpdateTruck',
    request,
    metadata || {},
    this.methodInfoUpdateTruck);
  }

  methodInfoDeleteTruck = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_truck_pb.TruckResponse,
    (request: proto_truck_pb.TruckRequest) => {
      return request.serializeBinary();
    },
    proto_truck_pb.TruckResponse.deserializeBinary
  );

  deleteTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_truck_pb.TruckResponse>;

  deleteTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_truck_pb.TruckResponse) => void): grpcWeb.ClientReadableStream<proto_truck_pb.TruckResponse>;

  deleteTruck(
    request: proto_truck_pb.TruckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_truck_pb.TruckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.TruckService/DeleteTruck',
        request,
        metadata || {},
        this.methodInfoDeleteTruck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.TruckService/DeleteTruck',
    request,
    metadata || {},
    this.methodInfoDeleteTruck);
  }

}

