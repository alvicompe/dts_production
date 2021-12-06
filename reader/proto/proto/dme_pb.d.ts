// package: pb
// file: proto/dme.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_cell_pb from "../proto/cell_pb";

export class Dme extends jspb.Message { 
    getId(): string;
    setId(value: string): Dme;

    getName(): string;
    setName(value: string): Dme;

    getDescription(): string;
    setDescription(value: string): Dme;

    clearCellList(): void;
    getCellList(): Array<proto_cell_pb.Cell>;
    setCellList(value: Array<proto_cell_pb.Cell>): Dme;
    addCell(value?: proto_cell_pb.Cell, index?: number): proto_cell_pb.Cell;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dme.AsObject;
    static toObject(includeInstance: boolean, msg: Dme): Dme.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dme, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dme;
    static deserializeBinaryFromReader(message: Dme, reader: jspb.BinaryReader): Dme;
}

export namespace Dme {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        cellList: Array<proto_cell_pb.Cell.AsObject>,
    }
}

export class DmeRequest extends jspb.Message { 

    hasDme(): boolean;
    clearDme(): void;
    getDme(): Dme | undefined;
    setDme(value?: Dme): DmeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DmeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DmeRequest): DmeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DmeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DmeRequest;
    static deserializeBinaryFromReader(message: DmeRequest, reader: jspb.BinaryReader): DmeRequest;
}

export namespace DmeRequest {
    export type AsObject = {
        dme?: Dme.AsObject,
    }
}

export class DmeResponse extends jspb.Message { 

    hasDme(): boolean;
    clearDme(): void;
    getDme(): Dme | undefined;
    setDme(value?: Dme): DmeResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DmeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DmeResponse): DmeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DmeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DmeResponse;
    static deserializeBinaryFromReader(message: DmeResponse, reader: jspb.BinaryReader): DmeResponse;
}

export namespace DmeResponse {
    export type AsObject = {
        dme?: Dme.AsObject,
    }
}

export class DmesResponse extends jspb.Message { 
    clearDmesList(): void;
    getDmesList(): Array<Dme>;
    setDmesList(value: Array<Dme>): DmesResponse;
    addDmes(value?: Dme, index?: number): Dme;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DmesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DmesResponse): DmesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DmesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DmesResponse;
    static deserializeBinaryFromReader(message: DmesResponse, reader: jspb.BinaryReader): DmesResponse;
}

export namespace DmesResponse {
    export type AsObject = {
        dmesList: Array<Dme.AsObject>,
    }
}
