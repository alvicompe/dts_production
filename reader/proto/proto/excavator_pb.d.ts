// package: pb
// file: proto/excavator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_contractor_pb from "../proto/contractor_pb";

export class Excavator extends jspb.Message { 
    getId(): string;
    setId(value: string): Excavator;

    getDeviceId(): string;
    setDeviceId(value: string): Excavator;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): Excavator;

    getDeviceInterval(): number;
    setDeviceInterval(value: number): Excavator;

    getDescription(): string;
    setDescription(value: string): Excavator;

    getPlate(): string;
    setPlate(value: string): Excavator;


    hasContractor(): boolean;
    clearContractor(): void;
    getContractor(): proto_contractor_pb.Contractor | undefined;
    setContractor(value?: proto_contractor_pb.Contractor): Excavator;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Excavator.AsObject;
    static toObject(includeInstance: boolean, msg: Excavator): Excavator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Excavator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Excavator;
    static deserializeBinaryFromReader(message: Excavator, reader: jspb.BinaryReader): Excavator;
}

export namespace Excavator {
    export type AsObject = {
        id: string,
        deviceId: string,
        deviceAlias: string,
        deviceInterval: number,
        description: string,
        plate: string,
        contractor?: proto_contractor_pb.Contractor.AsObject,
    }
}

export class ExcavatorRequest extends jspb.Message { 

    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): Excavator | undefined;
    setExcavator(value?: Excavator): ExcavatorRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorRequest): ExcavatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorRequest;
    static deserializeBinaryFromReader(message: ExcavatorRequest, reader: jspb.BinaryReader): ExcavatorRequest;
}

export namespace ExcavatorRequest {
    export type AsObject = {
        excavator?: Excavator.AsObject,
    }
}

export class ExcavatorResponse extends jspb.Message { 

    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): Excavator | undefined;
    setExcavator(value?: Excavator): ExcavatorResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorResponse): ExcavatorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorResponse;
    static deserializeBinaryFromReader(message: ExcavatorResponse, reader: jspb.BinaryReader): ExcavatorResponse;
}

export namespace ExcavatorResponse {
    export type AsObject = {
        excavator?: Excavator.AsObject,
    }
}

export class ExcavatorsResponse extends jspb.Message { 
    clearExcavatorsList(): void;
    getExcavatorsList(): Array<Excavator>;
    setExcavatorsList(value: Array<Excavator>): ExcavatorsResponse;
    addExcavators(value?: Excavator, index?: number): Excavator;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorsResponse): ExcavatorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorsResponse;
    static deserializeBinaryFromReader(message: ExcavatorsResponse, reader: jspb.BinaryReader): ExcavatorsResponse;
}

export namespace ExcavatorsResponse {
    export type AsObject = {
        excavatorsList: Array<Excavator.AsObject>,
    }
}
