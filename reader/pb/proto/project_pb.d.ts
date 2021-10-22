import * as jspb from 'google-protobuf'

import * as proto_polygon_pb from '../proto/polygon_pb';


export class Project extends jspb.Message {
  getId(): string;
  setId(value: string): Project;

  getName(): string;
  setName(value: string): Project;

  getDescription(): string;
  setDescription(value: string): Project;

  getPolygonList(): Array<proto_polygon_pb.Polygon>;
  setPolygonList(value: Array<proto_polygon_pb.Polygon>): Project;
  clearPolygonList(): Project;
  addPolygon(value?: proto_polygon_pb.Polygon, index?: number): proto_polygon_pb.Polygon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    polygonList: Array<proto_polygon_pb.Polygon.AsObject>,
  }
}

export class ProjectRequest extends jspb.Message {
  getProject(): Project | undefined;
  setProject(value?: Project): ProjectRequest;
  hasProject(): boolean;
  clearProject(): ProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectRequest): ProjectRequest.AsObject;
  static serializeBinaryToWriter(message: ProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectRequest;
  static deserializeBinaryFromReader(message: ProjectRequest, reader: jspb.BinaryReader): ProjectRequest;
}

export namespace ProjectRequest {
  export type AsObject = {
    project?: Project.AsObject,
  }
}

export class ProjectResponse extends jspb.Message {
  getProject(): Project | undefined;
  setProject(value?: Project): ProjectResponse;
  hasProject(): boolean;
  clearProject(): ProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectResponse): ProjectResponse.AsObject;
  static serializeBinaryToWriter(message: ProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectResponse;
  static deserializeBinaryFromReader(message: ProjectResponse, reader: jspb.BinaryReader): ProjectResponse;
}

export namespace ProjectResponse {
  export type AsObject = {
    project?: Project.AsObject,
  }
}

export class ProjectsResponse extends jspb.Message {
  getProjectsList(): Array<Project>;
  setProjectsList(value: Array<Project>): ProjectsResponse;
  clearProjectsList(): ProjectsResponse;
  addProjects(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectsResponse): ProjectsResponse.AsObject;
  static serializeBinaryToWriter(message: ProjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectsResponse;
  static deserializeBinaryFromReader(message: ProjectsResponse, reader: jspb.BinaryReader): ProjectsResponse;
}

export namespace ProjectsResponse {
  export type AsObject = {
    projectsList: Array<Project.AsObject>,
  }
}

