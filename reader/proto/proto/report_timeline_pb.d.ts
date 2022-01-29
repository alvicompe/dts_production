// package: pb
// file: proto/report_timeline.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_report_pb from "../proto/report_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class kpiDashboardResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): kpiDashboardResponse;

    getMessage(): string;
    setMessage(value: string): kpiDashboardResponse;


    hasKpiindicators(): boolean;
    clearKpiindicators(): void;
    getKpiindicators(): KpiIndicator | undefined;
    setKpiindicators(value?: KpiIndicator): kpiDashboardResponse;


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
        kpiindicators?: KpiIndicator.AsObject,
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
