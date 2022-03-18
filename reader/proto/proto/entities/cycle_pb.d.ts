// package: pb
// file: proto/entities/cycle.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
import * as proto_entities_excavator_pb from "../../proto/entities/excavator_pb";
import * as proto_entities_material_pb from "../../proto/entities/material_pb";
import * as proto_entities_streaming_pb from "../../proto/entities/streaming_pb";
import * as proto_entities_load_pb from "../../proto/entities/load_pb";
import * as proto_entities_audit_pb from "../../proto/entities/audit_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Cycle extends jspb.Message { 
    getId(): string;
    setId(value: string): Cycle;

    getOperationId(): string;
    setOperationId(value: string): Cycle;

    getName(): string;
    setName(value: string): Cycle;

    getDescription(): string;
    setDescription(value: string): Cycle;


    hasShiftTime(): boolean;
    clearShiftTime(): void;
    getShiftTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftTime(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;


    hasArrivalTime(): boolean;
    clearArrivalTime(): void;
    getArrivalTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setArrivalTime(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;


    hasDownloadArrivalTime(): boolean;
    clearDownloadArrivalTime(): void;
    getDownloadArrivalTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDownloadArrivalTime(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;


    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;


    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;

    getNumber(): number;
    setNumber(value: number): Cycle;

    getDistance(): number;
    setDistance(value: number): Cycle;

    getDuration(): number;
    setDuration(value: number): Cycle;

    getMode(): Cycle.Mode;
    setMode(value: Cycle.Mode): Cycle;

    getState(): Cycle.State;
    setState(value: Cycle.State): Cycle;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): Cycle;


    hasShiftDate(): boolean;
    clearShiftDate(): void;
    getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;


    hasUpload(): boolean;
    clearUpload(): void;
    getUpload(): proto_entities_load_pb.Upload | undefined;
    setUpload(value?: proto_entities_load_pb.Upload): Cycle;


    hasDownload(): boolean;
    clearDownload(): void;
    getDownload(): proto_entities_load_pb.Download | undefined;
    setDownload(value?: proto_entities_load_pb.Download): Cycle;


    hasMaterial(): boolean;
    clearMaterial(): void;
    getMaterial(): proto_entities_material_pb.Material | undefined;
    setMaterial(value?: proto_entities_material_pb.Material): Cycle;


    hasTruck(): boolean;
    clearTruck(): void;
    getTruck(): proto_entities_truck_pb.Truck | undefined;
    setTruck(value?: proto_entities_truck_pb.Truck): Cycle;


    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): proto_entities_excavator_pb.Excavator | undefined;
    setExcavator(value?: proto_entities_excavator_pb.Excavator): Cycle;

    clearTruckinfoList(): void;
    getTruckinfoList(): Array<proto_entities_streaming_pb.TruckInfo>;
    setTruckinfoList(value: Array<proto_entities_streaming_pb.TruckInfo>): Cycle;
    addTruckinfo(value?: proto_entities_streaming_pb.TruckInfo, index?: number): proto_entities_streaming_pb.TruckInfo;


    hasAudit(): boolean;
    clearAudit(): void;
    getAudit(): proto_entities_audit_pb.Audit | undefined;
    setAudit(value?: proto_entities_audit_pb.Audit): Cycle;

    getManual(): boolean;
    setManual(value: boolean): Cycle;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cycle.AsObject;
    static toObject(includeInstance: boolean, msg: Cycle): Cycle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cycle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cycle;
    static deserializeBinaryFromReader(message: Cycle, reader: jspb.BinaryReader): Cycle;
}

export namespace Cycle {
    export type AsObject = {
        id: string,
        operationId: string,
        name: string,
        description: string,
        shiftTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        arrivalTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        downloadArrivalTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        number: number,
        distance: number,
        duration: number,
        mode: Cycle.Mode,
        state: Cycle.State,
        shift: proto_enums_shift_enums_pb.Shift,
        shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        upload?: proto_entities_load_pb.Upload.AsObject,
        download?: proto_entities_load_pb.Download.AsObject,
        material?: proto_entities_material_pb.Material.AsObject,
        truck?: proto_entities_truck_pb.Truck.AsObject,
        excavator?: proto_entities_excavator_pb.Excavator.AsObject,
        truckinfoList: Array<proto_entities_streaming_pb.TruckInfo.AsObject>,
        audit?: proto_entities_audit_pb.Audit.AsObject,
        manual: boolean,
    }

    export enum State {
    UNKNOWN_STATE = 0,
    OPENED = 1,
    CLOSED = 2,
    }

    export enum Mode {
    UNKNOWN_MODE = 0,
    NORMAL = 1,
    ALTERED = 2,
    MANUAL = 3,
    }

}
