// package: pb
// file: proto/bench.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_bench_pb from "../proto/bench_pb";
import * as proto_project_pb from "../proto/project_pb";

interface IBenchServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createBench: IBenchServiceService_ICreateBench;
    retrieveBench: IBenchServiceService_IRetrieveBench;
    retrieveBenches: IBenchServiceService_IRetrieveBenches;
    updateBench: IBenchServiceService_IUpdateBench;
    deleteBench: IBenchServiceService_IDeleteBench;
}

interface IBenchServiceService_ICreateBench extends grpc.MethodDefinition<proto_bench_pb.BenchRequest, proto_bench_pb.BenchResponse> {
    path: "/pb.BenchService/CreateBench";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_bench_pb.BenchRequest>;
    requestDeserialize: grpc.deserialize<proto_bench_pb.BenchRequest>;
    responseSerialize: grpc.serialize<proto_bench_pb.BenchResponse>;
    responseDeserialize: grpc.deserialize<proto_bench_pb.BenchResponse>;
}
interface IBenchServiceService_IRetrieveBench extends grpc.MethodDefinition<proto_bench_pb.BenchRequest, proto_bench_pb.BenchResponse> {
    path: "/pb.BenchService/RetrieveBench";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_bench_pb.BenchRequest>;
    requestDeserialize: grpc.deserialize<proto_bench_pb.BenchRequest>;
    responseSerialize: grpc.serialize<proto_bench_pb.BenchResponse>;
    responseDeserialize: grpc.deserialize<proto_bench_pb.BenchResponse>;
}
interface IBenchServiceService_IRetrieveBenches extends grpc.MethodDefinition<proto_bench_pb.BenchRequest, proto_bench_pb.BenchesResponse> {
    path: "/pb.BenchService/RetrieveBenches";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_bench_pb.BenchRequest>;
    requestDeserialize: grpc.deserialize<proto_bench_pb.BenchRequest>;
    responseSerialize: grpc.serialize<proto_bench_pb.BenchesResponse>;
    responseDeserialize: grpc.deserialize<proto_bench_pb.BenchesResponse>;
}
interface IBenchServiceService_IUpdateBench extends grpc.MethodDefinition<proto_bench_pb.BenchRequest, proto_bench_pb.BenchResponse> {
    path: "/pb.BenchService/UpdateBench";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_bench_pb.BenchRequest>;
    requestDeserialize: grpc.deserialize<proto_bench_pb.BenchRequest>;
    responseSerialize: grpc.serialize<proto_bench_pb.BenchResponse>;
    responseDeserialize: grpc.deserialize<proto_bench_pb.BenchResponse>;
}
interface IBenchServiceService_IDeleteBench extends grpc.MethodDefinition<proto_bench_pb.BenchRequest, proto_bench_pb.BenchResponse> {
    path: "/pb.BenchService/DeleteBench";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_bench_pb.BenchRequest>;
    requestDeserialize: grpc.deserialize<proto_bench_pb.BenchRequest>;
    responseSerialize: grpc.serialize<proto_bench_pb.BenchResponse>;
    responseDeserialize: grpc.deserialize<proto_bench_pb.BenchResponse>;
}

export const BenchServiceService: IBenchServiceService;

export interface IBenchServiceServer {
    createBench: grpc.handleUnaryCall<proto_bench_pb.BenchRequest, proto_bench_pb.BenchResponse>;
    retrieveBench: grpc.handleUnaryCall<proto_bench_pb.BenchRequest, proto_bench_pb.BenchResponse>;
    retrieveBenches: grpc.handleUnaryCall<proto_bench_pb.BenchRequest, proto_bench_pb.BenchesResponse>;
    updateBench: grpc.handleUnaryCall<proto_bench_pb.BenchRequest, proto_bench_pb.BenchResponse>;
    deleteBench: grpc.handleUnaryCall<proto_bench_pb.BenchRequest, proto_bench_pb.BenchResponse>;
}

export interface IBenchServiceClient {
    createBench(request: proto_bench_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    createBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    createBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    retrieveBench(request: proto_bench_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    retrieveBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    retrieveBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    retrieveBenches(request: proto_bench_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    retrieveBenches(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    retrieveBenches(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    updateBench(request: proto_bench_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    updateBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    updateBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    deleteBench(request: proto_bench_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    deleteBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    deleteBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
}

export class BenchServiceClient extends grpc.Client implements IBenchServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createBench(request: proto_bench_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public createBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public createBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public retrieveBench(request: proto_bench_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public retrieveBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public retrieveBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public retrieveBenches(request: proto_bench_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    public retrieveBenches(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    public retrieveBenches(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    public updateBench(request: proto_bench_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public updateBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public updateBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public deleteBench(request: proto_bench_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public deleteBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public deleteBench(request: proto_bench_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_bench_pb.BenchResponse) => void): grpc.ClientUnaryCall;
}
