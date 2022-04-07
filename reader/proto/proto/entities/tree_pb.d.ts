// package: pb
// file: proto/entities/tree.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

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
