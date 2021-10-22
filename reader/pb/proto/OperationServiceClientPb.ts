/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_operation_pb from '../proto/operation_pb';


export class OperationServiceClient {
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

  methodInfoCreateOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_operation_pb.OperationResponse,
    (request: proto_operation_pb.OperationRequest) => {
      return request.serializeBinary();
    },
    proto_operation_pb.OperationResponse.deserializeBinary
  );

  createOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_operation_pb.OperationResponse>;

  createOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationResponse) => void): grpcWeb.ClientReadableStream<proto_operation_pb.OperationResponse>;

  createOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.OperationService/CreateOperation',
        request,
        metadata || {},
        this.methodInfoCreateOperation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.OperationService/CreateOperation',
    request,
    metadata || {},
    this.methodInfoCreateOperation);
  }

  methodInfoRetrieveOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_operation_pb.OperationResponse,
    (request: proto_operation_pb.OperationRequest) => {
      return request.serializeBinary();
    },
    proto_operation_pb.OperationResponse.deserializeBinary
  );

  retrieveOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_operation_pb.OperationResponse>;

  retrieveOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationResponse) => void): grpcWeb.ClientReadableStream<proto_operation_pb.OperationResponse>;

  retrieveOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.OperationService/RetrieveOperation',
        request,
        metadata || {},
        this.methodInfoRetrieveOperation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.OperationService/RetrieveOperation',
    request,
    metadata || {},
    this.methodInfoRetrieveOperation);
  }

  methodInfoRetrieveOperations = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_operation_pb.OperationsResponse,
    (request: proto_operation_pb.OperationRequest) => {
      return request.serializeBinary();
    },
    proto_operation_pb.OperationsResponse.deserializeBinary
  );

  retrieveOperations(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_operation_pb.OperationsResponse>;

  retrieveOperations(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationsResponse) => void): grpcWeb.ClientReadableStream<proto_operation_pb.OperationsResponse>;

  retrieveOperations(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.OperationService/RetrieveOperations',
        request,
        metadata || {},
        this.methodInfoRetrieveOperations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.OperationService/RetrieveOperations',
    request,
    metadata || {},
    this.methodInfoRetrieveOperations);
  }

  methodInfoUpdateOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_operation_pb.OperationResponse,
    (request: proto_operation_pb.OperationRequest) => {
      return request.serializeBinary();
    },
    proto_operation_pb.OperationResponse.deserializeBinary
  );

  updateOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_operation_pb.OperationResponse>;

  updateOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationResponse) => void): grpcWeb.ClientReadableStream<proto_operation_pb.OperationResponse>;

  updateOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.OperationService/UpdateOperation',
        request,
        metadata || {},
        this.methodInfoUpdateOperation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.OperationService/UpdateOperation',
    request,
    metadata || {},
    this.methodInfoUpdateOperation);
  }

  methodInfoDeleteOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_operation_pb.OperationResponse,
    (request: proto_operation_pb.OperationRequest) => {
      return request.serializeBinary();
    },
    proto_operation_pb.OperationResponse.deserializeBinary
  );

  deleteOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_operation_pb.OperationResponse>;

  deleteOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationResponse) => void): grpcWeb.ClientReadableStream<proto_operation_pb.OperationResponse>;

  deleteOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.OperationService/DeleteOperation',
        request,
        metadata || {},
        this.methodInfoDeleteOperation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.OperationService/DeleteOperation',
    request,
    metadata || {},
    this.methodInfoDeleteOperation);
  }

  methodInfoRemoveTrucksOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_operation_pb.OperationResponse,
    (request: proto_operation_pb.OperationRequest) => {
      return request.serializeBinary();
    },
    proto_operation_pb.OperationResponse.deserializeBinary
  );

  removeTrucksOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_operation_pb.OperationResponse>;

  removeTrucksOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationResponse) => void): grpcWeb.ClientReadableStream<proto_operation_pb.OperationResponse>;

  removeTrucksOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.OperationService/RemoveTrucksOperation',
        request,
        metadata || {},
        this.methodInfoRemoveTrucksOperation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.OperationService/RemoveTrucksOperation',
    request,
    metadata || {},
    this.methodInfoRemoveTrucksOperation);
  }

  methodInfoReassigmentTrucksOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_operation_pb.OperationReassigmentResponse,
    (request: proto_operation_pb.OperationReassigmentRequest) => {
      return request.serializeBinary();
    },
    proto_operation_pb.OperationReassigmentResponse.deserializeBinary
  );

  reassigmentTrucksOperation(
    request: proto_operation_pb.OperationReassigmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_operation_pb.OperationReassigmentResponse>;

  reassigmentTrucksOperation(
    request: proto_operation_pb.OperationReassigmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationReassigmentResponse) => void): grpcWeb.ClientReadableStream<proto_operation_pb.OperationReassigmentResponse>;

  reassigmentTrucksOperation(
    request: proto_operation_pb.OperationReassigmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationReassigmentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.OperationService/ReassigmentTrucksOperation',
        request,
        metadata || {},
        this.methodInfoReassigmentTrucksOperation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.OperationService/ReassigmentTrucksOperation',
    request,
    metadata || {},
    this.methodInfoReassigmentTrucksOperation);
  }

  methodInfoFinalizeOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_operation_pb.OperationFinalizeResponse,
    (request: proto_operation_pb.OperationRequest) => {
      return request.serializeBinary();
    },
    proto_operation_pb.OperationFinalizeResponse.deserializeBinary
  );

  finalizeOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_operation_pb.OperationFinalizeResponse>;

  finalizeOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationFinalizeResponse) => void): grpcWeb.ClientReadableStream<proto_operation_pb.OperationFinalizeResponse>;

  finalizeOperation(
    request: proto_operation_pb.OperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_operation_pb.OperationFinalizeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.OperationService/FinalizeOperation',
        request,
        metadata || {},
        this.methodInfoFinalizeOperation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.OperationService/FinalizeOperation',
    request,
    metadata || {},
    this.methodInfoFinalizeOperation);
  }

}

