// package: pb
// file: proto/services/stock.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_stock_pb from "../../proto/entities/stock_pb";

export class StockRequest extends jspb.Message { 

    hasStock(): boolean;
    clearStock(): void;
    getStock(): proto_entities_stock_pb.Stock | undefined;
    setStock(value?: proto_entities_stock_pb.Stock): StockRequest;


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
        stock?: proto_entities_stock_pb.Stock.AsObject,
    }
}

export class StockResponse extends jspb.Message { 

    hasStock(): boolean;
    clearStock(): void;
    getStock(): proto_entities_stock_pb.Stock | undefined;
    setStock(value?: proto_entities_stock_pb.Stock): StockResponse;


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
        stock?: proto_entities_stock_pb.Stock.AsObject,
    }
}

export class StocksResponse extends jspb.Message { 
    clearStocksList(): void;
    getStocksList(): Array<proto_entities_stock_pb.Stock>;
    setStocksList(value: Array<proto_entities_stock_pb.Stock>): StocksResponse;
    addStocks(value?: proto_entities_stock_pb.Stock, index?: number): proto_entities_stock_pb.Stock;


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
        stocksList: Array<proto_entities_stock_pb.Stock.AsObject>,
    }
}
