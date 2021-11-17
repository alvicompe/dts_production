// package: pb
// file: proto/report.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_cycle_pb from "../proto/cycle_pb";
import * as proto_truck_pb from "../proto/truck_pb";
import * as proto_excavator_pb from "../proto/excavator_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TruckReport extends jspb.Message { 
    getId(): string;
    setId(value: string): TruckReport;

    getDeviceId(): string;
    setDeviceId(value: string): TruckReport;


    hasTruck(): boolean;
    clearTruck(): void;
    getTruck(): proto_truck_pb.Truck | undefined;
    setTruck(value?: proto_truck_pb.Truck): TruckReport;

    clearCycleList(): void;
    getCycleList(): Array<proto_cycle_pb.Cycle>;
    setCycleList(value: Array<proto_cycle_pb.Cycle>): TruckReport;
    addCycle(value?: proto_cycle_pb.Cycle, index?: number): proto_cycle_pb.Cycle;

    getLenDme(): number;
    setLenDme(value: number): TruckReport;

    getLenPad(): number;
    setLenPad(value: number): TruckReport;

    getLen(): number;
    setLen(value: number): TruckReport;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckReport.AsObject;
    static toObject(includeInstance: boolean, msg: TruckReport): TruckReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckReport;
    static deserializeBinaryFromReader(message: TruckReport, reader: jspb.BinaryReader): TruckReport;
}

export namespace TruckReport {
    export type AsObject = {
        id: string,
        deviceId: string,
        truck?: proto_truck_pb.Truck.AsObject,
        cycleList: Array<proto_cycle_pb.Cycle.AsObject>,
        lenDme: number,
        lenPad: number,
        len: number,
    }
}

export class ExcavatorReport extends jspb.Message { 
    getId(): string;
    setId(value: string): ExcavatorReport;

    getDeviceId(): string;
    setDeviceId(value: string): ExcavatorReport;


    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): proto_excavator_pb.Excavator | undefined;
    setExcavator(value?: proto_excavator_pb.Excavator): ExcavatorReport;

    clearCycleList(): void;
    getCycleList(): Array<proto_cycle_pb.Cycle>;
    setCycleList(value: Array<proto_cycle_pb.Cycle>): ExcavatorReport;
    addCycle(value?: proto_cycle_pb.Cycle, index?: number): proto_cycle_pb.Cycle;

    getLenDme(): number;
    setLenDme(value: number): ExcavatorReport;

    getLenPad(): number;
    setLenPad(value: number): ExcavatorReport;

    getLen(): number;
    setLen(value: number): ExcavatorReport;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorReport.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorReport): ExcavatorReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorReport;
    static deserializeBinaryFromReader(message: ExcavatorReport, reader: jspb.BinaryReader): ExcavatorReport;
}

export namespace ExcavatorReport {
    export type AsObject = {
        id: string,
        deviceId: string,
        excavator?: proto_excavator_pb.Excavator.AsObject,
        cycleList: Array<proto_cycle_pb.Cycle.AsObject>,
        lenDme: number,
        lenPad: number,
        len: number,
    }
}

export class ReportRequest extends jspb.Message { 

    hasDateStart(): boolean;
    clearDateStart(): void;
    getDateStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateStart(value?: google_protobuf_timestamp_pb.Timestamp): ReportRequest;


    hasDateEnd(): boolean;
    clearDateEnd(): void;
    getDateEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateEnd(value?: google_protobuf_timestamp_pb.Timestamp): ReportRequest;

    getShift(): proto_cycle_pb.Shift;
    setShift(value: proto_cycle_pb.Shift): ReportRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReportRequest): ReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportRequest;
    static deserializeBinaryFromReader(message: ReportRequest, reader: jspb.BinaryReader): ReportRequest;
}

export namespace ReportRequest {
    export type AsObject = {
        dateStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dateEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        shift: proto_cycle_pb.Shift,
    }
}

export class DownloadRequest extends jspb.Message { 

    hasDateStart(): boolean;
    clearDateStart(): void;
    getDateStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateStart(value?: google_protobuf_timestamp_pb.Timestamp): DownloadRequest;


    hasDateEnd(): boolean;
    clearDateEnd(): void;
    getDateEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateEnd(value?: google_protobuf_timestamp_pb.Timestamp): DownloadRequest;

    getShift(): proto_cycle_pb.Shift;
    setShift(value: proto_cycle_pb.Shift): DownloadRequest;

    getAllTruck(): boolean;
    setAllTruck(value: boolean): DownloadRequest;

    clearTruckList(): void;
    getTruckList(): Array<proto_truck_pb.Truck>;
    setTruckList(value: Array<proto_truck_pb.Truck>): DownloadRequest;
    addTruck(value?: proto_truck_pb.Truck, index?: number): proto_truck_pb.Truck;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadRequest): DownloadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadRequest;
    static deserializeBinaryFromReader(message: DownloadRequest, reader: jspb.BinaryReader): DownloadRequest;
}

export namespace DownloadRequest {
    export type AsObject = {
        dateStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dateEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        shift: proto_cycle_pb.Shift,
        allTruck: boolean,
        truckList: Array<proto_truck_pb.Truck.AsObject>,
    }
}

export class ReportResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): ReportResponse;

    getMessage(): string;
    setMessage(value: string): ReportResponse;

    clearTruckCycleList(): void;
    getTruckCycleList(): Array<TruckReport>;
    setTruckCycleList(value: Array<TruckReport>): ReportResponse;
    addTruckCycle(value?: TruckReport, index?: number): TruckReport;

    clearExcavatorCycleList(): void;
    getExcavatorCycleList(): Array<ExcavatorReport>;
    setExcavatorCycleList(value: Array<ExcavatorReport>): ReportResponse;
    addExcavatorCycle(value?: ExcavatorReport, index?: number): ExcavatorReport;

    getLenDme(): number;
    setLenDme(value: number): ReportResponse;

    getLenPad(): number;
    setLenPad(value: number): ReportResponse;

    getLen(): number;
    setLen(value: number): ReportResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReportResponse): ReportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportResponse;
    static deserializeBinaryFromReader(message: ReportResponse, reader: jspb.BinaryReader): ReportResponse;
}

export namespace ReportResponse {
    export type AsObject = {
        status: boolean,
        message: string,
        truckCycleList: Array<TruckReport.AsObject>,
        excavatorCycleList: Array<ExcavatorReport.AsObject>,
        lenDme: number,
        lenPad: number,
        len: number,
    }
}

export class DownloadResponse extends jspb.Message { 
    getFileName(): string;
    setFileName(value: string): DownloadResponse;

    getSuccess(): boolean;
    setSuccess(value: boolean): DownloadResponse;

    getFile(): Uint8Array | string;
    getFile_asU8(): Uint8Array;
    getFile_asB64(): string;
    setFile(value: Uint8Array | string): DownloadResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadResponse): DownloadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadResponse;
    static deserializeBinaryFromReader(message: DownloadResponse, reader: jspb.BinaryReader): DownloadResponse;
}

export namespace DownloadResponse {
    export type AsObject = {
        fileName: string,
        success: boolean,
        file: Uint8Array | string,
    }
}
