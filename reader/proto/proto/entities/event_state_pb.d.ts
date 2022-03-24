// package: pb
// file: proto/entities/event_state.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_enums_event_state_enums_pb from "../../proto/enums/event_state.enums_pb";
import * as proto_entities_event_pb from "../../proto/entities/event_pb";

export class EventState extends jspb.Message { 
    getId(): string;
    setId(value: string): EventState;

    getName(): string;
    setName(value: string): EventState;

    getEventState(): proto_enums_event_state_enums_pb.EnumEventState;
    setEventState(value: proto_enums_event_state_enums_pb.EnumEventState): EventState;


    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): proto_entities_event_pb.Event | undefined;
    setEvent(value?: proto_entities_event_pb.Event): EventState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventState.AsObject;
    static toObject(includeInstance: boolean, msg: EventState): EventState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventState;
    static deserializeBinaryFromReader(message: EventState, reader: jspb.BinaryReader): EventState;
}

export namespace EventState {
    export type AsObject = {
        id: string,
        name: string,
        eventState: proto_enums_event_state_enums_pb.EnumEventState,
        event?: proto_entities_event_pb.Event.AsObject,
    }
}
