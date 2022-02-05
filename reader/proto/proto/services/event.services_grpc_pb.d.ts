// package: pb
// file: proto/services/event.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_event_services_pb from "../../proto/services/event.services_pb";
import * as proto_entities_event_pb from "../../proto/entities/event_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IEventServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveEvent: IEventServiceService_IRetrieveEvent;
    retrieveEvents: IEventServiceService_IRetrieveEvents;
    createEvent: IEventServiceService_ICreateEvent;
    updateEvent: IEventServiceService_IUpdateEvent;
    deleteEvent: IEventServiceService_IDeleteEvent;
}

interface IEventServiceService_IRetrieveEvent extends grpc.MethodDefinition<proto_services_event_services_pb.EventRequest, proto_services_event_services_pb.EventResponse> {
    path: string; // "/pb.EventService/RetrieveEvent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_event_services_pb.EventRequest>;
    requestDeserialize: grpc.deserialize<proto_services_event_services_pb.EventRequest>;
    responseSerialize: grpc.serialize<proto_services_event_services_pb.EventResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_services_pb.EventResponse>;
}
interface IEventServiceService_IRetrieveEvents extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_event_services_pb.ListEventResponse> {
    path: string; // "/pb.EventService/RetrieveEvents"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_event_services_pb.ListEventResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_services_pb.ListEventResponse>;
}
interface IEventServiceService_ICreateEvent extends grpc.MethodDefinition<proto_services_event_services_pb.EventRequest, proto_services_event_services_pb.EventResponse> {
    path: string; // "/pb.EventService/CreateEvent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_event_services_pb.EventRequest>;
    requestDeserialize: grpc.deserialize<proto_services_event_services_pb.EventRequest>;
    responseSerialize: grpc.serialize<proto_services_event_services_pb.EventResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_services_pb.EventResponse>;
}
interface IEventServiceService_IUpdateEvent extends grpc.MethodDefinition<proto_services_event_services_pb.EventRequest, proto_services_event_services_pb.EventResponse> {
    path: string; // "/pb.EventService/UpdateEvent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_event_services_pb.EventRequest>;
    requestDeserialize: grpc.deserialize<proto_services_event_services_pb.EventRequest>;
    responseSerialize: grpc.serialize<proto_services_event_services_pb.EventResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_services_pb.EventResponse>;
}
interface IEventServiceService_IDeleteEvent extends grpc.MethodDefinition<proto_services_event_services_pb.EventRequest, proto_services_event_services_pb.EventResponse> {
    path: string; // "/pb.EventService/DeleteEvent"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_event_services_pb.EventRequest>;
    requestDeserialize: grpc.deserialize<proto_services_event_services_pb.EventRequest>;
    responseSerialize: grpc.serialize<proto_services_event_services_pb.EventResponse>;
    responseDeserialize: grpc.deserialize<proto_services_event_services_pb.EventResponse>;
}

export const EventServiceService: IEventServiceService;

export interface IEventServiceServer {
    retrieveEvent: grpc.handleUnaryCall<proto_services_event_services_pb.EventRequest, proto_services_event_services_pb.EventResponse>;
    retrieveEvents: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_event_services_pb.ListEventResponse>;
    createEvent: grpc.handleUnaryCall<proto_services_event_services_pb.EventRequest, proto_services_event_services_pb.EventResponse>;
    updateEvent: grpc.handleUnaryCall<proto_services_event_services_pb.EventRequest, proto_services_event_services_pb.EventResponse>;
    deleteEvent: grpc.handleUnaryCall<proto_services_event_services_pb.EventRequest, proto_services_event_services_pb.EventResponse>;
}

export interface IEventServiceClient {
    retrieveEvent(request: proto_services_event_services_pb.EventRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    retrieveEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    retrieveEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    retrieveEvents(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.ListEventResponse) => void): grpc.ClientUnaryCall;
    retrieveEvents(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.ListEventResponse) => void): grpc.ClientUnaryCall;
    retrieveEvents(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.ListEventResponse) => void): grpc.ClientUnaryCall;
    createEvent(request: proto_services_event_services_pb.EventRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    createEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    createEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    updateEvent(request: proto_services_event_services_pb.EventRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    updateEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    updateEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    deleteEvent(request: proto_services_event_services_pb.EventRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    deleteEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    deleteEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
}

export class EventServiceClient extends grpc.Client implements IEventServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveEvent(request: proto_services_event_services_pb.EventRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public retrieveEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public retrieveEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public retrieveEvents(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.ListEventResponse) => void): grpc.ClientUnaryCall;
    public retrieveEvents(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.ListEventResponse) => void): grpc.ClientUnaryCall;
    public retrieveEvents(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.ListEventResponse) => void): grpc.ClientUnaryCall;
    public createEvent(request: proto_services_event_services_pb.EventRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public createEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public createEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public updateEvent(request: proto_services_event_services_pb.EventRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public updateEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public updateEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public deleteEvent(request: proto_services_event_services_pb.EventRequest, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public deleteEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
    public deleteEvent(request: proto_services_event_services_pb.EventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_event_services_pb.EventResponse) => void): grpc.ClientUnaryCall;
}
