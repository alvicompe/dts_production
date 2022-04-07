// package: pb
// file: proto/entities/geofence.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_point_pb from "../../proto/entities/point_pb";

export class Geofence extends jspb.Message { 
    getId(): string;
    setId(value: string): Geofence;

    getName(): string;
    setName(value: string): Geofence;

    getDescription(): string;
    setDescription(value: string): Geofence;

    clearPointList(): void;
    getPointList(): Array<proto_entities_point_pb.Point>;
    setPointList(value: Array<proto_entities_point_pb.Point>): Geofence;
    addPoint(value?: proto_entities_point_pb.Point, index?: number): proto_entities_point_pb.Point;

    getColor(): string;
    setColor(value: string): Geofence;

    getDesp(): string;
    setDesp(value: string): Geofence;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Geofence.AsObject;
    static toObject(includeInstance: boolean, msg: Geofence): Geofence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Geofence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Geofence;
    static deserializeBinaryFromReader(message: Geofence, reader: jspb.BinaryReader): Geofence;
}

export namespace Geofence {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        pointList: Array<proto_entities_point_pb.Point.AsObject>,
        color: string,
        desp: string,
    }
}
