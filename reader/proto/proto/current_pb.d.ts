// package: pb
// file: proto/current.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_sensor_pb from "../proto/sensor_pb";
import * as proto_operation_pb from "../proto/operation_pb";

export class TruckCurrentState extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): TruckCurrentState;


    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): proto_sensor_pb.Sensor | undefined;
    setSensor(value?: proto_sensor_pb.Sensor): TruckCurrentState;

    getState(): TruckCurrentState.State;
    setState(value: TruckCurrentState.State): TruckCurrentState;

    getCycleId(): string;
    setCycleId(value: string): TruckCurrentState;

    getCycleNumber(): number;
    setCycleNumber(value: number): TruckCurrentState;


    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): proto_operation_pb.Operation | undefined;
    setOperation(value?: proto_operation_pb.Operation): TruckCurrentState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckCurrentState.AsObject;
    static toObject(includeInstance: boolean, msg: TruckCurrentState): TruckCurrentState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckCurrentState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckCurrentState;
    static deserializeBinaryFromReader(message: TruckCurrentState, reader: jspb.BinaryReader): TruckCurrentState;
}

export namespace TruckCurrentState {
    export type AsObject = {
        deviceId: string,
        sensor?: proto_sensor_pb.Sensor.AsObject,
        state: TruckCurrentState.State,
        cycleId: string,
        cycleNumber: number,
        operation?: proto_operation_pb.Operation.AsObject,
    }

    export enum State {
    UNKNOWN_STATE = 0,
    UPLOAD = 1,
    DOWNLOAD = 2,
    TO_UPLOAD = 3,
    TO_DOWNLOAD = 4,
    WAITING = 5,
    QUEUE = 6,
    }

}

export class ExcavatorCurrentState extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): ExcavatorCurrentState;


    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): proto_sensor_pb.Sensor | undefined;
    setSensor(value?: proto_sensor_pb.Sensor): ExcavatorCurrentState;

    getOnsite(): boolean;
    setOnsite(value: boolean): ExcavatorCurrentState;

    getState(): ExcavatorCurrentState.State;
    setState(value: ExcavatorCurrentState.State): ExcavatorCurrentState;


    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): proto_operation_pb.Operation | undefined;
    setOperation(value?: proto_operation_pb.Operation): ExcavatorCurrentState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorCurrentState.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorCurrentState): ExcavatorCurrentState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorCurrentState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorCurrentState;
    static deserializeBinaryFromReader(message: ExcavatorCurrentState, reader: jspb.BinaryReader): ExcavatorCurrentState;
}

export namespace ExcavatorCurrentState {
    export type AsObject = {
        deviceId: string,
        sensor?: proto_sensor_pb.Sensor.AsObject,
        onsite: boolean,
        state: ExcavatorCurrentState.State,
        operation?: proto_operation_pb.Operation.AsObject,
    }

    export enum State {
    UNKNOWN_STATE = 0,
    UPLOAD = 1,
    }

}
