// package: pb
// file: proto/entities/asset_type.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";

export class AssetType extends jspb.Message { 
    getId(): string;
    setId(value: string): AssetType;

    getName(): string;
    setName(value: string): AssetType;

    getEnumAssetType(): proto_enums_asset_type_enums_pb.EnumAssetType;
    setEnumAssetType(value: proto_enums_asset_type_enums_pb.EnumAssetType): AssetType;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetType.AsObject;
    static toObject(includeInstance: boolean, msg: AssetType): AssetType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetType;
    static deserializeBinaryFromReader(message: AssetType, reader: jspb.BinaryReader): AssetType;
}

export namespace AssetType {
    export type AsObject = {
        id: string,
        name: string,
        enumAssetType: proto_enums_asset_type_enums_pb.EnumAssetType,
    }
}
