// package: pb
// file: proto/services/bench.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_bench_pb from "../../proto/entities/bench_pb";

export class BenchRequest extends jspb.Message { 

    hasBench(): boolean;
    clearBench(): void;
    getBench(): proto_entities_bench_pb.Bench | undefined;
    setBench(value?: proto_entities_bench_pb.Bench): BenchRequest;


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
        bench?: proto_entities_bench_pb.Bench.AsObject,
    }
}

export class BenchResponse extends jspb.Message { 

    hasBench(): boolean;
    clearBench(): void;
    getBench(): proto_entities_bench_pb.Bench | undefined;
    setBench(value?: proto_entities_bench_pb.Bench): BenchResponse;


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
        bench?: proto_entities_bench_pb.Bench.AsObject,
    }
}

export class BenchesResponse extends jspb.Message { 
    clearBenchesList(): void;
    getBenchesList(): Array<proto_entities_bench_pb.Bench>;
    setBenchesList(value: Array<proto_entities_bench_pb.Bench>): BenchesResponse;
    addBenches(value?: proto_entities_bench_pb.Bench, index?: number): proto_entities_bench_pb.Bench;


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
        benchesList: Array<proto_entities_bench_pb.Bench.AsObject>,
    }
}
