// package: pb
// file: proto/services/history_timeline.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";
import * as proto_entities_history_timeline_pb from "../../proto/entities/history_timeline_pb";

export class FilterHistoryTimelineRequest extends jspb.Message { 

    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): FilterHistoryTimelineRequest;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): FilterHistoryTimelineRequest;

    getAssetType(): proto_enums_asset_type_enums_pb.EnumAssetType;
    setAssetType(value: proto_enums_asset_type_enums_pb.EnumAssetType): FilterHistoryTimelineRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterHistoryTimelineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FilterHistoryTimelineRequest): FilterHistoryTimelineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterHistoryTimelineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterHistoryTimelineRequest;
    static deserializeBinaryFromReader(message: FilterHistoryTimelineRequest, reader: jspb.BinaryReader): FilterHistoryTimelineRequest;
}

export namespace FilterHistoryTimelineRequest {
    export type AsObject = {
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        shift: proto_enums_shift_enums_pb.Shift,
        assetType: proto_enums_asset_type_enums_pb.EnumAssetType,
    }
}

export class ListHistoryTimelineResponse extends jspb.Message { 
    clearHistoryTimelinesList(): void;
    getHistoryTimelinesList(): Array<proto_entities_history_timeline_pb.HistoryTimeline>;
    setHistoryTimelinesList(value: Array<proto_entities_history_timeline_pb.HistoryTimeline>): ListHistoryTimelineResponse;
    addHistoryTimelines(value?: proto_entities_history_timeline_pb.HistoryTimeline, index?: number): proto_entities_history_timeline_pb.HistoryTimeline;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHistoryTimelineResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListHistoryTimelineResponse): ListHistoryTimelineResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHistoryTimelineResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHistoryTimelineResponse;
    static deserializeBinaryFromReader(message: ListHistoryTimelineResponse, reader: jspb.BinaryReader): ListHistoryTimelineResponse;
}

export namespace ListHistoryTimelineResponse {
    export type AsObject = {
        historyTimelinesList: Array<proto_entities_history_timeline_pb.HistoryTimeline.AsObject>,
    }
}
