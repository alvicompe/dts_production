// package: pb
// file: proto/entities/contractor.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Contractor extends jspb.Message { 
    getId(): string;
    setId(value: string): Contractor;

    getName(): string;
    setName(value: string): Contractor;

    getDescription(): string;
    setDescription(value: string): Contractor;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contractor.AsObject;
    static toObject(includeInstance: boolean, msg: Contractor): Contractor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contractor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contractor;
    static deserializeBinaryFromReader(message: Contractor, reader: jspb.BinaryReader): Contractor;
}

export namespace Contractor {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
    }
}
