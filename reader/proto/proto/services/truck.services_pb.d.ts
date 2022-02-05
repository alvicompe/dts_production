// package: pb
// file: proto/services/truck.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";

export class TruckRequest extends jspb.Message { 

    hasTruck(): boolean;
    clearTruck(): void;
    getTruck(): proto_entities_truck_pb.Truck | undefined;
    setTruck(value?: proto_entities_truck_pb.Truck): TruckRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TruckRequest): TruckRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckRequest;
    static deserializeBinaryFromReader(message: TruckRequest, reader: jspb.BinaryReader): TruckRequest;
}

export namespace TruckRequest {
    export type AsObject = {
        truck?: proto_entities_truck_pb.Truck.AsObject,
    }
}

export class TruckResponse extends jspb.Message { 

    hasTruck(): boolean;
    clearTruck(): void;
    getTruck(): proto_entities_truck_pb.Truck | undefined;
    setTruck(value?: proto_entities_truck_pb.Truck): TruckResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TruckResponse): TruckResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckResponse;
    static deserializeBinaryFromReader(message: TruckResponse, reader: jspb.BinaryReader): TruckResponse;
}

export namespace TruckResponse {
    export type AsObject = {
        truck?: proto_entities_truck_pb.Truck.AsObject,
    }
}

export class TrucksResponse extends jspb.Message { 
    clearTrucksList(): void;
    getTrucksList(): Array<proto_entities_truck_pb.Truck>;
    setTrucksList(value: Array<proto_entities_truck_pb.Truck>): TrucksResponse;
    addTrucks(value?: proto_entities_truck_pb.Truck, index?: number): proto_entities_truck_pb.Truck;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrucksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TrucksResponse): TrucksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrucksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrucksResponse;
    static deserializeBinaryFromReader(message: TrucksResponse, reader: jspb.BinaryReader): TrucksResponse;
}

export namespace TrucksResponse {
    export type AsObject = {
        trucksList: Array<proto_entities_truck_pb.Truck.AsObject>,
    }
}