// package: pb
// file: proto/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_user_pb from "../proto/user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUserServiceService_ICreateUser;
    retrieveUser: IUserServiceService_IRetrieveUser;
    retrieveUsers: IUserServiceService_IRetrieveUsers;
    updateUser: IUserServiceService_IUpdateUser;
    deleteUser: IUserServiceService_IDeleteUser;
}

interface IUserServiceService_ICreateUser extends grpc.MethodDefinition<proto_user_pb.UserRequest, proto_user_pb.UserResponse> {
    path: "/pb.UserService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<proto_user_pb.UserRequest>;
    responseSerialize: grpc.serialize<proto_user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_user_pb.UserResponse>;
}
interface IUserServiceService_IRetrieveUser extends grpc.MethodDefinition<proto_user_pb.UserRequest, proto_user_pb.UserResponse> {
    path: "/pb.UserService/RetrieveUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<proto_user_pb.UserRequest>;
    responseSerialize: grpc.serialize<proto_user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_user_pb.UserResponse>;
}
interface IUserServiceService_IRetrieveUsers extends grpc.MethodDefinition<proto_user_pb.UserRequest, proto_user_pb.UsersResponse> {
    path: "/pb.UserService/RetrieveUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<proto_user_pb.UserRequest>;
    responseSerialize: grpc.serialize<proto_user_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<proto_user_pb.UsersResponse>;
}
interface IUserServiceService_IUpdateUser extends grpc.MethodDefinition<proto_user_pb.UserRequest, proto_user_pb.UserResponse> {
    path: "/pb.UserService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<proto_user_pb.UserRequest>;
    responseSerialize: grpc.serialize<proto_user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_user_pb.UserResponse>;
}
interface IUserServiceService_IDeleteUser extends grpc.MethodDefinition<proto_user_pb.UserRequest, proto_user_pb.UserResponse> {
    path: "/pb.UserService/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<proto_user_pb.UserRequest>;
    responseSerialize: grpc.serialize<proto_user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_user_pb.UserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    createUser: grpc.handleUnaryCall<proto_user_pb.UserRequest, proto_user_pb.UserResponse>;
    retrieveUser: grpc.handleUnaryCall<proto_user_pb.UserRequest, proto_user_pb.UserResponse>;
    retrieveUsers: grpc.handleUnaryCall<proto_user_pb.UserRequest, proto_user_pb.UsersResponse>;
    updateUser: grpc.handleUnaryCall<proto_user_pb.UserRequest, proto_user_pb.UserResponse>;
    deleteUser: grpc.handleUnaryCall<proto_user_pb.UserRequest, proto_user_pb.UserResponse>;
}

export interface IUserServiceClient {
    createUser(request: proto_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    retrieveUser(request: proto_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    retrieveUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    retrieveUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    retrieveUsers(request: proto_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    retrieveUsers(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    retrieveUsers(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: proto_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: proto_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: proto_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public retrieveUser(request: proto_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public retrieveUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public retrieveUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public retrieveUsers(request: proto_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public retrieveUsers(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public retrieveUsers(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: proto_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: proto_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: proto_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
