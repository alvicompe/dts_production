// package: pb
// file: proto/services/timeline_truck.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_timeline_truck_services_pb from "../../proto/services/timeline_truck.services_pb";
import * as proto_entities_unit_pb from "../../proto/entities/unit_pb";
import * as proto_entities_timeline_pb from "../../proto/entities/timeline_pb";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";
import * as proto_entities_unit_current_timeline_pb from "../../proto/entities/unit_current_timeline_pb";
import * as proto_enums_event_enums_pb from "../../proto/enums/event.enums_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ITimelineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTimeline: ITimelineServiceService_ICreateTimeline;
    retrieveTimeline: ITimelineServiceService_IRetrieveTimeline;
    updateTimeline: ITimelineServiceService_IUpdateTimeline;
    updateInitialHourmeterTimeline: ITimelineServiceService_IUpdateInitialHourmeterTimeline;
    deleteTimeline: ITimelineServiceService_IDeleteTimeline;
    retrieveTimelinesShift: ITimelineServiceService_IRetrieveTimelinesShift;
    finalizeShift: ITimelineServiceService_IFinalizeShift;
    updateTimelineTruckList: ITimelineServiceService_IUpdateTimelineTruckList;
}

interface ITimelineServiceService_ICreateTimeline extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/CreateTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineServiceService_IRetrieveTimeline extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/RetrieveTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineServiceService_IUpdateTimeline extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/UpdateTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineServiceService_IUpdateInitialHourmeterTimeline extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/UpdateInitialHourmeterTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineServiceService_IDeleteTimeline extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineService/DeleteTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineServiceService_IRetrieveTimelinesShift extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelinesShiftRequest, proto_services_timeline_truck_services_pb.TimelinesShiftResponse> {
    path: string; // "/pb.TimelineService/RetrieveTimelinesShift"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelinesShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelinesShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelinesShiftResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelinesShiftResponse>;
}
interface ITimelineServiceService_IFinalizeShift extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_truck_services_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineService/FinalizeShift"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
}
interface ITimelineServiceService_IUpdateTimelineTruckList extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineListRequest, proto_services_timeline_truck_services_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineService/UpdateTimelineTruckList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
}

export const TimelineServiceService: ITimelineServiceService;

export interface ITimelineServiceServer {
    createTimeline: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    retrieveTimeline: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    updateTimeline: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    updateInitialHourmeterTimeline: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    deleteTimeline: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    retrieveTimelinesShift: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelinesShiftRequest, proto_services_timeline_truck_services_pb.TimelinesShiftResponse>;
    finalizeShift: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_truck_services_pb.TimelineListResponse>;
    updateTimelineTruckList: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineListRequest, proto_services_timeline_truck_services_pb.TimelineListResponse>;
}

export interface ITimelineServiceClient {
    createTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShift(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShift(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShift(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    finalizeShift(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShift(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShift(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
}

export class TimelineServiceClient extends grpc.Client implements ITimelineServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimeline(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShift(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShift(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShift(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public finalizeShift(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShift(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShift(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
}
