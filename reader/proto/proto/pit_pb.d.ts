// package: pb
// file: proto/pit.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_project_pb from "../proto/project_pb";

export class Pit extends jspb.Message { 
    getId(): string;
    setId(value: string): Pit;

    getName(): string;
    setName(value: string): Pit;

    getDescription(): string;
    setDescription(value: string): Pit;

    clearProjectList(): void;
    getProjectList(): Array<proto_project_pb.Project>;
    setProjectList(value: Array<proto_project_pb.Project>): Pit;
    addProject(value?: proto_project_pb.Project, index?: number): proto_project_pb.Project;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pit.AsObject;
    static toObject(includeInstance: boolean, msg: Pit): Pit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pit;
    static deserializeBinaryFromReader(message: Pit, reader: jspb.BinaryReader): Pit;
}

export namespace Pit {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        projectList: Array<proto_project_pb.Project.AsObject>,
    }
}

export class PitRequest extends jspb.Message { 

    hasPit(): boolean;
    clearPit(): void;
    getPit(): Pit | undefined;
    setPit(value?: Pit): PitRequest;


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
        pit?: Pit.AsObject,
    }
}

export class PitResponse extends jspb.Message { 

    hasPit(): boolean;
    clearPit(): void;
    getPit(): Pit | undefined;
    setPit(value?: Pit): PitResponse;


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
        pit?: Pit.AsObject,
    }
}

export class PitsResponse extends jspb.Message { 
    clearPitsList(): void;
    getPitsList(): Array<Pit>;
    setPitsList(value: Array<Pit>): PitsResponse;
    addPits(value?: Pit, index?: number): Pit;


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
        pitsList: Array<Pit.AsObject>,
    }
}
