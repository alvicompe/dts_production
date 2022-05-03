// package: pb
// file: proto/entities/unit.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";
import * as proto_entities_sensor_pb from "../../proto/entities/sensor_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Unit extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): Unit;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): Unit;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Unit.AsObject;
    static toObject(includeInstance: boolean, msg: Unit): Unit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Unit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Unit;
    static deserializeBinaryFromReader(message: Unit, reader: jspb.BinaryReader): Unit;
}

export namespace Unit {
    export type AsObject = {
        deviceId: string,
        deviceAlias: string,
    }
}

export class UnitInMantoGPS extends jspb.Message { 

    hasUnit(): boolean;
    clearUnit(): void;
    getUnit(): Unit | undefined;
    setUnit(value?: Unit): UnitInMantoGPS;

    getType(): proto_enums_asset_type_enums_pb.EnumAssetType;
    setType(value: proto_enums_asset_type_enums_pb.EnumAssetType): UnitInMantoGPS;


    hasStartDatetime(): boolean;
    clearStartDatetime(): void;
    getStartDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartDatetime(value?: google_protobuf_timestamp_pb.Timestamp): UnitInMantoGPS;


    hasStartSensor(): boolean;
    clearStartSensor(): void;
    getStartSensor(): proto_entities_sensor_pb.Sensor | undefined;
    setStartSensor(value?: proto_entities_sensor_pb.Sensor): UnitInMantoGPS;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnitInMantoGPS.AsObject;
    static toObject(includeInstance: boolean, msg: UnitInMantoGPS): UnitInMantoGPS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnitInMantoGPS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnitInMantoGPS;
    static deserializeBinaryFromReader(message: UnitInMantoGPS, reader: jspb.BinaryReader): UnitInMantoGPS;
}

export namespace UnitInMantoGPS {
    export type AsObject = {
        unit?: Unit.AsObject,
        type: proto_enums_asset_type_enums_pb.EnumAssetType,
        startDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        startSensor?: proto_entities_sensor_pb.Sensor.AsObject,
    }
}
