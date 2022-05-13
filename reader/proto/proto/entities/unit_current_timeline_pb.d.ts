// package: pb
// file: proto/entities/unit_current_timeline.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_entities_timeline_pb from "../../proto/entities/timeline_pb";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";
import * as proto_enums_event_enums_pb from "../../proto/enums/event.enums_pb";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as proto_enums_guard_enums_pb from "../../proto/enums/guard_enums_pb";
import * as proto_entities_user_pb from "../../proto/entities/user_pb";

export class CurrentShift extends jspb.Message { 
    getId(): string;
    setId(value: string): CurrentShift;


    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): CurrentShift;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): CurrentShift;

    getState(): CurrentShift.State;
    setState(value: CurrentShift.State): CurrentShift;

    getGuard(): proto_enums_guard_enums_pb.EnumGuard;
    setGuard(value: proto_enums_guard_enums_pb.EnumGuard): CurrentShift;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentShift.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentShift): CurrentShift.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentShift, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentShift;
    static deserializeBinaryFromReader(message: CurrentShift, reader: jspb.BinaryReader): CurrentShift;
}

export namespace CurrentShift {
    export type AsObject = {
        id: string,
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        shift: proto_enums_shift_enums_pb.Shift,
        state: CurrentShift.State,
        guard: proto_enums_guard_enums_pb.EnumGuard,
    }

    export enum State {
    IN_PROGRESS = 0,
    CLOSED = 1,
    }

}

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


    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): UnitCurrentTimeline;

    getAssetType(): proto_enums_asset_type_enums_pb.EnumAssetType;
    setAssetType(value: proto_enums_asset_type_enums_pb.EnumAssetType): UnitCurrentTimeline;

    clearHistoryShiftList(): void;
    getHistoryShiftList(): Array<proto_entities_timeline_pb.Timeline>;
    setHistoryShiftList(value: Array<proto_entities_timeline_pb.Timeline>): UnitCurrentTimeline;
    addHistoryShift(value?: proto_entities_timeline_pb.Timeline, index?: number): proto_entities_timeline_pb.Timeline;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): UnitCurrentTimeline;

    getGuard(): proto_enums_guard_enums_pb.EnumGuard;
    setGuard(value: proto_enums_guard_enums_pb.EnumGuard): UnitCurrentTimeline;

    getUserId(): string;
    setUserId(value: string): UnitCurrentTimeline;


    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_entities_user_pb.User | undefined;
    setUser(value?: proto_entities_user_pb.User): UnitCurrentTimeline;


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
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        assetType: proto_enums_asset_type_enums_pb.EnumAssetType,
        historyShiftList: Array<proto_entities_timeline_pb.Timeline.AsObject>,
        shift: proto_enums_shift_enums_pb.Shift,
        guard: proto_enums_guard_enums_pb.EnumGuard,
        userId: string,
        user?: proto_entities_user_pb.User.AsObject,
    }
}
