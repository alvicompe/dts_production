/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_material_pb from '../proto/material_pb';


export class MaterialServiceClient {
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

  methodInfoCreateMaterial = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_material_pb.MaterialResponse,
    (request: proto_material_pb.MaterialRequest) => {
      return request.serializeBinary();
    },
    proto_material_pb.MaterialResponse.deserializeBinary
  );

  createMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_material_pb.MaterialResponse>;

  createMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_material_pb.MaterialResponse) => void): grpcWeb.ClientReadableStream<proto_material_pb.MaterialResponse>;

  createMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_material_pb.MaterialResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.MaterialService/CreateMaterial',
        request,
        metadata || {},
        this.methodInfoCreateMaterial,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.MaterialService/CreateMaterial',
    request,
    metadata || {},
    this.methodInfoCreateMaterial);
  }

  methodInfoRetrieveMaterial = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_material_pb.MaterialResponse,
    (request: proto_material_pb.MaterialRequest) => {
      return request.serializeBinary();
    },
    proto_material_pb.MaterialResponse.deserializeBinary
  );

  retrieveMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_material_pb.MaterialResponse>;

  retrieveMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_material_pb.MaterialResponse) => void): grpcWeb.ClientReadableStream<proto_material_pb.MaterialResponse>;

  retrieveMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_material_pb.MaterialResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.MaterialService/RetrieveMaterial',
        request,
        metadata || {},
        this.methodInfoRetrieveMaterial,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.MaterialService/RetrieveMaterial',
    request,
    metadata || {},
    this.methodInfoRetrieveMaterial);
  }

  methodInfoRetrieveMaterials = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_material_pb.MaterialsResponse,
    (request: proto_material_pb.MaterialRequest) => {
      return request.serializeBinary();
    },
    proto_material_pb.MaterialsResponse.deserializeBinary
  );

  retrieveMaterials(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_material_pb.MaterialsResponse>;

  retrieveMaterials(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_material_pb.MaterialsResponse) => void): grpcWeb.ClientReadableStream<proto_material_pb.MaterialsResponse>;

  retrieveMaterials(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_material_pb.MaterialsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.MaterialService/RetrieveMaterials',
        request,
        metadata || {},
        this.methodInfoRetrieveMaterials,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.MaterialService/RetrieveMaterials',
    request,
    metadata || {},
    this.methodInfoRetrieveMaterials);
  }

  methodInfoUpdateMaterial = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_material_pb.MaterialResponse,
    (request: proto_material_pb.MaterialRequest) => {
      return request.serializeBinary();
    },
    proto_material_pb.MaterialResponse.deserializeBinary
  );

  updateMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_material_pb.MaterialResponse>;

  updateMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_material_pb.MaterialResponse) => void): grpcWeb.ClientReadableStream<proto_material_pb.MaterialResponse>;

  updateMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_material_pb.MaterialResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.MaterialService/UpdateMaterial',
        request,
        metadata || {},
        this.methodInfoUpdateMaterial,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.MaterialService/UpdateMaterial',
    request,
    metadata || {},
    this.methodInfoUpdateMaterial);
  }

  methodInfoDeleteMaterial = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_material_pb.MaterialResponse,
    (request: proto_material_pb.MaterialRequest) => {
      return request.serializeBinary();
    },
    proto_material_pb.MaterialResponse.deserializeBinary
  );

  deleteMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_material_pb.MaterialResponse>;

  deleteMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_material_pb.MaterialResponse) => void): grpcWeb.ClientReadableStream<proto_material_pb.MaterialResponse>;

  deleteMaterial(
    request: proto_material_pb.MaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_material_pb.MaterialResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.MaterialService/DeleteMaterial',
        request,
        metadata || {},
        this.methodInfoDeleteMaterial,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.MaterialService/DeleteMaterial',
    request,
    metadata || {},
    this.methodInfoDeleteMaterial);
  }

}

