import * as jspb from 'google-protobuf'

import * as proto_point_pb from '../proto/point_pb';


export class Geofence extends jspb.Message {
  getId(): string;
  setId(value: string): Geofence;

  getName(): string;
  setName(value: string): Geofence;

  getDescription(): string;
  setDescription(value: string): Geofence;

  getPointList(): Array<proto_point_pb.Point>;
  setPointList(value: Array<proto_point_pb.Point>): Geofence;
  clearPointList(): Geofence;
  addPoint(value?: proto_point_pb.Point, index?: number): proto_point_pb.Point;

  getColor(): string;
  setColor(value: string): Geofence;

  getDesp(): string;
  setDesp(value: string): Geofence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Geofence.AsObject;
  static toObject(includeInstance: boolean, msg: Geofence): Geofence.AsObject;
  static serializeBinaryToWriter(message: Geofence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Geofence;
  static deserializeBinaryFromReader(message: Geofence, reader: jspb.BinaryReader): Geofence;
}

export namespace Geofence {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    pointList: Array<proto_point_pb.Point.AsObject>,
    color: string,
    desp: string,
  }
}

export class GeofenceRequest extends jspb.Message {
  getGeofence(): Geofence | undefined;
  setGeofence(value?: Geofence): GeofenceRequest;
  hasGeofence(): boolean;
  clearGeofence(): GeofenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeofenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeofenceRequest): GeofenceRequest.AsObject;
  static serializeBinaryToWriter(message: GeofenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeofenceRequest;
  static deserializeBinaryFromReader(message: GeofenceRequest, reader: jspb.BinaryReader): GeofenceRequest;
}

export namespace GeofenceRequest {
  export type AsObject = {
    geofence?: Geofence.AsObject,
  }
}

export class GeofenceResponse extends jspb.Message {
  getGeofence(): Geofence | undefined;
  setGeofence(value?: Geofence): GeofenceResponse;
  hasGeofence(): boolean;
  clearGeofence(): GeofenceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeofenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GeofenceResponse): GeofenceResponse.AsObject;
  static serializeBinaryToWriter(message: GeofenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeofenceResponse;
  static deserializeBinaryFromReader(message: GeofenceResponse, reader: jspb.BinaryReader): GeofenceResponse;
}

export namespace GeofenceResponse {
  export type AsObject = {
    geofence?: Geofence.AsObject,
  }
}

export class GeofencesResponse extends jspb.Message {
  getGeofencesList(): Array<Geofence>;
  setGeofencesList(value: Array<Geofence>): GeofencesResponse;
  clearGeofencesList(): GeofencesResponse;
  addGeofences(value?: Geofence, index?: number): Geofence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeofencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GeofencesResponse): GeofencesResponse.AsObject;
  static serializeBinaryToWriter(message: GeofencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeofencesResponse;
  static deserializeBinaryFromReader(message: GeofencesResponse, reader: jspb.BinaryReader): GeofencesResponse;
}

export namespace GeofencesResponse {
  export type AsObject = {
    geofencesList: Array<Geofence.AsObject>,
  }
}

