// package: pb
// file: proto/tree.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Tree extends jspb.Message { 
    getId(): string;
    setId(value: string): Tree;

    getTree(): string;
    setTree(value: string): Tree;

    getFiles(): string;
    setFiles(value: string): Tree;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tree.AsObject;
    static toObject(includeInstance: boolean, msg: Tree): Tree.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tree, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tree;
    static deserializeBinaryFromReader(message: Tree, reader: jspb.BinaryReader): Tree;
}

export namespace Tree {
    export type AsObject = {
        id: string,
        tree: string,
        files: string,
    }
}

export class TreeResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): TreeResponse;

    getMessage(): string;
    setMessage(value: string): TreeResponse;


    hasTree(): boolean;
    clearTree(): void;
    getTree(): Tree | undefined;
    setTree(value?: Tree): TreeResponse;


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
        tree?: Tree.AsObject,
    }
}

export class CreateTreeRequest extends jspb.Message { 

    hasTree(): boolean;
    clearTree(): void;
    getTree(): Tree | undefined;
    setTree(value?: Tree): CreateTreeRequest;


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
        tree?: Tree.AsObject,
    }
}

export class RetrieveTreeByIdRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): RetrieveTreeByIdRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetrieveTreeByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RetrieveTreeByIdRequest): RetrieveTreeByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetrieveTreeByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetrieveTreeByIdRequest;
    static deserializeBinaryFromReader(message: RetrieveTreeByIdRequest, reader: jspb.BinaryReader): RetrieveTreeByIdRequest;
}

export namespace RetrieveTreeByIdRequest {
    export type AsObject = {
        id: string,
    }
}
