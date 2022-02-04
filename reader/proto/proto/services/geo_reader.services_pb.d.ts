// package: pb
// file: proto/services/geo_reader.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ChangeFile extends jspb.Message { 
    getPath(): string;
    setPath(value: string): ChangeFile;

    getFile(): string;
    setFile(value: string): ChangeFile;

    getDirectory(): string;
    setDirectory(value: string): ChangeFile;

    getState(): string;
    setState(value: string): ChangeFile;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeFile.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeFile): ChangeFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeFile;
    static deserializeBinaryFromReader(message: ChangeFile, reader: jspb.BinaryReader): ChangeFile;
}

export namespace ChangeFile {
    export type AsObject = {
        path: string,
        file: string,
        directory: string,
        state: string,
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

export class GeoTreeResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): GeoTreeResponse;

    getMessage(): string;
    setMessage(value: string): GeoTreeResponse;

    getGeo(): string;
    setGeo(value: string): GeoTreeResponse;

    clearErrorsList(): void;
    getErrorsList(): Array<MessageError>;
    setErrorsList(value: Array<MessageError>): GeoTreeResponse;
    addErrors(value?: MessageError, index?: number): MessageError;


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
        errorsList: Array<MessageError.AsObject>,
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

export class CheckChangesTreeGeoResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): CheckChangesTreeGeoResponse;

    getChange(): boolean;
    setChange(value: boolean): CheckChangesTreeGeoResponse;

    getFirstload(): boolean;
    setFirstload(value: boolean): CheckChangesTreeGeoResponse;

    getMessage(): string;
    setMessage(value: string): CheckChangesTreeGeoResponse;

    clearChangefilesList(): void;
    getChangefilesList(): Array<ChangeFile>;
    setChangefilesList(value: Array<ChangeFile>): CheckChangesTreeGeoResponse;
    addChangefiles(value?: ChangeFile, index?: number): ChangeFile;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckChangesTreeGeoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckChangesTreeGeoResponse): CheckChangesTreeGeoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckChangesTreeGeoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckChangesTreeGeoResponse;
    static deserializeBinaryFromReader(message: CheckChangesTreeGeoResponse, reader: jspb.BinaryReader): CheckChangesTreeGeoResponse;
}

export namespace CheckChangesTreeGeoResponse {
    export type AsObject = {
        status: boolean,
        change: boolean,
        firstload: boolean,
        message: string,
        changefilesList: Array<ChangeFile.AsObject>,
    }
}

export class NotificationDTS extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): NotificationDTS;

    getMessage(): string;
    setMessage(value: string): NotificationDTS;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotificationDTS.AsObject;
    static toObject(includeInstance: boolean, msg: NotificationDTS): NotificationDTS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotificationDTS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotificationDTS;
    static deserializeBinaryFromReader(message: NotificationDTS, reader: jspb.BinaryReader): NotificationDTS;
}

export namespace NotificationDTS {
    export type AsObject = {
        title: string,
        message: string,
    }
}

export class ChangesGeoNotificationResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): ChangesGeoNotificationResponse;

    clearNotificationsList(): void;
    getNotificationsList(): Array<NotificationDTS>;
    setNotificationsList(value: Array<NotificationDTS>): ChangesGeoNotificationResponse;
    addNotifications(value?: NotificationDTS, index?: number): NotificationDTS;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangesGeoNotificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChangesGeoNotificationResponse): ChangesGeoNotificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangesGeoNotificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangesGeoNotificationResponse;
    static deserializeBinaryFromReader(message: ChangesGeoNotificationResponse, reader: jspb.BinaryReader): ChangesGeoNotificationResponse;
}

export namespace ChangesGeoNotificationResponse {
    export type AsObject = {
        status: boolean,
        notificationsList: Array<NotificationDTS.AsObject>,
    }
}

export class AutomaticallyExecuteChangeTreeGeoResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): AutomaticallyExecuteChangeTreeGeoResponse;

    getMessage(): string;
    setMessage(value: string): AutomaticallyExecuteChangeTreeGeoResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AutomaticallyExecuteChangeTreeGeoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AutomaticallyExecuteChangeTreeGeoResponse): AutomaticallyExecuteChangeTreeGeoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AutomaticallyExecuteChangeTreeGeoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AutomaticallyExecuteChangeTreeGeoResponse;
    static deserializeBinaryFromReader(message: AutomaticallyExecuteChangeTreeGeoResponse, reader: jspb.BinaryReader): AutomaticallyExecuteChangeTreeGeoResponse;
}

export namespace AutomaticallyExecuteChangeTreeGeoResponse {
    export type AsObject = {
        status: boolean,
        message: string,
    }
}
