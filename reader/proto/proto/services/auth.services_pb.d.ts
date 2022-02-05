// package: pb
// file: proto/services/auth.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_user_pb from "../../proto/entities/user_pb";

export class Token extends jspb.Message { 
    getAccessToken(): string;
    setAccessToken(value: string): Token;

    getRefreshToken(): string;
    setRefreshToken(value: string): Token;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Token.AsObject;
    static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_entities_user_pb.User | undefined;
    setUser(value?: proto_entities_user_pb.User): LoginRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        user?: proto_entities_user_pb.User.AsObject,
    }
}

export class LoginResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_entities_user_pb.User | undefined;
    setUser(value?: proto_entities_user_pb.User): LoginResponse;


    hasToken(): boolean;
    clearToken(): void;
    getToken(): Token | undefined;
    setToken(value?: Token): LoginResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        user?: proto_entities_user_pb.User.AsObject,
        token?: Token.AsObject,
    }
}
