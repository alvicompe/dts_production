import * as jspb from 'google-protobuf'

import * as proto_user_pb from '../proto/user_pb';


export class Token extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): Token;

  getRefreshToken(): string;
  setRefreshToken(value: string): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
  }
}

export class LoginRequest extends jspb.Message {
  getUser(): proto_user_pb.User | undefined;
  setUser(value?: proto_user_pb.User): LoginRequest;
  hasUser(): boolean;
  clearUser(): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    user?: proto_user_pb.User.AsObject,
  }
}

export class LoginResponse extends jspb.Message {
  getUser(): proto_user_pb.User | undefined;
  setUser(value?: proto_user_pb.User): LoginResponse;
  hasUser(): boolean;
  clearUser(): LoginResponse;

  getToken(): Token | undefined;
  setToken(value?: Token): LoginResponse;
  hasToken(): boolean;
  clearToken(): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    user?: proto_user_pb.User.AsObject,
    token?: Token.AsObject,
  }
}

