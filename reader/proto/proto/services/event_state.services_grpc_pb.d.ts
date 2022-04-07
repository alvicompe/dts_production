// package: pb
// file: proto/services/event_state.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_event_state_services_pb from "../../proto/services/event_state.services_pb";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";
import * as proto_enums_event_enums_pb from "../../proto/enums/event.enums_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IEventStateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveEventState: IEventStateServiceService_IRetrieveEventState;
    retrieveEventStates: IEventStateServiceService_IRetrieveEventStates;
    retrieveEventStateByEvent: IEventStateServiceService_IRetrieveEventStateByEvent;
    createEventState: IEventStateServiceService_ICreateEventState;
    updateEventState: IEventStateServiceService_IUpdateEventState;
    deleteEventState: IEventStateServiceService_IDeleteEventState;
}

interface IEventStateServiceService_IRetrieveEventState extends grpc.MethodDefinition<proto_services_event_state_services_pb.EventStateRequest, proto_services_event_state_services_pb.EventStateResponse> {
    path: string; // "/pb.EventStateService/RetrieveEventState"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_event_state_services_pb.EventStateRequest>;
    requestDeserialize: grpc.deserialize<proto_services_event_state_services_pb.EventStateRequest>;
    responseSerialize: grpc.serialize<proto_services_event_state_services_pb.EventStateResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_state_services_pb.EventStateResponse>;
}
interface IEventStateServiceService_IRetrieveEventStates extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_event_state_services_pb.ListEventStateResponse> {
    path: string; // "/pb.EventStateService/RetrieveEventStates"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_event_state_services_pb.ListEventStateResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_state_services_pb.ListEventStateResponse>;
}
interface IEventStateServiceService_IRetrieveEventStateByEvent extends grpc.MethodDefinition<proto_services_event_state_services_pb.EventStateByEventRequest, proto_services_event_state_services_pb.ListEventStateResponse> {
    path: string; // "/pb.EventStateService/RetrieveEventStateByEvent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_event_state_services_pb.EventStateByEventRequest>;
    requestDeserialize: grpc.deserialize<proto_services_event_state_services_pb.EventStateByEventRequest>;
    responseSerialize: grpc.serialize<proto_services_event_state_services_pb.ListEventStateResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_state_services_pb.ListEventStateResponse>;
}
interface IEventStateServiceService_ICreateEventState extends grpc.MethodDefinition<proto_services_event_state_services_pb.EventStateRequest, proto_services_event_state_services_pb.EventStateResponse> {
    path: string; // "/pb.EventStateService/CreateEventState"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_event_state_services_pb.EventStateRequest>;
    requestDeserialize: grpc.deserialize<proto_services_event_state_services_pb.EventStateRequest>;
    responseSerialize: grpc.serialize<proto_services_event_state_services_pb.EventStateResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_state_services_pb.EventStateResponse>;
}
interface IEventStateServiceService_IUpdateEventState extends grpc.MethodDefinition<proto_services_event_state_services_pb.EventStateRequest, proto_services_event_state_services_pb.EventStateResponse> {
    path: string; // "/pb.EventStateService/UpdateEventState"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_event_state_services_pb.EventStateRequest>;
    requestDeserialize: grpc.deserialize<proto_services_event_state_services_pb.EventStateRequest>;
    responseSerialize: grpc.serialize<proto_services_event_state_services_pb.EventStateResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_state_services_pb.EventStateResponse>;
}
interface IEventStateServiceService_IDeleteEventState extends grpc.MethodDefinition<proto_services_event_state_services_pb.EventStateRequest, proto_services_event_state_services_pb.EventStateResponse> {
    path: string; // "/pb.EventStateService/DeleteEventState"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_event_state_services_pb.EventStateRequest>;
    requestDeserialize: grpc.deserialize<proto_services_event_state_services_pb.EventStateRequest>;
    responseSerialize: grpc.serialize<proto_services_event_state_services_pb.EventStateResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_state_services_pb.EventStateResponse>;
}

export const EventStateServiceService: IEventStateServiceService;

export interface IEventStateServiceServer {
    retrieveEventState: grpc.handleUnaryCall<proto_services_event_state_services_pb.EventStateRequest, proto_services_event_state_services_pb.EventStateResponse>;
    retrieveEventStates: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_event_state_services_pb.ListEventStateResponse>;
    retrieveEventStateByEvent: grpc.handleUnaryCall<proto_services_event_state_services_pb.EventStateByEventRequest, proto_services_event_state_services_pb.ListEventStateResponse>;
    createEventState: grpc.handleUnaryCall<proto_services_event_state_services_pb.EventStateRequest, proto_services_event_state_services_pb.EventStateResponse>;
    updateEventState: grpc.handleUnaryCall<proto_services_event_state_services_pb.EventStateRequest, proto_services_event_state_services_pb.EventStateResponse>;
    deleteEventState: grpc.handleUnaryCall<proto_services_event_state_services_pb.EventStateRequest, proto_services_event_state_services_pb.EventStateResponse>;
}

export interface IEventStateServiceClient {
    retrieveEventState(request: proto_services_event_state_services_pb.EventStateRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    retrieveEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    retrieveEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    retrieveEventStates(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    retrieveEventStates(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    retrieveEventStates(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    retrieveEventStateByEvent(request: proto_services_event_state_services_pb.EventStateByEventRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    retrieveEventStateByEvent(request: proto_services_event_state_services_pb.EventStateByEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    retrieveEventStateByEvent(request: proto_services_event_state_services_pb.EventStateByEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    createEventState(request: proto_services_event_state_services_pb.EventStateRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    createEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    createEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    updateEventState(request: proto_services_event_state_services_pb.EventStateRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    updateEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    updateEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    deleteEventState(request: proto_services_event_state_services_pb.EventStateRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    deleteEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    deleteEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
}

export class EventStateServiceClient extends grpc.Client implements IEventStateServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveEventState(request: proto_services_event_state_services_pb.EventStateRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public retrieveEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public retrieveEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public retrieveEventStates(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    public retrieveEventStates(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    public retrieveEventStates(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    public retrieveEventStateByEvent(request: proto_services_event_state_services_pb.EventStateByEventRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    public retrieveEventStateByEvent(request: proto_services_event_state_services_pb.EventStateByEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    public retrieveEventStateByEvent(request: proto_services_event_state_services_pb.EventStateByEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.ListEventStateResponse) => void): grpc.ClientUnaryCall;
    public createEventState(request: proto_services_event_state_services_pb.EventStateRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public createEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public createEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public updateEventState(request: proto_services_event_state_services_pb.EventStateRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public updateEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public updateEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public deleteEventState(request: proto_services_event_state_services_pb.EventStateRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public deleteEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
    public deleteEventState(request: proto_services_event_state_services_pb.EventStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_state_services_pb.EventStateResponse) => void): grpc.ClientUnaryCall;
}
