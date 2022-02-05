// package: pb
// file: proto/services/report.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_report_pb from "../../proto/entities/report_pb";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ReportRequest extends jspb.Message { 

    hasDateStart(): boolean;
    clearDateStart(): void;
    getDateStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateStart(value?: google_protobuf_timestamp_pb.Timestamp): ReportRequest;


    hasDateEnd(): boolean;
    clearDateEnd(): void;
    getDateEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateEnd(value?: google_protobuf_timestamp_pb.Timestamp): ReportRequest;


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

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): DownloadRequest;

    getAllTruck(): boolean;
    setAllTruck(value: boolean): DownloadRequest;

    clearTruckList(): void;
    getTruckList(): Array<proto_entities_truck_pb.Truck>;
    setTruckList(value: Array<proto_entities_truck_pb.Truck>): DownloadRequest;
    addTruck(value?: proto_entities_truck_pb.Truck, index?: number): proto_entities_truck_pb.Truck;


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
        shift: proto_enums_shift_enums_pb.Shift,
        allTruck: boolean,
        truckList: Array<proto_entities_truck_pb.Truck.AsObject>,
    }
}

export class ReportPerformancePerHourResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): ReportPerformancePerHourResponse;

    getMessage(): string;
    setMessage(value: string): ReportPerformancePerHourResponse;


    hasDay(): boolean;
    clearDay(): void;
    getDay(): proto_entities_report_pb.ReportPerformancePerHour | undefined;
    setDay(value?: proto_entities_report_pb.ReportPerformancePerHour): ReportPerformancePerHourResponse;


    hasNight(): boolean;
    clearNight(): void;
    getNight(): proto_entities_report_pb.ReportPerformancePerHour | undefined;
    setNight(value?: proto_entities_report_pb.ReportPerformancePerHour): ReportPerformancePerHourResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportPerformancePerHourResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReportPerformancePerHourResponse): ReportPerformancePerHourResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportPerformancePerHourResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportPerformancePerHourResponse;
    static deserializeBinaryFromReader(message: ReportPerformancePerHourResponse, reader: jspb.BinaryReader): ReportPerformancePerHourResponse;
}

export namespace ReportPerformancePerHourResponse {
    export type AsObject = {
        status: boolean,
        message: string,
        day?: proto_entities_report_pb.ReportPerformancePerHour.AsObject,
        night?: proto_entities_report_pb.ReportPerformancePerHour.AsObject,
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
