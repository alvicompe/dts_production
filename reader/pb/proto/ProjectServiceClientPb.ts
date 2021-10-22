/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_project_pb from '../proto/project_pb';


export class ProjectServiceClient {
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

  methodInfoCreateProject = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_project_pb.ProjectResponse,
    (request: proto_project_pb.ProjectRequest) => {
      return request.serializeBinary();
    },
    proto_project_pb.ProjectResponse.deserializeBinary
  );

  createProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_project_pb.ProjectResponse>;

  createProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_project_pb.ProjectResponse) => void): grpcWeb.ClientReadableStream<proto_project_pb.ProjectResponse>;

  createProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_project_pb.ProjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProjectService/CreateProject',
        request,
        metadata || {},
        this.methodInfoCreateProject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProjectService/CreateProject',
    request,
    metadata || {},
    this.methodInfoCreateProject);
  }

  methodInfoRetrieveProject = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_project_pb.ProjectResponse,
    (request: proto_project_pb.ProjectRequest) => {
      return request.serializeBinary();
    },
    proto_project_pb.ProjectResponse.deserializeBinary
  );

  retrieveProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_project_pb.ProjectResponse>;

  retrieveProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_project_pb.ProjectResponse) => void): grpcWeb.ClientReadableStream<proto_project_pb.ProjectResponse>;

  retrieveProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_project_pb.ProjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProjectService/RetrieveProject',
        request,
        metadata || {},
        this.methodInfoRetrieveProject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProjectService/RetrieveProject',
    request,
    metadata || {},
    this.methodInfoRetrieveProject);
  }

  methodInfoRetrieveProjects = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_project_pb.ProjectsResponse,
    (request: proto_project_pb.ProjectRequest) => {
      return request.serializeBinary();
    },
    proto_project_pb.ProjectsResponse.deserializeBinary
  );

  retrieveProjects(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_project_pb.ProjectsResponse>;

  retrieveProjects(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_project_pb.ProjectsResponse) => void): grpcWeb.ClientReadableStream<proto_project_pb.ProjectsResponse>;

  retrieveProjects(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_project_pb.ProjectsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProjectService/RetrieveProjects',
        request,
        metadata || {},
        this.methodInfoRetrieveProjects,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProjectService/RetrieveProjects',
    request,
    metadata || {},
    this.methodInfoRetrieveProjects);
  }

  methodInfoUpdateProject = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_project_pb.ProjectResponse,
    (request: proto_project_pb.ProjectRequest) => {
      return request.serializeBinary();
    },
    proto_project_pb.ProjectResponse.deserializeBinary
  );

  updateProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_project_pb.ProjectResponse>;

  updateProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_project_pb.ProjectResponse) => void): grpcWeb.ClientReadableStream<proto_project_pb.ProjectResponse>;

  updateProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_project_pb.ProjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProjectService/UpdateProject',
        request,
        metadata || {},
        this.methodInfoUpdateProject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProjectService/UpdateProject',
    request,
    metadata || {},
    this.methodInfoUpdateProject);
  }

  methodInfoDeleteProject = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_project_pb.ProjectResponse,
    (request: proto_project_pb.ProjectRequest) => {
      return request.serializeBinary();
    },
    proto_project_pb.ProjectResponse.deserializeBinary
  );

  deleteProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_project_pb.ProjectResponse>;

  deleteProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_project_pb.ProjectResponse) => void): grpcWeb.ClientReadableStream<proto_project_pb.ProjectResponse>;

  deleteProject(
    request: proto_project_pb.ProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_project_pb.ProjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProjectService/DeleteProject',
        request,
        metadata || {},
        this.methodInfoDeleteProject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProjectService/DeleteProject',
    request,
    metadata || {},
    this.methodInfoDeleteProject);
  }

}

