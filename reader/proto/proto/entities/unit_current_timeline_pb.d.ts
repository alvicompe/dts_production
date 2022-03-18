// package: pb
// file: proto/entities/unit_current_timeline.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_timeline_pb from "../../proto/entities/timeline_pb";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";
import * as proto_enums_event_enums_pb from "../../proto/enums/event.enums_pb";

export class UnitCurrentTimeline extends jspb.Message { 
    getId(): string;
    setId(value: string): UnitCurrentTimeline;

    getDeviceId(): string;
    setDeviceId(value: string): UnitCurrentTimeline;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): UnitCurrentTimeline;


    hasCurrentTimeline(): boolean;
    clearCurrentTimeline(): void;
    getCurrentTimeline(): proto_entities_timeline_pb.Timeline | undefined;
    setCurrentTimeline(value?: proto_entities_timeline_pb.Timeline): UnitCurrentTimeline;

    getState(): proto_enums_event_enums_pb.EnumEvent;
    setState(value: proto_enums_event_enums_pb.EnumEvent): UnitCurrentTimeline;


    hasEventState(): boolean;
    clearEventState(): void;
    getEventState(): proto_entities_event_state_pb.EventState | undefined;
    setEventState(value?: proto_entities_event_state_pb.EventState): UnitCurrentTimeline;

    clearHystoryShiftList(): void;
    getHystoryShiftList(): Array<proto_entities_timeline_pb.Timeline>;
    setHystoryShiftList(value: Array<proto_entities_timeline_pb.Timeline>): UnitCurrentTimeline;
    addHystoryShift(value?: proto_entities_timeline_pb.Timeline, index?: number): proto_entities_timeline_pb.Timeline;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnitCurrentTimeline.AsObject;
    static toObject(includeInstance: boolean, msg: UnitCurrentTimeline): UnitCurrentTimeline.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnitCurrentTimeline, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnitCurrentTimeline;
    static deserializeBinaryFromReader(message: UnitCurrentTimeline, reader: jspb.BinaryReader): UnitCurrentTimeline;
}

export namespace UnitCurrentTimeline {
    export type AsObject = {
        id: string,
        deviceId: string,
        deviceAlias: string,
        currentTimeline?: proto_entities_timeline_pb.Timeline.AsObject,
        state: proto_enums_event_enums_pb.EnumEvent,
        eventState?: proto_entities_event_state_pb.EventState.AsObject,
        hystoryShiftList: Array<proto_entities_timeline_pb.Timeline.AsObject>,
    }
}
