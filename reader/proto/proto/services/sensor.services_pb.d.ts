// package: pb
// file: proto/services/sensor.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_sensor_pb from "../../proto/entities/sensor_pb";

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
    getSensor(): proto_entities_sensor_pb.BasicSensor | undefined;
    setSensor(value?: proto_entities_sensor_pb.BasicSensor): ServerSensorResponse;


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
        sensor?: proto_entities_sensor_pb.BasicSensor.AsObject,
    }
}
