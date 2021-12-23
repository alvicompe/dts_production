// package: pb
// file: proto/tree.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_tree_pb from "../proto/tree_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ITreeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveTree: ITreeServiceService_IRetrieveTree;
    retrieveTreeByID: ITreeServiceService_IRetrieveTreeByID;
    createTree: ITreeServiceService_ICreateTree;
}

interface ITreeServiceService_IRetrieveTree extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_tree_pb.TreeResponse> {
    path: string; // "/pb.TreeService/RetrieveTree"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_tree_pb.TreeResponse>;
    responseDeserialize: grpc.deserialize<proto_tree_pb.TreeResponse>;
}
interface ITreeServiceService_IRetrieveTreeByID extends grpc.MethodDefinition<proto_tree_pb.RetrieveTreeByIdRequest, proto_tree_pb.TreeResponse> {
    path: string; // "/pb.TreeService/RetrieveTreeByID"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_tree_pb.RetrieveTreeByIdRequest>;
    requestDeserialize: grpc.deserialize<proto_tree_pb.RetrieveTreeByIdRequest>;
    responseSerialize: grpc.serialize<proto_tree_pb.TreeResponse>;
    responseDeserialize: grpc.deserialize<proto_tree_pb.TreeResponse>;
}
interface ITreeServiceService_ICreateTree extends grpc.MethodDefinition<proto_tree_pb.CreateTreeRequest, proto_tree_pb.TreeResponse> {
    path: string; // "/pb.TreeService/CreateTree"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_tree_pb.CreateTreeRequest>;
    requestDeserialize: grpc.deserialize<proto_tree_pb.CreateTreeRequest>;
    responseSerialize: grpc.serialize<proto_tree_pb.TreeResponse>;
    responseDeserialize: grpc.deserialize<proto_tree_pb.TreeResponse>;
}

export const TreeServiceService: ITreeServiceService;

export interface ITreeServiceServer {
    retrieveTree: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_tree_pb.TreeResponse>;
    retrieveTreeByID: grpc.handleUnaryCall<proto_tree_pb.RetrieveTreeByIdRequest, proto_tree_pb.TreeResponse>;
    createTree: grpc.handleUnaryCall<proto_tree_pb.CreateTreeRequest, proto_tree_pb.TreeResponse>;
}

export interface ITreeServiceClient {
    retrieveTree(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTree(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTree(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTreeByID(request: proto_tree_pb.RetrieveTreeByIdRequest, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTreeByID(request: proto_tree_pb.RetrieveTreeByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTreeByID(request: proto_tree_pb.RetrieveTreeByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    createTree(request: proto_tree_pb.CreateTreeRequest, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    createTree(request: proto_tree_pb.CreateTreeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    createTree(request: proto_tree_pb.CreateTreeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
}

export class TreeServiceClient extends grpc.Client implements ITreeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveTree(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTree(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTree(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTreeByID(request: proto_tree_pb.RetrieveTreeByIdRequest, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTreeByID(request: proto_tree_pb.RetrieveTreeByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTreeByID(request: proto_tree_pb.RetrieveTreeByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    public createTree(request: proto_tree_pb.CreateTreeRequest, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    public createTree(request: proto_tree_pb.CreateTreeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
    public createTree(request: proto_tree_pb.CreateTreeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_tree_pb.TreeResponse) => void): grpc.ClientUnaryCall;
}
