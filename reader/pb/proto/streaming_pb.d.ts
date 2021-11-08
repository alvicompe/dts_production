import * as jspb from 'google-protobuf'

import * as proto_geofence_pb from '../proto/geofence_pb';
import * as proto_road_pb from '../proto/road_pb';
import * as proto_point_pb from '../proto/point_pb';
import * as proto_sensor_pb from '../proto/sensor_pb';
import * as proto_pit_pb from '../proto/pit_pb';
import * as proto_pad_pb from '../proto/pad_pb';
import * as proto_stock_pb from '../proto/stock_pb';
import * as proto_dme_pb from '../proto/dme_pb';
import * as proto_excavator_pb from '../proto/excavator_pb';
import * as proto_truck_pb from '../proto/truck_pb';
import * as proto_load_pb from '../proto/load_pb';


export class OperationAssignment extends jspb.Message {
  getId(): string;
  setId(value: string): OperationAssignment;

  getExcavator(): proto_excavator_pb.Excavator | undefined;
  setExcavator(value?: proto_excavator_pb.Excavator): OperationAssignment;
  hasExcavator(): boolean;
  clearExcavator(): OperationAssignment;

  getTruckList(): Array<proto_truck_pb.Truck>;
  setTruckList(value: Array<proto_truck_pb.Truck>): OperationAssignment;
  clearTruckList(): OperationAssignment;
  addTruck(value?: proto_truck_pb.Truck, index?: number): proto_truck_pb.Truck;

  getUpload(): proto_load_pb.Upload | undefined;
  setUpload(value?: proto_load_pb.Upload): OperationAssignment;
  hasUpload(): boolean;
  clearUpload(): OperationAssignment;

  getDownload(): proto_load_pb.Download | undefined;
  setDownload(value?: proto_load_pb.Download): OperationAssignment;
  hasDownload(): boolean;
  clearDownload(): OperationAssignment;

  getShift(): OperationAssignment.Shift;
  setShift(value: OperationAssignment.Shift): OperationAssignment;

  getState(): OperationAssignment.State;
  setState(value: OperationAssignment.State): OperationAssignment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationAssignment.AsObject;
  static toObject(includeInstance: boolean, msg: OperationAssignment): OperationAssignment.AsObject;
  static serializeBinaryToWriter(message: OperationAssignment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationAssignment;
  static deserializeBinaryFromReader(message: OperationAssignment, reader: jspb.BinaryReader): OperationAssignment;
}

export namespace OperationAssignment {
  export type AsObject = {
    id: string,
    excavator?: proto_excavator_pb.Excavator.AsObject,
    truckList: Array<proto_truck_pb.Truck.AsObject>,
    upload?: proto_load_pb.Upload.AsObject,
    download?: proto_load_pb.Download.AsObject,
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

  getSensor(): proto_sensor_pb.Sensor | undefined;
  setSensor(value?: proto_sensor_pb.Sensor): TruckInfo;
  hasSensor(): boolean;
  clearSensor(): TruckInfo;

  getState(): TruckInfo.State;
  setState(value: TruckInfo.State): TruckInfo;

  getGeofence(): proto_geofence_pb.Geofence | undefined;
  setGeofence(value?: proto_geofence_pb.Geofence): TruckInfo;
  hasGeofence(): boolean;
  clearGeofence(): TruckInfo;

  getRoad(): proto_road_pb.Road | undefined;
  setRoad(value?: proto_road_pb.Road): TruckInfo;
  hasRoad(): boolean;
  clearRoad(): TruckInfo;

  getSegmentList(): Array<proto_point_pb.Point>;
  setSegmentList(value: Array<proto_point_pb.Point>): TruckInfo;
  clearSegmentList(): TruckInfo;
  addSegment(value?: proto_point_pb.Point, index?: number): proto_point_pb.Point;

  getPit(): proto_pit_pb.Pit | undefined;
  setPit(value?: proto_pit_pb.Pit): TruckInfo;
  hasPit(): boolean;
  clearPit(): TruckInfo;

  getPad(): proto_pad_pb.Pad | undefined;
  setPad(value?: proto_pad_pb.Pad): TruckInfo;
  hasPad(): boolean;
  clearPad(): TruckInfo;

  getStock(): proto_stock_pb.Stock | undefined;
  setStock(value?: proto_stock_pb.Stock): TruckInfo;
  hasStock(): boolean;
  clearStock(): TruckInfo;

  getDme(): proto_dme_pb.Dme | undefined;
  setDme(value?: proto_dme_pb.Dme): TruckInfo;
  hasDme(): boolean;
  clearDme(): TruckInfo;

  getOperationList(): Array<OperationAssignment>;
  setOperationList(value: Array<OperationAssignment>): TruckInfo;
  clearOperationList(): TruckInfo;
  addOperation(value?: OperationAssignment, index?: number): OperationAssignment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruckInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TruckInfo): TruckInfo.AsObject;
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
    sensor?: proto_sensor_pb.Sensor.AsObject,
    state: TruckInfo.State,
    geofence?: proto_geofence_pb.Geofence.AsObject,
    road?: proto_road_pb.Road.AsObject,
    segmentList: Array<proto_point_pb.Point.AsObject>,
    pit?: proto_pit_pb.Pit.AsObject,
    pad?: proto_pad_pb.Pad.AsObject,
    stock?: proto_stock_pb.Stock.AsObject,
    dme?: proto_dme_pb.Dme.AsObject,
    operationList: Array<OperationAssignment.AsObject>,
  }

  export enum State { 
    UNKNOWN_STATE = 0,
    UPLOAD = 1,
    DOWNLOAD = 2,
    TO_UPLOAD = 3,
    TO_DOWNLOAD = 4,
    WAITING = 5,
    QUEUE = 6,
  }
}

export class ExcavatorInfo extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): ExcavatorInfo;

  getDeviceAlias(): string;
  setDeviceAlias(value: string): ExcavatorInfo;

  getRealInterval(): number;
  setRealInterval(value: number): ExcavatorInfo;

  getSensor(): proto_sensor_pb.Sensor | undefined;
  setSensor(value?: proto_sensor_pb.Sensor): ExcavatorInfo;
  hasSensor(): boolean;
  clearSensor(): ExcavatorInfo;

  getState(): ExcavatorInfo.State;
  setState(value: ExcavatorInfo.State): ExcavatorInfo;

  getGeofence(): proto_geofence_pb.Geofence | undefined;
  setGeofence(value?: proto_geofence_pb.Geofence): ExcavatorInfo;
  hasGeofence(): boolean;
  clearGeofence(): ExcavatorInfo;

  getPit(): proto_pit_pb.Pit | undefined;
  setPit(value?: proto_pit_pb.Pit): ExcavatorInfo;
  hasPit(): boolean;
  clearPit(): ExcavatorInfo;

  getOperationList(): Array<OperationAssignment>;
  setOperationList(value: Array<OperationAssignment>): ExcavatorInfo;
  clearOperationList(): ExcavatorInfo;
  addOperation(value?: OperationAssignment, index?: number): OperationAssignment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcavatorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExcavatorInfo): ExcavatorInfo.AsObject;
  static serializeBinaryToWriter(message: ExcavatorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcavatorInfo;
  static deserializeBinaryFromReader(message: ExcavatorInfo, reader: jspb.BinaryReader): ExcavatorInfo;
}

export namespace ExcavatorInfo {
  export type AsObject = {
    deviceId: string,
    deviceAlias: string,
    realInterval: number,
    sensor?: proto_sensor_pb.Sensor.AsObject,
    state: ExcavatorInfo.State,
    geofence?: proto_geofence_pb.Geofence.AsObject,
    pit?: proto_pit_pb.Pit.AsObject,
    operationList: Array<OperationAssignment.AsObject>,
  }

  export enum State { 
    UNKNOWN_STATE = 0,
    UPLOAD = 1,
  }
}

export class TruckInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruckInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TruckInfoRequest): TruckInfoRequest.AsObject;
  static serializeBinaryToWriter(message: TruckInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TruckInfoRequest;
  static deserializeBinaryFromReader(message: TruckInfoRequest, reader: jspb.BinaryReader): TruckInfoRequest;
}

export namespace TruckInfoRequest {
  export type AsObject = {
  }
}

export class TruckInfoResponse extends jspb.Message {
  getInfo(): TruckInfo | undefined;
  setInfo(value?: TruckInfo): TruckInfoResponse;
  hasInfo(): boolean;
  clearInfo(): TruckInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruckInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TruckInfoResponse): TruckInfoResponse.AsObject;
  static serializeBinaryToWriter(message: TruckInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TruckInfoResponse;
  static deserializeBinaryFromReader(message: TruckInfoResponse, reader: jspb.BinaryReader): TruckInfoResponse;
}

export namespace TruckInfoResponse {
  export type AsObject = {
    info?: TruckInfo.AsObject,
  }
}

export class ExcavatorInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcavatorInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExcavatorInfoRequest): ExcavatorInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ExcavatorInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcavatorInfoRequest;
  static deserializeBinaryFromReader(message: ExcavatorInfoRequest, reader: jspb.BinaryReader): ExcavatorInfoRequest;
}

export namespace ExcavatorInfoRequest {
  export type AsObject = {
  }
}

export class ExcavatorInfoResponse extends jspb.Message {
  getInfo(): ExcavatorInfo | undefined;
  setInfo(value?: ExcavatorInfo): ExcavatorInfoResponse;
  hasInfo(): boolean;
  clearInfo(): ExcavatorInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcavatorInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExcavatorInfoResponse): ExcavatorInfoResponse.AsObject;
  static serializeBinaryToWriter(message: ExcavatorInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcavatorInfoResponse;
  static deserializeBinaryFromReader(message: ExcavatorInfoResponse, reader: jspb.BinaryReader): ExcavatorInfoResponse;
}

export namespace ExcavatorInfoResponse {
  export type AsObject = {
    info?: ExcavatorInfo.AsObject,
  }
}

