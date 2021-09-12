// package: pb
// file: proto/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_auth_pb from "../proto/auth_pb";
import * as proto_user_pb from "../proto/user_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAuthServiceService_ILogin;
}

interface IAuthServiceService_ILogin extends grpc.MethodDefinition<proto_auth_pb.LoginRequest, proto_auth_pb.LoginResponse> {
    path: "/pb.AuthService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_auth_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<proto_auth_pb.LoginRequest>;
    responseSerialize: grpc.serialize<proto_auth_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<proto_auth_pb.LoginResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer {
    login: grpc.handleUnaryCall<proto_auth_pb.LoginRequest, proto_auth_pb.LoginResponse>;
}

export interface IAuthServiceClient {
    login(request: proto_auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: proto_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: proto_auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: proto_auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: proto_auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: proto_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: proto_auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: proto_auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}
