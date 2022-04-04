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
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";

interface ITimelineTruckServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveTimelineTruck: ITimelineTruckServiceService_IRetrieveTimelineTruck;
    retrieveTimelinesShiftTruck: ITimelineTruckServiceService_IRetrieveTimelinesShiftTruck;
    retrieveCurrentTimelineByTruck: ITimelineTruckServiceService_IRetrieveCurrentTimelineByTruck;
    createTimelineTruck: ITimelineTruckServiceService_ICreateTimelineTruck;
    updateTimelineTruck: ITimelineTruckServiceService_IUpdateTimelineTruck;
    updateInitialHourmeterTimelineTruck: ITimelineTruckServiceService_IUpdateInitialHourmeterTimelineTruck;
    updateTimelineTruckList: ITimelineTruckServiceService_IUpdateTimelineTruckList;
    updateTimelineTruckBeforeShiftChange: ITimelineTruckServiceService_IUpdateTimelineTruckBeforeShiftChange;
    updateTimelineTruckListBeforeShiftChange: ITimelineTruckServiceService_IUpdateTimelineTruckListBeforeShiftChange;
    finalizeShiftTruck: ITimelineTruckServiceService_IFinalizeShiftTruck;
    deleteTimelineTruck: ITimelineTruckServiceService_IDeleteTimelineTruck;
}

interface ITimelineTruckServiceService_IRetrieveTimelineTruck extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineTruckService/RetrieveTimelineTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineTruckServiceService_IRetrieveTimelinesShiftTruck extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelinesShiftRequest, proto_services_timeline_truck_services_pb.TimelinesShiftResponse> {
    path: string; // "/pb.TimelineTruckService/RetrieveTimelinesShiftTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelinesShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelinesShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelinesShiftResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelinesShiftResponse>;
}
interface ITimelineTruckServiceService_IRetrieveCurrentTimelineByTruck extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineTruckService/RetrieveCurrentTimelineByTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineTruckServiceService_ICreateTimelineTruck extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineTruckService/CreateTimelineTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineTruckServiceService_IUpdateTimelineTruck extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineTruckService/UpdateTimelineTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineTruckServiceService_IUpdateInitialHourmeterTimelineTruck extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineTruckService/UpdateInitialHourmeterTimelineTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}
interface ITimelineTruckServiceService_IUpdateTimelineTruckList extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineListRequest, proto_services_timeline_truck_services_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineTruckService/UpdateTimelineTruckList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
}
interface ITimelineTruckServiceService_IUpdateTimelineTruckBeforeShiftChange extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse> {
    path: string; // "/pb.TimelineTruckService/UpdateTimelineTruckBeforeShiftChange"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse>;
}
interface ITimelineTruckServiceService_IUpdateTimelineTruckListBeforeShiftChange extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_truck_services_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineTruckService/UpdateTimelineTruckListBeforeShiftChange"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
}
interface ITimelineTruckServiceService_IFinalizeShiftTruck extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_truck_services_pb.TimelineListResponse> {
    path: string; // "/pb.TimelineTruckService/FinalizeShiftTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineListResponse>;
}
interface ITimelineTruckServiceService_IDeleteTimelineTruck extends grpc.MethodDefinition<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse> {
    path: string; // "/pb.TimelineTruckService/DeleteTimelineTruck"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_timeline_truck_services_pb.TimelineResponse>;
}

export const TimelineTruckServiceService: ITimelineTruckServiceService;

export interface ITimelineTruckServiceServer {
    retrieveTimelineTruck: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    retrieveTimelinesShiftTruck: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelinesShiftRequest, proto_services_timeline_truck_services_pb.TimelinesShiftResponse>;
    retrieveCurrentTimelineByTruck: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    createTimelineTruck: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    updateTimelineTruck: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    updateInitialHourmeterTimelineTruck: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
    updateTimelineTruckList: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineListRequest, proto_services_timeline_truck_services_pb.TimelineListResponse>;
    updateTimelineTruckBeforeShiftChange: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse>;
    updateTimelineTruckListBeforeShiftChange: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_truck_services_pb.TimelineListResponse>;
    finalizeShiftTruck: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, proto_services_timeline_truck_services_pb.TimelineListResponse>;
    deleteTimelineTruck: grpc.handleUnaryCall<proto_services_timeline_truck_services_pb.TimelineRequest, proto_services_timeline_truck_services_pb.TimelineResponse>;
}

export interface ITimelineTruckServiceClient {
    retrieveTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShiftTruck(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShiftTruck(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveTimelinesShiftTruck(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    retrieveCurrentTimelineByTruck(request: proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveCurrentTimelineByTruck(request: proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    retrieveCurrentTimelineByTruck(request: proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    createTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateInitialHourmeterTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    updateTimelineTruckListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShiftTruck(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShiftTruck(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    finalizeShiftTruck(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    deleteTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    deleteTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
}

export class TimelineTruckServiceClient extends grpc.Client implements ITimelineTruckServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShiftTruck(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShiftTruck(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveTimelinesShiftTruck(request: proto_services_timeline_truck_services_pb.TimelinesShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelinesShiftResponse) => void): grpc.ClientUnaryCall;
    public retrieveCurrentTimelineByTruck(request: proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveCurrentTimelineByTruck(request: proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public retrieveCurrentTimelineByTruck(request: proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public createTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateInitialHourmeterTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckList(request: proto_services_timeline_truck_services_pb.TimelineListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckBeforeShiftChange(request: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public updateTimelineTruckListBeforeShiftChange(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShiftTruck(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShiftTruck(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public finalizeShiftTruck(request: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineListResponse) => void): grpc.ClientUnaryCall;
    public deleteTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
    public deleteTimelineTruck(request: proto_services_timeline_truck_services_pb.TimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_timeline_truck_services_pb.TimelineResponse) => void): grpc.ClientUnaryCall;
}
