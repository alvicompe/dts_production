// package: pb
// file: proto/services/cycle.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_cycle_pb from "../../proto/entities/cycle_pb";
import * as proto_entities_excavator_pb from "../../proto/entities/excavator_pb";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";

export class CycleRequest extends jspb.Message { 

    hasCycle(): boolean;
    clearCycle(): void;
    getCycle(): proto_entities_cycle_pb.Cycle | undefined;
    setCycle(value?: proto_entities_cycle_pb.Cycle): CycleRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CycleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CycleRequest): CycleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CycleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CycleRequest;
    static deserializeBinaryFromReader(message: CycleRequest, reader: jspb.BinaryReader): CycleRequest;
}

export namespace CycleRequest {
    export type AsObject = {
        cycle?: proto_entities_cycle_pb.Cycle.AsObject,
    }
}

export class ExcavatorShiftRequest extends jspb.Message { 

    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): proto_entities_excavator_pb.Excavator | undefined;
    setExcavator(value?: proto_entities_excavator_pb.Excavator): ExcavatorShiftRequest;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): ExcavatorShiftRequest;


    hasDateShift(): boolean;
    clearDateShift(): void;
    getDateShift(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateShift(value?: google_protobuf_timestamp_pb.Timestamp): ExcavatorShiftRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorShiftRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorShiftRequest): ExcavatorShiftRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorShiftRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorShiftRequest;
    static deserializeBinaryFromReader(message: ExcavatorShiftRequest, reader: jspb.BinaryReader): ExcavatorShiftRequest;
}

export namespace ExcavatorShiftRequest {
    export type AsObject = {
        excavator?: proto_entities_excavator_pb.Excavator.AsObject,
        shift: proto_enums_shift_enums_pb.Shift,
        dateShift?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TruckShiftRequest extends jspb.Message { 

    hasTruck(): boolean;
    clearTruck(): void;
    getTruck(): proto_entities_truck_pb.Truck | undefined;
    setTruck(value?: proto_entities_truck_pb.Truck): TruckShiftRequest;

    getShift(): proto_enums_shift_enums_pb.Shift;
    setShift(value: proto_enums_shift_enums_pb.Shift): TruckShiftRequest;


    hasDateShift(): boolean;
    clearDateShift(): void;
    getDateShift(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateShift(value?: google_protobuf_timestamp_pb.Timestamp): TruckShiftRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckShiftRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TruckShiftRequest): TruckShiftRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckShiftRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckShiftRequest;
    static deserializeBinaryFromReader(message: TruckShiftRequest, reader: jspb.BinaryReader): TruckShiftRequest;
}

export namespace TruckShiftRequest {
    export type AsObject = {
        truck?: proto_entities_truck_pb.Truck.AsObject,
        shift: proto_enums_shift_enums_pb.Shift,
        dateShift?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CycleResponse extends jspb.Message { 

    hasCycle(): boolean;
    clearCycle(): void;
    getCycle(): proto_entities_cycle_pb.Cycle | undefined;
    setCycle(value?: proto_entities_cycle_pb.Cycle): CycleResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CycleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CycleResponse): CycleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CycleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CycleResponse;
    static deserializeBinaryFromReader(message: CycleResponse, reader: jspb.BinaryReader): CycleResponse;
}

export namespace CycleResponse {
    export type AsObject = {
        cycle?: proto_entities_cycle_pb.Cycle.AsObject,
    }
}

export class CyclesResponse extends jspb.Message { 
    clearCyclesList(): void;
    getCyclesList(): Array<proto_entities_cycle_pb.Cycle>;
    setCyclesList(value: Array<proto_entities_cycle_pb.Cycle>): CyclesResponse;
    addCycles(value?: proto_entities_cycle_pb.Cycle, index?: number): proto_entities_cycle_pb.Cycle;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CyclesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CyclesResponse): CyclesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CyclesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CyclesResponse;
    static deserializeBinaryFromReader(message: CyclesResponse, reader: jspb.BinaryReader): CyclesResponse;
}

export namespace CyclesResponse {
    export type AsObject = {
        cyclesList: Array<proto_entities_cycle_pb.Cycle.AsObject>,
    }
}
