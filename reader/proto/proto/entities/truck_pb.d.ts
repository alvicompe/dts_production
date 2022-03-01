// package: pb
// file: proto/entities/truck.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_contractor_pb from "../../proto/entities/contractor_pb";
import * as proto_enums_event_state_enums_pb from "../../proto/enums/event_state.enums_pb";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";
import * as proto_entities_sensor_pb from "../../proto/entities/sensor_pb";
import * as proto_entities_excavator_pb from "../../proto/entities/excavator_pb";
import * as proto_entities_load_pb from "../../proto/entities/load_pb";

export class OperationAssignmentUnit extends jspb.Message { 
    getId(): string;
    setId(value: string): OperationAssignmentUnit;


    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): proto_entities_excavator_pb.Excavator | undefined;
    setExcavator(value?: proto_entities_excavator_pb.Excavator): OperationAssignmentUnit;

    clearTruckList(): void;
    getTruckList(): Array<Truck>;
    setTruckList(value: Array<Truck>): OperationAssignmentUnit;
    addTruck(value?: Truck, index?: number): Truck;


    hasUpload(): boolean;
    clearUpload(): void;
    getUpload(): proto_entities_load_pb.Upload | undefined;
    setUpload(value?: proto_entities_load_pb.Upload): OperationAssignmentUnit;


    hasDownload(): boolean;
    clearDownload(): void;
    getDownload(): proto_entities_load_pb.Download | undefined;
    setDownload(value?: proto_entities_load_pb.Download): OperationAssignmentUnit;

    getShift(): OperationAssignmentUnit.Shift;
    setShift(value: OperationAssignmentUnit.Shift): OperationAssignmentUnit;

    getState(): OperationAssignmentUnit.State;
    setState(value: OperationAssignmentUnit.State): OperationAssignmentUnit;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationAssignmentUnit.AsObject;
    static toObject(includeInstance: boolean, msg: OperationAssignmentUnit): OperationAssignmentUnit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationAssignmentUnit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationAssignmentUnit;
    static deserializeBinaryFromReader(message: OperationAssignmentUnit, reader: jspb.BinaryReader): OperationAssignmentUnit;
}

export namespace OperationAssignmentUnit {
    export type AsObject = {
        id: string,
        excavator?: proto_entities_excavator_pb.Excavator.AsObject,
        truckList: Array<Truck.AsObject>,
        upload?: proto_entities_load_pb.Upload.AsObject,
        download?: proto_entities_load_pb.Download.AsObject,
        shift: OperationAssignmentUnit.Shift,
        state: OperationAssignmentUnit.State,
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

export class Truck extends jspb.Message { 
    getId(): string;
    setId(value: string): Truck;

    getDeviceId(): string;
    setDeviceId(value: string): Truck;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): Truck;

    getDeviceInterval(): number;
    setDeviceInterval(value: number): Truck;

    getDescription(): string;
    setDescription(value: string): Truck;

    getPlate(): string;
    setPlate(value: string): Truck;

    getHourmeter(): number;
    setHourmeter(value: number): Truck;


    hasContractor(): boolean;
    clearContractor(): void;
    getContractor(): proto_entities_contractor_pb.Contractor | undefined;
    setContractor(value?: proto_entities_contractor_pb.Contractor): Truck;

    getState(): proto_enums_event_state_enums_pb.EnumEventState;
    setState(value: proto_enums_event_state_enums_pb.EnumEventState): Truck;


    hasEventState(): boolean;
    clearEventState(): void;
    getEventState(): proto_entities_event_state_pb.EventState | undefined;
    setEventState(value?: proto_entities_event_state_pb.EventState): Truck;


    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): proto_entities_sensor_pb.Sensor | undefined;
    setSensor(value?: proto_entities_sensor_pb.Sensor): Truck;

    getRealInterval(): number;
    setRealInterval(value: number): Truck;

    getCycleNumber(): number;
    setCycleNumber(value: number): Truck;

    clearOperationList(): void;
    getOperationList(): Array<OperationAssignmentUnit>;
    setOperationList(value: Array<OperationAssignmentUnit>): Truck;
    addOperation(value?: OperationAssignmentUnit, index?: number): OperationAssignmentUnit;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Truck.AsObject;
    static toObject(includeInstance: boolean, msg: Truck): Truck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Truck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Truck;
    static deserializeBinaryFromReader(message: Truck, reader: jspb.BinaryReader): Truck;
}

export namespace Truck {
    export type AsObject = {
        id: string,
        deviceId: string,
        deviceAlias: string,
        deviceInterval: number,
        description: string,
        plate: string,
        hourmeter: number,
        contractor?: proto_entities_contractor_pb.Contractor.AsObject,
        state: proto_enums_event_state_enums_pb.EnumEventState,
        eventState?: proto_entities_event_state_pb.EventState.AsObject,
        sensor?: proto_entities_sensor_pb.Sensor.AsObject,
        realInterval: number,
        cycleNumber: number,
        operationList: Array<OperationAssignmentUnit.AsObject>,
    }
}
