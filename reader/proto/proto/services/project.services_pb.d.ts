// package: pb
// file: proto/services/project.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_project_pb from "../../proto/entities/project_pb";

export class ProjectRequest extends jspb.Message { 

    hasProject(): boolean;
    clearProject(): void;
    getProject(): proto_entities_project_pb.Project | undefined;
    setProject(value?: proto_entities_project_pb.Project): ProjectRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectRequest): ProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectRequest;
    static deserializeBinaryFromReader(message: ProjectRequest, reader: jspb.BinaryReader): ProjectRequest;
}

export namespace ProjectRequest {
    export type AsObject = {
        project?: proto_entities_project_pb.Project.AsObject,
    }
}

export class ProjectResponse extends jspb.Message { 

    hasProject(): boolean;
    clearProject(): void;
    getProject(): proto_entities_project_pb.Project | undefined;
    setProject(value?: proto_entities_project_pb.Project): ProjectResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectResponse): ProjectResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectResponse;
    static deserializeBinaryFromReader(message: ProjectResponse, reader: jspb.BinaryReader): ProjectResponse;
}

export namespace ProjectResponse {
    export type AsObject = {
        project?: proto_entities_project_pb.Project.AsObject,
    }
}

export class ProjectsResponse extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<proto_entities_project_pb.Project>;
    setProjectsList(value: Array<proto_entities_project_pb.Project>): ProjectsResponse;
    addProjects(value?: proto_entities_project_pb.Project, index?: number): proto_entities_project_pb.Project;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectsResponse): ProjectsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectsResponse;
    static deserializeBinaryFromReader(message: ProjectsResponse, reader: jspb.BinaryReader): ProjectsResponse;
}

export namespace ProjectsResponse {
    export type AsObject = {
        projectsList: Array<proto_entities_project_pb.Project.AsObject>,
    }
}
