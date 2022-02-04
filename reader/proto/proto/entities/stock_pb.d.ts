// package: pb
// file: proto/entities/stock.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_cell_pb from "../../proto/entities/cell_pb";

export class Stock extends jspb.Message { 
    getId(): string;
    setId(value: string): Stock;

    getName(): string;
    setName(value: string): Stock;

    getDescription(): string;
    setDescription(value: string): Stock;

    clearCellList(): void;
    getCellList(): Array<proto_entities_cell_pb.Cell>;
    setCellList(value: Array<proto_entities_cell_pb.Cell>): Stock;
    addCell(value?: proto_entities_cell_pb.Cell, index?: number): proto_entities_cell_pb.Cell;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stock.AsObject;
    static toObject(includeInstance: boolean, msg: Stock): Stock.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stock;
    static deserializeBinaryFromReader(message: Stock, reader: jspb.BinaryReader): Stock;
}

export namespace Stock {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        cellList: Array<proto_entities_cell_pb.Cell.AsObject>,
    }
}
