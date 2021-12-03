// package: pb
// file: proto/polygon.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_point_pb from "../proto/point_pb";
import * as proto_material_pb from "../proto/material_pb";

export class Polygon extends jspb.Message { 
    getId(): string;
    setId(value: string): Polygon;

    getName(): string;
    setName(value: string): Polygon;

    getDescription(): string;
    setDescription(value: string): Polygon;

    clearPointList(): void;
    getPointList(): Array<proto_point_pb.Point>;
    setPointList(value: Array<proto_point_pb.Point>): Polygon;
    addPoint(value?: proto_point_pb.Point, index?: number): proto_point_pb.Point;


    hasCentroid(): boolean;
    clearCentroid(): void;
    getCentroid(): proto_point_pb.Point | undefined;
    setCentroid(value?: proto_point_pb.Point): Polygon;

    getHeight(): number;
    setHeight(value: number): Polygon;

    getColor(): number;
    setColor(value: number): Polygon;

    getAltitude(): number;
    setAltitude(value: number): Polygon;


    hasMaterial(): boolean;
    clearMaterial(): void;
    getMaterial(): proto_material_pb.Material | undefined;
    setMaterial(value?: proto_material_pb.Material): Polygon;

    getLito(): string;
    setLito(value: string): Polygon;

    getAlte(): string;
    setAlte(value: string): Polygon;

    getOrezonet(): string;
    setOrezonet(value: string): Polygon;

    getAu(): number;
    setAu(value: number): Polygon;

    getAg(): number;
    setAg(value: number): Polygon;

    getAs(): number;
    setAs(value: number): Polygon;

    getVolume(): number;
    setVolume(value: number): Polygon;

    getTonnes(): number;
    setTonnes(value: number): Polygon;

    getOnzas(): number;
    setOnzas(value: number): Polygon;

    getAuch(): number;
    setAuch(value: number): Polygon;

    getAgcn(): number;
    setAgcn(value: number): Polygon;

    getPtaucn(): number;
    setPtaucn(value: number): Polygon;

    getS(): number;
    setS(value: number): Polygon;

    getState(): Polygon.State;
    setState(value: Polygon.State): Polygon;

    getProjectName(): string;
    setProjectName(value: string): Polygon;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Polygon.AsObject;
    static toObject(includeInstance: boolean, msg: Polygon): Polygon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Polygon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Polygon;
    static deserializeBinaryFromReader(message: Polygon, reader: jspb.BinaryReader): Polygon;
}

export namespace Polygon {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        pointList: Array<proto_point_pb.Point.AsObject>,
        centroid?: proto_point_pb.Point.AsObject,
        height: number,
        color: number,
        altitude: number,
        material?: proto_material_pb.Material.AsObject,
        lito: string,
        alte: string,
        orezonet: string,
        au: number,
        ag: number,
        as: number,
        volume: number,
        tonnes: number,
        onzas: number,
        auch: number,
        agcn: number,
        ptaucn: number,
        s: number,
        state: Polygon.State,
        projectName: string,
    }

    export enum State {
    UNKNOWN = 0,
    ACTIVE = 1,
    WAITING = 2,
    FINISHED = 3,
    }

}

export class PolygonRequest extends jspb.Message { 

    hasPolygon(): boolean;
    clearPolygon(): void;
    getPolygon(): Polygon | undefined;
    setPolygon(value?: Polygon): PolygonRequest;


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
        polygon?: Polygon.AsObject,
    }
}

export class PolygonListRequest extends jspb.Message { 
    clearPolygonList(): void;
    getPolygonList(): Array<Polygon>;
    setPolygonList(value: Array<Polygon>): PolygonListRequest;
    addPolygon(value?: Polygon, index?: number): Polygon;


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
        polygonList: Array<Polygon.AsObject>,
    }
}

export class PolygonResponse extends jspb.Message { 

    hasPolygon(): boolean;
    clearPolygon(): void;
    getPolygon(): Polygon | undefined;
    setPolygon(value?: Polygon): PolygonResponse;


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
        polygon?: Polygon.AsObject,
    }
}

export class PolygonsResponse extends jspb.Message { 
    clearPolygonsList(): void;
    getPolygonsList(): Array<Polygon>;
    setPolygonsList(value: Array<Polygon>): PolygonsResponse;
    addPolygons(value?: Polygon, index?: number): Polygon;


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
        polygonsList: Array<Polygon.AsObject>,
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
