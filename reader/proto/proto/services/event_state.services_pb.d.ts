// package: pb
// file: proto/services/event_state.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";
import * as proto_enums_event_enums_pb from "../../proto/enums/event.enums_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class EventStateByEventRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): EventStateByEventRequest;

    getEventState(): proto_enums_event_enums_pb.EnumEvent;
    setEventState(value: proto_enums_event_enums_pb.EnumEvent): EventStateByEventRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventStateByEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EventStateByEventRequest): EventStateByEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventStateByEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventStateByEventRequest;
    static deserializeBinaryFromReader(message: EventStateByEventRequest, reader: jspb.BinaryReader): EventStateByEventRequest;
}

export namespace EventStateByEventRequest {
    export type AsObject = {
        id: string,
        eventState: proto_enums_event_enums_pb.EnumEvent,
    }
}

export class EventStateRequest extends jspb.Message { 

    hasEventState(): boolean;
    clearEventState(): void;
    getEventState(): proto_entities_event_state_pb.EventState | undefined;
    setEventState(value?: proto_entities_event_state_pb.EventState): EventStateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EventStateRequest): EventStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventStateRequest;
    static deserializeBinaryFromReader(message: EventStateRequest, reader: jspb.BinaryReader): EventStateRequest;
}

export namespace EventStateRequest {
    export type AsObject = {
        eventState?: proto_entities_event_state_pb.EventState.AsObject,
    }
}

export class ListEventStateResponse extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): ListEventStateResponse;

    clearEventStatesList(): void;
    getEventStatesList(): Array<proto_entities_event_state_pb.EventState>;
    setEventStatesList(value: Array<proto_entities_event_state_pb.EventState>): ListEventStateResponse;
    addEventStates(value?: proto_entities_event_state_pb.EventState, index?: number): proto_entities_event_state_pb.EventState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEventStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListEventStateResponse): ListEventStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEventStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEventStateResponse;
    static deserializeBinaryFromReader(message: ListEventStateResponse, reader: jspb.BinaryReader): ListEventStateResponse;
}

export namespace ListEventStateResponse {
    export type AsObject = {
        state: boolean,
        eventStatesList: Array<proto_entities_event_state_pb.EventState.AsObject>,
    }
}

export class EventStateResponse extends jspb.Message { 
    getState(): boolean;
    setState(value: boolean): EventStateResponse;


    hasEventState(): boolean;
    clearEventState(): void;
    getEventState(): proto_entities_event_state_pb.EventState | undefined;
    setEventState(value?: proto_entities_event_state_pb.EventState): EventStateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EventStateResponse): EventStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventStateResponse;
    static deserializeBinaryFromReader(message: EventStateResponse, reader: jspb.BinaryReader): EventStateResponse;
}

export namespace EventStateResponse {
    export type AsObject = {
        state: boolean,
        eventState?: proto_entities_event_state_pb.EventState.AsObject,
    }
}
