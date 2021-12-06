// package: pb
// file: proto/cell.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_point_pb from "../proto/point_pb";

export class Cell extends jspb.Message { 
    getId(): string;
    setId(value: string): Cell;

    getName(): string;
    setName(value: string): Cell;

    getDescription(): string;
    setDescription(value: string): Cell;

    clearPointList(): void;
    getPointList(): Array<proto_point_pb.Point>;
    setPointList(value: Array<proto_point_pb.Point>): Cell;
    addPoint(value?: proto_point_pb.Point, index?: number): proto_point_pb.Point;


    hasCentroid(): boolean;
    clearCentroid(): void;
    getCentroid(): proto_point_pb.Point | undefined;
    setCentroid(value?: proto_point_pb.Point): Cell;

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
        pointList: Array<proto_point_pb.Point.AsObject>,
        centroid?: proto_point_pb.Point.AsObject,
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

export class CellListRequest extends jspb.Message { 
    clearCellList(): void;
    getCellList(): Array<Cell>;
    setCellList(value: Array<Cell>): CellListRequest;
    addCell(value?: Cell, index?: number): Cell;

    getType(): TypeDownload;
    setType(value: TypeDownload): CellListRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CellListRequest): CellListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellListRequest;
    static deserializeBinaryFromReader(message: CellListRequest, reader: jspb.BinaryReader): CellListRequest;
}

export namespace CellListRequest {
    export type AsObject = {
        cellList: Array<Cell.AsObject>,
        type: TypeDownload,
    }
}

export class CellRequest extends jspb.Message { 

    hasCell(): boolean;
    clearCell(): void;
    getCell(): Cell | undefined;
    setCell(value?: Cell): CellRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CellRequest): CellRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellRequest;
    static deserializeBinaryFromReader(message: CellRequest, reader: jspb.BinaryReader): CellRequest;
}

export namespace CellRequest {
    export type AsObject = {
        cell?: Cell.AsObject,
    }
}

export class CellUpdateRequest extends jspb.Message { 

    hasCell(): boolean;
    clearCell(): void;
    getCell(): Cell | undefined;
    setCell(value?: Cell): CellUpdateRequest;

    getType(): TypeDownload;
    setType(value: TypeDownload): CellUpdateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CellUpdateRequest): CellUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellUpdateRequest;
    static deserializeBinaryFromReader(message: CellUpdateRequest, reader: jspb.BinaryReader): CellUpdateRequest;
}

export namespace CellUpdateRequest {
    export type AsObject = {
        cell?: Cell.AsObject,
        type: TypeDownload,
    }
}

export class CellResponse extends jspb.Message { 

    hasCell(): boolean;
    clearCell(): void;
    getCell(): Cell | undefined;
    setCell(value?: Cell): CellResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CellResponse): CellResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellResponse;
    static deserializeBinaryFromReader(message: CellResponse, reader: jspb.BinaryReader): CellResponse;
}

export namespace CellResponse {
    export type AsObject = {
        cell?: Cell.AsObject,
    }
}

export class CellsResponse extends jspb.Message { 
    clearCellsList(): void;
    getCellsList(): Array<Cell>;
    setCellsList(value: Array<Cell>): CellsResponse;
    addCells(value?: Cell, index?: number): Cell;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CellsResponse): CellsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellsResponse;
    static deserializeBinaryFromReader(message: CellsResponse, reader: jspb.BinaryReader): CellsResponse;
}

export namespace CellsResponse {
    export type AsObject = {
        cellsList: Array<Cell.AsObject>,
    }
}

export class CellListResponse extends jspb.Message { 
    getDone(): boolean;
    setDone(value: boolean): CellListResponse;

    getMessage(): string;
    setMessage(value: string): CellListResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CellListResponse): CellListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellListResponse;
    static deserializeBinaryFromReader(message: CellListResponse, reader: jspb.BinaryReader): CellListResponse;
}

export namespace CellListResponse {
    export type AsObject = {
        done: boolean,
        message: string,
    }
}

export enum TypeDownload {
    UNKNOWN = 0,
    PIT = 1,
    PAD = 2,
    STOCK = 3,
    DME = 4,
    ROAD = 5,
}
