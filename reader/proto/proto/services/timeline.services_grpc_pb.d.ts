// package: pb
// file: proto/services/timeline.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_timeline_services_pb from "../../proto/services/timeline.services_pb";
import * as proto_entities_unit_pb from "../../proto/entities/unit_pb";
import * as proto_entities_timeline_pb from "../../proto/entities/timeline_pb";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";
import * as proto_entities_unit_current_timeline_pb from "../../proto/entities/unit_current_timeline_pb";
import * as proto_enums_event_enums_pb from "../../proto/enums/event.enums_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";

interface ITimelineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveTimeline: ITimelineServiceService_IRetrieveTimeline;
    retrieveTimelinesShift: ITimelineServiceService_IRetrieveTimelinesShift;
    retrieveCurrentTimelineByTruck: ITimelineServiceService_IRetrieveCurrentTimelineByTruck;
    createTimeline: ITimelineServiceService_ICreateTimeline;
    updateTimeline: ITimelineServiceService_IUpdateTimeline;
    updateInitialHourmeterTimeline: ITimelineServiceService_IUpdateInitialHourmeterTimeline;
    updateTimelineBeforeShiftChange: ITimelineServiceService_IUpdateTimelineBeforeShiftChange;
    updateTimelineList: ITimelineServiceService_IUpdateTimelineList;
    finalizeShift: ITimelineServiceService_IFinalizeShift;
    deleteTimeline: ITimelineServiceService_IDeleteTimeline;
}

interface ITimelineServiceService_IRetrieveTimeline extends grpc.MethodDefinition<proto_services_timeline_services_pb.TimelineRequest, proto_services_timeline_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/RetrieveTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineResponse>;
}
interface ITimelineServiceService_IRetrieveTimelinesShift extends grpc.MethodDefinition<proto_services_timeline_services_pb.TimelinesShiftRequest, proto_services_timeline_services_pb.TimelinesShiftResponse> {
    path: string; // "/pb.TimelineService/RetrieveTimelinesShift"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelinesShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelinesShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelinesShiftResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelinesShiftResponse>;
}
interface ITimelineServiceService_IRetrieveCurrentTimelineByTruck extends grpc.MethodDefinition<proto_services_timeline_services_pb.CurrentTimelineByTruckRequest, proto_services_timeline_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/RetrieveCurrentTimelineByTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_services_pb.CurrentTimelineByTruckRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_services_pb.CurrentTimelineByTruckRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineResponse>;
}
interface ITimelineServiceService_ICreateTimeline extends grpc.MethodDefinition<proto_services_timeline_services_pb.TimelineRequest, proto_services_timeline_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/CreateTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineResponse>;
}
interface ITimelineServiceService_IUpdateTimeline extends grpc.MethodDefinition<proto_services_timeline_services_pb.TimelineRequest, proto_services_timeline_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/UpdateTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineResponse>;
}
interface ITimelineServiceService_IUpdateInitialHourmeterTimeline extends grpc.MethodDefinition<proto_services_timeline_services_pb.TimelineRequest, proto_services_timeline_services_pb.UnitCurrentTimelineResponse> {
    path: string; // "/pb.TimelineService/UpdateInitialHourmeterTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_services_pb.UnitCurrentTimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_services_pb.UnitCurrentTimelineResponse>;
}
interface ITimelineServiceService_IUpdateTimelineBeforeShiftChange extends grpc.MethodDefinition<proto_services_timeline_services_pb.UnitCurrentTimelineRequest, proto_services_timeline_services_pb.UnitCurrentTimelineResponse> {
    path: string; // "/pb.TimelineService/UpdateTimelineBeforeShiftChange"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_services_pb.UnitCurrentTimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_services_pb.UnitCurrentTimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_services_pb.UnitCurrentTimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_services_pb.UnitCurrentTimelineResponse>;
}
interface ITimelineServiceService_IUpdateTimelineList extends grpc.MethodDefinition<proto_services_timeline_services_pb.TimelineListRequest, proto_services_timeline_services_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineService/UpdateTimelineList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineListRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineListRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineListResponse>;
}
interface ITimelineServiceService_IFinalizeShift extends grpc.MethodDefinition<proto_services_timeline_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_services_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineService/FinalizeShift"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineFinalizeShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineFinalizeShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineListResponse>;
}
interface ITimelineServiceService_IDeleteTimeline extends grpc.MethodDefinition<proto_services_timeline_services_pb.TimelineRequest, proto_services_timeline_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/DeleteTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_services_pb.TimelineResponse>;
}

export const TimelineServiceService: ITimelineServiceService;

export interface ITimelineServiceServer {
    retrieveTimeline: grpc.handleUnaryCall<proto_services_timeline_services_pb.TimelineRequest, proto_services_timeline_services_pb.TimelineResponse>;
    retrieveTimelinesShift: grpc.handleUnaryCall<proto_services_timeline_services_pb.TimelinesShiftRequest, proto_services_timeline_services_pb.TimelinesShiftResponse>;
    retrieveCurrentTimelineByTruck: grpc.handleUnaryCall<proto_services_timeline_services_pb.CurrentTimelineByTruckRequest, proto_services_timeline_services_pb.TimelineResponse>;
    createTimeline: grpc.handleUnaryCall<proto_services_timeline_services_pb.TimelineRequest, proto_services_timeline_services_pb.TimelineResponse>;
    updateTimeline: grpc.handleUnaryCall<proto_services_timeline_services_pb.TimelineRequest, proto_services_timeline_services_pb.TimelineResponse>;
    updateInitialHourmeterTimeline: grpc.handleUnaryCall<proto_services_timeline_services_pb.TimelineRequest, proto_services_timeline_services_pb.UnitCurrentTimelineResponse>;
    updateTimelineBeforeShiftChange: grpc.handleUnaryCall<proto_services_timeline_services_pb.UnitCurrentTimelineRequest, proto_services_timeline_services_pb.UnitCurrentTimelineResponse>;
    updateTimelineList: grpc.handleUnaryCall<proto_services_timeline_services_pb.TimelineListRequest, proto_services_timeline_services_pb.TimelineListResponse>;
    finalizeShift: grpc.handleUnaryCall<proto_services_timeline_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_services_pb.TimelineListResponse>;
    deleteTimeline: grpc.handleUnaryCall<proto_services_timeline_services_pb.TimelineRequest, proto_services_timeline_services_pb.TimelineResponse>;
}

export interface ITimelineServiceClient {
    retrieveTimeline(request: proto_services_timeline_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShift(request: proto_services_timeline_services_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShift(request: proto_services_timeline_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShift(request: proto_services_timeline_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveCurrentTimelineByTruck(request: proto_services_timeline_services_pb.CurrentTimelineByTruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveCurrentTimelineByTruck(request: proto_services_timeline_services_pb.CurrentTimelineByTruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveCurrentTimelineByTruck(request: proto_services_timeline_services_pb.CurrentTimelineByTruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimeline(request: proto_services_timeline_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimeline(request: proto_services_timeline_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimeline(request: proto_services_timeline_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineBeforeShiftChange(request: proto_services_timeline_services_pb.UnitCurrentTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineBeforeShiftChange(request: proto_services_timeline_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineBeforeShiftChange(request: proto_services_timeline_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineList(request: proto_services_timeline_services_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineList(request: proto_services_timeline_services_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineList(request: proto_services_timeline_services_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShift(request: proto_services_timeline_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShift(request: proto_services_timeline_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShift(request: proto_services_timeline_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    deleteTimeline(request: proto_services_timeline_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
}

export class TimelineServiceClient extends grpc.Client implements ITimelineServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveTimeline(request: proto_services_timeline_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShift(request: proto_services_timeline_services_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShift(request: proto_services_timeline_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShift(request: proto_services_timeline_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveCurrentTimelineByTruck(request: proto_services_timeline_services_pb.CurrentTimelineByTruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveCurrentTimelineByTruck(request: proto_services_timeline_services_pb.CurrentTimelineByTruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveCurrentTimelineByTruck(request: proto_services_timeline_services_pb.CurrentTimelineByTruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimeline(request: proto_services_timeline_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimeline(request: proto_services_timeline_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimeline(request: proto_services_timeline_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineBeforeShiftChange(request: proto_services_timeline_services_pb.UnitCurrentTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineBeforeShiftChange(request: proto_services_timeline_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineBeforeShiftChange(request: proto_services_timeline_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineList(request: proto_services_timeline_services_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineList(request: proto_services_timeline_services_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineList(request: proto_services_timeline_services_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShift(request: proto_services_timeline_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShift(request: proto_services_timeline_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShift(request: proto_services_timeline_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public deleteTimeline(request: proto_services_timeline_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimeline(request: proto_services_timeline_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
}
