import * as jspb from 'google-protobuf'

import * as proto_contractor_pb from '../proto/contractor_pb';


export class Excavator extends jspb.Message {
  getId(): string;
  setId(value: string): Excavator;

  getDeviceId(): string;
  setDeviceId(value: string): Excavator;

  getDeviceAlias(): string;
  setDeviceAlias(value: string): Excavator;

  getDeviceInterval(): number;
  setDeviceInterval(value: number): Excavator;

  getDescription(): string;
  setDescription(value: string): Excavator;

  getPlate(): string;
  setPlate(value: string): Excavator;

  getContractor(): proto_contractor_pb.Contractor | undefined;
  setContractor(value?: proto_contractor_pb.Contractor): Excavator;
  hasContractor(): boolean;
  clearContractor(): Excavator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Excavator.AsObject;
  static toObject(includeInstance: boolean, msg: Excavator): Excavator.AsObject;
  static serializeBinaryToWriter(message: Excavator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Excavator;
  static deserializeBinaryFromReader(message: Excavator, reader: jspb.BinaryReader): Excavator;
}

export namespace Excavator {
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

export class ExcavatorRequest extends jspb.Message {
  getExcavator(): Excavator | undefined;
  setExcavator(value?: Excavator): ExcavatorRequest;
  hasExcavator(): boolean;
  clearExcavator(): ExcavatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcavatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExcavatorRequest): ExcavatorRequest.AsObject;
  static serializeBinaryToWriter(message: ExcavatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcavatorRequest;
  static deserializeBinaryFromReader(message: ExcavatorRequest, reader: jspb.BinaryReader): ExcavatorRequest;
}

export namespace ExcavatorRequest {
  export type AsObject = {
    excavator?: Excavator.AsObject,
  }
}

export class ExcavatorResponse extends jspb.Message {
  getExcavator(): Excavator | undefined;
  setExcavator(value?: Excavator): ExcavatorResponse;
  hasExcavator(): boolean;
  clearExcavator(): ExcavatorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcavatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExcavatorResponse): ExcavatorResponse.AsObject;
  static serializeBinaryToWriter(message: ExcavatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcavatorResponse;
  static deserializeBinaryFromReader(message: ExcavatorResponse, reader: jspb.BinaryReader): ExcavatorResponse;
}

export namespace ExcavatorResponse {
  export type AsObject = {
    excavator?: Excavator.AsObject,
  }
}

export class ExcavatorsResponse extends jspb.Message {
  getExcavatorsList(): Array<Excavator>;
  setExcavatorsList(value: Array<Excavator>): ExcavatorsResponse;
  clearExcavatorsList(): ExcavatorsResponse;
  addExcavators(value?: Excavator, index?: number): Excavator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcavatorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExcavatorsResponse): ExcavatorsResponse.AsObject;
  static serializeBinaryToWriter(message: ExcavatorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcavatorsResponse;
  static deserializeBinaryFromReader(message: ExcavatorsResponse, reader: jspb.BinaryReader): ExcavatorsResponse;
}

export namespace ExcavatorsResponse {
  export type AsObject = {
    excavatorsList: Array<Excavator.AsObject>,
  }
}

