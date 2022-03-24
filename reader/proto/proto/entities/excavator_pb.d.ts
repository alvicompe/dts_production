// package: pb
// file: proto/entities/excavator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_contractor_pb from "../../proto/entities/contractor_pb";
import * as proto_entities_sensor_pb from "../../proto/entities/sensor_pb";
import * as proto_entities_load_pb from "../../proto/entities/load_pb";

export class TruckTemporal extends jspb.Message { 
    getId(): string;
    setId(value: string): TruckTemporal;

    getDeviceId(): string;
    setDeviceId(value: string): TruckTemporal;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): TruckTemporal;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckTemporal.AsObject;
    static toObject(includeInstance: boolean, msg: TruckTemporal): TruckTemporal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckTemporal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckTemporal;
    static deserializeBinaryFromReader(message: TruckTemporal, reader: jspb.BinaryReader): TruckTemporal;
}

export namespace TruckTemporal {
    export type AsObject = {
        id: string,
        deviceId: string,
        deviceAlias: string,
    }
}

export class OperationAssignmentExcavator extends jspb.Message { 
    getId(): string;
    setId(value: string): OperationAssignmentExcavator;


    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): Excavator | undefined;
    setExcavator(value?: Excavator): OperationAssignmentExcavator;

    clearTruckList(): void;
    getTruckList(): Array<TruckTemporal>;
    setTruckList(value: Array<TruckTemporal>): OperationAssignmentExcavator;
    addTruck(value?: TruckTemporal, index?: number): TruckTemporal;


    hasUpload(): boolean;
    clearUpload(): void;
    getUpload(): proto_entities_load_pb.Upload | undefined;
    setUpload(value?: proto_entities_load_pb.Upload): OperationAssignmentExcavator;


    hasDownload(): boolean;
    clearDownload(): void;
    getDownload(): proto_entities_load_pb.Download | undefined;
    setDownload(value?: proto_entities_load_pb.Download): OperationAssignmentExcavator;

    getShift(): OperationAssignmentExcavator.Shift;
    setShift(value: OperationAssignmentExcavator.Shift): OperationAssignmentExcavator;

    getState(): OperationAssignmentExcavator.State;
    setState(value: OperationAssignmentExcavator.State): OperationAssignmentExcavator;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationAssignmentExcavator.AsObject;
    static toObject(includeInstance: boolean, msg: OperationAssignmentExcavator): OperationAssignmentExcavator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationAssignmentExcavator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationAssignmentExcavator;
    static deserializeBinaryFromReader(message: OperationAssignmentExcavator, reader: jspb.BinaryReader): OperationAssignmentExcavator;
}

export namespace OperationAssignmentExcavator {
    export type AsObject = {
        id: string,
        excavator?: Excavator.AsObject,
        truckList: Array<TruckTemporal.AsObject>,
        upload?: proto_entities_load_pb.Upload.AsObject,
        download?: proto_entities_load_pb.Download.AsObject,
        shift: OperationAssignmentExcavator.Shift,
        state: OperationAssignmentExcavator.State,
    }

    export enum Shift {
    UNKNOWN_SHIFT = 0,
    NIGHT = 1,
    DAY = 2,
    }

    export enum State {
    UNKNOWN_STATE = 0,
    PENDING = 1,
    OPENED = 2,
    CLOSED = 3,
    }

}

export class Excavator extends jspb.Message { 
    getId(): string;
    setId(value: string): Excavator;

    getDeviceId(): string;
    setDeviceId(value: string): Excavator;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): Excavator;

    getDeviceInterval(): number;
    setDeviceInterval(value: number): Excavator;

    getDescription(): string;
    setDescription(value: string): Excavator;

    getPlate(): string;
    setPlate(value: string): Excavator;

    getHourmeter(): number;
    setHourmeter(value: number): Excavator;


    hasContractor(): boolean;
    clearContractor(): void;
    getContractor(): proto_entities_contractor_pb.Contractor | undefined;
    setContractor(value?: proto_entities_contractor_pb.Contractor): Excavator;


    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): proto_entities_sensor_pb.Sensor | undefined;
    setSensor(value?: proto_entities_sensor_pb.Sensor): Excavator;

    clearOperationList(): void;
    getOperationList(): Array<OperationAssignmentExcavator>;
    setOperationList(value: Array<OperationAssignmentExcavator>): Excavator;
    addOperation(value?: OperationAssignmentExcavator, index?: number): OperationAssignmentExcavator;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Excavator.AsObject;
    static toObject(includeInstance: boolean, msg: Excavator): Excavator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Excavator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Excavator;
    static deserializeBinaryFromReader(message: Excavator, reader: jspb.BinaryReader): Excavator;
}

export namespace Excavator {
    export type AsObject = {
        id: string,
        deviceId: string,
        deviceAlias: string,
        deviceInterval: number,
        description: string,
        plate: string,
        hourmeter: number,
        contractor?: proto_entities_contractor_pb.Contractor.AsObject,
        sensor?: proto_entities_sensor_pb.Sensor.AsObject,
        operationList: Array<OperationAssignmentExcavator.AsObject>,
    }
}
