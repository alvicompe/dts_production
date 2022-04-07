// package: pb
// file: proto/services/event.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_event_pb from "../../proto/entities/event_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class EventRequest extends jspb.Message { 

    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): proto_entities_event_pb.Event | undefined;
    setEvent(value?: proto_entities_event_pb.Event): EventRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EventRequest): EventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventRequest;
    static deserializeBinaryFromReader(message: EventRequest, reader: jspb.BinaryReader): EventRequest;
}

export namespace EventRequest {
    export type AsObject = {
        event?: proto_entities_event_pb.Event.AsObject,
    }
}

export class ListEventResponse extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): ListEventResponse;

    clearEventsList(): void;
    getEventsList(): Array<proto_entities_event_pb.Event>;
    setEventsList(value: Array<proto_entities_event_pb.Event>): ListEventResponse;
    addEvents(value?: proto_entities_event_pb.Event, index?: number): proto_entities_event_pb.Event;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEventResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListEventResponse): ListEventResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEventResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEventResponse;
    static deserializeBinaryFromReader(message: ListEventResponse, reader: jspb.BinaryReader): ListEventResponse;
}

export namespace ListEventResponse {
    export type AsObject = {
        state: boolean,
        eventsList: Array<proto_entities_event_pb.Event.AsObject>,
    }
}

export class EventResponse extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): EventResponse;


    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): proto_entities_event_pb.Event | undefined;
    setEvent(value?: proto_entities_event_pb.Event): EventResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EventResponse): EventResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventResponse;
    static deserializeBinaryFromReader(message: EventResponse, reader: jspb.BinaryReader): EventResponse;
}

export namespace EventResponse {
    export type AsObject = {
        state: boolean,
        event?: proto_entities_event_pb.Event.AsObject,
    }
}
