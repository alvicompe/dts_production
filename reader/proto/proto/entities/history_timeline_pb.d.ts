// package: pb
// file: proto/entities/history_timeline.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_entities_timeline_pb from "../../proto/entities/timeline_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";

export class HistoryTimeline extends jspb.Message { 
    getId(): string;
    setId(value: string): HistoryTimeline;

    getDeviceId(): string;
    setDeviceId(value: string): HistoryTimeline;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): HistoryTimeline;

    getCurrentTimelineId(): string;
    setCurrentTimelineId(value: string): HistoryTimeline;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): HistoryTimeline;


    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): HistoryTimeline;

    getAssetType(): proto_enums_asset_type_enums_pb.EnumAssetType;
    setAssetType(value: proto_enums_asset_type_enums_pb.EnumAssetType): HistoryTimeline;

    clearHistoryShiftList(): void;
    getHistoryShiftList(): Array<proto_entities_timeline_pb.Timeline>;
    setHistoryShiftList(value: Array<proto_entities_timeline_pb.Timeline>): HistoryTimeline;
    addHistoryShift(value?: proto_entities_timeline_pb.Timeline, index?: number): proto_entities_timeline_pb.Timeline;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HistoryTimeline.AsObject;
    static toObject(includeInstance: boolean, msg: HistoryTimeline): HistoryTimeline.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HistoryTimeline, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HistoryTimeline;
    static deserializeBinaryFromReader(message: HistoryTimeline, reader: jspb.BinaryReader): HistoryTimeline;
}

export namespace HistoryTimeline {
    export type AsObject = {
        id: string,
        deviceId: string,
        deviceAlias: string,
        currentTimelineId: string,
        shift: proto_enums_shift_enums_pb.Shift,
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        assetType: proto_enums_asset_type_enums_pb.EnumAssetType,
        historyShiftList: Array<proto_entities_timeline_pb.Timeline.AsObject>,
    }
}
