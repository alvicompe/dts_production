// package: pb
// file: proto/timeline_excavator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_timeline_excavator_pb from "../proto/timeline_excavator_pb";
import * as proto_timeline_pb from "../proto/timeline_pb";

interface ITimelineExcavatorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveTimelineExcavator: ITimelineExcavatorServiceService_IRetrieveTimelineExcavator;
    retrieveTimelinesShiftExcavator: ITimelineExcavatorServiceService_IRetrieveTimelinesShiftExcavator;
    createTimelineExcavator: ITimelineExcavatorServiceService_ICreateTimelineExcavator;
    updateTimelineExcavator: ITimelineExcavatorServiceService_IUpdateTimelineExcavator;
    updateTimelineExcavatorList: ITimelineExcavatorServiceService_IUpdateTimelineExcavatorList;
    updateInitialHourmeterTimelineExcavator: ITimelineExcavatorServiceService_IUpdateInitialHourmeterTimelineExcavator;
    finalizeShiftExcavator: ITimelineExcavatorServiceService_IFinalizeShiftExcavator;
    deleteTimelineExcavator: ITimelineExcavatorServiceService_IDeleteTimelineExcavator;
}

interface ITimelineExcavatorServiceService_IRetrieveTimelineExcavator extends grpc.MethodDefinition<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse> {
    path: string; // "/pb.TimelineExcavatorService/RetrieveTimelineExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineResponse>;
}
interface ITimelineExcavatorServiceService_IRetrieveTimelinesShiftExcavator extends grpc.MethodDefinition<proto_timeline_pb.TimelinesShiftRequest, proto_timeline_pb.TimelinesShiftResponse> {
    path: string; // "/pb.TimelineExcavatorService/RetrieveTimelinesShiftExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelinesShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelinesShiftRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelinesShiftResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelinesShiftResponse>;
}
interface ITimelineExcavatorServiceService_ICreateTimelineExcavator extends grpc.MethodDefinition<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse> {
    path: string; // "/pb.TimelineExcavatorService/CreateTimelineExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineResponse>;
}
interface ITimelineExcavatorServiceService_IUpdateTimelineExcavator extends grpc.MethodDefinition<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse> {
    path: string; // "/pb.TimelineExcavatorService/UpdateTimelineExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineResponse>;
}
interface ITimelineExcavatorServiceService_IUpdateTimelineExcavatorList extends grpc.MethodDefinition<proto_timeline_pb.TimelineListRequest, proto_timeline_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineExcavatorService/UpdateTimelineExcavatorList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineListRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineListRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineListResponse>;
}
interface ITimelineExcavatorServiceService_IUpdateInitialHourmeterTimelineExcavator extends grpc.MethodDefinition<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse> {
    path: string; // "/pb.TimelineExcavatorService/UpdateInitialHourmeterTimelineExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineResponse>;
}
interface ITimelineExcavatorServiceService_IFinalizeShiftExcavator extends grpc.MethodDefinition<proto_timeline_pb.TimelineFinalizeShiftRequest, proto_timeline_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineExcavatorService/FinalizeShiftExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineFinalizeShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineFinalizeShiftRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineListResponse>;
}
interface ITimelineExcavatorServiceService_IDeleteTimelineExcavator extends grpc.MethodDefinition<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse> {
    path: string; // "/pb.TimelineExcavatorService/DeleteTimelineExcavator"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineResponse>;
}

export const TimelineExcavatorServiceService: ITimelineExcavatorServiceService;

export interface ITimelineExcavatorServiceServer {
    retrieveTimelineExcavator: grpc.handleUnaryCall<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse>;
    retrieveTimelinesShiftExcavator: grpc.handleUnaryCall<proto_timeline_pb.TimelinesShiftRequest, proto_timeline_pb.TimelinesShiftResponse>;
    createTimelineExcavator: grpc.handleUnaryCall<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse>;
    updateTimelineExcavator: grpc.handleUnaryCall<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse>;
    updateTimelineExcavatorList: grpc.handleUnaryCall<proto_timeline_pb.TimelineListRequest, proto_timeline_pb.TimelineListResponse>;
    updateInitialHourmeterTimelineExcavator: grpc.handleUnaryCall<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse>;
    finalizeShiftExcavator: grpc.handleUnaryCall<proto_timeline_pb.TimelineFinalizeShiftRequest, proto_timeline_pb.TimelineListResponse>;
    deleteTimelineExcavator: grpc.handleUnaryCall<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse>;
}

export interface ITimelineExcavatorServiceClient {
    retrieveTimelineExcavator(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShiftExcavator(request: proto_timeline_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShiftExcavator(request: proto_timeline_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShiftExcavator(request: proto_timeline_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    createTimelineExcavator(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineExcavator(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineExcavatorList(request: proto_timeline_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineExcavatorList(request: proto_timeline_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineExcavatorList(request: proto_timeline_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimelineExcavator(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    finalizeShiftExcavator(request: proto_timeline_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShiftExcavator(request: proto_timeline_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShiftExcavator(request: proto_timeline_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    deleteTimelineExcavator(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
}

export class TimelineExcavatorServiceClient extends grpc.Client implements ITimelineExcavatorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveTimelineExcavator(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShiftExcavator(request: proto_timeline_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShiftExcavator(request: proto_timeline_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShiftExcavator(request: proto_timeline_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public createTimelineExcavator(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineExcavator(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineExcavatorList(request: proto_timeline_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineExcavatorList(request: proto_timeline_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineExcavatorList(request: proto_timeline_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimelineExcavator(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public finalizeShiftExcavator(request: proto_timeline_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShiftExcavator(request: proto_timeline_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShiftExcavator(request: proto_timeline_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public deleteTimelineExcavator(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimelineExcavator(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
}
