import * as jspb from 'google-protobuf'



export class Error extends jspb.Message {
  getCode(): number;
  setCode(value: number): Error;

  getDescription(): string;
  setDescription(value: string): Error;

  getLog(): string;
  setLog(value: string): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    code: number,
    description: string,
    log: string,
  }
}

