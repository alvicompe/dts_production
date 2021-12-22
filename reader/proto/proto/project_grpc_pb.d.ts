// package: pb
// file: proto/project.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_project_pb from "../proto/project_pb";
import * as proto_polygon_pb from "../proto/polygon_pb";

interface IProjectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createProject: IProjectServiceService_ICreateProject;
    retrieveProject: IProjectServiceService_IRetrieveProject;
    retrieveProjects: IProjectServiceService_IRetrieveProjects;
    updateProject: IProjectServiceService_IUpdateProject;
    deleteProject: IProjectServiceService_IDeleteProject;
}

interface IProjectServiceService_ICreateProject extends grpc.MethodDefinition<proto_project_pb.ProjectRequest, proto_project_pb.ProjectResponse> {
    path: string; // "/pb.ProjectService/CreateProject"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_project_pb.ProjectRequest>;
    requestDeserialize: grpc.deserialize<proto_project_pb.ProjectRequest>;
    responseSerialize: grpc.serialize<proto_project_pb.ProjectResponse>;
    responseDeserialize: grpc.deserialize<proto_project_pb.ProjectResponse>;
}
interface IProjectServiceService_IRetrieveProject extends grpc.MethodDefinition<proto_project_pb.ProjectRequest, proto_project_pb.ProjectResponse> {
    path: string; // "/pb.ProjectService/RetrieveProject"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_project_pb.ProjectRequest>;
    requestDeserialize: grpc.deserialize<proto_project_pb.ProjectRequest>;
    responseSerialize: grpc.serialize<proto_project_pb.ProjectResponse>;
    responseDeserialize: grpc.deserialize<proto_project_pb.ProjectResponse>;
}
interface IProjectServiceService_IRetrieveProjects extends grpc.MethodDefinition<proto_project_pb.ProjectRequest, proto_project_pb.ProjectsResponse> {
    path: string; // "/pb.ProjectService/RetrieveProjects"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_project_pb.ProjectRequest>;
    requestDeserialize: grpc.deserialize<proto_project_pb.ProjectRequest>;
    responseSerialize: grpc.serialize<proto_project_pb.ProjectsResponse>;
    responseDeserialize: grpc.deserialize<proto_project_pb.ProjectsResponse>;
}
interface IProjectServiceService_IUpdateProject extends grpc.MethodDefinition<proto_project_pb.ProjectRequest, proto_project_pb.ProjectResponse> {
    path: string; // "/pb.ProjectService/UpdateProject"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_project_pb.ProjectRequest>;
    requestDeserialize: grpc.deserialize<proto_project_pb.ProjectRequest>;
    responseSerialize: grpc.serialize<proto_project_pb.ProjectResponse>;
    responseDeserialize: grpc.deserialize<proto_project_pb.ProjectResponse>;
}
interface IProjectServiceService_IDeleteProject extends grpc.MethodDefinition<proto_project_pb.ProjectRequest, proto_project_pb.ProjectResponse> {
    path: string; // "/pb.ProjectService/DeleteProject"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_project_pb.ProjectRequest>;
    requestDeserialize: grpc.deserialize<proto_project_pb.ProjectRequest>;
    responseSerialize: grpc.serialize<proto_project_pb.ProjectResponse>;
    responseDeserialize: grpc.deserialize<proto_project_pb.ProjectResponse>;
}

export const ProjectServiceService: IProjectServiceService;

export interface IProjectServiceServer {
    createProject: grpc.handleUnaryCall<proto_project_pb.ProjectRequest, proto_project_pb.ProjectResponse>;
    retrieveProject: grpc.handleUnaryCall<proto_project_pb.ProjectRequest, proto_project_pb.ProjectResponse>;
    retrieveProjects: grpc.handleUnaryCall<proto_project_pb.ProjectRequest, proto_project_pb.ProjectsResponse>;
    updateProject: grpc.handleUnaryCall<proto_project_pb.ProjectRequest, proto_project_pb.ProjectResponse>;
    deleteProject: grpc.handleUnaryCall<proto_project_pb.ProjectRequest, proto_project_pb.ProjectResponse>;
}

export interface IProjectServiceClient {
    createProject(request: proto_project_pb.ProjectRequest, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    createProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    createProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    retrieveProject(request: proto_project_pb.ProjectRequest, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    retrieveProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    retrieveProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    retrieveProjects(request: proto_project_pb.ProjectRequest, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
    retrieveProjects(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
    retrieveProjects(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
    updateProject(request: proto_project_pb.ProjectRequest, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    updateProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    updateProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    deleteProject(request: proto_project_pb.ProjectRequest, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    deleteProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    deleteProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
}

export class ProjectServiceClient extends grpc.Client implements IProjectServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createProject(request: proto_project_pb.ProjectRequest, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public createProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public createProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public retrieveProject(request: proto_project_pb.ProjectRequest, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public retrieveProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public retrieveProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public retrieveProjects(request: proto_project_pb.ProjectRequest, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
    public retrieveProjects(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
    public retrieveProjects(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectsResponse) => void): grpc.ClientUnaryCall;
    public updateProject(request: proto_project_pb.ProjectRequest, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public updateProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public updateProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public deleteProject(request: proto_project_pb.ProjectRequest, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public deleteProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
    public deleteProject(request: proto_project_pb.ProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_project_pb.ProjectResponse) => void): grpc.ClientUnaryCall;
}