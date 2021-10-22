import * as jspb from 'google-protobuf'



export class Point extends jspb.Message {
  getLongitude(): number;
  setLongitude(value: number): Point;

  getLatitude(): number;
  setLatitude(value: number): Point;

  getAltitude(): number;
  setAltitude(value: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    longitude: number,
    latitude: number,
    altitude: number,
  }
}

