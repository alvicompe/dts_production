import * as jspb from 'google-protobuf'

import * as proto_truck_pb from '../proto/truck_pb';
import * as proto_excavator_pb from '../proto/excavator_pb';
import * as proto_material_pb from '../proto/material_pb';
import * as proto_streaming_pb from '../proto/streaming_pb';
import * as proto_load_pb from '../proto/load_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Cycle extends jspb.Message {
  getId(): string;
  setId(value: string): Cycle;

  getOperationId(): string;
  setOperationId(value: string): Cycle;

  getName(): string;
  setName(value: string): Cycle;

  getDescription(): string;
  setDescription(value: string): Cycle;

  getArrivalTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setArrivalTime(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;
  hasArrivalTime(): boolean;
  clearArrivalTime(): Cycle;

  getDownloadArrivalTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDownloadArrivalTime(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;
  hasDownloadArrivalTime(): boolean;
  clearDownloadArrivalTime(): Cycle;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;
  hasStartTime(): boolean;
  clearStartTime(): Cycle;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;
  hasEndTime(): boolean;
  clearEndTime(): Cycle;

  getNumber(): number;
  setNumber(value: number): Cycle;

  getDistance(): number;
  setDistance(value: number): Cycle;

  getDuration(): number;
  setDuration(value: number): Cycle;

  getMode(): Cycle.Mode;
  setMode(value: Cycle.Mode): Cycle;

  getState(): Cycle.State;
  setState(value: Cycle.State): Cycle;

  getShift(): Shift;
  setShift(value: Shift): Cycle;

  getShiftDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setShiftDate(value?: google_protobuf_timestamp_pb.Timestamp): Cycle;
  hasShiftDate(): boolean;
  clearShiftDate(): Cycle;

  getUpload(): proto_load_pb.Upload | undefined;
  setUpload(value?: proto_load_pb.Upload): Cycle;
  hasUpload(): boolean;
  clearUpload(): Cycle;

  getDownload(): proto_load_pb.Download | undefined;
  setDownload(value?: proto_load_pb.Download): Cycle;
  hasDownload(): boolean;
  clearDownload(): Cycle;

  getMaterial(): proto_material_pb.Material | undefined;
  setMaterial(value?: proto_material_pb.Material): Cycle;
  hasMaterial(): boolean;
  clearMaterial(): Cycle;

  getTruck(): proto_truck_pb.Truck | undefined;
  setTruck(value?: proto_truck_pb.Truck): Cycle;
  hasTruck(): boolean;
  clearTruck(): Cycle;

  getExcavator(): proto_excavator_pb.Excavator | undefined;
  setExcavator(value?: proto_excavator_pb.Excavator): Cycle;
  hasExcavator(): boolean;
  clearExcavator(): Cycle;

  getTruckinfoList(): Array<proto_streaming_pb.TruckInfo>;
  setTruckinfoList(value: Array<proto_streaming_pb.TruckInfo>): Cycle;
  clearTruckinfoList(): Cycle;
  addTruckinfo(value?: proto_streaming_pb.TruckInfo, index?: number): proto_streaming_pb.TruckInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cycle.AsObject;
  static toObject(includeInstance: boolean, msg: Cycle): Cycle.AsObject;
  static serializeBinaryToWriter(message: Cycle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cycle;
  static deserializeBinaryFromReader(message: Cycle, reader: jspb.BinaryReader): Cycle;
}

export namespace Cycle {
  export type AsObject = {
    id: string,
    operationId: string,
    name: string,
    description: string,
    arrivalTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    downloadArrivalTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    number: number,
    distance: number,
    duration: number,
    mode: Cycle.Mode,
    state: Cycle.State,
    shift: Shift,
    shiftDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    upload?: proto_load_pb.Upload.AsObject,
    download?: proto_load_pb.Download.AsObject,
    material?: proto_material_pb.Material.AsObject,
    truck?: proto_truck_pb.Truck.AsObject,
    excavator?: proto_excavator_pb.Excavator.AsObject,
    truckinfoList: Array<proto_streaming_pb.TruckInfo.AsObject>,
  }

  export enum State { 
    UNKNOWN_STATE = 0,
    OPENED = 1,
    CLOSED = 2,
  }

  export enum Mode { 
    UNKNOWN_MODE = 0,
    NORMAL = 1,
    ALTERED = 2,
  }
}

export class CycleRequest extends jspb.Message {
  getCycle(): Cycle | undefined;
  setCycle(value?: Cycle): CycleRequest;
  hasCycle(): boolean;
  clearCycle(): CycleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CycleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CycleRequest): CycleRequest.AsObject;
  static serializeBinaryToWriter(message: CycleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CycleRequest;
  static deserializeBinaryFromReader(message: CycleRequest, reader: jspb.BinaryReader): CycleRequest;
}

export namespace CycleRequest {
  export type AsObject = {
    cycle?: Cycle.AsObject,
  }
}

export class CycleResponse extends jspb.Message {
  getCycle(): Cycle | undefined;
  setCycle(value?: Cycle): CycleResponse;
  hasCycle(): boolean;
  clearCycle(): CycleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CycleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CycleResponse): CycleResponse.AsObject;
  static serializeBinaryToWriter(message: CycleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CycleResponse;
  static deserializeBinaryFromReader(message: CycleResponse, reader: jspb.BinaryReader): CycleResponse;
}

export namespace CycleResponse {
  export type AsObject = {
    cycle?: Cycle.AsObject,
  }
}

export class CyclesResponse extends jspb.Message {
  getCyclesList(): Array<Cycle>;
  setCyclesList(value: Array<Cycle>): CyclesResponse;
  clearCyclesList(): CyclesResponse;
  addCycles(value?: Cycle, index?: number): Cycle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CyclesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CyclesResponse): CyclesResponse.AsObject;
  static serializeBinaryToWriter(message: CyclesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CyclesResponse;
  static deserializeBinaryFromReader(message: CyclesResponse, reader: jspb.BinaryReader): CyclesResponse;
}

export namespace CyclesResponse {
  export type AsObject = {
    cyclesList: Array<Cycle.AsObject>,
  }
}

export enum Shift { 
  UNKNOWN_SHIFT = 0,
  NIGHT = 1,
  DAY = 2,
  BOTH = 3,
}
