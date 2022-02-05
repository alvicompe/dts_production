// package: pb
// file: proto/entities/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;

    getRole(): User.Role;
    setRole(value: User.Role): User;

    getUsername(): string;
    setUsername(value: string): User;

    getPassword(): string;
    setPassword(value: string): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        role: User.Role,
        username: string,
        password: string,
    }

    export enum Role {
    UNKNOWN = 0,
    ADM = 1,
    DIS = 2,
    }

}
