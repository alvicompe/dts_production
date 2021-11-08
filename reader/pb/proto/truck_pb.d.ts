import * as jspb from 'google-protobuf'

import * as proto_contractor_pb from '../proto/contractor_pb';


export class Truck extends jspb.Message {
  getId(): string;
  setId(value: string): Truck;

  getDeviceId(): string;
  setDeviceId(value: string): Truck;

  getDeviceAlias(): string;
  setDeviceAlias(value: string): Truck;

  getDeviceInterval(): number;
  setDeviceInterval(value: number): Truck;

  getDescription(): string;
  setDescription(value: string): Truck;

  getPlate(): string;
  setPlate(value: string): Truck;

  getContractor(): proto_contractor_pb.Contractor | undefined;
  setContractor(value?: proto_contractor_pb.Contractor): Truck;
  hasContractor(): boolean;
  clearContractor(): Truck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Truck.AsObject;
  static toObject(includeInstance: boolean, msg: Truck): Truck.AsObject;
  static serializeBinaryToWriter(message: Truck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Truck;
  static deserializeBinaryFromReader(message: Truck, reader: jspb.BinaryReader): Truck;
}

export namespace Truck {
  export type AsObject = {
    id: string,
    deviceId: string,
    deviceAlias: string,
    deviceInterval: number,
    description: string,
    plate: string,
    contractor?: proto_contractor_pb.Contractor.AsObject,
  }
}

export class TruckRequest extends jspb.Message {
  getTruck(): Truck | undefined;
  setTruck(value?: Truck): TruckRequest;
  hasTruck(): boolean;
  clearTruck(): TruckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TruckRequest): TruckRequest.AsObject;
  static serializeBinaryToWriter(message: TruckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TruckRequest;
  static deserializeBinaryFromReader(message: TruckRequest, reader: jspb.BinaryReader): TruckRequest;
}

export namespace TruckRequest {
  export type AsObject = {
    truck?: Truck.AsObject,
  }
}

export class TruckResponse extends jspb.Message {
  getTruck(): Truck | undefined;
  setTruck(value?: Truck): TruckResponse;
  hasTruck(): boolean;
  clearTruck(): TruckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TruckResponse): TruckResponse.AsObject;
  static serializeBinaryToWriter(message: TruckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TruckResponse;
  static deserializeBinaryFromReader(message: TruckResponse, reader: jspb.BinaryReader): TruckResponse;
}

export namespace TruckResponse {
  export type AsObject = {
    truck?: Truck.AsObject,
  }
}

export class TrucksResponse extends jspb.Message {
  getTrucksList(): Array<Truck>;
  setTrucksList(value: Array<Truck>): TrucksResponse;
  clearTrucksList(): TrucksResponse;
  addTrucks(value?: Truck, index?: number): Truck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrucksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TrucksResponse): TrucksResponse.AsObject;
  static serializeBinaryToWriter(message: TrucksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrucksResponse;
  static deserializeBinaryFromReader(message: TrucksResponse, reader: jspb.BinaryReader): TrucksResponse;
}

export namespace TrucksResponse {
  export type AsObject = {
    trucksList: Array<Truck.AsObject>,
  }
}

