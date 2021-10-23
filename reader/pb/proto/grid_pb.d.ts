import * as jspb from 'google-protobuf'

import * as proto_point_pb from '../proto/point_pb';
import * as proto_geofence_pb from '../proto/geofence_pb';
import * as proto_road_pb from '../proto/road_pb';
import * as proto_pit_pb from '../proto/pit_pb';
import * as proto_pad_pb from '../proto/pad_pb';
import * as proto_stock_pb from '../proto/stock_pb';
import * as proto_dme_pb from '../proto/dme_pb';


export class Square extends jspb.Message {
  getId(): string;
  setId(value: string): Square;

  getName(): string;
  setName(value: string): Square;

  getAltitude(): number;
  setAltitude(value: number): Square;

  getSegmentList(): Array<proto_point_pb.Point>;
  setSegmentList(value: Array<proto_point_pb.Point>): Square;
  clearSegmentList(): Square;
  addSegment(value?: proto_point_pb.Point, index?: number): proto_point_pb.Point;

  getPointList(): Array<proto_point_pb.Point>;
  setPointList(value: Array<proto_point_pb.Point>): Square;
  clearPointList(): Square;
  addPoint(value?: proto_point_pb.Point, index?: number): proto_point_pb.Point;

  getGeofenceList(): Array<proto_geofence_pb.Geofence>;
  setGeofenceList(value: Array<proto_geofence_pb.Geofence>): Square;
  clearGeofenceList(): Square;
  addGeofence(value?: proto_geofence_pb.Geofence, index?: number): proto_geofence_pb.Geofence;

  getRoadList(): Array<proto_road_pb.Road>;
  setRoadList(value: Array<proto_road_pb.Road>): Square;
  clearRoadList(): Square;
  addRoad(value?: proto_road_pb.Road, index?: number): proto_road_pb.Road;

  getPitList(): Array<proto_pit_pb.Pit>;
  setPitList(value: Array<proto_pit_pb.Pit>): Square;
  clearPitList(): Square;
  addPit(value?: proto_pit_pb.Pit, index?: number): proto_pit_pb.Pit;

  getPadList(): Array<proto_pad_pb.Pad>;
  setPadList(value: Array<proto_pad_pb.Pad>): Square;
  clearPadList(): Square;
  addPad(value?: proto_pad_pb.Pad, index?: number): proto_pad_pb.Pad;

  getStockList(): Array<proto_stock_pb.Stock>;
  setStockList(value: Array<proto_stock_pb.Stock>): Square;
  clearStockList(): Square;
  addStock(value?: proto_stock_pb.Stock, index?: number): proto_stock_pb.Stock;

  getDmeList(): Array<proto_dme_pb.Dme>;
  setDmeList(value: Array<proto_dme_pb.Dme>): Square;
  clearDmeList(): Square;
  addDme(value?: proto_dme_pb.Dme, index?: number): proto_dme_pb.Dme;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Square.AsObject;
  static toObject(includeInstance: boolean, msg: Square): Square.AsObject;
  static serializeBinaryToWriter(message: Square, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Square;
  static deserializeBinaryFromReader(message: Square, reader: jspb.BinaryReader): Square;
}

export namespace Square {
  export type AsObject = {
    id: string,
    name: string,
    altitude: number,
    segmentList: Array<proto_point_pb.Point.AsObject>,
    pointList: Array<proto_point_pb.Point.AsObject>,
    geofenceList: Array<proto_geofence_pb.Geofence.AsObject>,
    roadList: Array<proto_road_pb.Road.AsObject>,
    pitList: Array<proto_pit_pb.Pit.AsObject>,
    padList: Array<proto_pad_pb.Pad.AsObject>,
    stockList: Array<proto_stock_pb.Stock.AsObject>,
    dmeList: Array<proto_dme_pb.Dme.AsObject>,
  }
}

export class Grid extends jspb.Message {
  getSquareList(): Array<Square>;
  setSquareList(value: Array<Square>): Grid;
  clearSquareList(): Grid;
  addSquare(value?: Square, index?: number): Square;

  getColor(): number;
  setColor(value: number): Grid;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grid.AsObject;
  static toObject(includeInstance: boolean, msg: Grid): Grid.AsObject;
  static serializeBinaryToWriter(message: Grid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grid;
  static deserializeBinaryFromReader(message: Grid, reader: jspb.BinaryReader): Grid;
}

export namespace Grid {
  export type AsObject = {
    squareList: Array<Square.AsObject>,
    color: number,
  }
}

export class GridRequest extends jspb.Message {
  getRead(): boolean;
  setRead(value: boolean): GridRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GridRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GridRequest): GridRequest.AsObject;
  static serializeBinaryToWriter(message: GridRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GridRequest;
  static deserializeBinaryFromReader(message: GridRequest, reader: jspb.BinaryReader): GridRequest;
}

export namespace GridRequest {
  export type AsObject = {
    read: boolean,
  }
}

export class GridResponse extends jspb.Message {
  getDone(): boolean;
  setDone(value: boolean): GridResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GridResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GridResponse): GridResponse.AsObject;
  static serializeBinaryToWriter(message: GridResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GridResponse;
  static deserializeBinaryFromReader(message: GridResponse, reader: jspb.BinaryReader): GridResponse;
}

export namespace GridResponse {
  export type AsObject = {
    done: boolean,
  }
}
