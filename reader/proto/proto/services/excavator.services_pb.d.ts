// package: pb
// file: proto/services/excavator.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_excavator_pb from "../../proto/entities/excavator_pb";

export class ExcavatorRequest extends jspb.Message { 

    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): proto_entities_excavator_pb.Excavator | undefined;
    setExcavator(value?: proto_entities_excavator_pb.Excavator): ExcavatorRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorRequest): ExcavatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorRequest;
    static deserializeBinaryFromReader(message: ExcavatorRequest, reader: jspb.BinaryReader): ExcavatorRequest;
}

export namespace ExcavatorRequest {
    export type AsObject = {
        excavator?: proto_entities_excavator_pb.Excavator.AsObject,
    }
}

export class ExcavatorResponse extends jspb.Message { 

    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): proto_entities_excavator_pb.Excavator | undefined;
    setExcavator(value?: proto_entities_excavator_pb.Excavator): ExcavatorResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorResponse): ExcavatorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorResponse;
    static deserializeBinaryFromReader(message: ExcavatorResponse, reader: jspb.BinaryReader): ExcavatorResponse;
}

export namespace ExcavatorResponse {
    export type AsObject = {
        excavator?: proto_entities_excavator_pb.Excavator.AsObject,
    }
}

export class ExcavatorsResponse extends jspb.Message { 
    clearExcavatorsList(): void;
    getExcavatorsList(): Array<proto_entities_excavator_pb.Excavator>;
    setExcavatorsList(value: Array<proto_entities_excavator_pb.Excavator>): ExcavatorsResponse;
    addExcavators(value?: proto_entities_excavator_pb.Excavator, index?: number): proto_entities_excavator_pb.Excavator;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorsResponse): ExcavatorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorsResponse;
    static deserializeBinaryFromReader(message: ExcavatorsResponse, reader: jspb.BinaryReader): ExcavatorsResponse;
}

export namespace ExcavatorsResponse {
    export type AsObject = {
        excavatorsList: Array<proto_entities_excavator_pb.Excavator.AsObject>,
    }
}