// package: pb
// file: proto/entities/event.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_enums_event_enums_pb from "../../proto/enums/event.enums_pb";

export class Event extends jspb.Message { 
    getId(): string;
    setId(value: string): Event;

    getName(): string;
    setName(value: string): Event;

    getEvent(): proto_enums_event_enums_pb.EnumEvent;
    setEvent(value: proto_enums_event_enums_pb.EnumEvent): Event;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        id: string,
        name: string,
        event: proto_enums_event_enums_pb.EnumEvent,
    }
}
