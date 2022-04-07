// package: pb
// file: proto/entities/pit.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_project_pb from "../../proto/entities/project_pb";

export class Pit extends jspb.Message { 
    getId(): string;
    setId(value: string): Pit;

    getName(): string;
    setName(value: string): Pit;

    getDescription(): string;
    setDescription(value: string): Pit;

    clearProjectList(): void;
    getProjectList(): Array<proto_entities_project_pb.Project>;
    setProjectList(value: Array<proto_entities_project_pb.Project>): Pit;
    addProject(value?: proto_entities_project_pb.Project, index?: number): proto_entities_project_pb.Project;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pit.AsObject;
    static toObject(includeInstance: boolean, msg: Pit): Pit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pit;
    static deserializeBinaryFromReader(message: Pit, reader: jspb.BinaryReader): Pit;
}

export namespace Pit {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        projectList: Array<proto_entities_project_pb.Project.AsObject>,
    }
}
