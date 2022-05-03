// package: pb
// file: proto/services/report_timeline.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_services_report_services_pb from "../../proto/services/report.services_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";

export class kpiDashboardResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): kpiDashboardResponse;

    getMessage(): string;
    setMessage(value: string): kpiDashboardResponse;


    hasDay(): boolean;
    clearDay(): void;
    getDay(): KpiIndicator | undefined;
    setDay(value?: KpiIndicator): kpiDashboardResponse;


    hasNight(): boolean;
    clearNight(): void;
    getNight(): KpiIndicator | undefined;
    setNight(value?: KpiIndicator): kpiDashboardResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): kpiDashboardResponse.AsObject;
    static toObject(includeInstance: boolean, msg: kpiDashboardResponse): kpiDashboardResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: kpiDashboardResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): kpiDashboardResponse;
    static deserializeBinaryFromReader(message: kpiDashboardResponse, reader: jspb.BinaryReader): kpiDashboardResponse;
}

export namespace kpiDashboardResponse {
    export type AsObject = {
        status: boolean,
        message: string,
        day?: KpiIndicator.AsObject,
        night?: KpiIndicator.AsObject,
    }
}

export class KpiIndicator extends jspb.Message { 

    hasLoad(): boolean;
    clearLoad(): void;
    getLoad(): KpiUnit | undefined;
    setLoad(value?: KpiUnit): KpiIndicator;


    hasHaulage(): boolean;
    clearHaulage(): void;
    getHaulage(): KpiUnit | undefined;
    setHaulage(value?: KpiUnit): KpiIndicator;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KpiIndicator.AsObject;
    static toObject(includeInstance: boolean, msg: KpiIndicator): KpiIndicator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KpiIndicator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KpiIndicator;
    static deserializeBinaryFromReader(message: KpiIndicator, reader: jspb.BinaryReader): KpiIndicator;
}

export namespace KpiIndicator {
    export type AsObject = {
        load?: KpiUnit.AsObject,
        haulage?: KpiUnit.AsObject,
    }
}

export class KpiUnit extends jspb.Message { 
    clearLabelDaysReportList(): void;
    getLabelDaysReportList(): Array<string>;
    setLabelDaysReportList(value: Array<string>): KpiUnit;
    addLabelDaysReport(value: string, index?: number): string;

    clearMechanicalAvailabilityList(): void;
    getMechanicalAvailabilityList(): Array<number>;
    setMechanicalAvailabilityList(value: Array<number>): KpiUnit;
    addMechanicalAvailability(value: number, index?: number): number;

    clearUtilizationList(): void;
    getUtilizationList(): Array<number>;
    setUtilizationList(value: Array<number>): KpiUnit;
    addUtilization(value: number, index?: number): number;

    clearProductivityList(): void;
    getProductivityList(): Array<number>;
    setProductivityList(value: Array<number>): KpiUnit;
    addProductivity(value: number, index?: number): number;

    getTodayMechanicalAvailability(): number;
    setTodayMechanicalAvailability(value: number): KpiUnit;

    getTodayUtilization(): number;
    setTodayUtilization(value: number): KpiUnit;

    getTodayProductivity(): number;
    setTodayProductivity(value: number): KpiUnit;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KpiUnit.AsObject;
    static toObject(includeInstance: boolean, msg: KpiUnit): KpiUnit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KpiUnit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KpiUnit;
    static deserializeBinaryFromReader(message: KpiUnit, reader: jspb.BinaryReader): KpiUnit;
}

export namespace KpiUnit {
    export type AsObject = {
        labelDaysReportList: Array<string>,
        mechanicalAvailabilityList: Array<number>,
        utilizationList: Array<number>,
        productivityList: Array<number>,
        todayMechanicalAvailability: number,
        todayUtilization: number,
        todayProductivity: number,
    }
}

export class DownloadTimelineRequest extends jspb.Message { 

    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): DownloadTimelineRequest;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): DownloadTimelineRequest;

    getAssetType(): proto_enums_asset_type_enums_pb.EnumAssetType;
    setAssetType(value: proto_enums_asset_type_enums_pb.EnumAssetType): DownloadTimelineRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadTimelineRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadTimelineRequest): DownloadTimelineRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadTimelineRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadTimelineRequest;
    static deserializeBinaryFromReader(message: DownloadTimelineRequest, reader: jspb.BinaryReader): DownloadTimelineRequest;
}

export namespace DownloadTimelineRequest {
    export type AsObject = {
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        shift: proto_enums_shift_enums_pb.Shift,
        assetType: proto_enums_asset_type_enums_pb.EnumAssetType,
    }
}
