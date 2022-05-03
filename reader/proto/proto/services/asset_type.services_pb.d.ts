// package: pb
// file: proto/services/asset_type.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_asset_type_pb from "../../proto/entities/asset_type_pb";

export class AssetTypeRequest extends jspb.Message { 

    hasAssetType(): boolean;
    clearAssetType(): void;
    getAssetType(): proto_entities_asset_type_pb.AssetType | undefined;
    setAssetType(value?: proto_entities_asset_type_pb.AssetType): AssetTypeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssetTypeRequest): AssetTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetTypeRequest;
    static deserializeBinaryFromReader(message: AssetTypeRequest, reader: jspb.BinaryReader): AssetTypeRequest;
}

export namespace AssetTypeRequest {
    export type AsObject = {
        assetType?: proto_entities_asset_type_pb.AssetType.AsObject,
    }
}

export class AssetTypeResponse extends jspb.Message { 

    hasAssetType(): boolean;
    clearAssetType(): void;
    getAssetType(): proto_entities_asset_type_pb.AssetType | undefined;
    setAssetType(value?: proto_entities_asset_type_pb.AssetType): AssetTypeResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetTypeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssetTypeResponse): AssetTypeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetTypeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetTypeResponse;
    static deserializeBinaryFromReader(message: AssetTypeResponse, reader: jspb.BinaryReader): AssetTypeResponse;
}

export namespace AssetTypeResponse {
    export type AsObject = {
        assetType?: proto_entities_asset_type_pb.AssetType.AsObject,
    }
}

export class AssetTypesResponse extends jspb.Message { 
    clearAssetTypesList(): void;
    getAssetTypesList(): Array<proto_entities_asset_type_pb.AssetType>;
    setAssetTypesList(value: Array<proto_entities_asset_type_pb.AssetType>): AssetTypesResponse;
    addAssetTypes(value?: proto_entities_asset_type_pb.AssetType, index?: number): proto_entities_asset_type_pb.AssetType;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssetTypesResponse): AssetTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetTypesResponse;
    static deserializeBinaryFromReader(message: AssetTypesResponse, reader: jspb.BinaryReader): AssetTypesResponse;
}

export namespace AssetTypesResponse {
    export type AsObject = {
        assetTypesList: Array<proto_entities_asset_type_pb.AssetType.AsObject>,
    }
}
