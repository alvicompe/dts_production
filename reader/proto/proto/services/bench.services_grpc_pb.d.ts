// package: pb
// file: proto/services/bench.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_bench_services_pb from "../../proto/services/bench.services_pb";
import * as proto_entities_bench_pb from "../../proto/entities/bench_pb";

interface IBenchServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createBench: IBenchServiceService_ICreateBench;
    retrieveBench: IBenchServiceService_IRetrieveBench;
    retrieveBenches: IBenchServiceService_IRetrieveBenches;
    updateBench: IBenchServiceService_IUpdateBench;
    deleteBench: IBenchServiceService_IDeleteBench;
}

interface IBenchServiceService_ICreateBench extends grpc.MethodDefinition<proto_services_bench_services_pb.BenchRequest, proto_services_bench_services_pb.BenchResponse> {
    path: string; // "/pb.BenchService/CreateBench"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_bench_services_pb.BenchRequest>;
    requestDeserialize: grpc.deserialize<proto_services_bench_services_pb.BenchRequest>;
    responseSerialize: grpc.serialize<proto_services_bench_services_pb.BenchResponse>;
    responseDeserialize: grpc.deserialize<proto_services_bench_services_pb.BenchResponse>;
}
interface IBenchServiceService_IRetrieveBench extends grpc.MethodDefinition<proto_services_bench_services_pb.BenchRequest, proto_services_bench_services_pb.BenchResponse> {
    path: string; // "/pb.BenchService/RetrieveBench"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_bench_services_pb.BenchRequest>;
    requestDeserialize: grpc.deserialize<proto_services_bench_services_pb.BenchRequest>;
    responseSerialize: grpc.serialize<proto_services_bench_services_pb.BenchResponse>;
    responseDeserialize: grpc.deserialize<proto_services_bench_services_pb.BenchResponse>;
}
interface IBenchServiceService_IRetrieveBenches extends grpc.MethodDefinition<proto_services_bench_services_pb.BenchRequest, proto_services_bench_services_pb.BenchesResponse> {
    path: string; // "/pb.BenchService/RetrieveBenches"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_bench_services_pb.BenchRequest>;
    requestDeserialize: grpc.deserialize<proto_services_bench_services_pb.BenchRequest>;
    responseSerialize: grpc.serialize<proto_services_bench_services_pb.BenchesResponse>;
    responseDeserialize: grpc.deserialize<proto_services_bench_services_pb.BenchesResponse>;
}
interface IBenchServiceService_IUpdateBench extends grpc.MethodDefinition<proto_services_bench_services_pb.BenchRequest, proto_services_bench_services_pb.BenchResponse> {
    path: string; // "/pb.BenchService/UpdateBench"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_bench_services_pb.BenchRequest>;
    requestDeserialize: grpc.deserialize<proto_services_bench_services_pb.BenchRequest>;
    responseSerialize: grpc.serialize<proto_services_bench_services_pb.BenchResponse>;
    responseDeserialize: grpc.deserialize<proto_services_bench_services_pb.BenchResponse>;
}
interface IBenchServiceService_IDeleteBench extends grpc.MethodDefinition<proto_services_bench_services_pb.BenchRequest, proto_services_bench_services_pb.BenchResponse> {
    path: string; // "/pb.BenchService/DeleteBench"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_bench_services_pb.BenchRequest>;
    requestDeserialize: grpc.deserialize<proto_services_bench_services_pb.BenchRequest>;
    responseSerialize: grpc.serialize<proto_services_bench_services_pb.BenchResponse>;
    responseDeserialize: grpc.deserialize<proto_services_bench_services_pb.BenchResponse>;
}

export const BenchServiceService: IBenchServiceService;

export interface IBenchServiceServer {
    createBench: grpc.handleUnaryCall<proto_services_bench_services_pb.BenchRequest, proto_services_bench_services_pb.BenchResponse>;
    retrieveBench: grpc.handleUnaryCall<proto_services_bench_services_pb.BenchRequest, proto_services_bench_services_pb.BenchResponse>;
    retrieveBenches: grpc.handleUnaryCall<proto_services_bench_services_pb.BenchRequest, proto_services_bench_services_pb.BenchesResponse>;
    updateBench: grpc.handleUnaryCall<proto_services_bench_services_pb.BenchRequest, proto_services_bench_services_pb.BenchResponse>;
    deleteBench: grpc.handleUnaryCall<proto_services_bench_services_pb.BenchRequest, proto_services_bench_services_pb.BenchResponse>;
}

export interface IBenchServiceClient {
    createBench(request: proto_services_bench_services_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    createBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    createBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    retrieveBench(request: proto_services_bench_services_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    retrieveBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    retrieveBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    retrieveBenches(request: proto_services_bench_services_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    retrieveBenches(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    retrieveBenches(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    updateBench(request: proto_services_bench_services_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    updateBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    updateBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    deleteBench(request: proto_services_bench_services_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    deleteBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    deleteBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
}

export class BenchServiceClient extends grpc.Client implements IBenchServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createBench(request: proto_services_bench_services_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public createBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public createBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public retrieveBench(request: proto_services_bench_services_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public retrieveBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public retrieveBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public retrieveBenches(request: proto_services_bench_services_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    public retrieveBenches(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    public retrieveBenches(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchesResponse) => void): grpc.ClientUnaryCall;
    public updateBench(request: proto_services_bench_services_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public updateBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public updateBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public deleteBench(request: proto_services_bench_services_pb.BenchRequest, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public deleteBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
    public deleteBench(request: proto_services_bench_services_pb.BenchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_bench_services_pb.BenchResponse) => void): grpc.ClientUnaryCall;
}
