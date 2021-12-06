// package: pb
// file: proto/audit.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Audit extends jspb.Message { 

    hasStartedTime(): boolean;
    clearStartedTime(): void;
    getStartedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedTime(value?: google_protobuf_timestamp_pb.Timestamp): Audit;

    clearUpdatedTimeList(): void;
    getUpdatedTimeList(): Array<google_protobuf_timestamp_pb.Timestamp>;
    setUpdatedTimeList(value: Array<google_protobuf_timestamp_pb.Timestamp>): Audit;
    addUpdatedTime(value?: google_protobuf_timestamp_pb.Timestamp, index?: number): google_protobuf_timestamp_pb.Timestamp;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Audit.AsObject;
    static toObject(includeInstance: boolean, msg: Audit): Audit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Audit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Audit;
    static deserializeBinaryFromReader(message: Audit, reader: jspb.BinaryReader): Audit;
}

export namespace Audit {
    export type AsObject = {
        startedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedTimeList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>,
    }
}
