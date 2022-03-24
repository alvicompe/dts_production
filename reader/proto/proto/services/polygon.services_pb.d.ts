// package: pb
// file: proto/services/polygon.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_polygon_pb from "../../proto/entities/polygon_pb";

export class PolygonRequest extends jspb.Message { 

    hasPolygon(): boolean;
    clearPolygon(): void;
    getPolygon(): proto_entities_polygon_pb.Polygon | undefined;
    setPolygon(value?: proto_entities_polygon_pb.Polygon): PolygonRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonRequest): PolygonRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonRequest;
    static deserializeBinaryFromReader(message: PolygonRequest, reader: jspb.BinaryReader): PolygonRequest;
}

export namespace PolygonRequest {
    export type AsObject = {
        polygon?: proto_entities_polygon_pb.Polygon.AsObject,
    }
}

export class PolygonListRequest extends jspb.Message { 
    clearPolygonList(): void;
    getPolygonList(): Array<proto_entities_polygon_pb.Polygon>;
    setPolygonList(value: Array<proto_entities_polygon_pb.Polygon>): PolygonListRequest;
    addPolygon(value?: proto_entities_polygon_pb.Polygon, index?: number): proto_entities_polygon_pb.Polygon;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonListRequest): PolygonListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonListRequest;
    static deserializeBinaryFromReader(message: PolygonListRequest, reader: jspb.BinaryReader): PolygonListRequest;
}

export namespace PolygonListRequest {
    export type AsObject = {
        polygonList: Array<proto_entities_polygon_pb.Polygon.AsObject>,
    }
}

export class PolygonResponse extends jspb.Message { 

    hasPolygon(): boolean;
    clearPolygon(): void;
    getPolygon(): proto_entities_polygon_pb.Polygon | undefined;
    setPolygon(value?: proto_entities_polygon_pb.Polygon): PolygonResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonResponse): PolygonResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonResponse;
    static deserializeBinaryFromReader(message: PolygonResponse, reader: jspb.BinaryReader): PolygonResponse;
}

export namespace PolygonResponse {
    export type AsObject = {
        polygon?: proto_entities_polygon_pb.Polygon.AsObject,
    }
}

export class PolygonsResponse extends jspb.Message { 
    clearPolygonsList(): void;
    getPolygonsList(): Array<proto_entities_polygon_pb.Polygon>;
    setPolygonsList(value: Array<proto_entities_polygon_pb.Polygon>): PolygonsResponse;
    addPolygons(value?: proto_entities_polygon_pb.Polygon, index?: number): proto_entities_polygon_pb.Polygon;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonsResponse): PolygonsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonsResponse;
    static deserializeBinaryFromReader(message: PolygonsResponse, reader: jspb.BinaryReader): PolygonsResponse;
}

export namespace PolygonsResponse {
    export type AsObject = {
        polygonsList: Array<proto_entities_polygon_pb.Polygon.AsObject>,
    }
}

export class PolygonListResponse extends jspb.Message { 
    getDone(): boolean;
    setDone(value: boolean): PolygonListResponse;

    getMessage(): string;
    setMessage(value: string): PolygonListResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PolygonListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PolygonListResponse): PolygonListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PolygonListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PolygonListResponse;
    static deserializeBinaryFromReader(message: PolygonListResponse, reader: jspb.BinaryReader): PolygonListResponse;
}

export namespace PolygonListResponse {
    export type AsObject = {
        done: boolean,
        message: string,
    }
}

export class RetrievePolygonByProjectNameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RetrievePolygonByProjectNameRequest;

    getProjectName(): string;
    setProjectName(value: string): RetrievePolygonByProjectNameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetrievePolygonByProjectNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RetrievePolygonByProjectNameRequest): RetrievePolygonByProjectNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetrievePolygonByProjectNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetrievePolygonByProjectNameRequest;
    static deserializeBinaryFromReader(message: RetrievePolygonByProjectNameRequest, reader: jspb.BinaryReader): RetrievePolygonByProjectNameRequest;
}

export namespace RetrievePolygonByProjectNameRequest {
    export type AsObject = {
        name: string,
        projectName: string,
    }
}
