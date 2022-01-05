// package: pb
// file: proto/timeline.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_timeline_pb from "../proto/timeline_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_cycle_pb from "../proto/cycle_pb";
import * as proto_unit_pb from "../proto/unit_pb";

interface ITimelineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTimeline: ITimelineServiceService_ICreateTimeline;
    retrieveTimeline: ITimelineServiceService_IRetrieveTimeline;
    updateTimeline: ITimelineServiceService_IUpdateTimeline;
    deleteTimeline: ITimelineServiceService_IDeleteTimeline;
    retrieveTimelinesShift: ITimelineServiceService_IRetrieveTimelinesShift;
    finalizeShift: ITimelineServiceService_IFinalizeShift;
    updateTimelineTruckList: ITimelineServiceService_IUpdateTimelineTruckList;
}

interface ITimelineServiceService_ICreateTimeline extends grpc.MethodDefinition<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/CreateTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineResponse>;
}
interface ITimelineServiceService_IRetrieveTimeline extends grpc.MethodDefinition<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/RetrieveTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineResponse>;
}
interface ITimelineServiceService_IUpdateTimeline extends grpc.MethodDefinition<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/UpdateTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineResponse>;
}
interface ITimelineServiceService_IDeleteTimeline extends grpc.MethodDefinition<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/DeleteTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineResponse>;
}
interface ITimelineServiceService_IRetrieveTimelinesShift extends grpc.MethodDefinition<proto_timeline_pb.TimelinesShiftRequest, proto_timeline_pb.TimelinesShiftResponse> {
    path: string; // "/pb.TimelineService/RetrieveTimelinesShift"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelinesShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelinesShiftRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelinesShiftResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelinesShiftResponse>;
}
interface ITimelineServiceService_IFinalizeShift extends grpc.MethodDefinition<proto_timeline_pb.TimelineFinalizeShiftRequest, proto_timeline_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineService/FinalizeShift"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineFinalizeShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineFinalizeShiftRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineListResponse>;
}
interface ITimelineServiceService_IUpdateTimelineTruckList extends grpc.MethodDefinition<proto_timeline_pb.TimelineListRequest, proto_timeline_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineService/UpdateTimelineTruckList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_timeline_pb.TimelineListRequest>;
    requestDeserialize: grpc.deserialize<proto_timeline_pb.TimelineListRequest>;
    responseSerialize: grpc.serialize<proto_timeline_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_timeline_pb.TimelineListResponse>;
}

export const TimelineServiceService: ITimelineServiceService;

export interface ITimelineServiceServer {
    createTimeline: grpc.handleUnaryCall<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse>;
    retrieveTimeline: grpc.handleUnaryCall<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse>;
    updateTimeline: grpc.handleUnaryCall<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse>;
    deleteTimeline: grpc.handleUnaryCall<proto_timeline_pb.TimelineRequest, proto_timeline_pb.TimelineResponse>;
    retrieveTimelinesShift: grpc.handleUnaryCall<proto_timeline_pb.TimelinesShiftRequest, proto_timeline_pb.TimelinesShiftResponse>;
    finalizeShift: grpc.handleUnaryCall<proto_timeline_pb.TimelineFinalizeShiftRequest, proto_timeline_pb.TimelineListResponse>;
    updateTimelineTruckList: grpc.handleUnaryCall<proto_timeline_pb.TimelineListRequest, proto_timeline_pb.TimelineListResponse>;
}

export interface ITimelineServiceClient {
    createTimeline(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimeline(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimeline(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimeline(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShift(request: proto_timeline_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShift(request: proto_timeline_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShift(request: proto_timeline_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    finalizeShift(request: proto_timeline_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShift(request: proto_timeline_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShift(request: proto_timeline_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckList(request: proto_timeline_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckList(request: proto_timeline_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckList(request: proto_timeline_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
}

export class TimelineServiceClient extends grpc.Client implements ITimelineServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createTimeline(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimeline(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimeline(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimeline(request: proto_timeline_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimeline(request: proto_timeline_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShift(request: proto_timeline_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShift(request: proto_timeline_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShift(request: proto_timeline_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public finalizeShift(request: proto_timeline_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShift(request: proto_timeline_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShift(request: proto_timeline_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckList(request: proto_timeline_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckList(request: proto_timeline_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckList(request: proto_timeline_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_timeline_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
}
