// package: pb
// file: proto/services/user.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_user_services_pb from "../../proto/services/user.services_pb";
import * as proto_entities_user_pb from "../../proto/entities/user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUserServiceService_ICreateUser;
    retrieveUser: IUserServiceService_IRetrieveUser;
    retrieveUsers: IUserServiceService_IRetrieveUsers;
    updateUser: IUserServiceService_IUpdateUser;
    deleteUser: IUserServiceService_IDeleteUser;
    updatePassword: IUserServiceService_IUpdatePassword;
}

interface IUserServiceService_ICreateUser extends grpc.MethodDefinition<proto_services_user_services_pb.UserRequest, proto_services_user_services_pb.UserResponse> {
    path: string; // "/pb.UserService/CreateUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_user_services_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<proto_services_user_services_pb.UserRequest>;
    responseSerialize: grpc.serialize<proto_services_user_services_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_services_user_services_pb.UserResponse>;
}
interface IUserServiceService_IRetrieveUser extends grpc.MethodDefinition<proto_services_user_services_pb.UserRequest, proto_services_user_services_pb.UserResponse> {
    path: string; // "/pb.UserService/RetrieveUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_user_services_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<proto_services_user_services_pb.UserRequest>;
    responseSerialize: grpc.serialize<proto_services_user_services_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_services_user_services_pb.UserResponse>;
}
interface IUserServiceService_IRetrieveUsers extends grpc.MethodDefinition<proto_services_user_services_pb.UserRequest, proto_services_user_services_pb.UsersResponse> {
    path: string; // "/pb.UserService/RetrieveUsers"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_user_services_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<proto_services_user_services_pb.UserRequest>;
    responseSerialize: grpc.serialize<proto_services_user_services_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<proto_services_user_services_pb.UsersResponse>;
}
interface IUserServiceService_IUpdateUser extends grpc.MethodDefinition<proto_services_user_services_pb.UserRequest, proto_services_user_services_pb.UserResponse> {
    path: string; // "/pb.UserService/UpdateUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_user_services_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<proto_services_user_services_pb.UserRequest>;
    responseSerialize: grpc.serialize<proto_services_user_services_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_services_user_services_pb.UserResponse>;
}
interface IUserServiceService_IDeleteUser extends grpc.MethodDefinition<proto_services_user_services_pb.UserRequest, proto_services_user_services_pb.UserResponse> {
    path: string; // "/pb.UserService/DeleteUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_user_services_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<proto_services_user_services_pb.UserRequest>;
    responseSerialize: grpc.serialize<proto_services_user_services_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_services_user_services_pb.UserResponse>;
}
interface IUserServiceService_IUpdatePassword extends grpc.MethodDefinition<proto_services_user_services_pb.PasswordRequest, proto_services_user_services_pb.UserResponse> {
    path: string; // "/pb.UserService/UpdatePassword"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_user_services_pb.PasswordRequest>;
    requestDeserialize: grpc.deserialize<proto_services_user_services_pb.PasswordRequest>;
    responseSerialize: grpc.serialize<proto_services_user_services_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_services_user_services_pb.UserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    createUser: grpc.handleUnaryCall<proto_services_user_services_pb.UserRequest, proto_services_user_services_pb.UserResponse>;
    retrieveUser: grpc.handleUnaryCall<proto_services_user_services_pb.UserRequest, proto_services_user_services_pb.UserResponse>;
    retrieveUsers: grpc.handleUnaryCall<proto_services_user_services_pb.UserRequest, proto_services_user_services_pb.UsersResponse>;
    updateUser: grpc.handleUnaryCall<proto_services_user_services_pb.UserRequest, proto_services_user_services_pb.UserResponse>;
    deleteUser: grpc.handleUnaryCall<proto_services_user_services_pb.UserRequest, proto_services_user_services_pb.UserResponse>;
    updatePassword: grpc.handleUnaryCall<proto_services_user_services_pb.PasswordRequest, proto_services_user_services_pb.UserResponse>;
}

export interface IUserServiceClient {
    createUser(request: proto_services_user_services_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    retrieveUser(request: proto_services_user_services_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    retrieveUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    retrieveUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    retrieveUsers(request: proto_services_user_services_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    retrieveUsers(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    retrieveUsers(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: proto_services_user_services_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: proto_services_user_services_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updatePassword(request: proto_services_user_services_pb.PasswordRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updatePassword(request: proto_services_user_services_pb.PasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updatePassword(request: proto_services_user_services_pb.PasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: proto_services_user_services_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public retrieveUser(request: proto_services_user_services_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public retrieveUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public retrieveUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public retrieveUsers(request: proto_services_user_services_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public retrieveUsers(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public retrieveUsers(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: proto_services_user_services_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: proto_services_user_services_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: proto_services_user_services_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updatePassword(request: proto_services_user_services_pb.PasswordRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updatePassword(request: proto_services_user_services_pb.PasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updatePassword(request: proto_services_user_services_pb.PasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_services_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
