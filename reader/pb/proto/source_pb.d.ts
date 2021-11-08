import * as jspb from 'google-protobuf'



export class SourceRequest extends jspb.Message {
  getLoad(): boolean;
  setLoad(value: boolean): SourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SourceRequest): SourceRequest.AsObject;
  static serializeBinaryToWriter(message: SourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceRequest;
  static deserializeBinaryFromReader(message: SourceRequest, reader: jspb.BinaryReader): SourceRequest;
}

export namespace SourceRequest {
  export type AsObject = {
    load: boolean,
  }
}

export class SourceResponse extends jspb.Message {
  getDone(): boolean;
  setDone(value: boolean): SourceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SourceResponse): SourceResponse.AsObject;
  static serializeBinaryToWriter(message: SourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceResponse;
  static deserializeBinaryFromReader(message: SourceResponse, reader: jspb.BinaryReader): SourceResponse;
}

export namespace SourceResponse {
  export type AsObject = {
    done: boolean,
  }
}

