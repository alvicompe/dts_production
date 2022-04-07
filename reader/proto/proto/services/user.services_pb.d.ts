// package: pb
// file: proto/services/user.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_user_pb from "../../proto/entities/user_pb";

export class UserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_entities_user_pb.User | undefined;
    setUser(value?: proto_entities_user_pb.User): UserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRequest;
    static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
    export type AsObject = {
        user?: proto_entities_user_pb.User.AsObject,
    }
}

export class UserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): proto_entities_user_pb.User | undefined;
    setUser(value?: proto_entities_user_pb.User): UserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        user?: proto_entities_user_pb.User.AsObject,
    }
}

export class UsersResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<proto_entities_user_pb.User>;
    setUsersList(value: Array<proto_entities_user_pb.User>): UsersResponse;
    addUsers(value?: proto_entities_user_pb.User, index?: number): proto_entities_user_pb.User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UsersResponse): UsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersResponse;
    static deserializeBinaryFromReader(message: UsersResponse, reader: jspb.BinaryReader): UsersResponse;
}

export namespace UsersResponse {
    export type AsObject = {
        usersList: Array<proto_entities_user_pb.User.AsObject>,
    }
}

export class PasswordRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): PasswordRequest;

    getCurrentPassword(): string;
    setCurrentPassword(value: string): PasswordRequest;

    getNewPassword(): string;
    setNewPassword(value: string): PasswordRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PasswordRequest): PasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PasswordRequest;
    static deserializeBinaryFromReader(message: PasswordRequest, reader: jspb.BinaryReader): PasswordRequest;
}

export namespace PasswordRequest {
    export type AsObject = {
        userId: string,
        currentPassword: string,
        newPassword: string,
    }
}
