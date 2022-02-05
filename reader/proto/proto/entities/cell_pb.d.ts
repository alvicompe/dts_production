// package: pb
// file: proto/entities/cell.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_point_pb from "../../proto/entities/point_pb";

export class Cell extends jspb.Message { 
    getId(): string;
    setId(value: string): Cell;

    getName(): string;
    setName(value: string): Cell;

    getDescription(): string;
    setDescription(value: string): Cell;

    clearPointList(): void;
    getPointList(): Array<proto_entities_point_pb.Point>;
    setPointList(value: Array<proto_entities_point_pb.Point>): Cell;
    addPoint(value?: proto_entities_point_pb.Point, index?: number): proto_entities_point_pb.Point;


    hasCentroid(): boolean;
    clearCentroid(): void;
    getCentroid(): proto_entities_point_pb.Point | undefined;
    setCentroid(value?: proto_entities_point_pb.Point): Cell;

    getHeight(): number;
    setHeight(value: number): Cell;

    getColor(): number;
    setColor(value: number): Cell;

    getAltitude(): number;
    setAltitude(value: number): Cell;

    getArea(): number;
    setArea(value: number): Cell;

    getVolume(): number;
    setVolume(value: number): Cell;

    getState(): Cell.State;
    setState(value: Cell.State): Cell;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cell.AsObject;
    static toObject(includeInstance: boolean, msg: Cell): Cell.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cell, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cell;
    static deserializeBinaryFromReader(message: Cell, reader: jspb.BinaryReader): Cell;
}

export namespace Cell {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        pointList: Array<proto_entities_point_pb.Point.AsObject>,
        centroid?: proto_entities_point_pb.Point.AsObject,
        height: number,
        color: number,
        altitude: number,
        area: number,
        volume: number,
        state: Cell.State,
    }

    export enum State {
    UNKNOWN = 0,
    ACTIVE = 1,
    WAITING = 2,
    FINISHED = 3,
    }

}
