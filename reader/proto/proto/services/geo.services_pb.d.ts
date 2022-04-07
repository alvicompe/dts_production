// package: pb
// file: proto/services/geo.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_geo_pb from "../../proto/entities/geo_pb";

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
    getGeo(): proto_entities_geo_pb.Geo | undefined;
    setGeo(value?: proto_entities_geo_pb.Geo): GeoRequest;


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
        geo?: proto_entities_geo_pb.Geo.AsObject,
    }
}

export class GeoResponse extends jspb.Message { 

    hasGeo(): boolean;
    clearGeo(): void;
    getGeo(): proto_entities_geo_pb.Geo | undefined;
    setGeo(value?: proto_entities_geo_pb.Geo): GeoResponse;


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
        geo?: proto_entities_geo_pb.Geo.AsObject,
    }
}

export class GeosResponse extends jspb.Message { 
    clearGeosList(): void;
    getGeosList(): Array<proto_entities_geo_pb.Geo>;
    setGeosList(value: Array<proto_entities_geo_pb.Geo>): GeosResponse;
    addGeos(value?: proto_entities_geo_pb.Geo, index?: number): proto_entities_geo_pb.Geo;


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
        geosList: Array<proto_entities_geo_pb.Geo.AsObject>,
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
