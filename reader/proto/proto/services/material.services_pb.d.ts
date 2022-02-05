// package: pb
// file: proto/services/material.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_material_pb from "../../proto/entities/material_pb";

export class MaterialRequest extends jspb.Message { 

    hasMaterial(): boolean;
    clearMaterial(): void;
    getMaterial(): proto_entities_material_pb.Material | undefined;
    setMaterial(value?: proto_entities_material_pb.Material): MaterialRequest;


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
        material?: proto_entities_material_pb.Material.AsObject,
    }
}

export class MaterialResponse extends jspb.Message { 

    hasMaterial(): boolean;
    clearMaterial(): void;
    getMaterial(): proto_entities_material_pb.Material | undefined;
    setMaterial(value?: proto_entities_material_pb.Material): MaterialResponse;


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
        material?: proto_entities_material_pb.Material.AsObject,
    }
}

export class MaterialsResponse extends jspb.Message { 
    clearMaterialsList(): void;
    getMaterialsList(): Array<proto_entities_material_pb.Material>;
    setMaterialsList(value: Array<proto_entities_material_pb.Material>): MaterialsResponse;
    addMaterials(value?: proto_entities_material_pb.Material, index?: number): proto_entities_material_pb.Material;


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
        materialsList: Array<proto_entities_material_pb.Material.AsObject>,
    }
}
