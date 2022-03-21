// package: pb
// file: proto/entities/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_enums_role_enums_pb from "../../proto/enums/role.enums_pb";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;

    getUsername(): string;
    setUsername(value: string): User;

    getPassword(): string;
    setPassword(value: string): User;

    getRole(): proto_enums_role_enums_pb.Role;
    setRole(value: proto_enums_role_enums_pb.Role): User;

    getDni(): string;
    setDni(value: string): User;

    getEmail(): string;
    setEmail(value: string): User;

    getFirstName(): string;
    setFirstName(value: string): User;

    getLastName(): string;
    setLastName(value: string): User;

    getIsActive(): boolean;
    setIsActive(value: boolean): User;


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
        username: string,
        password: string,
        role: proto_enums_role_enums_pb.Role,
        dni: string,
        email: string,
        firstName: string,
        lastName: string,
        isActive: boolean,
    }
}
