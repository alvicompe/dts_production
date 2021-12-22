// package: pb
// file: proto/pad.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_cell_pb from "../proto/cell_pb";

export class Pad extends jspb.Message { 
    getId(): string;
    setId(value: string): Pad;

    getName(): string;
    setName(value: string): Pad;

    getDescription(): string;
    setDescription(value: string): Pad;

    clearCellList(): void;
    getCellList(): Array<proto_cell_pb.Cell>;
    setCellList(value: Array<proto_cell_pb.Cell>): Pad;
    addCell(value?: proto_cell_pb.Cell, index?: number): proto_cell_pb.Cell;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pad.AsObject;
    static toObject(includeInstance: boolean, msg: Pad): Pad.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pad, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pad;
    static deserializeBinaryFromReader(message: Pad, reader: jspb.BinaryReader): Pad;
}

export namespace Pad {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        cellList: Array<proto_cell_pb.Cell.AsObject>,
    }
}

export class PadRequest extends jspb.Message { 

    hasPad(): boolean;
    clearPad(): void;
    getPad(): Pad | undefined;
    setPad(value?: Pad): PadRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PadRequest): PadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PadRequest;
    static deserializeBinaryFromReader(message: PadRequest, reader: jspb.BinaryReader): PadRequest;
}

export namespace PadRequest {
    export type AsObject = {
        pad?: Pad.AsObject,
    }
}

export class PadResponse extends jspb.Message { 

    hasPad(): boolean;
    clearPad(): void;
    getPad(): Pad | undefined;
    setPad(value?: Pad): PadResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PadResponse): PadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PadResponse;
    static deserializeBinaryFromReader(message: PadResponse, reader: jspb.BinaryReader): PadResponse;
}

export namespace PadResponse {
    export type AsObject = {
        pad?: Pad.AsObject,
    }
}

export class PadsResponse extends jspb.Message { 
    clearPadsList(): void;
    getPadsList(): Array<Pad>;
    setPadsList(value: Array<Pad>): PadsResponse;
    addPads(value?: Pad, index?: number): Pad;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PadsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PadsResponse): PadsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PadsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PadsResponse;
    static deserializeBinaryFromReader(message: PadsResponse, reader: jspb.BinaryReader): PadsResponse;
}

export namespace PadsResponse {
    export type AsObject = {
        padsList: Array<Pad.AsObject>,
    }
}
