// package: pb
// file: proto/entities/operation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
import * as proto_entities_excavator_pb from "../../proto/entities/excavator_pb";
import * as proto_entities_road_pb from "../../proto/entities/road_pb";
import * as proto_entities_cycle_pb from "../../proto/entities/cycle_pb";
import * as proto_entities_load_pb from "../../proto/entities/load_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Operation extends jspb.Message { 
    getId(): string;
    setId(value: string): Operation;

    getName(): string;
    setName(value: string): Operation;

    getDescription(): string;
    setDescription(value: string): Operation;


    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Operation;


    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Operation;

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
    getUpload(): proto_entities_load_pb.Upload | undefined;
    setUpload(value?: proto_entities_load_pb.Upload): Operation;


    hasDownload(): boolean;
    clearDownload(): void;
    getDownload(): proto_entities_load_pb.Download | undefined;
    setDownload(value?: proto_entities_load_pb.Download): Operation;

    clearRoadList(): void;
    getRoadList(): Array<proto_entities_road_pb.Road>;
    setRoadList(value: Array<proto_entities_road_pb.Road>): Operation;
    addRoad(value?: proto_entities_road_pb.Road, index?: number): proto_entities_road_pb.Road;

    clearTruckList(): void;
    getTruckList(): Array<proto_entities_truck_pb.Truck>;
    setTruckList(value: Array<proto_entities_truck_pb.Truck>): Operation;
    addTruck(value?: proto_entities_truck_pb.Truck, index?: number): proto_entities_truck_pb.Truck;

    clearExcavatorList(): void;
    getExcavatorList(): Array<proto_entities_excavator_pb.Excavator>;
    setExcavatorList(value: Array<proto_entities_excavator_pb.Excavator>): Operation;
    addExcavator(value?: proto_entities_excavator_pb.Excavator, index?: number): proto_entities_excavator_pb.Excavator;

    clearCycleList(): void;
    getCycleList(): Array<proto_entities_cycle_pb.Cycle>;
    setCycleList(value: Array<proto_entities_cycle_pb.Cycle>): Operation;
    addCycle(value?: proto_entities_cycle_pb.Cycle, index?: number): proto_entities_cycle_pb.Cycle;


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
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        distance: number,
        duration: number,
        shift: Operation.Shift,
        state: Operation.State,
        upload?: proto_entities_load_pb.Upload.AsObject,
        download?: proto_entities_load_pb.Download.AsObject,
        roadList: Array<proto_entities_road_pb.Road.AsObject>,
        truckList: Array<proto_entities_truck_pb.Truck.AsObject>,
        excavatorList: Array<proto_entities_excavator_pb.Excavator.AsObject>,
        cycleList: Array<proto_entities_cycle_pb.Cycle.AsObject>,
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
