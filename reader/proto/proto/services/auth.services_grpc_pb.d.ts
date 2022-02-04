// package: pb
// file: proto/services/auth.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_auth_services_pb from "../../proto/services/auth.services_pb";
import * as proto_entities_user_pb from "../../proto/entities/user_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAuthServiceService_ILogin;
}

interface IAuthServiceService_ILogin extends grpc.MethodDefinition<proto_services_auth_services_pb.LoginRequest, proto_services_auth_services_pb.LoginResponse> {
    path: string; // "/pb.AuthService/Login"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_auth_services_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<proto_services_auth_services_pb.LoginRequest>;
    responseSerialize: grpc.serialize<proto_services_auth_services_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<proto_services_auth_services_pb.LoginResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer {
    login: grpc.handleUnaryCall<proto_services_auth_services_pb.LoginRequest, proto_services_auth_services_pb.LoginResponse>;
}

export interface IAuthServiceClient {
    login(request: proto_services_auth_services_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: proto_services_auth_services_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: proto_services_auth_services_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_auth_services_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: proto_services_auth_services_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_auth_services_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: proto_services_auth_services_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: proto_services_auth_services_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: proto_services_auth_services_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_auth_services_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: proto_services_auth_services_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_auth_services_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}
