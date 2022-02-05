// package: pb
// file: proto/entities/excavator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_contractor_pb from "../../proto/entities/contractor_pb";

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
    getContractor(): proto_entities_contractor_pb.Contractor | undefined;
    setContractor(value?: proto_entities_contractor_pb.Contractor): Excavator;


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
        contractor?: proto_entities_contractor_pb.Contractor.AsObject,
    }
}
