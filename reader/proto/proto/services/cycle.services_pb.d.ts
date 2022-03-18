// package: pb
// file: proto/services/cycle.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_cycle_pb from "../../proto/entities/cycle_pb";

export class CycleRequest extends jspb.Message { 

    hasCycle(): boolean;
    clearCycle(): void;
    getCycle(): proto_entities_cycle_pb.Cycle | undefined;
    setCycle(value?: proto_entities_cycle_pb.Cycle): CycleRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CycleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CycleRequest): CycleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CycleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CycleRequest;
    static deserializeBinaryFromReader(message: CycleRequest, reader: jspb.BinaryReader): CycleRequest;
}

export namespace CycleRequest {
    export type AsObject = {
        cycle?: proto_entities_cycle_pb.Cycle.AsObject,
    }
}

export class CycleResponse extends jspb.Message { 

    hasCycle(): boolean;
    clearCycle(): void;
    getCycle(): proto_entities_cycle_pb.Cycle | undefined;
    setCycle(value?: proto_entities_cycle_pb.Cycle): CycleResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CycleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CycleResponse): CycleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CycleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CycleResponse;
    static deserializeBinaryFromReader(message: CycleResponse, reader: jspb.BinaryReader): CycleResponse;
}

export namespace CycleResponse {
    export type AsObject = {
        cycle?: proto_entities_cycle_pb.Cycle.AsObject,
    }
}

export class CyclesResponse extends jspb.Message { 
    clearCyclesList(): void;
    getCyclesList(): Array<proto_entities_cycle_pb.Cycle>;
    setCyclesList(value: Array<proto_entities_cycle_pb.Cycle>): CyclesResponse;
    addCycles(value?: proto_entities_cycle_pb.Cycle, index?: number): proto_entities_cycle_pb.Cycle;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CyclesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CyclesResponse): CyclesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CyclesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CyclesResponse;
    static deserializeBinaryFromReader(message: CyclesResponse, reader: jspb.BinaryReader): CyclesResponse;
}

export namespace CyclesResponse {
    export type AsObject = {
        cyclesList: Array<proto_entities_cycle_pb.Cycle.AsObject>,
    }
}
