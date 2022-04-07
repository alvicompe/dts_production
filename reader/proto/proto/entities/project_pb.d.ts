// package: pb
// file: proto/entities/project.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_polygon_pb from "../../proto/entities/polygon_pb";

export class Project extends jspb.Message { 
    getId(): string;
    setId(value: string): Project;

    getName(): string;
    setName(value: string): Project;

    getDescription(): string;
    setDescription(value: string): Project;

    clearPolygonList(): void;
    getPolygonList(): Array<proto_entities_polygon_pb.Polygon>;
    setPolygonList(value: Array<proto_entities_polygon_pb.Polygon>): Project;
    addPolygon(value?: proto_entities_polygon_pb.Polygon, index?: number): proto_entities_polygon_pb.Polygon;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Project.AsObject;
    static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Project;
    static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        polygonList: Array<proto_entities_polygon_pb.Polygon.AsObject>,
    }
}
