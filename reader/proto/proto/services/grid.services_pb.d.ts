// package: pb
// file: proto/services/grid.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_square_pb from "../../proto/entities/square_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Grid extends jspb.Message { 
    clearSquareList(): void;
    getSquareList(): Array<proto_entities_square_pb.Square>;
    setSquareList(value: Array<proto_entities_square_pb.Square>): Grid;
    addSquare(value?: proto_entities_square_pb.Square, index?: number): proto_entities_square_pb.Square;

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
        squareList: Array<proto_entities_square_pb.Square.AsObject>,
        color: number,
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

export class UpdateGridResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): UpdateGridResponse;

    getMessage(): string;
    setMessage(value: string): UpdateGridResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateGridResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateGridResponse): UpdateGridResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateGridResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateGridResponse;
    static deserializeBinaryFromReader(message: UpdateGridResponse, reader: jspb.BinaryReader): UpdateGridResponse;
}

export namespace UpdateGridResponse {
    export type AsObject = {
        status: boolean,
        message: string,
    }
}

export class DeleteGridByNameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteGridByNameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteGridByNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteGridByNameRequest): DeleteGridByNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteGridByNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteGridByNameRequest;
    static deserializeBinaryFromReader(message: DeleteGridByNameRequest, reader: jspb.BinaryReader): DeleteGridByNameRequest;
}

export namespace DeleteGridByNameRequest {
    export type AsObject = {
        name: string,
    }
}

export class UpdateGridRequest extends jspb.Message { 
    clearPathchangeList(): void;
    getPathchangeList(): Array<string>;
    setPathchangeList(value: Array<string>): UpdateGridRequest;
    addPathchange(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateGridRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateGridRequest): UpdateGridRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateGridRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateGridRequest;
    static deserializeBinaryFromReader(message: UpdateGridRequest, reader: jspb.BinaryReader): UpdateGridRequest;
}

export namespace UpdateGridRequest {
    export type AsObject = {
        pathchangeList: Array<string>,
    }
}
