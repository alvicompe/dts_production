// package: pb
// file: proto/sensor.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BasicSensor extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): BasicSensor;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): BasicSensor;

    getDatetime(): string;
    setDatetime(value: string): BasicSensor;

    getLongitude(): string;
    setLongitude(value: string): BasicSensor;

    getLatitude(): string;
    setLatitude(value: string): BasicSensor;

    getSpeed(): string;
    setSpeed(value: string): BasicSensor;

    getDirection(): string;
    setDirection(value: string): BasicSensor;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BasicSensor.AsObject;
    static toObject(includeInstance: boolean, msg: BasicSensor): BasicSensor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BasicSensor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BasicSensor;
    static deserializeBinaryFromReader(message: BasicSensor, reader: jspb.BinaryReader): BasicSensor;
}

export namespace BasicSensor {
    export type AsObject = {
        deviceId: string,
        deviceAlias: string,
        datetime: string,
        longitude: string,
        latitude: string,
        speed: string,
        direction: string,
    }
}

export class Sensor extends jspb.Message { 
    getLongitude(): number;
    setLongitude(value: number): Sensor;

    getLatitude(): number;
    setLatitude(value: number): Sensor;

    getAltitude(): number;
    setAltitude(value: number): Sensor;

    getDirection(): number;
    setDirection(value: number): Sensor;

    getSpeed(): number;
    setSpeed(value: number): Sensor;

    getDatetime(): string;
    setDatetime(value: string): Sensor;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sensor.AsObject;
    static toObject(includeInstance: boolean, msg: Sensor): Sensor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sensor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sensor;
    static deserializeBinaryFromReader(message: Sensor, reader: jspb.BinaryReader): Sensor;
}

export namespace Sensor {
    export type AsObject = {
        longitude: number,
        latitude: number,
        altitude: number,
        direction: number,
        speed: number,
        datetime: string,
    }
}

export class ServerSensorRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerSensorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ServerSensorRequest): ServerSensorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerSensorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerSensorRequest;
    static deserializeBinaryFromReader(message: ServerSensorRequest, reader: jspb.BinaryReader): ServerSensorRequest;
}

export namespace ServerSensorRequest {
    export type AsObject = {
    }
}

export class ServerSensorResponse extends jspb.Message { 

    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): BasicSensor | undefined;
    setSensor(value?: BasicSensor): ServerSensorResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerSensorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ServerSensorResponse): ServerSensorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerSensorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerSensorResponse;
    static deserializeBinaryFromReader(message: ServerSensorResponse, reader: jspb.BinaryReader): ServerSensorResponse;
}

export namespace ServerSensorResponse {
    export type AsObject = {
        sensor?: BasicSensor.AsObject,
    }
}
