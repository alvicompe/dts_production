// package: pb
// file: proto/entities/timeline.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";
import * as proto_enums_event_enums_pb from "../../proto/enums/event.enums_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";
import * as proto_enums_guard_enums_pb from "../../proto/enums/guard_enums_pb";
import * as proto_entities_user_pb from "../../proto/entities/user_pb";

export class Timeline extends jspb.Message { 
    getId(): string;
    setId(value: string): Timeline;

    getDeviceId(): string;
    setDeviceId(value: string): Timeline;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): Timeline;

    getInitialHourmeter(): number;
    setInitialHourmeter(value: number): Timeline;

    getFinalHourmeter(): number;
    setFinalHourmeter(value: number): Timeline;

    getInitialState(): proto_enums_event_enums_pb.EnumEvent;
    setInitialState(value: proto_enums_event_enums_pb.EnumEvent): Timeline;

    getFinalState(): proto_enums_event_enums_pb.EnumEvent;
    setFinalState(value: proto_enums_event_enums_pb.EnumEvent): Timeline;


    hasInitialEventState(): boolean;
    clearInitialEventState(): void;
    getInitialEventState(): proto_entities_event_state_pb.EventState | undefined;
    setInitialEventState(value?: proto_entities_event_state_pb.EventState): Timeline;


    hasFinalEventState(): boolean;
    clearFinalEventState(): void;
    getFinalEventState(): proto_entities_event_state_pb.EventState | undefined;
    setFinalEventState(value?: proto_entities_event_state_pb.EventState): Timeline;


    hasInitialTime(): boolean;
    clearInitialTime(): void;
    getInitialTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setInitialTime(value?: google_protobuf_timestamp_pb.Timestamp): Timeline;


    hasFinalTime(): boolean;
    clearFinalTime(): void;
    getFinalTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFinalTime(value?: google_protobuf_timestamp_pb.Timestamp): Timeline;

    getDurationTime(): number;
    setDurationTime(value: number): Timeline;


    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): Timeline;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): Timeline;

    getStateRegister(): Timeline.StateTimeline;
    setStateRegister(value: Timeline.StateTimeline): Timeline;

    getAdjustment(): number;
    setAdjustment(value: number): Timeline;

    getStatus(): boolean;
    setStatus(value: boolean): Timeline;

    getAssetType(): proto_enums_asset_type_enums_pb.EnumAssetType;
    setAssetType(value: proto_enums_asset_type_enums_pb.EnumAssetType): Timeline;

    getGuard(): proto_enums_guard_enums_pb.EnumGuard;
    setGuard(value: proto_enums_guard_enums_pb.EnumGuard): Timeline;

    getUserId(): string;
    setUserId(value: string): Timeline;


    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_entities_user_pb.User | undefined;
    setUser(value?: proto_entities_user_pb.User): Timeline;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Timeline.AsObject;
    static toObject(includeInstance: boolean, msg: Timeline): Timeline.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Timeline, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Timeline;
    static deserializeBinaryFromReader(message: Timeline, reader: jspb.BinaryReader): Timeline;
}

export namespace Timeline {
    export type AsObject = {
        id: string,
        deviceId: string,
        deviceAlias: string,
        initialHourmeter: number,
        finalHourmeter: number,
        initialState: proto_enums_event_enums_pb.EnumEvent,
        finalState: proto_enums_event_enums_pb.EnumEvent,
        initialEventState?: proto_entities_event_state_pb.EventState.AsObject,
        finalEventState?: proto_entities_event_state_pb.EventState.AsObject,
        initialTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        finalTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationTime: number,
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        shift: proto_enums_shift_enums_pb.Shift,
        stateRegister: Timeline.StateTimeline,
        adjustment: number,
        status: boolean,
        assetType: proto_enums_asset_type_enums_pb.EnumAssetType,
        guard: proto_enums_guard_enums_pb.EnumGuard,
        userId: string,
        user?: proto_entities_user_pb.User.AsObject,
    }

    export enum StateTimeline {
    UNKNOWN = 0,
    IN_PROGRESS = 1,
    CLOSED = 2,
    }

}
