// package: pb
// file: proto/services/timeline_yellow_line.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_timeline_yellow_line_services_pb from "../../proto/services/timeline_yellow_line.services_pb";
import * as proto_services_timeline_truck_services_pb from "../../proto/services/timeline_truck.services_pb";

interface ITimelineYellowLineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveTimelineYellowLine: ITimelineYellowLineServiceService_IRetrieveTimelineYellowLine;
    retrieveTimelinesShiftYellowLine: ITimelineYellowLineServiceService_IRetrieveTimelinesShiftYellowLine;
    createTimelineYellowLine: ITimelineYellowLineServiceService_ICreateTimelineYellowLine;
    updateTimelineYellowLine: ITimelineYellowLineServiceService_IUpdateTimelineYellowLine;
    updateTimelineYellowLineList: ITimelineYellowLineServiceService_IUpdateTimelineYellowLineList;
    updateTimelineYellowLineBeforeShiftChange: ITimelineYellowLineServiceService_IUpdateTimelineYellowLineBeforeShiftChange;
    updateTimelineYellowLineListBeforeShiftChange: ITimelineYellowLineServiceService_IUpdateTimelineYellowLineListBeforeShiftChange;
    finalizeShiftYellowLine: ITimelineYellowLineServiceService_IFinalizeShiftYellowLine;
    deleteTimelineYellowLine: ITimelineYellowLineServiceService_IDeleteTimelineYellowLine;
}

interface ITimelineYellowLineServiceService_IRetrieveTimelineYellowLine extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineYellowLineService/RetrieveTimelineYellowLine"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineYellowLineServiceService_IRetrieveTimelinesShiftYellowLine extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelinesShiftRequest, proto_services_timeline_truck_services_pb.TimelinesShiftResponse> {
    path: string; // "/pb.TimelineYellowLineService/RetrieveTimelinesShiftYellowLine"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelinesShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelinesShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelinesShiftResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelinesShiftResponse>;
}
interface ITimelineYellowLineServiceService_ICreateTimelineYellowLine extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineYellowLineService/CreateTimelineYellowLine"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineYellowLineServiceService_IUpdateTimelineYellowLine extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineYellowLineService/UpdateTimelineYellowLine"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineYellowLineServiceService_IUpdateTimelineYellowLineList extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineListRequest, proto_services_timeline_truck_services_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineYellowLineService/UpdateTimelineYellowLineList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
}
interface ITimelineYellowLineServiceService_IUpdateTimelineYellowLineBeforeShiftChange extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse> {
    path: string; // "/pb.TimelineYellowLineService/UpdateTimelineYellowLineBeforeShiftChange"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse>;
}
interface ITimelineYellowLineServiceService_IUpdateTimelineYellowLineListBeforeShiftChange extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_truck_services_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineYellowLineService/UpdateTimelineYellowLineListBeforeShiftChange"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
}
interface ITimelineYellowLineServiceService_IFinalizeShiftYellowLine extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_truck_services_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineYellowLineService/FinalizeShiftYellowLine"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
}
interface ITimelineYellowLineServiceService_IDeleteTimelineYellowLine extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineYellowLineService/DeleteTimelineYellowLine"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}

export const TimelineYellowLineServiceService: ITimelineYellowLineServiceService;

export interface ITimelineYellowLineServiceServer {
    retrieveTimelineYellowLine: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    retrieveTimelinesShiftYellowLine: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelinesShiftRequest, proto_services_timeline_truck_services_pb.TimelinesShiftResponse>;
    createTimelineYellowLine: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    updateTimelineYellowLine: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    updateTimelineYellowLineList: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineListRequest, proto_services_timeline_truck_services_pb.TimelineListResponse>;
    updateTimelineYellowLineBeforeShiftChange: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse>;
    updateTimelineYellowLineListBeforeShiftChange: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_truck_services_pb.TimelineListResponse>;
    finalizeShiftYellowLine: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_truck_services_pb.TimelineListResponse>;
    deleteTimelineYellowLine: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
}

export interface ITimelineYellowLineServiceClient {
    retrieveTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    createTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLineList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLineList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLineList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLineBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLineBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLineBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLineListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLineListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineYellowLineListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    deleteTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
}

export class TimelineYellowLineServiceClient extends grpc.Client implements ITimelineYellowLineServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public createTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLineList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLineList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLineList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLineBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLineBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLineBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLineListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLineListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineYellowLineListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShiftYellowLine(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public deleteTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimelineYellowLine(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
}
