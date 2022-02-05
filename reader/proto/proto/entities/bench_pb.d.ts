// package: pb
// file: proto/entities/bench.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_project_pb from "../../proto/entities/project_pb";

export class Bench extends jspb.Message { 
    getId(): string;
    setId(value: string): Bench;

    getName(): string;
    setName(value: string): Bench;

    getDescription(): string;
    setDescription(value: string): Bench;

    clearProjectList(): void;
    getProjectList(): Array<proto_entities_project_pb.Project>;
    setProjectList(value: Array<proto_entities_project_pb.Project>): Bench;
    addProject(value?: proto_entities_project_pb.Project, index?: number): proto_entities_project_pb.Project;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bench.AsObject;
    static toObject(includeInstance: boolean, msg: Bench): Bench.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bench, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bench;
    static deserializeBinaryFromReader(message: Bench, reader: jspb.BinaryReader): Bench;
}

export namespace Bench {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        projectList: Array<proto_entities_project_pb.Project.AsObject>,
    }
}
