// package: pb
// file: proto/entities/material.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Material extends jspb.Message { 
    getId(): string;
    setId(value: string): Material;

    getType(): string;
    setType(value: string): Material;

    getDescription(): string;
    setDescription(value: string): Material;

    getCrs(): string;
    setCrs(value: string): Material;

    getOrezone(): string;
    setOrezone(value: string): Material;

    getLaw(): string;
    setLaw(value: string): Material;

    getThins(): string;
    setThins(value: string): Material;

    getCf(): string;
    setCf(value: string): Material;

    getPlace(): string;
    setPlace(value: string): Material;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Material.AsObject;
    static toObject(includeInstance: boolean, msg: Material): Material.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Material, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Material;
    static deserializeBinaryFromReader(message: Material, reader: jspb.BinaryReader): Material;
}

export namespace Material {
    export type AsObject = {
        id: string,
        type: string,
        description: string,
        crs: string,
        orezone: string,
        law: string,
        thins: string,
        cf: string,
        place: string,
    }
}
