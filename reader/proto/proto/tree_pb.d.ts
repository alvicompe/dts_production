// package: pb
// file: proto/tree.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class TreeResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): TreeResponse;

    getMessage(): string;
    setMessage(value: string): TreeResponse;

    getGeo(): string;
    setGeo(value: string): TreeResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TreeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TreeResponse): TreeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TreeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TreeResponse;
    static deserializeBinaryFromReader(message: TreeResponse, reader: jspb.BinaryReader): TreeResponse;
}

export namespace TreeResponse {
    export type AsObject = {
        status: boolean,
        message: string,
        geo: string,
    }
}

export class CreateTreeRequest extends jspb.Message { 
    getTree(): string;
    setTree(value: string): CreateTreeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTreeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTreeRequest): CreateTreeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTreeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTreeRequest;
    static deserializeBinaryFromReader(message: CreateTreeRequest, reader: jspb.BinaryReader): CreateTreeRequest;
}

export namespace CreateTreeRequest {
    export type AsObject = {
        tree: string,
    }
}
