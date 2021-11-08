import * as jspb from 'google-protobuf'

import * as proto_point_pb from '../proto/point_pb';


export class Cell extends jspb.Message {
  getId(): string;
  setId(value: string): Cell;

  getName(): string;
  setName(value: string): Cell;

  getDescription(): string;
  setDescription(value: string): Cell;

  getPointList(): Array<proto_point_pb.Point>;
  setPointList(value: Array<proto_point_pb.Point>): Cell;
  clearPointList(): Cell;
  addPoint(value?: proto_point_pb.Point, index?: number): proto_point_pb.Point;

  getCentroid(): proto_point_pb.Point | undefined;
  setCentroid(value?: proto_point_pb.Point): Cell;
  hasCentroid(): boolean;
  clearCentroid(): Cell;

  getHeight(): number;
  setHeight(value: number): Cell;

  getColor(): number;
  setColor(value: number): Cell;

  getAltitude(): number;
  setAltitude(value: number): Cell;

  getArea(): number;
  setArea(value: number): Cell;

  getVolume(): number;
  setVolume(value: number): Cell;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cell.AsObject;
  static toObject(includeInstance: boolean, msg: Cell): Cell.AsObject;
  static serializeBinaryToWriter(message: Cell, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cell;
  static deserializeBinaryFromReader(message: Cell, reader: jspb.BinaryReader): Cell;
}

export namespace Cell {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    pointList: Array<proto_point_pb.Point.AsObject>,
    centroid?: proto_point_pb.Point.AsObject,
    height: number,
    color: number,
    altitude: number,
    area: number,
    volume: number,
  }

  export enum State { 
    UNKNOWN = 0,
    ACTIVE = 1,
    WAITING = 2,
    FINISHED = 3,
  }
}

export class CellRequest extends jspb.Message {
  getCell(): Cell | undefined;
  setCell(value?: Cell): CellRequest;
  hasCell(): boolean;
  clearCell(): CellRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CellRequest): CellRequest.AsObject;
  static serializeBinaryToWriter(message: CellRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellRequest;
  static deserializeBinaryFromReader(message: CellRequest, reader: jspb.BinaryReader): CellRequest;
}

export namespace CellRequest {
  export type AsObject = {
    cell?: Cell.AsObject,
  }
}

export class CellResponse extends jspb.Message {
  getCell(): Cell | undefined;
  setCell(value?: Cell): CellResponse;
  hasCell(): boolean;
  clearCell(): CellResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CellResponse): CellResponse.AsObject;
  static serializeBinaryToWriter(message: CellResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellResponse;
  static deserializeBinaryFromReader(message: CellResponse, reader: jspb.BinaryReader): CellResponse;
}

export namespace CellResponse {
  export type AsObject = {
    cell?: Cell.AsObject,
  }
}

export class CellsResponse extends jspb.Message {
  getCellsList(): Array<Cell>;
  setCellsList(value: Array<Cell>): CellsResponse;
  clearCellsList(): CellsResponse;
  addCells(value?: Cell, index?: number): Cell;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CellsResponse): CellsResponse.AsObject;
  static serializeBinaryToWriter(message: CellsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellsResponse;
  static deserializeBinaryFromReader(message: CellsResponse, reader: jspb.BinaryReader): CellsResponse;
}

export namespace CellsResponse {
  export type AsObject = {
    cellsList: Array<Cell.AsObject>,
  }
}

