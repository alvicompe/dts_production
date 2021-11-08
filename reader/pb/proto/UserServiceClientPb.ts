/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_user_pb from '../proto/user_pb';


export class UserServiceClient {
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

  methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_user_pb.UserResponse,
    (request: proto_user_pb.UserRequest) => {
      return request.serializeBinary();
    },
    proto_user_pb.UserResponse.deserializeBinary
  );

  createUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_user_pb.UserResponse>;

  createUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_user_pb.UserResponse) => void): grpcWeb.ClientReadableStream<proto_user_pb.UserResponse>;

  createUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_user_pb.UserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/CreateUser',
        request,
        metadata || {},
        this.methodInfoCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/CreateUser',
    request,
    metadata || {},
    this.methodInfoCreateUser);
  }

  methodInfoRetrieveUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_user_pb.UserResponse,
    (request: proto_user_pb.UserRequest) => {
      return request.serializeBinary();
    },
    proto_user_pb.UserResponse.deserializeBinary
  );

  retrieveUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_user_pb.UserResponse>;

  retrieveUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_user_pb.UserResponse) => void): grpcWeb.ClientReadableStream<proto_user_pb.UserResponse>;

  retrieveUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_user_pb.UserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/RetrieveUser',
        request,
        metadata || {},
        this.methodInfoRetrieveUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/RetrieveUser',
    request,
    metadata || {},
    this.methodInfoRetrieveUser);
  }

  methodInfoRetrieveUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_user_pb.UsersResponse,
    (request: proto_user_pb.UserRequest) => {
      return request.serializeBinary();
    },
    proto_user_pb.UsersResponse.deserializeBinary
  );

  retrieveUsers(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_user_pb.UsersResponse>;

  retrieveUsers(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_user_pb.UsersResponse) => void): grpcWeb.ClientReadableStream<proto_user_pb.UsersResponse>;

  retrieveUsers(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_user_pb.UsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/RetrieveUsers',
        request,
        metadata || {},
        this.methodInfoRetrieveUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/RetrieveUsers',
    request,
    metadata || {},
    this.methodInfoRetrieveUsers);
  }

  methodInfoUpdateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_user_pb.UserResponse,
    (request: proto_user_pb.UserRequest) => {
      return request.serializeBinary();
    },
    proto_user_pb.UserResponse.deserializeBinary
  );

  updateUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_user_pb.UserResponse>;

  updateUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_user_pb.UserResponse) => void): grpcWeb.ClientReadableStream<proto_user_pb.UserResponse>;

  updateUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_user_pb.UserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/UpdateUser',
        request,
        metadata || {},
        this.methodInfoUpdateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/UpdateUser',
    request,
    metadata || {},
    this.methodInfoUpdateUser);
  }

  methodInfoDeleteUser = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_user_pb.UserResponse,
    (request: proto_user_pb.UserRequest) => {
      return request.serializeBinary();
    },
    proto_user_pb.UserResponse.deserializeBinary
  );

  deleteUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_user_pb.UserResponse>;

  deleteUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_user_pb.UserResponse) => void): grpcWeb.ClientReadableStream<proto_user_pb.UserResponse>;

  deleteUser(
    request: proto_user_pb.UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_user_pb.UserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.UserService/DeleteUser',
        request,
        metadata || {},
        this.methodInfoDeleteUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.UserService/DeleteUser',
    request,
    metadata || {},
    this.methodInfoDeleteUser);
  }

}

