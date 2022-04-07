// package: pb
// file: proto/entities/pad.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_cell_pb from "../../proto/entities/cell_pb";

export class Pad extends jspb.Message { 
    getId(): string;
    setId(value: string): Pad;

    getName(): string;
    setName(value: string): Pad;

    getDescription(): string;
    setDescription(value: string): Pad;

    clearCellList(): void;
    getCellList(): Array<proto_entities_cell_pb.Cell>;
    setCellList(value: Array<proto_entities_cell_pb.Cell>): Pad;
    addCell(value?: proto_entities_cell_pb.Cell, index?: number): proto_entities_cell_pb.Cell;


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
        cellList: Array<proto_entities_cell_pb.Cell.AsObject>,
    }
}
