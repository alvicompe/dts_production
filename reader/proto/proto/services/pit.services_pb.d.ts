// package: pb
// file: proto/services/pit.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_pit_pb from "../../proto/entities/pit_pb";

export class PitRequest extends jspb.Message { 

    hasPit(): boolean;
    clearPit(): void;
    getPit(): proto_entities_pit_pb.Pit | undefined;
    setPit(value?: proto_entities_pit_pb.Pit): PitRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PitRequest): PitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PitRequest;
    static deserializeBinaryFromReader(message: PitRequest, reader: jspb.BinaryReader): PitRequest;
}

export namespace PitRequest {
    export type AsObject = {
        pit?: proto_entities_pit_pb.Pit.AsObject,
    }
}

export class PitResponse extends jspb.Message { 

    hasPit(): boolean;
    clearPit(): void;
    getPit(): proto_entities_pit_pb.Pit | undefined;
    setPit(value?: proto_entities_pit_pb.Pit): PitResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PitResponse): PitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PitResponse;
    static deserializeBinaryFromReader(message: PitResponse, reader: jspb.BinaryReader): PitResponse;
}

export namespace PitResponse {
    export type AsObject = {
        pit?: proto_entities_pit_pb.Pit.AsObject,
    }
}

export class PitsResponse extends jspb.Message { 
    clearPitsList(): void;
    getPitsList(): Array<proto_entities_pit_pb.Pit>;
    setPitsList(value: Array<proto_entities_pit_pb.Pit>): PitsResponse;
    addPits(value?: proto_entities_pit_pb.Pit, index?: number): proto_entities_pit_pb.Pit;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PitsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PitsResponse): PitsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PitsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PitsResponse;
    static deserializeBinaryFromReader(message: PitsResponse, reader: jspb.BinaryReader): PitsResponse;
}

export namespace PitsResponse {
    export type AsObject = {
        pitsList: Array<proto_entities_pit_pb.Pit.AsObject>,
    }
}
