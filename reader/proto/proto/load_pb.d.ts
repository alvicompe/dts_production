// package: pb
// file: proto/load.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_polygon_pb from "../proto/polygon_pb";
import * as proto_cell_pb from "../proto/cell_pb";
import * as proto_road_pb from "../proto/road_pb";

export class Upload extends jspb.Message { 
    getType(): Upload.Type;
    setType(value: Upload.Type): Upload;


    hasPolygon(): boolean;
    clearPolygon(): void;
    getPolygon(): proto_polygon_pb.Polygon | undefined;
    setPolygon(value?: proto_polygon_pb.Polygon): Upload;


    hasCell(): boolean;
    clearCell(): void;
    getCell(): proto_cell_pb.Cell | undefined;
    setCell(value?: proto_cell_pb.Cell): Upload;


    hasRoad(): boolean;
    clearRoad(): void;
    getRoad(): proto_road_pb.Road | undefined;
    setRoad(value?: proto_road_pb.Road): Upload;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Upload.AsObject;
    static toObject(includeInstance: boolean, msg: Upload): Upload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Upload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Upload;
    static deserializeBinaryFromReader(message: Upload, reader: jspb.BinaryReader): Upload;
}

export namespace Upload {
    export type AsObject = {
        type: Upload.Type,
        polygon?: proto_polygon_pb.Polygon.AsObject,
        cell?: proto_cell_pb.Cell.AsObject,
        road?: proto_road_pb.Road.AsObject,
    }

    export enum Type {
    UNKNOWN = 0,
    POLYGON = 1,
    CELL = 2,
    ROAD = 3,
    }

}

export class Download extends jspb.Message { 
    getType(): Download.Type;
    setType(value: Download.Type): Download;


    hasPolygon(): boolean;
    clearPolygon(): void;
    getPolygon(): proto_polygon_pb.Polygon | undefined;
    setPolygon(value?: proto_polygon_pb.Polygon): Download;


    hasCell(): boolean;
    clearCell(): void;
    getCell(): proto_cell_pb.Cell | undefined;
    setCell(value?: proto_cell_pb.Cell): Download;


    hasRoad(): boolean;
    clearRoad(): void;
    getRoad(): proto_road_pb.Road | undefined;
    setRoad(value?: proto_road_pb.Road): Download;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Download.AsObject;
    static toObject(includeInstance: boolean, msg: Download): Download.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Download, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Download;
    static deserializeBinaryFromReader(message: Download, reader: jspb.BinaryReader): Download;
}

export namespace Download {
    export type AsObject = {
        type: Download.Type,
        polygon?: proto_polygon_pb.Polygon.AsObject,
        cell?: proto_cell_pb.Cell.AsObject,
        road?: proto_road_pb.Road.AsObject,
    }

    export enum Type {
    UNKNOWN = 0,
    POLYGON = 1,
    CELL = 2,
    ROAD = 3,
    }

}
