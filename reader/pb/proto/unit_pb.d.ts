import * as jspb from 'google-protobuf'



export class Unit extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): Unit;

  getDeviceAlias(): string;
  setDeviceAlias(value: string): Unit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Unit.AsObject;
  static toObject(includeInstance: boolean, msg: Unit): Unit.AsObject;
  static serializeBinaryToWriter(message: Unit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Unit;
  static deserializeBinaryFromReader(message: Unit, reader: jspb.BinaryReader): Unit;
}

export namespace Unit {
  export type AsObject = {
    deviceId: string,
    deviceAlias: string,
  }
}

