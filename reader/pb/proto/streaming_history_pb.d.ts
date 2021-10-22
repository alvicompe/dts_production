import * as jspb from 'google-protobuf'

import * as proto_sensor_pb from '../proto/sensor_pb';


export class TruckStatus extends jspb.Message {
  getId(): string;
  setId(value: string): TruckStatus;

  getDeviceId(): string;
  setDeviceId(value: string): TruckStatus;

  getDeviceAlias(): string;
  setDeviceAlias(value: string): TruckStatus;

  getCycleId(): string;
  setCycleId(value: string): TruckStatus;

  getOperationId(): string;
  setOperationId(value: string): TruckStatus;

  getCycleNumber(): number;
  setCycleNumber(value: number): TruckStatus;

  getState(): TruckStatus.State;
  setState(value: TruckStatus.State): TruckStatus;

  getSensor(): proto_sensor_pb.Sensor | undefined;
  setSensor(value?: proto_sensor_pb.Sensor): TruckStatus;
  hasSensor(): boolean;
  clearSensor(): TruckStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruckStatus.AsObject;
  static toObject(includeInstance: boolean, msg: TruckStatus): TruckStatus.AsObject;
  static serializeBinaryToWriter(message: TruckStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TruckStatus;
  static deserializeBinaryFromReader(message: TruckStatus, reader: jspb.BinaryReader): TruckStatus;
}

export namespace TruckStatus {
  export type AsObject = {
    id: string,
    deviceId: string,
    deviceAlias: string,
    cycleId: string,
    operationId: string,
    cycleNumber: number,
    state: TruckStatus.State,
    sensor?: proto_sensor_pb.Sensor.AsObject,
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

