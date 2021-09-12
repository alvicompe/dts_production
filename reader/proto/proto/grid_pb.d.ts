// package: pb
// file: proto/grid.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_polygon_pb from "../proto/polygon_pb";
import * as proto_cell_pb from "../proto/cell_pb";
import * as proto_geofence_pb from "../proto/geofence_pb";
import * as proto_road_pb from "../proto/road_pb";
import * as proto_point_pb from "../proto/point_pb";

export class Square extends jspb.Message { 
    getId(): string;
    setId(value: string): Square;

    getName(): string;
    setName(value: string): Square;

    getAltitude(): number;
    setAltitude(value: number): Square;

    clearPolygonList(): void;
    getPolygonList(): Array<proto_polygon_pb.Polygon>;
    setPolygonList(value: Array<proto_polygon_pb.Polygon>): Square;
    addPolygon(value?: proto_polygon_pb.Polygon, index?: number): proto_polygon_pb.Polygon;

    clearCellList(): void;
    getCellList(): Array<proto_cell_pb.Cell>;
    setCellList(value: Array<proto_cell_pb.Cell>): Square;
    addCell(value?: proto_cell_pb.Cell, index?: number): proto_cell_pb.Cell;

    clearGeofenceList(): void;
    getGeofenceList(): Array<proto_geofence_pb.Geofence>;
    setGeofenceList(value: Array<proto_geofence_pb.Geofence>): Square;
    addGeofence(value?: proto_geofence_pb.Geofence, index?: number): proto_geofence_pb.Geofence;

    clearRoadList(): void;
    getRoadList(): Array<proto_road_pb.Road>;
    setRoadList(value: Array<proto_road_pb.Road>): Square;
    addRoad(value?: proto_road_pb.Road, index?: number): proto_road_pb.Road;

    clearSegmentList(): void;
    getSegmentList(): Array<proto_point_pb.Point>;
    setSegmentList(value: Array<proto_point_pb.Point>): Square;
    addSegment(value?: proto_point_pb.Point, index?: number): proto_point_pb.Point;

    clearPointList(): void;
    getPointList(): Array<proto_point_pb.Point>;
    setPointList(value: Array<proto_point_pb.Point>): Square;
    addPoint(value?: proto_point_pb.Point, index?: number): proto_point_pb.Point;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Square.AsObject;
    static toObject(includeInstance: boolean, msg: Square): Square.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Square, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Square;
    static deserializeBinaryFromReader(message: Square, reader: jspb.BinaryReader): Square;
}

export namespace Square {
    export type AsObject = {
        id: string,
        name: string,
        altitude: number,
        polygonList: Array<proto_polygon_pb.Polygon.AsObject>,
        cellList: Array<proto_cell_pb.Cell.AsObject>,
        geofenceList: Array<proto_geofence_pb.Geofence.AsObject>,
        roadList: Array<proto_road_pb.Road.AsObject>,
        segmentList: Array<proto_point_pb.Point.AsObject>,
        pointList: Array<proto_point_pb.Point.AsObject>,
    }
}

export class Grid extends jspb.Message { 
    clearSquareList(): void;
    getSquareList(): Array<Square>;
    setSquareList(value: Array<Square>): Grid;
    addSquare(value?: Square, index?: number): Square;

    getColor(): number;
    setColor(value: number): Grid;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Grid.AsObject;
    static toObject(includeInstance: boolean, msg: Grid): Grid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Grid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Grid;
    static deserializeBinaryFromReader(message: Grid, reader: jspb.BinaryReader): Grid;
}

export namespace Grid {
    export type AsObject = {
        squareList: Array<Square.AsObject>,
        color: number,
    }
}

export class GridRequest extends jspb.Message { 
    getRead(): boolean;
    setRead(value: boolean): GridRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GridRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GridRequest): GridRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GridRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GridRequest;
    static deserializeBinaryFromReader(message: GridRequest, reader: jspb.BinaryReader): GridRequest;
}

export namespace GridRequest {
    export type AsObject = {
        read: boolean,
    }
}

export class GridResponse extends jspb.Message { 
    getDone(): boolean;
    setDone(value: boolean): GridResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GridResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GridResponse): GridResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GridResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GridResponse;
    static deserializeBinaryFromReader(message: GridResponse, reader: jspb.BinaryReader): GridResponse;
}

export namespace GridResponse {
    export type AsObject = {
        done: boolean,
    }
}
