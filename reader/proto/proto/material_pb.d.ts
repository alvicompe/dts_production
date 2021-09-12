// package: pb
// file: proto/material.proto

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

export class MaterialRequest extends jspb.Message { 

    hasMaterial(): boolean;
    clearMaterial(): void;
    getMaterial(): Material | undefined;
    setMaterial(value?: Material): MaterialRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaterialRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MaterialRequest): MaterialRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaterialRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaterialRequest;
    static deserializeBinaryFromReader(message: MaterialRequest, reader: jspb.BinaryReader): MaterialRequest;
}

export namespace MaterialRequest {
    export type AsObject = {
        material?: Material.AsObject,
    }
}

export class MaterialResponse extends jspb.Message { 

    hasMaterial(): boolean;
    clearMaterial(): void;
    getMaterial(): Material | undefined;
    setMaterial(value?: Material): MaterialResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaterialResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MaterialResponse): MaterialResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaterialResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaterialResponse;
    static deserializeBinaryFromReader(message: MaterialResponse, reader: jspb.BinaryReader): MaterialResponse;
}

export namespace MaterialResponse {
    export type AsObject = {
        material?: Material.AsObject,
    }
}

export class MaterialsResponse extends jspb.Message { 
    clearMaterialsList(): void;
    getMaterialsList(): Array<Material>;
    setMaterialsList(value: Array<Material>): MaterialsResponse;
    addMaterials(value?: Material, index?: number): Material;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaterialsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MaterialsResponse): MaterialsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaterialsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaterialsResponse;
    static deserializeBinaryFromReader(message: MaterialsResponse, reader: jspb.BinaryReader): MaterialsResponse;
}

export namespace MaterialsResponse {
    export type AsObject = {
        materialsList: Array<Material.AsObject>,
    }
}
