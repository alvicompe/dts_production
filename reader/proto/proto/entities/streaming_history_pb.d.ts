// package: pb
// file: proto/entities/streaming_history.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_sensor_pb from "../../proto/entities/sensor_pb";
import * as proto_enums_event_state_enums_pb from "../../proto/enums/event_state.enums_pb";

export class TruckStatus extends jspb.Message { 
    getId(): string;
    setId(value: string): TruckStatus;

    getDeviceId(): string;
    setDeviceId(value: string): TruckStatus;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): TruckStatus;

    getCycleId(): string;
    setCycleId(value: string): TruckStatus;

    getOperationId(): string;
    setOperationId(value: string): TruckStatus;

    getCycleNumber(): number;
    setCycleNumber(value: number): TruckStatus;

    getState(): proto_enums_event_state_enums_pb.EnumEventState;
    setState(value: proto_enums_event_state_enums_pb.EnumEventState): TruckStatus;


    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): proto_entities_sensor_pb.Sensor | undefined;
    setSensor(value?: proto_entities_sensor_pb.Sensor): TruckStatus;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckStatus.AsObject;
    static toObject(includeInstance: boolean, msg: TruckStatus): TruckStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckStatus;
    static deserializeBinaryFromReader(message: TruckStatus, reader: jspb.BinaryReader): TruckStatus;
}

export namespace TruckStatus {
    export type AsObject = {
        id: string,
        deviceId: string,
        deviceAlias: string,
        cycleId: string,
        operationId: string,
        cycleNumber: number,
        state: proto_enums_event_state_enums_pb.EnumEventState,
        sensor?: proto_entities_sensor_pb.Sensor.AsObject,
    }
}
