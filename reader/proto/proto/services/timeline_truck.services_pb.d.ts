// package: pb
// file: proto/services/timeline_truck.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_unit_pb from "../../proto/entities/unit_pb";
import * as proto_entities_timeline_pb from "../../proto/entities/timeline_pb";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";
import * as proto_entities_unit_current_timeline_pb from "../../proto/entities/unit_current_timeline_pb";
import * as proto_enums_event_enums_pb from "../../proto/enums/event.enums_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";

export class UnitFinalize extends jspb.Message { 

    hasTruck(): boolean;
    clearTruck(): void;
    getTruck(): proto_entities_unit_pb.Unit | undefined;
    setTruck(value?: proto_entities_unit_pb.Unit): UnitFinalize;

    getHourmeter(): number;
    setHourmeter(value: number): UnitFinalize;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnitFinalize.AsObject;
    static toObject(includeInstance: boolean, msg: UnitFinalize): UnitFinalize.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnitFinalize, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnitFinalize;
    static deserializeBinaryFromReader(message: UnitFinalize, reader: jspb.BinaryReader): UnitFinalize;
}

export namespace UnitFinalize {
    export type AsObject = {
        truck?: proto_entities_unit_pb.Unit.AsObject,
        hourmeter: number,
    }
}

export class CurrentTimelineByTruckRequest extends jspb.Message { 

    hasTruck(): boolean;
    clearTruck(): void;
    getTruck(): proto_entities_unit_pb.Unit | undefined;
    setTruck(value?: proto_entities_unit_pb.Unit): CurrentTimelineByTruckRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentTimelineByTruckRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentTimelineByTruckRequest): CurrentTimelineByTruckRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentTimelineByTruckRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentTimelineByTruckRequest;
    static deserializeBinaryFromReader(message: CurrentTimelineByTruckRequest, reader: jspb.BinaryReader): CurrentTimelineByTruckRequest;
}

export namespace CurrentTimelineByTruckRequest {
    export type AsObject = {
        truck?: proto_entities_unit_pb.Unit.AsObject,
    }
}

export class TimelineRequest extends jspb.Message { 

    hasTimeline(): boolean;
    clearTimeline(): void;
    getTimeline(): proto_entities_timeline_pb.Timeline | undefined;
    setTimeline(value?: proto_entities_timeline_pb.Timeline): TimelineRequest;


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
        timeline?: proto_entities_timeline_pb.Timeline.AsObject,
    }
}

export class Asset extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): Asset;

    getAssetType(): proto_enums_asset_type_enums_pb.EnumAssetType;
    setAssetType(value: proto_enums_asset_type_enums_pb.EnumAssetType): Asset;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Asset.AsObject;
    static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Asset;
    static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
    export type AsObject = {
        deviceId: string,
        assetType: proto_enums_asset_type_enums_pb.EnumAssetType,
    }
}

export class TimelineListRequest extends jspb.Message { 
    clearTruckList(): void;
    getTruckList(): Array<string>;
    setTruckList(value: Array<string>): TimelineListRequest;
    addTruck(value: string, index?: number): string;

    getInitialState(): proto_enums_event_enums_pb.EnumEvent;
    setInitialState(value: proto_enums_event_enums_pb.EnumEvent): TimelineListRequest;


    hasInitialEventState(): boolean;
    clearInitialEventState(): void;
    getInitialEventState(): proto_entities_event_state_pb.EventState | undefined;
    setInitialEventState(value?: proto_entities_event_state_pb.EventState): TimelineListRequest;


    hasInitialTime(): boolean;
    clearInitialTime(): void;
    getInitialTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setInitialTime(value?: google_protobuf_timestamp_pb.Timestamp): TimelineListRequest;

    clearAssetsList(): void;
    getAssetsList(): Array<Asset>;
    setAssetsList(value: Array<Asset>): TimelineListRequest;
    addAssets(value?: Asset, index?: number): Asset;


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
        initialState: proto_enums_event_enums_pb.EnumEvent,
        initialEventState?: proto_entities_event_state_pb.EventState.AsObject,
        initialTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        assetsList: Array<Asset.AsObject>,
    }
}

export class TimelinesShiftRequest extends jspb.Message { 

    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): TimelinesShiftRequest;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): TimelinesShiftRequest;


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
        shift: proto_enums_shift_enums_pb.Shift,
    }
}

export class TimelineFinalizeShiftRequest extends jspb.Message { 
    clearTruckList(): void;
    getTruckList(): Array<UnitFinalize>;
    setTruckList(value: Array<UnitFinalize>): TimelineFinalizeShiftRequest;
    addTruck(value?: UnitFinalize, index?: number): UnitFinalize;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): TimelineFinalizeShiftRequest;


    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): TimelineFinalizeShiftRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimelineFinalizeShiftRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TimelineFinalizeShiftRequest): TimelineFinalizeShiftRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimelineFinalizeShiftRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimelineFinalizeShiftRequest;
    static deserializeBinaryFromReader(message: TimelineFinalizeShiftRequest, reader: jspb.BinaryReader): TimelineFinalizeShiftRequest;
}

export namespace TimelineFinalizeShiftRequest {
    export type AsObject = {
        truckList: Array<UnitFinalize.AsObject>,
        shift: proto_enums_shift_enums_pb.Shift,
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TimelineResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): TimelineResponse;


    hasTimeline(): boolean;
    clearTimeline(): void;
    getTimeline(): proto_entities_timeline_pb.Timeline | undefined;
    setTimeline(value?: proto_entities_timeline_pb.Timeline): TimelineResponse;

    clearErrorsList(): void;
    getErrorsList(): Array<ErrorTimeline>;
    setErrorsList(value: Array<ErrorTimeline>): TimelineResponse;
    addErrors(value?: ErrorTimeline, index?: number): ErrorTimeline;


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
        success: boolean,
        timeline?: proto_entities_timeline_pb.Timeline.AsObject,
        errorsList: Array<ErrorTimeline.AsObject>,
    }
}

export class ErrorTimeline extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): ErrorTimeline;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): ErrorTimeline;

    getMessage(): string;
    setMessage(value: string): ErrorTimeline;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorTimeline.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorTimeline): ErrorTimeline.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorTimeline, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorTimeline;
    static deserializeBinaryFromReader(message: ErrorTimeline, reader: jspb.BinaryReader): ErrorTimeline;
}

export namespace ErrorTimeline {
    export type AsObject = {
        deviceId: string,
        deviceAlias: string,
        message: string,
    }
}

export class TimelineListResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): TimelineListResponse;

    getMessage(): string;
    setMessage(value: string): TimelineListResponse;

    clearTimelinesList(): void;
    getTimelinesList(): Array<proto_entities_unit_current_timeline_pb.UnitCurrentTimeline>;
    setTimelinesList(value: Array<proto_entities_unit_current_timeline_pb.UnitCurrentTimeline>): TimelineListResponse;
    addTimelines(value?: proto_entities_unit_current_timeline_pb.UnitCurrentTimeline, index?: number): proto_entities_unit_current_timeline_pb.UnitCurrentTimeline;

    clearErrorsList(): void;
    getErrorsList(): Array<ErrorTimeline>;
    setErrorsList(value: Array<ErrorTimeline>): TimelineListResponse;
    addErrors(value?: ErrorTimeline, index?: number): ErrorTimeline;


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
        timelinesList: Array<proto_entities_unit_current_timeline_pb.UnitCurrentTimeline.AsObject>,
        errorsList: Array<ErrorTimeline.AsObject>,
    }
}

export class TimelinesShiftResponse extends jspb.Message { 

    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): TimelinesShiftResponse;

    clearCurrentTimelineList(): void;
    getCurrentTimelineList(): Array<proto_entities_unit_current_timeline_pb.UnitCurrentTimeline>;
    setCurrentTimelineList(value: Array<proto_entities_unit_current_timeline_pb.UnitCurrentTimeline>): TimelinesShiftResponse;
    addCurrentTimeline(value?: proto_entities_unit_current_timeline_pb.UnitCurrentTimeline, index?: number): proto_entities_unit_current_timeline_pb.UnitCurrentTimeline;


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
        currentTimelineList: Array<proto_entities_unit_current_timeline_pb.UnitCurrentTimeline.AsObject>,
    }
}

export class UnitCurrentTimelineRequest extends jspb.Message { 

    hasTruck(): boolean;
    clearTruck(): void;
    getTruck(): UnitFinalize | undefined;
    setTruck(value?: UnitFinalize): UnitCurrentTimelineRequest;


    hasCurrentTimeline(): boolean;
    clearCurrentTimeline(): void;
    getCurrentTimeline(): proto_entities_unit_current_timeline_pb.UnitCurrentTimeline | undefined;
    setCurrentTimeline(value?: proto_entities_unit_current_timeline_pb.UnitCurrentTimeline): UnitCurrentTimelineRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnitCurrentTimelineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnitCurrentTimelineRequest): UnitCurrentTimelineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnitCurrentTimelineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnitCurrentTimelineRequest;
    static deserializeBinaryFromReader(message: UnitCurrentTimelineRequest, reader: jspb.BinaryReader): UnitCurrentTimelineRequest;
}

export namespace UnitCurrentTimelineRequest {
    export type AsObject = {
        truck?: UnitFinalize.AsObject,
        currentTimeline?: proto_entities_unit_current_timeline_pb.UnitCurrentTimeline.AsObject,
    }
}

export class UnitCurrentTimelineResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): UnitCurrentTimelineResponse;

    getMessage(): string;
    setMessage(value: string): UnitCurrentTimelineResponse;


    hasCurrentTimeline(): boolean;
    clearCurrentTimeline(): void;
    getCurrentTimeline(): proto_entities_unit_current_timeline_pb.UnitCurrentTimeline | undefined;
    setCurrentTimeline(value?: proto_entities_unit_current_timeline_pb.UnitCurrentTimeline): UnitCurrentTimelineResponse;

    clearErrorsList(): void;
    getErrorsList(): Array<ErrorTimeline>;
    setErrorsList(value: Array<ErrorTimeline>): UnitCurrentTimelineResponse;
    addErrors(value?: ErrorTimeline, index?: number): ErrorTimeline;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnitCurrentTimelineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnitCurrentTimelineResponse): UnitCurrentTimelineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnitCurrentTimelineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnitCurrentTimelineResponse;
    static deserializeBinaryFromReader(message: UnitCurrentTimelineResponse, reader: jspb.BinaryReader): UnitCurrentTimelineResponse;
}

export namespace UnitCurrentTimelineResponse {
    export type AsObject = {
        success: boolean,
        message: string,
        currentTimeline?: proto_entities_unit_current_timeline_pb.UnitCurrentTimeline.AsObject,
        errorsList: Array<ErrorTimeline.AsObject>,
    }
}
