// package: pb
// file: proto/services/dme.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_dme_pb from "../../proto/entities/dme_pb";

export class DmeRequest extends jspb.Message { 

    hasDme(): boolean;
    clearDme(): void;
    getDme(): proto_entities_dme_pb.Dme | undefined;
    setDme(value?: proto_entities_dme_pb.Dme): DmeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DmeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DmeRequest): DmeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DmeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DmeRequest;
    static deserializeBinaryFromReader(message: DmeRequest, reader: jspb.BinaryReader): DmeRequest;
}

export namespace DmeRequest {
    export type AsObject = {
        dme?: proto_entities_dme_pb.Dme.AsObject,
    }
}

export class DmeResponse extends jspb.Message { 

    hasDme(): boolean;
    clearDme(): void;
    getDme(): proto_entities_dme_pb.Dme | undefined;
    setDme(value?: proto_entities_dme_pb.Dme): DmeResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DmeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DmeResponse): DmeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DmeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DmeResponse;
    static deserializeBinaryFromReader(message: DmeResponse, reader: jspb.BinaryReader): DmeResponse;
}

export namespace DmeResponse {
    export type AsObject = {
        dme?: proto_entities_dme_pb.Dme.AsObject,
    }
}

export class DmesResponse extends jspb.Message { 
    clearDmesList(): void;
    getDmesList(): Array<proto_entities_dme_pb.Dme>;
    setDmesList(value: Array<proto_entities_dme_pb.Dme>): DmesResponse;
    addDmes(value?: proto_entities_dme_pb.Dme, index?: number): proto_entities_dme_pb.Dme;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DmesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DmesResponse): DmesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DmesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DmesResponse;
    static deserializeBinaryFromReader(message: DmesResponse, reader: jspb.BinaryReader): DmesResponse;
}

export namespace DmesResponse {
    export type AsObject = {
        dmesList: Array<proto_entities_dme_pb.Dme.AsObject>,
    }
}
