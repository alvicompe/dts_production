// package: pb.enums
// file: proto/entities/current.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_sensor_pb from "../../proto/entities/sensor_pb";
import * as proto_entities_operation_pb from "../../proto/entities/operation_pb";
import * as proto_enums_event_state_enums_pb from "../../proto/enums/event_state.enums_pb";

export class TruckCurrentState extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): TruckCurrentState;


    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): proto_entities_sensor_pb.Sensor | undefined;
    setSensor(value?: proto_entities_sensor_pb.Sensor): TruckCurrentState;

    getState(): proto_enums_event_state_enums_pb.EnumEventState;
    setState(value: proto_enums_event_state_enums_pb.EnumEventState): TruckCurrentState;

    getCycleId(): string;
    setCycleId(value: string): TruckCurrentState;

    getCycleNumber(): number;
    setCycleNumber(value: number): TruckCurrentState;


    hasOldOperation(): boolean;
    clearOldOperation(): void;
    getOldOperation(): proto_entities_operation_pb.Operation | undefined;
    setOldOperation(value?: proto_entities_operation_pb.Operation): TruckCurrentState;


    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): proto_entities_operation_pb.Operation | undefined;
    setOperation(value?: proto_entities_operation_pb.Operation): TruckCurrentState;


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
        sensor?: proto_entities_sensor_pb.Sensor.AsObject,
        state: proto_enums_event_state_enums_pb.EnumEventState,
        cycleId: string,
        cycleNumber: number,
        oldOperation?: proto_entities_operation_pb.Operation.AsObject,
        operation?: proto_entities_operation_pb.Operation.AsObject,
    }
}

export class ExcavatorCurrentState extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): ExcavatorCurrentState;


    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): proto_entities_sensor_pb.Sensor | undefined;
    setSensor(value?: proto_entities_sensor_pb.Sensor): ExcavatorCurrentState;

    getOnsite(): boolean;
    setOnsite(value: boolean): ExcavatorCurrentState;

    getState(): proto_enums_event_state_enums_pb.EnumEventState;
    setState(value: proto_enums_event_state_enums_pb.EnumEventState): ExcavatorCurrentState;


    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): proto_entities_operation_pb.Operation | undefined;
    setOperation(value?: proto_entities_operation_pb.Operation): ExcavatorCurrentState;


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
        sensor?: proto_entities_sensor_pb.Sensor.AsObject,
        onsite: boolean,
        state: proto_enums_event_state_enums_pb.EnumEventState,
        operation?: proto_entities_operation_pb.Operation.AsObject,
    }
}
