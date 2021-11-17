// package: pb
// file: proto/geo-reader.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_geo_pb from "../proto/geo_pb";

export class GeoTreeRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoTreeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GeoTreeRequest): GeoTreeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoTreeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoTreeRequest;
    static deserializeBinaryFromReader(message: GeoTreeRequest, reader: jspb.BinaryReader): GeoTreeRequest;
}

export namespace GeoTreeRequest {
    export type AsObject = {
    }
}

export class GeoTreeResponse extends jspb.Message { 
    clearGeoList(): void;
    getGeoList(): Array<proto_geo_pb.Geo>;
    setGeoList(value: Array<proto_geo_pb.Geo>): GeoTreeResponse;
    addGeo(value?: proto_geo_pb.Geo, index?: number): proto_geo_pb.Geo;

    getStatus(): boolean;
    setStatus(value: boolean): GeoTreeResponse;

    getMessage(): string;
    setMessage(value: string): GeoTreeResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoTreeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GeoTreeResponse): GeoTreeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoTreeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoTreeResponse;
    static deserializeBinaryFromReader(message: GeoTreeResponse, reader: jspb.BinaryReader): GeoTreeResponse;
}

export namespace GeoTreeResponse {
    export type AsObject = {
        geoList: Array<proto_geo_pb.Geo.AsObject>,
        status: boolean,
        message: string,
    }
}
