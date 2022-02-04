// package: pb
// file: proto/entities/dme.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_cell_pb from "../../proto/entities/cell_pb";

export class Dme extends jspb.Message { 
    getId(): string;
    setId(value: string): Dme;

    getName(): string;
    setName(value: string): Dme;

    getDescription(): string;
    setDescription(value: string): Dme;

    clearCellList(): void;
    getCellList(): Array<proto_entities_cell_pb.Cell>;
    setCellList(value: Array<proto_entities_cell_pb.Cell>): Dme;
    addCell(value?: proto_entities_cell_pb.Cell, index?: number): proto_entities_cell_pb.Cell;


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
        cellList: Array<proto_entities_cell_pb.Cell.AsObject>,
    }
}
