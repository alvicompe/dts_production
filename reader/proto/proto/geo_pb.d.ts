// package: pb
// file: proto/geo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_material_pb from "../proto/material_pb";
import * as proto_geofence_pb from "../proto/geofence_pb";
import * as proto_road_pb from "../proto/road_pb";
import * as proto_pit_pb from "../proto/pit_pb";
import * as proto_pad_pb from "../proto/pad_pb";
import * as proto_dme_pb from "../proto/dme_pb";
import * as proto_stock_pb from "../proto/stock_pb";

export class Geo extends jspb.Message { 
    getId(): string;
    setId(value: string): Geo;

    getName(): string;
    setName(value: string): Geo;

    getDescription(): string;
    setDescription(value: string): Geo;

    clearMaterialList(): void;
    getMaterialList(): Array<proto_material_pb.Material>;
    setMaterialList(value: Array<proto_material_pb.Material>): Geo;
    addMaterial(value?: proto_material_pb.Material, index?: number): proto_material_pb.Material;

    clearGeofenceList(): void;
    getGeofenceList(): Array<proto_geofence_pb.Geofence>;
    setGeofenceList(value: Array<proto_geofence_pb.Geofence>): Geo;
    addGeofence(value?: proto_geofence_pb.Geofence, index?: number): proto_geofence_pb.Geofence;

    clearRoadList(): void;
    getRoadList(): Array<proto_road_pb.Road>;
    setRoadList(value: Array<proto_road_pb.Road>): Geo;
    addRoad(value?: proto_road_pb.Road, index?: number): proto_road_pb.Road;

    clearPitList(): void;
    getPitList(): Array<proto_pit_pb.Pit>;
    setPitList(value: Array<proto_pit_pb.Pit>): Geo;
    addPit(value?: proto_pit_pb.Pit, index?: number): proto_pit_pb.Pit;

    clearPadList(): void;
    getPadList(): Array<proto_pad_pb.Pad>;
    setPadList(value: Array<proto_pad_pb.Pad>): Geo;
    addPad(value?: proto_pad_pb.Pad, index?: number): proto_pad_pb.Pad;

    clearDmeList(): void;
    getDmeList(): Array<proto_dme_pb.Dme>;
    setDmeList(value: Array<proto_dme_pb.Dme>): Geo;
    addDme(value?: proto_dme_pb.Dme, index?: number): proto_dme_pb.Dme;

    clearStockList(): void;
    getStockList(): Array<proto_stock_pb.Stock>;
    setStockList(value: Array<proto_stock_pb.Stock>): Geo;
    addStock(value?: proto_stock_pb.Stock, index?: number): proto_stock_pb.Stock;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Geo.AsObject;
    static toObject(includeInstance: boolean, msg: Geo): Geo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Geo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Geo;
    static deserializeBinaryFromReader(message: Geo, reader: jspb.BinaryReader): Geo;
}

export namespace Geo {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        materialList: Array<proto_material_pb.Material.AsObject>,
        geofenceList: Array<proto_geofence_pb.Geofence.AsObject>,
        roadList: Array<proto_road_pb.Road.AsObject>,
        pitList: Array<proto_pit_pb.Pit.AsObject>,
        padList: Array<proto_pad_pb.Pad.AsObject>,
        dmeList: Array<proto_dme_pb.Dme.AsObject>,
        stockList: Array<proto_stock_pb.Stock.AsObject>,
    }
}

export class Chunk extends jspb.Message { 
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): Chunk;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Chunk.AsObject;
    static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Chunk;
    static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
    export type AsObject = {
        content: Uint8Array | string,
    }
}

export class GeoChunkRequest extends jspb.Message { 

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): Chunk | undefined;
    setChunk(value?: Chunk): GeoChunkRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoChunkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GeoChunkRequest): GeoChunkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoChunkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoChunkRequest;
    static deserializeBinaryFromReader(message: GeoChunkRequest, reader: jspb.BinaryReader): GeoChunkRequest;
}

export namespace GeoChunkRequest {
    export type AsObject = {
        chunk?: Chunk.AsObject,
    }
}

export class GeoChunkResponse extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): GeoChunkResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoChunkResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GeoChunkResponse): GeoChunkResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoChunkResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoChunkResponse;
    static deserializeBinaryFromReader(message: GeoChunkResponse, reader: jspb.BinaryReader): GeoChunkResponse;
}

export namespace GeoChunkResponse {
    export type AsObject = {
        ok: boolean,
    }
}

export class GeoRequest extends jspb.Message { 

    hasGeo(): boolean;
    clearGeo(): void;
    getGeo(): Geo | undefined;
    setGeo(value?: Geo): GeoRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GeoRequest): GeoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoRequest;
    static deserializeBinaryFromReader(message: GeoRequest, reader: jspb.BinaryReader): GeoRequest;
}

export namespace GeoRequest {
    export type AsObject = {
        geo?: Geo.AsObject,
    }
}

export class GeoResponse extends jspb.Message { 

    hasGeo(): boolean;
    clearGeo(): void;
    getGeo(): Geo | undefined;
    setGeo(value?: Geo): GeoResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GeoResponse): GeoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoResponse;
    static deserializeBinaryFromReader(message: GeoResponse, reader: jspb.BinaryReader): GeoResponse;
}

export namespace GeoResponse {
    export type AsObject = {
        geo?: Geo.AsObject,
    }
}

export class GeosResponse extends jspb.Message { 
    clearGeosList(): void;
    getGeosList(): Array<Geo>;
    setGeosList(value: Array<Geo>): GeosResponse;
    addGeos(value?: Geo, index?: number): Geo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeosResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GeosResponse): GeosResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeosResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeosResponse;
    static deserializeBinaryFromReader(message: GeosResponse, reader: jspb.BinaryReader): GeosResponse;
}

export namespace GeosResponse {
    export type AsObject = {
        geosList: Array<Geo.AsObject>,
    }
}

export class GeoEmptyRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoEmptyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GeoEmptyRequest): GeoEmptyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoEmptyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoEmptyRequest;
    static deserializeBinaryFromReader(message: GeoEmptyRequest, reader: jspb.BinaryReader): GeoEmptyRequest;
}

export namespace GeoEmptyRequest {
    export type AsObject = {
    }
}
