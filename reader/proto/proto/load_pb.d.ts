// package: pb
// file: proto/load.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_pit_pb from "../proto/pit_pb";
import * as proto_pad_pb from "../proto/pad_pb";
import * as proto_stock_pb from "../proto/stock_pb";
import * as proto_dme_pb from "../proto/dme_pb";
import * as proto_road_pb from "../proto/road_pb";

export class Upload extends jspb.Message { 
    getType(): Upload.Type;
    setType(value: Upload.Type): Upload;


    hasPit(): boolean;
    clearPit(): void;
    getPit(): proto_pit_pb.Pit | undefined;
    setPit(value?: proto_pit_pb.Pit): Upload;


    hasPad(): boolean;
    clearPad(): void;
    getPad(): proto_pad_pb.Pad | undefined;
    setPad(value?: proto_pad_pb.Pad): Upload;


    hasStock(): boolean;
    clearStock(): void;
    getStock(): proto_stock_pb.Stock | undefined;
    setStock(value?: proto_stock_pb.Stock): Upload;


    hasDme(): boolean;
    clearDme(): void;
    getDme(): proto_dme_pb.Dme | undefined;
    setDme(value?: proto_dme_pb.Dme): Upload;


    hasRoad(): boolean;
    clearRoad(): void;
    getRoad(): proto_road_pb.Road | undefined;
    setRoad(value?: proto_road_pb.Road): Upload;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Upload.AsObject;
    static toObject(includeInstance: boolean, msg: Upload): Upload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Upload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Upload;
    static deserializeBinaryFromReader(message: Upload, reader: jspb.BinaryReader): Upload;
}

export namespace Upload {
    export type AsObject = {
        type: Upload.Type,
        pit?: proto_pit_pb.Pit.AsObject,
        pad?: proto_pad_pb.Pad.AsObject,
        stock?: proto_stock_pb.Stock.AsObject,
        dme?: proto_dme_pb.Dme.AsObject,
        road?: proto_road_pb.Road.AsObject,
    }

    export enum Type {
    UNKNOWN = 0,
    PIT = 1,
    PAD = 2,
    STOCK = 3,
    DME = 4,
    ROAD = 5,
    }

}

export class Download extends jspb.Message { 
    getType(): Download.Type;
    setType(value: Download.Type): Download;


    hasPit(): boolean;
    clearPit(): void;
    getPit(): proto_pit_pb.Pit | undefined;
    setPit(value?: proto_pit_pb.Pit): Download;


    hasPad(): boolean;
    clearPad(): void;
    getPad(): proto_pad_pb.Pad | undefined;
    setPad(value?: proto_pad_pb.Pad): Download;


    hasStock(): boolean;
    clearStock(): void;
    getStock(): proto_stock_pb.Stock | undefined;
    setStock(value?: proto_stock_pb.Stock): Download;


    hasDme(): boolean;
    clearDme(): void;
    getDme(): proto_dme_pb.Dme | undefined;
    setDme(value?: proto_dme_pb.Dme): Download;


    hasRoad(): boolean;
    clearRoad(): void;
    getRoad(): proto_road_pb.Road | undefined;
    setRoad(value?: proto_road_pb.Road): Download;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Download.AsObject;
    static toObject(includeInstance: boolean, msg: Download): Download.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Download, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Download;
    static deserializeBinaryFromReader(message: Download, reader: jspb.BinaryReader): Download;
}

export namespace Download {
    export type AsObject = {
        type: Download.Type,
        pit?: proto_pit_pb.Pit.AsObject,
        pad?: proto_pad_pb.Pad.AsObject,
        stock?: proto_stock_pb.Stock.AsObject,
        dme?: proto_dme_pb.Dme.AsObject,
        road?: proto_road_pb.Road.AsObject,
    }

    export enum Type {
    UNKNOWN = 0,
    PIT = 1,
    PAD = 2,
    STOCK = 3,
    DME = 4,
    ROAD = 5,
    PAD_DME = 6,
    }

}
