// package: pb
// file: proto/entities/streaming.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_geofence_pb from "../../proto/entities/geofence_pb";
import * as proto_entities_road_pb from "../../proto/entities/road_pb";
import * as proto_entities_point_pb from "../../proto/entities/point_pb";
import * as proto_entities_sensor_pb from "../../proto/entities/sensor_pb";
import * as proto_entities_pit_pb from "../../proto/entities/pit_pb";
import * as proto_entities_pad_pb from "../../proto/entities/pad_pb";
import * as proto_entities_stock_pb from "../../proto/entities/stock_pb";
import * as proto_entities_dme_pb from "../../proto/entities/dme_pb";
import * as proto_entities_excavator_pb from "../../proto/entities/excavator_pb";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
import * as proto_entities_load_pb from "../../proto/entities/load_pb";
import * as proto_enums_event_state_enums_pb from "../../proto/enums/event_state.enums_pb";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";

export class OperationAssignment extends jspb.Message { 
    getId(): string;
    setId(value: string): OperationAssignment;


    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): proto_entities_excavator_pb.Excavator | undefined;
    setExcavator(value?: proto_entities_excavator_pb.Excavator): OperationAssignment;

    clearTruckList(): void;
    getTruckList(): Array<proto_entities_truck_pb.Truck>;
    setTruckList(value: Array<proto_entities_truck_pb.Truck>): OperationAssignment;
    addTruck(value?: proto_entities_truck_pb.Truck, index?: number): proto_entities_truck_pb.Truck;


    hasUpload(): boolean;
    clearUpload(): void;
    getUpload(): proto_entities_load_pb.Upload | undefined;
    setUpload(value?: proto_entities_load_pb.Upload): OperationAssignment;


    hasDownload(): boolean;
    clearDownload(): void;
    getDownload(): proto_entities_load_pb.Download | undefined;
    setDownload(value?: proto_entities_load_pb.Download): OperationAssignment;

    getShift(): OperationAssignment.Shift;
    setShift(value: OperationAssignment.Shift): OperationAssignment;

    getState(): OperationAssignment.State;
    setState(value: OperationAssignment.State): OperationAssignment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationAssignment.AsObject;
    static toObject(includeInstance: boolean, msg: OperationAssignment): OperationAssignment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationAssignment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationAssignment;
    static deserializeBinaryFromReader(message: OperationAssignment, reader: jspb.BinaryReader): OperationAssignment;
}

export namespace OperationAssignment {
    export type AsObject = {
        id: string,
        excavator?: proto_entities_excavator_pb.Excavator.AsObject,
        truckList: Array<proto_entities_truck_pb.Truck.AsObject>,
        upload?: proto_entities_load_pb.Upload.AsObject,
        download?: proto_entities_load_pb.Download.AsObject,
        shift: OperationAssignment.Shift,
        state: OperationAssignment.State,
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

export class TruckInfo extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): TruckInfo;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): TruckInfo;

    getRealInterval(): number;
    setRealInterval(value: number): TruckInfo;

    getCycleNumber(): number;
    setCycleNumber(value: number): TruckInfo;


    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): proto_entities_sensor_pb.Sensor | undefined;
    setSensor(value?: proto_entities_sensor_pb.Sensor): TruckInfo;

    getState(): proto_enums_event_state_enums_pb.EnumEventState;
    setState(value: proto_enums_event_state_enums_pb.EnumEventState): TruckInfo;


    hasEventState(): boolean;
    clearEventState(): void;
    getEventState(): proto_entities_event_state_pb.EventState | undefined;
    setEventState(value?: proto_entities_event_state_pb.EventState): TruckInfo;


    hasGeofence(): boolean;
    clearGeofence(): void;
    getGeofence(): proto_entities_geofence_pb.Geofence | undefined;
    setGeofence(value?: proto_entities_geofence_pb.Geofence): TruckInfo;


    hasRoad(): boolean;
    clearRoad(): void;
    getRoad(): proto_entities_road_pb.Road | undefined;
    setRoad(value?: proto_entities_road_pb.Road): TruckInfo;

    clearSegmentList(): void;
    getSegmentList(): Array<proto_entities_point_pb.Point>;
    setSegmentList(value: Array<proto_entities_point_pb.Point>): TruckInfo;
    addSegment(value?: proto_entities_point_pb.Point, index?: number): proto_entities_point_pb.Point;


    hasPit(): boolean;
    clearPit(): void;
    getPit(): proto_entities_pit_pb.Pit | undefined;
    setPit(value?: proto_entities_pit_pb.Pit): TruckInfo;


    hasPad(): boolean;
    clearPad(): void;
    getPad(): proto_entities_pad_pb.Pad | undefined;
    setPad(value?: proto_entities_pad_pb.Pad): TruckInfo;


    hasStock(): boolean;
    clearStock(): void;
    getStock(): proto_entities_stock_pb.Stock | undefined;
    setStock(value?: proto_entities_stock_pb.Stock): TruckInfo;


    hasDme(): boolean;
    clearDme(): void;
    getDme(): proto_entities_dme_pb.Dme | undefined;
    setDme(value?: proto_entities_dme_pb.Dme): TruckInfo;

    clearOperationList(): void;
    getOperationList(): Array<OperationAssignment>;
    setOperationList(value: Array<OperationAssignment>): TruckInfo;
    addOperation(value?: OperationAssignment, index?: number): OperationAssignment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TruckInfo): TruckInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckInfo;
    static deserializeBinaryFromReader(message: TruckInfo, reader: jspb.BinaryReader): TruckInfo;
}

export namespace TruckInfo {
    export type AsObject = {
        deviceId: string,
        deviceAlias: string,
        realInterval: number,
        cycleNumber: number,
        sensor?: proto_entities_sensor_pb.Sensor.AsObject,
        state: proto_enums_event_state_enums_pb.EnumEventState,
        eventState?: proto_entities_event_state_pb.EventState.AsObject,
        geofence?: proto_entities_geofence_pb.Geofence.AsObject,
        road?: proto_entities_road_pb.Road.AsObject,
        segmentList: Array<proto_entities_point_pb.Point.AsObject>,
        pit?: proto_entities_pit_pb.Pit.AsObject,
        pad?: proto_entities_pad_pb.Pad.AsObject,
        stock?: proto_entities_stock_pb.Stock.AsObject,
        dme?: proto_entities_dme_pb.Dme.AsObject,
        operationList: Array<OperationAssignment.AsObject>,
    }
}

export class ExcavatorInfo extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): ExcavatorInfo;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): ExcavatorInfo;

    getRealInterval(): number;
    setRealInterval(value: number): ExcavatorInfo;


    hasSensor(): boolean;
    clearSensor(): void;
    getSensor(): proto_entities_sensor_pb.Sensor | undefined;
    setSensor(value?: proto_entities_sensor_pb.Sensor): ExcavatorInfo;

    getState(): proto_enums_event_state_enums_pb.EnumEventState;
    setState(value: proto_enums_event_state_enums_pb.EnumEventState): ExcavatorInfo;


    hasGeofence(): boolean;
    clearGeofence(): void;
    getGeofence(): proto_entities_geofence_pb.Geofence | undefined;
    setGeofence(value?: proto_entities_geofence_pb.Geofence): ExcavatorInfo;


    hasPit(): boolean;
    clearPit(): void;
    getPit(): proto_entities_pit_pb.Pit | undefined;
    setPit(value?: proto_entities_pit_pb.Pit): ExcavatorInfo;

    clearOperationList(): void;
    getOperationList(): Array<OperationAssignment>;
    setOperationList(value: Array<OperationAssignment>): ExcavatorInfo;
    addOperation(value?: OperationAssignment, index?: number): OperationAssignment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorInfo): ExcavatorInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorInfo;
    static deserializeBinaryFromReader(message: ExcavatorInfo, reader: jspb.BinaryReader): ExcavatorInfo;
}

export namespace ExcavatorInfo {
    export type AsObject = {
        deviceId: string,
        deviceAlias: string,
        realInterval: number,
        sensor?: proto_entities_sensor_pb.Sensor.AsObject,
        state: proto_enums_event_state_enums_pb.EnumEventState,
        geofence?: proto_entities_geofence_pb.Geofence.AsObject,
        pit?: proto_entities_pit_pb.Pit.AsObject,
        operationList: Array<OperationAssignment.AsObject>,
    }
}
