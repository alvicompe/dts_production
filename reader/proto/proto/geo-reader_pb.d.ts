// package: pb
// file: proto/geo-reader.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GeoTreeResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): GeoTreeResponse;

    getMessage(): string;
    setMessage(value: string): GeoTreeResponse;

    getGeo(): string;
    setGeo(value: string): GeoTreeResponse;

    clearErrorsList(): void;
    getErrorsList(): Array<string>;
    setErrorsList(value: Array<string>): GeoTreeResponse;
    addErrors(value: string, index?: number): string;


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
        status: boolean,
        message: string,
        geo: string,
        errorsList: Array<string>,
    }
}

export class CreateTreeGeoResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): CreateTreeGeoResponse;

    getMessage(): string;
    setMessage(value: string): CreateTreeGeoResponse;

    clearErrorsList(): void;
    getErrorsList(): Array<MessageError>;
    setErrorsList(value: Array<MessageError>): CreateTreeGeoResponse;
    addErrors(value?: MessageError, index?: number): MessageError;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTreeGeoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTreeGeoResponse): CreateTreeGeoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTreeGeoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTreeGeoResponse;
    static deserializeBinaryFromReader(message: CreateTreeGeoResponse, reader: jspb.BinaryReader): CreateTreeGeoResponse;
}

export namespace CreateTreeGeoResponse {
    export type AsObject = {
        status: boolean,
        message: string,
        errorsList: Array<MessageError.AsObject>,
    }
}

export class MessageError extends jspb.Message { 
    getPath(): string;
    setPath(value: string): MessageError;

    getMessage(): string;
    setMessage(value: string): MessageError;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageError.AsObject;
    static toObject(includeInstance: boolean, msg: MessageError): MessageError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageError;
    static deserializeBinaryFromReader(message: MessageError, reader: jspb.BinaryReader): MessageError;
}

export namespace MessageError {
    export type AsObject = {
        path: string,
        message: string,
    }
}
