// package: pb
// file: proto/entities/yellow_machinery.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_asset_type_pb from "../../proto/entities/asset_type_pb";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";

export class YellowMachinery extends jspb.Message { 
    getId(): string;
    setId(value: string): YellowMachinery;

    getDeviceId(): string;
    setDeviceId(value: string): YellowMachinery;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): YellowMachinery;

    getDeviceInterval(): number;
    setDeviceInterval(value: number): YellowMachinery;

    getDescription(): string;
    setDescription(value: string): YellowMachinery;

    getPlate(): string;
    setPlate(value: string): YellowMachinery;

    getHourmeter(): number;
    setHourmeter(value: number): YellowMachinery;


    hasAssetType(): boolean;
    clearAssetType(): void;
    getAssetType(): proto_entities_asset_type_pb.AssetType | undefined;
    setAssetType(value?: proto_entities_asset_type_pb.AssetType): YellowMachinery;

    getEnumAssetType(): proto_enums_asset_type_enums_pb.EnumAssetType;
    setEnumAssetType(value: proto_enums_asset_type_enums_pb.EnumAssetType): YellowMachinery;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): YellowMachinery.AsObject;
    static toObject(includeInstance: boolean, msg: YellowMachinery): YellowMachinery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: YellowMachinery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): YellowMachinery;
    static deserializeBinaryFromReader(message: YellowMachinery, reader: jspb.BinaryReader): YellowMachinery;
}

export namespace YellowMachinery {
    export type AsObject = {
        id: string,
        deviceId: string,
        deviceAlias: string,
        deviceInterval: number,
        description: string,
        plate: string,
        hourmeter: number,
        assetType?: proto_entities_asset_type_pb.AssetType.AsObject,
        enumAssetType: proto_enums_asset_type_enums_pb.EnumAssetType,
    }
}
