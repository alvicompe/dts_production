// package: pb
// file: proto/stock.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_cell_pb from "../proto/cell_pb";

export class Stock extends jspb.Message { 
    getId(): string;
    setId(value: string): Stock;

    getName(): string;
    setName(value: string): Stock;

    getDescription(): string;
    setDescription(value: string): Stock;

    clearCellList(): void;
    getCellList(): Array<proto_cell_pb.Cell>;
    setCellList(value: Array<proto_cell_pb.Cell>): Stock;
    addCell(value?: proto_cell_pb.Cell, index?: number): proto_cell_pb.Cell;


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
        cellList: Array<proto_cell_pb.Cell.AsObject>,
    }
}

export class StockRequest extends jspb.Message { 

    hasStock(): boolean;
    clearStock(): void;
    getStock(): Stock | undefined;
    setStock(value?: Stock): StockRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StockRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StockRequest): StockRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StockRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StockRequest;
    static deserializeBinaryFromReader(message: StockRequest, reader: jspb.BinaryReader): StockRequest;
}

export namespace StockRequest {
    export type AsObject = {
        stock?: Stock.AsObject,
    }
}

export class StockResponse extends jspb.Message { 

    hasStock(): boolean;
    clearStock(): void;
    getStock(): Stock | undefined;
    setStock(value?: Stock): StockResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StockResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StockResponse): StockResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StockResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StockResponse;
    static deserializeBinaryFromReader(message: StockResponse, reader: jspb.BinaryReader): StockResponse;
}

export namespace StockResponse {
    export type AsObject = {
        stock?: Stock.AsObject,
    }
}

export class StocksResponse extends jspb.Message { 
    clearStocksList(): void;
    getStocksList(): Array<Stock>;
    setStocksList(value: Array<Stock>): StocksResponse;
    addStocks(value?: Stock, index?: number): Stock;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StocksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StocksResponse): StocksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StocksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StocksResponse;
    static deserializeBinaryFromReader(message: StocksResponse, reader: jspb.BinaryReader): StocksResponse;
}

export namespace StocksResponse {
    export type AsObject = {
        stocksList: Array<Stock.AsObject>,
    }
}
