// package: pb
// file: proto/entities/road.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_point_pb from "../../proto/entities/point_pb";

export class Road extends jspb.Message { 
    getId(): string;
    setId(value: string): Road;

    getName(): string;
    setName(value: string): Road;

    getDescription(): string;
    setDescription(value: string): Road;

    getColor(): number;
    setColor(value: number): Road;

    clearPointList(): void;
    getPointList(): Array<proto_entities_point_pb.Point>;
    setPointList(value: Array<proto_entities_point_pb.Point>): Road;
    addPoint(value?: proto_entities_point_pb.Point, index?: number): proto_entities_point_pb.Point;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Road.AsObject;
    static toObject(includeInstance: boolean, msg: Road): Road.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Road, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Road;
    static deserializeBinaryFromReader(message: Road, reader: jspb.BinaryReader): Road;
}

export namespace Road {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        color: number,
        pointList: Array<proto_entities_point_pb.Point.AsObject>,
    }

    export enum State {
    UNKNOWN = 0,
    }

}
