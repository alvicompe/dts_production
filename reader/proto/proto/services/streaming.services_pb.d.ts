// package: pb
// file: proto/services/streaming.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_streaming_pb from "../../proto/entities/streaming_pb";

export class TruckInfoResponse extends jspb.Message { 

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): proto_entities_streaming_pb.TruckInfo | undefined;
    setInfo(value?: proto_entities_streaming_pb.TruckInfo): TruckInfoResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TruckInfoResponse): TruckInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckInfoResponse;
    static deserializeBinaryFromReader(message: TruckInfoResponse, reader: jspb.BinaryReader): TruckInfoResponse;
}

export namespace TruckInfoResponse {
    export type AsObject = {
        info?: proto_entities_streaming_pb.TruckInfo.AsObject,
    }
}

export class ExcavatorInfoRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorInfoRequest): ExcavatorInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorInfoRequest;
    static deserializeBinaryFromReader(message: ExcavatorInfoRequest, reader: jspb.BinaryReader): ExcavatorInfoRequest;
}

export namespace ExcavatorInfoRequest {
    export type AsObject = {
    }
}

export class ExcavatorInfoResponse extends jspb.Message { 

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): proto_entities_streaming_pb.ExcavatorInfo | undefined;
    setInfo(value?: proto_entities_streaming_pb.ExcavatorInfo): ExcavatorInfoResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorInfoResponse): ExcavatorInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorInfoResponse;
    static deserializeBinaryFromReader(message: ExcavatorInfoResponse, reader: jspb.BinaryReader): ExcavatorInfoResponse;
}

export namespace ExcavatorInfoResponse {
    export type AsObject = {
        info?: proto_entities_streaming_pb.ExcavatorInfo.AsObject,
    }
}

export class TruckInfoRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TruckInfoRequest): TruckInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckInfoRequest;
    static deserializeBinaryFromReader(message: TruckInfoRequest, reader: jspb.BinaryReader): TruckInfoRequest;
}

export namespace TruckInfoRequest {
    export type AsObject = {
    }
}
