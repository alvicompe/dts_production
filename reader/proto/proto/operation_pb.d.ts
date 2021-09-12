// package: pb
// file: proto/operation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_truck_pb from "../proto/truck_pb";
import * as proto_excavator_pb from "../proto/excavator_pb";
import * as proto_road_pb from "../proto/road_pb";
import * as proto_cycle_pb from "../proto/cycle_pb";
import * as proto_load_pb from "../proto/load_pb";
import * as proto_material_pb from "../proto/material_pb";

export class Operation extends jspb.Message { 
    getId(): string;
    setId(value: string): Operation;

    getName(): string;
    setName(value: string): Operation;

    getDescription(): string;
    setDescription(value: string): Operation;

    getStartTime(): string;
    setStartTime(value: string): Operation;

    getEndTime(): string;
    setEndTime(value: string): Operation;

    getDistance(): number;
    setDistance(value: number): Operation;

    getDuration(): number;
    setDuration(value: number): Operation;

    getShift(): Operation.Shift;
    setShift(value: Operation.Shift): Operation;

    getState(): Operation.State;
    setState(value: Operation.State): Operation;


    hasUpload(): boolean;
    clearUpload(): void;
    getUpload(): proto_load_pb.Upload | undefined;
    setUpload(value?: proto_load_pb.Upload): Operation;


    hasDownload(): boolean;
    clearDownload(): void;
    getDownload(): proto_load_pb.Download | undefined;
    setDownload(value?: proto_load_pb.Download): Operation;

    clearRoadList(): void;
    getRoadList(): Array<proto_road_pb.Road>;
    setRoadList(value: Array<proto_road_pb.Road>): Operation;
    addRoad(value?: proto_road_pb.Road, index?: number): proto_road_pb.Road;

    clearTruckList(): void;
    getTruckList(): Array<proto_truck_pb.Truck>;
    setTruckList(value: Array<proto_truck_pb.Truck>): Operation;
    addTruck(value?: proto_truck_pb.Truck, index?: number): proto_truck_pb.Truck;

    clearExcavatorList(): void;
    getExcavatorList(): Array<proto_excavator_pb.Excavator>;
    setExcavatorList(value: Array<proto_excavator_pb.Excavator>): Operation;
    addExcavator(value?: proto_excavator_pb.Excavator, index?: number): proto_excavator_pb.Excavator;

    clearCycleList(): void;
    getCycleList(): Array<proto_cycle_pb.Cycle>;
    setCycleList(value: Array<proto_cycle_pb.Cycle>): Operation;
    addCycle(value?: proto_cycle_pb.Cycle, index?: number): proto_cycle_pb.Cycle;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Operation.AsObject;
    static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Operation;
    static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        startTime: string,
        endTime: string,
        distance: number,
        duration: number,
        shift: Operation.Shift,
        state: Operation.State,
        upload?: proto_load_pb.Upload.AsObject,
        download?: proto_load_pb.Download.AsObject,
        roadList: Array<proto_road_pb.Road.AsObject>,
        truckList: Array<proto_truck_pb.Truck.AsObject>,
        excavatorList: Array<proto_excavator_pb.Excavator.AsObject>,
        cycleList: Array<proto_cycle_pb.Cycle.AsObject>,
    }

    export enum Shift {
    UNKNOWN_SHIFT = 0,
    NIGHT = 1,
    DAY = 2,
    }

    export enum State {
    UNKNOWN_STATE = 0,
    PENDING = 1,
    OPENED = 2,
    CLOSED = 3,
    }

}

export class OperationRequest extends jspb.Message { 

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): Operation | undefined;
    setOperation(value?: Operation): OperationRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OperationRequest): OperationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationRequest;
    static deserializeBinaryFromReader(message: OperationRequest, reader: jspb.BinaryReader): OperationRequest;
}

export namespace OperationRequest {
    export type AsObject = {
        operation?: Operation.AsObject,
    }
}

export class OperationResponse extends jspb.Message { 

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): Operation | undefined;
    setOperation(value?: Operation): OperationResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OperationResponse): OperationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationResponse;
    static deserializeBinaryFromReader(message: OperationResponse, reader: jspb.BinaryReader): OperationResponse;
}

export namespace OperationResponse {
    export type AsObject = {
        operation?: Operation.AsObject,
    }
}

export class OperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<Operation>;
    setOperationsList(value: Array<Operation>): OperationsResponse;
    addOperations(value?: Operation, index?: number): Operation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OperationsResponse): OperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationsResponse;
    static deserializeBinaryFromReader(message: OperationsResponse, reader: jspb.BinaryReader): OperationsResponse;
}

export namespace OperationsResponse {
    export type AsObject = {
        operationsList: Array<Operation.AsObject>,
    }
}
