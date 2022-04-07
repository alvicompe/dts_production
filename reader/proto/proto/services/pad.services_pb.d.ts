// package: pb
// file: proto/services/pad.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_pad_pb from "../../proto/entities/pad_pb";

export class PadRequest extends jspb.Message { 

    hasPad(): boolean;
    clearPad(): void;
    getPad(): proto_entities_pad_pb.Pad | undefined;
    setPad(value?: proto_entities_pad_pb.Pad): PadRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PadRequest): PadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PadRequest;
    static deserializeBinaryFromReader(message: PadRequest, reader: jspb.BinaryReader): PadRequest;
}

export namespace PadRequest {
    export type AsObject = {
        pad?: proto_entities_pad_pb.Pad.AsObject,
    }
}

export class PadResponse extends jspb.Message { 

    hasPad(): boolean;
    clearPad(): void;
    getPad(): proto_entities_pad_pb.Pad | undefined;
    setPad(value?: proto_entities_pad_pb.Pad): PadResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PadResponse): PadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PadResponse;
    static deserializeBinaryFromReader(message: PadResponse, reader: jspb.BinaryReader): PadResponse;
}

export namespace PadResponse {
    export type AsObject = {
        pad?: proto_entities_pad_pb.Pad.AsObject,
    }
}

export class PadsResponse extends jspb.Message { 
    clearPadsList(): void;
    getPadsList(): Array<proto_entities_pad_pb.Pad>;
    setPadsList(value: Array<proto_entities_pad_pb.Pad>): PadsResponse;
    addPads(value?: proto_entities_pad_pb.Pad, index?: number): proto_entities_pad_pb.Pad;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PadsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PadsResponse): PadsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PadsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PadsResponse;
    static deserializeBinaryFromReader(message: PadsResponse, reader: jspb.BinaryReader): PadsResponse;
}

export namespace PadsResponse {
    export type AsObject = {
        padsList: Array<proto_entities_pad_pb.Pad.AsObject>,
    }
}
