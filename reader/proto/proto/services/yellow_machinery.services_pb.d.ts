// package: pb
// file: proto/services/yellow_machinery.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_yellow_machinery_pb from "../../proto/entities/yellow_machinery_pb";

export class YellowMachineryRequest extends jspb.Message { 

    hasYellowMachinery(): boolean;
    clearYellowMachinery(): void;
    getYellowMachinery(): proto_entities_yellow_machinery_pb.YellowMachinery | undefined;
    setYellowMachinery(value?: proto_entities_yellow_machinery_pb.YellowMachinery): YellowMachineryRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): YellowMachineryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: YellowMachineryRequest): YellowMachineryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: YellowMachineryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): YellowMachineryRequest;
    static deserializeBinaryFromReader(message: YellowMachineryRequest, reader: jspb.BinaryReader): YellowMachineryRequest;
}

export namespace YellowMachineryRequest {
    export type AsObject = {
        yellowMachinery?: proto_entities_yellow_machinery_pb.YellowMachinery.AsObject,
    }
}

export class YellowMachineryResponse extends jspb.Message { 

    hasYellowMachinery(): boolean;
    clearYellowMachinery(): void;
    getYellowMachinery(): proto_entities_yellow_machinery_pb.YellowMachinery | undefined;
    setYellowMachinery(value?: proto_entities_yellow_machinery_pb.YellowMachinery): YellowMachineryResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): YellowMachineryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: YellowMachineryResponse): YellowMachineryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: YellowMachineryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): YellowMachineryResponse;
    static deserializeBinaryFromReader(message: YellowMachineryResponse, reader: jspb.BinaryReader): YellowMachineryResponse;
}

export namespace YellowMachineryResponse {
    export type AsObject = {
        yellowMachinery?: proto_entities_yellow_machinery_pb.YellowMachinery.AsObject,
    }
}

export class ListYellowMachineryResponse extends jspb.Message { 
    clearYellowMachineryList(): void;
    getYellowMachineryList(): Array<proto_entities_yellow_machinery_pb.YellowMachinery>;
    setYellowMachineryList(value: Array<proto_entities_yellow_machinery_pb.YellowMachinery>): ListYellowMachineryResponse;
    addYellowMachinery(value?: proto_entities_yellow_machinery_pb.YellowMachinery, index?: number): proto_entities_yellow_machinery_pb.YellowMachinery;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListYellowMachineryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListYellowMachineryResponse): ListYellowMachineryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListYellowMachineryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListYellowMachineryResponse;
    static deserializeBinaryFromReader(message: ListYellowMachineryResponse, reader: jspb.BinaryReader): ListYellowMachineryResponse;
}

export namespace ListYellowMachineryResponse {
    export type AsObject = {
        yellowMachineryList: Array<proto_entities_yellow_machinery_pb.YellowMachinery.AsObject>,
    }
}
