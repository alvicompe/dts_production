import * as jspb from 'google-protobuf'

import * as proto_pit_pb from '../proto/pit_pb';
import * as proto_pad_pb from '../proto/pad_pb';
import * as proto_stock_pb from '../proto/stock_pb';
import * as proto_dme_pb from '../proto/dme_pb';
import * as proto_road_pb from '../proto/road_pb';


export class Upload extends jspb.Message {
  getType(): Upload.Type;
  setType(value: Upload.Type): Upload;

  getPit(): proto_pit_pb.Pit | undefined;
  setPit(value?: proto_pit_pb.Pit): Upload;
  hasPit(): boolean;
  clearPit(): Upload;

  getPad(): proto_pad_pb.Pad | undefined;
  setPad(value?: proto_pad_pb.Pad): Upload;
  hasPad(): boolean;
  clearPad(): Upload;

  getStock(): proto_stock_pb.Stock | undefined;
  setStock(value?: proto_stock_pb.Stock): Upload;
  hasStock(): boolean;
  clearStock(): Upload;

  getDme(): proto_dme_pb.Dme | undefined;
  setDme(value?: proto_dme_pb.Dme): Upload;
  hasDme(): boolean;
  clearDme(): Upload;

  getRoad(): proto_road_pb.Road | undefined;
  setRoad(value?: proto_road_pb.Road): Upload;
  hasRoad(): boolean;
  clearRoad(): Upload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Upload.AsObject;
  static toObject(includeInstance: boolean, msg: Upload): Upload.AsObject;
  static serializeBinaryToWriter(message: Upload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Upload;
  static deserializeBinaryFromReader(message: Upload, reader: jspb.BinaryReader): Upload;
}

export namespace Upload {
  export type AsObject = {
    type: Upload.Type,
    pit?: proto_pit_pb.Pit.AsObject,
    pad?: proto_pad_pb.Pad.AsObject,
    stock?: proto_stock_pb.Stock.AsObject,
    dme?: proto_dme_pb.Dme.AsObject,
    road?: proto_road_pb.Road.AsObject,
  }

  export enum Type { 
    UNKNOWN = 0,
    PIT = 1,
    PAD = 2,
    STOCK = 3,
    DME = 4,
    ROAD = 5,
  }
}

export class Download extends jspb.Message {
  getType(): Download.Type;
  setType(value: Download.Type): Download;

  getPit(): proto_pit_pb.Pit | undefined;
  setPit(value?: proto_pit_pb.Pit): Download;
  hasPit(): boolean;
  clearPit(): Download;

  getPad(): proto_pad_pb.Pad | undefined;
  setPad(value?: proto_pad_pb.Pad): Download;
  hasPad(): boolean;
  clearPad(): Download;

  getStock(): proto_stock_pb.Stock | undefined;
  setStock(value?: proto_stock_pb.Stock): Download;
  hasStock(): boolean;
  clearStock(): Download;

  getDme(): proto_dme_pb.Dme | undefined;
  setDme(value?: proto_dme_pb.Dme): Download;
  hasDme(): boolean;
  clearDme(): Download;

  getRoad(): proto_road_pb.Road | undefined;
  setRoad(value?: proto_road_pb.Road): Download;
  hasRoad(): boolean;
  clearRoad(): Download;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Download.AsObject;
  static toObject(includeInstance: boolean, msg: Download): Download.AsObject;
  static serializeBinaryToWriter(message: Download, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Download;
  static deserializeBinaryFromReader(message: Download, reader: jspb.BinaryReader): Download;
}

export namespace Download {
  export type AsObject = {
    type: Download.Type,
    pit?: proto_pit_pb.Pit.AsObject,
    pad?: proto_pad_pb.Pad.AsObject,
    stock?: proto_stock_pb.Stock.AsObject,
    dme?: proto_dme_pb.Dme.AsObject,
    road?: proto_road_pb.Road.AsObject,
  }

  export enum Type { 
    UNKNOWN = 0,
    PIT = 1,
    PAD = 2,
    STOCK = 3,
    DME = 4,
    ROAD = 5,
  }
}

