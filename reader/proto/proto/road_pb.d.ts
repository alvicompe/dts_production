// package: pb
// file: proto/road.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_point_pb from "../proto/point_pb";

export class Road extends jspb.Message { 
    getId(): string;
    setId(value: string): Road;

    getName(): string;
    setName(value: string): Road;

    getDescription(): string;
    setDescription(value: string): Road;

    getColor(): number;
    setColor(value: number): Road;

    clearPointList(): void;
    getPointList(): Array<proto_point_pb.Point>;
    setPointList(value: Array<proto_point_pb.Point>): Road;
    addPoint(value?: proto_point_pb.Point, index?: number): proto_point_pb.Point;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Road.AsObject;
    static toObject(includeInstance: boolean, msg: Road): Road.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Road, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Road;
    static deserializeBinaryFromReader(message: Road, reader: jspb.BinaryReader): Road;
}

export namespace Road {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        color: number,
        pointList: Array<proto_point_pb.Point.AsObject>,
    }

    export enum State {
    UNKNOWN = 0,
    }

}

export class RoadRequest extends jspb.Message { 

    hasRoad(): boolean;
    clearRoad(): void;
    getRoad(): Road | undefined;
    setRoad(value?: Road): RoadRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RoadRequest): RoadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoadRequest;
    static deserializeBinaryFromReader(message: RoadRequest, reader: jspb.BinaryReader): RoadRequest;
}

export namespace RoadRequest {
    export type AsObject = {
        road?: Road.AsObject,
    }
}

export class RoadResponse extends jspb.Message { 

    hasRoad(): boolean;
    clearRoad(): void;
    getRoad(): Road | undefined;
    setRoad(value?: Road): RoadResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RoadResponse): RoadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoadResponse;
    static deserializeBinaryFromReader(message: RoadResponse, reader: jspb.BinaryReader): RoadResponse;
}

export namespace RoadResponse {
    export type AsObject = {
        road?: Road.AsObject,
    }
}

export class RoadsResponse extends jspb.Message { 
    clearRoadsList(): void;
    getRoadsList(): Array<Road>;
    setRoadsList(value: Array<Road>): RoadsResponse;
    addRoads(value?: Road, index?: number): Road;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoadsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RoadsResponse): RoadsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoadsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoadsResponse;
    static deserializeBinaryFromReader(message: RoadsResponse, reader: jspb.BinaryReader): RoadsResponse;
}

export namespace RoadsResponse {
    export type AsObject = {
        roadsList: Array<Road.AsObject>,
    }
}
