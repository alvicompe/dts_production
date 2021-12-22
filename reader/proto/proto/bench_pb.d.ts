// package: pb
// file: proto/bench.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_project_pb from "../proto/project_pb";

export class Bench extends jspb.Message { 
    getId(): string;
    setId(value: string): Bench;

    getName(): string;
    setName(value: string): Bench;

    getDescription(): string;
    setDescription(value: string): Bench;

    clearProjectList(): void;
    getProjectList(): Array<proto_project_pb.Project>;
    setProjectList(value: Array<proto_project_pb.Project>): Bench;
    addProject(value?: proto_project_pb.Project, index?: number): proto_project_pb.Project;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bench.AsObject;
    static toObject(includeInstance: boolean, msg: Bench): Bench.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bench, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bench;
    static deserializeBinaryFromReader(message: Bench, reader: jspb.BinaryReader): Bench;
}

export namespace Bench {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        projectList: Array<proto_project_pb.Project.AsObject>,
    }
}

export class BenchRequest extends jspb.Message { 

    hasBench(): boolean;
    clearBench(): void;
    getBench(): Bench | undefined;
    setBench(value?: Bench): BenchRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BenchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BenchRequest): BenchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BenchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BenchRequest;
    static deserializeBinaryFromReader(message: BenchRequest, reader: jspb.BinaryReader): BenchRequest;
}

export namespace BenchRequest {
    export type AsObject = {
        bench?: Bench.AsObject,
    }
}

export class BenchResponse extends jspb.Message { 

    hasBench(): boolean;
    clearBench(): void;
    getBench(): Bench | undefined;
    setBench(value?: Bench): BenchResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BenchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BenchResponse): BenchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BenchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BenchResponse;
    static deserializeBinaryFromReader(message: BenchResponse, reader: jspb.BinaryReader): BenchResponse;
}

export namespace BenchResponse {
    export type AsObject = {
        bench?: Bench.AsObject,
    }
}

export class BenchesResponse extends jspb.Message { 
    clearBenchesList(): void;
    getBenchesList(): Array<Bench>;
    setBenchesList(value: Array<Bench>): BenchesResponse;
    addBenches(value?: Bench, index?: number): Bench;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BenchesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BenchesResponse): BenchesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BenchesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BenchesResponse;
    static deserializeBinaryFromReader(message: BenchesResponse, reader: jspb.BinaryReader): BenchesResponse;
}

export namespace BenchesResponse {
    export type AsObject = {
        benchesList: Array<Bench.AsObject>,
    }
}