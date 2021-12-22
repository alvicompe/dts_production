// package: pb
// file: proto/timeline.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_cycle_pb from "../proto/cycle_pb";

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

    getInitialState(): StateUnitGeneral;
    setInitialState(value: StateUnitGeneral): Timeline;

    getFinalState(): StateUnitGeneral;
    setFinalState(value: StateUnitGeneral): Timeline;


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

    getShift(): proto_cycle_pb.Shift;
    setShift(value: proto_cycle_pb.Shift): Timeline;

    getStateRegister(): Timeline.StateTimeline;
    setStateRegister(value: Timeline.StateTimeline): Timeline;


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
        initialState: StateUnitGeneral,
        finalState: StateUnitGeneral,
        initialTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        finalTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationTime: number,
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        shift: proto_cycle_pb.Shift,
        stateRegister: Timeline.StateTimeline,
    }

    export enum StateTimeline {
    UNKNOWN = 0,
    IN_PROGRESS = 1,
    CLOSED = 2,
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
    getCurrentTimeline(): Timeline | undefined;
    setCurrentTimeline(value?: Timeline): UnitCurrentTimeline;

    getState(): StateUnitGeneral;
    setState(value: StateUnitGeneral): UnitCurrentTimeline;

    clearHystoryShiftList(): void;
    getHystoryShiftList(): Array<Timeline>;
    setHystoryShiftList(value: Array<Timeline>): UnitCurrentTimeline;
    addHystoryShift(value?: Timeline, index?: number): Timeline;


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
        currentTimeline?: Timeline.AsObject,
        state: StateUnitGeneral,
        hystoryShiftList: Array<Timeline.AsObject>,
    }
}

export class TimelineRequest extends jspb.Message { 

    hasTimeline(): boolean;
    clearTimeline(): void;
    getTimeline(): Timeline | undefined;
    setTimeline(value?: Timeline): TimelineRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimelineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TimelineRequest): TimelineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimelineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimelineRequest;
    static deserializeBinaryFromReader(message: TimelineRequest, reader: jspb.BinaryReader): TimelineRequest;
}

export namespace TimelineRequest {
    export type AsObject = {
        timeline?: Timeline.AsObject,
    }
}

export class TimelineListRequest extends jspb.Message { 
    clearTruckList(): void;
    getTruckList(): Array<string>;
    setTruckList(value: Array<string>): TimelineListRequest;
    addTruck(value: string, index?: number): string;

    getInitialState(): StateUnitGeneral;
    setInitialState(value: StateUnitGeneral): TimelineListRequest;


    hasInitialTime(): boolean;
    clearInitialTime(): void;
    getInitialTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setInitialTime(value?: google_protobuf_timestamp_pb.Timestamp): TimelineListRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimelineListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TimelineListRequest): TimelineListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimelineListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimelineListRequest;
    static deserializeBinaryFromReader(message: TimelineListRequest, reader: jspb.BinaryReader): TimelineListRequest;
}

export namespace TimelineListRequest {
    export type AsObject = {
        truckList: Array<string>,
        initialState: StateUnitGeneral,
        initialTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TimelinesShiftRequest extends jspb.Message { 

    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): TimelinesShiftRequest;

    getShift(): proto_cycle_pb.Shift;
    setShift(value: proto_cycle_pb.Shift): TimelinesShiftRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimelinesShiftRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TimelinesShiftRequest): TimelinesShiftRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimelinesShiftRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimelinesShiftRequest;
    static deserializeBinaryFromReader(message: TimelinesShiftRequest, reader: jspb.BinaryReader): TimelinesShiftRequest;
}

export namespace TimelinesShiftRequest {
    export type AsObject = {
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        shift: proto_cycle_pb.Shift,
    }
}

export class TimelineResponse extends jspb.Message { 

    hasTimeline(): boolean;
    clearTimeline(): void;
    getTimeline(): Timeline | undefined;
    setTimeline(value?: Timeline): TimelineResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimelineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TimelineResponse): TimelineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimelineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimelineResponse;
    static deserializeBinaryFromReader(message: TimelineResponse, reader: jspb.BinaryReader): TimelineResponse;
}

export namespace TimelineResponse {
    export type AsObject = {
        timeline?: Timeline.AsObject,
    }
}

export class TimelineListResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): TimelineListResponse;

    getMessage(): string;
    setMessage(value: string): TimelineListResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimelineListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TimelineListResponse): TimelineListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimelineListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimelineListResponse;
    static deserializeBinaryFromReader(message: TimelineListResponse, reader: jspb.BinaryReader): TimelineListResponse;
}

export namespace TimelineListResponse {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}

export class TimelinesShiftResponse extends jspb.Message { 

    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): TimelinesShiftResponse;

    clearCurrentTimelineList(): void;
    getCurrentTimelineList(): Array<UnitCurrentTimeline>;
    setCurrentTimelineList(value: Array<UnitCurrentTimeline>): TimelinesShiftResponse;
    addCurrentTimeline(value?: UnitCurrentTimeline, index?: number): UnitCurrentTimeline;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimelinesShiftResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TimelinesShiftResponse): TimelinesShiftResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimelinesShiftResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimelinesShiftResponse;
    static deserializeBinaryFromReader(message: TimelinesShiftResponse, reader: jspb.BinaryReader): TimelinesShiftResponse;
}

export namespace TimelinesShiftResponse {
    export type AsObject = {
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        currentTimelineList: Array<UnitCurrentTimeline.AsObject>,
    }
}

export enum StateUnitGeneral {
    UNKNOWN_STATE = 0,
    UPLOAD = 1,
    DOWNLOAD = 2,
    TO_UPLOAD = 3,
    TO_DOWNLOAD = 4,
    WAITING = 5,
    QUEUE = 6,
    MANTO = 7,
    STANDBY = 8,
    INSPECTION = 9,
    LOAD_FUEL = 10,
    LOAD_WATER = 11,
    OPERATIONAL = 12,
    DELAY_OPERATIONAL = 13,
}
