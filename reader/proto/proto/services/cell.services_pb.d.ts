// package: pb
// file: proto/services/cell.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_cell_pb from "../../proto/entities/cell_pb";
import * as proto_enums_type_download_enums_pb from "../../proto/enums/type_download.enums_pb";

export class CellListRequest extends jspb.Message { 
    clearCellList(): void;
    getCellList(): Array<proto_entities_cell_pb.Cell>;
    setCellList(value: Array<proto_entities_cell_pb.Cell>): CellListRequest;
    addCell(value?: proto_entities_cell_pb.Cell, index?: number): proto_entities_cell_pb.Cell;

    getType(): proto_enums_type_download_enums_pb.TypeDownload;
    setType(value: proto_enums_type_download_enums_pb.TypeDownload): CellListRequest;


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
        cellList: Array<proto_entities_cell_pb.Cell.AsObject>,
        type: proto_enums_type_download_enums_pb.TypeDownload,
    }
}

export class CellRequest extends jspb.Message { 

    hasCell(): boolean;
    clearCell(): void;
    getCell(): proto_entities_cell_pb.Cell | undefined;
    setCell(value?: proto_entities_cell_pb.Cell): CellRequest;


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
        cell?: proto_entities_cell_pb.Cell.AsObject,
    }
}

export class CellUpdateRequest extends jspb.Message { 

    hasCell(): boolean;
    clearCell(): void;
    getCell(): proto_entities_cell_pb.Cell | undefined;
    setCell(value?: proto_entities_cell_pb.Cell): CellUpdateRequest;

    getType(): proto_enums_type_download_enums_pb.TypeDownload;
    setType(value: proto_enums_type_download_enums_pb.TypeDownload): CellUpdateRequest;


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
        cell?: proto_entities_cell_pb.Cell.AsObject,
        type: proto_enums_type_download_enums_pb.TypeDownload,
    }
}

export class CellResponse extends jspb.Message { 

    hasCell(): boolean;
    clearCell(): void;
    getCell(): proto_entities_cell_pb.Cell | undefined;
    setCell(value?: proto_entities_cell_pb.Cell): CellResponse;


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
        cell?: proto_entities_cell_pb.Cell.AsObject,
    }
}

export class CellsResponse extends jspb.Message { 
    clearCellsList(): void;
    getCellsList(): Array<proto_entities_cell_pb.Cell>;
    setCellsList(value: Array<proto_entities_cell_pb.Cell>): CellsResponse;
    addCells(value?: proto_entities_cell_pb.Cell, index?: number): proto_entities_cell_pb.Cell;


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
        cellsList: Array<proto_entities_cell_pb.Cell.AsObject>,
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
