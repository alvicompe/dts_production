// package: pb
// file: proto/services/road.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_road_pb from "../../proto/entities/road_pb";

export class RoadRequest extends jspb.Message { 

    hasRoad(): boolean;
    clearRoad(): void;
    getRoad(): proto_entities_road_pb.Road | undefined;
    setRoad(value?: proto_entities_road_pb.Road): RoadRequest;


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
        road?: proto_entities_road_pb.Road.AsObject,
    }
}

export class RoadResponse extends jspb.Message { 

    hasRoad(): boolean;
    clearRoad(): void;
    getRoad(): proto_entities_road_pb.Road | undefined;
    setRoad(value?: proto_entities_road_pb.Road): RoadResponse;


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
        road?: proto_entities_road_pb.Road.AsObject,
    }
}

export class RoadsResponse extends jspb.Message { 
    clearRoadsList(): void;
    getRoadsList(): Array<proto_entities_road_pb.Road>;
    setRoadsList(value: Array<proto_entities_road_pb.Road>): RoadsResponse;
    addRoads(value?: proto_entities_road_pb.Road, index?: number): proto_entities_road_pb.Road;


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
        roadsList: Array<proto_entities_road_pb.Road.AsObject>,
    }
}
