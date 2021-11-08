/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_contractor_pb from '../proto/contractor_pb';


export class ContractorServiceClient {
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

  methodInfoCreateContractor = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_contractor_pb.ContractorResponse,
    (request: proto_contractor_pb.ContractorRequest) => {
      return request.serializeBinary();
    },
    proto_contractor_pb.ContractorResponse.deserializeBinary
  );

  createContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_contractor_pb.ContractorResponse>;

  createContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_contractor_pb.ContractorResponse) => void): grpcWeb.ClientReadableStream<proto_contractor_pb.ContractorResponse>;

  createContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_contractor_pb.ContractorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ContractorService/CreateContractor',
        request,
        metadata || {},
        this.methodInfoCreateContractor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ContractorService/CreateContractor',
    request,
    metadata || {},
    this.methodInfoCreateContractor);
  }

  methodInfoRetrieveContractor = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_contractor_pb.ContractorResponse,
    (request: proto_contractor_pb.ContractorRequest) => {
      return request.serializeBinary();
    },
    proto_contractor_pb.ContractorResponse.deserializeBinary
  );

  retrieveContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_contractor_pb.ContractorResponse>;

  retrieveContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_contractor_pb.ContractorResponse) => void): grpcWeb.ClientReadableStream<proto_contractor_pb.ContractorResponse>;

  retrieveContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_contractor_pb.ContractorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ContractorService/RetrieveContractor',
        request,
        metadata || {},
        this.methodInfoRetrieveContractor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ContractorService/RetrieveContractor',
    request,
    metadata || {},
    this.methodInfoRetrieveContractor);
  }

  methodInfoRetrieveContractors = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_contractor_pb.ContractorsResponse,
    (request: proto_contractor_pb.ContractorRequest) => {
      return request.serializeBinary();
    },
    proto_contractor_pb.ContractorsResponse.deserializeBinary
  );

  retrieveContractors(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_contractor_pb.ContractorsResponse>;

  retrieveContractors(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_contractor_pb.ContractorsResponse) => void): grpcWeb.ClientReadableStream<proto_contractor_pb.ContractorsResponse>;

  retrieveContractors(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_contractor_pb.ContractorsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ContractorService/RetrieveContractors',
        request,
        metadata || {},
        this.methodInfoRetrieveContractors,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ContractorService/RetrieveContractors',
    request,
    metadata || {},
    this.methodInfoRetrieveContractors);
  }

  methodInfoUpdateContractor = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_contractor_pb.ContractorResponse,
    (request: proto_contractor_pb.ContractorRequest) => {
      return request.serializeBinary();
    },
    proto_contractor_pb.ContractorResponse.deserializeBinary
  );

  updateContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_contractor_pb.ContractorResponse>;

  updateContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_contractor_pb.ContractorResponse) => void): grpcWeb.ClientReadableStream<proto_contractor_pb.ContractorResponse>;

  updateContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_contractor_pb.ContractorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ContractorService/UpdateContractor',
        request,
        metadata || {},
        this.methodInfoUpdateContractor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ContractorService/UpdateContractor',
    request,
    metadata || {},
    this.methodInfoUpdateContractor);
  }

  methodInfoDeleteContractor = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_contractor_pb.ContractorResponse,
    (request: proto_contractor_pb.ContractorRequest) => {
      return request.serializeBinary();
    },
    proto_contractor_pb.ContractorResponse.deserializeBinary
  );

  deleteContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_contractor_pb.ContractorResponse>;

  deleteContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_contractor_pb.ContractorResponse) => void): grpcWeb.ClientReadableStream<proto_contractor_pb.ContractorResponse>;

  deleteContractor(
    request: proto_contractor_pb.ContractorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_contractor_pb.ContractorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ContractorService/DeleteContractor',
        request,
        metadata || {},
        this.methodInfoDeleteContractor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ContractorService/DeleteContractor',
    request,
    metadata || {},
    this.methodInfoDeleteContractor);
  }

}

