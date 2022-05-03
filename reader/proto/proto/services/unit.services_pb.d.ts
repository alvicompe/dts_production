// package: pb
// file: proto/services/unit.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_unit_pb from "../../proto/entities/unit_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class UnitMantoListResponse extends jspb.Message { 
    clearTruckList(): void;
    getTruckList(): Array<proto_entities_unit_pb.UnitInMantoGPS>;
    setTruckList(value: Array<proto_entities_unit_pb.UnitInMantoGPS>): UnitMantoListResponse;
    addTruck(value?: proto_entities_unit_pb.UnitInMantoGPS, index?: number): proto_entities_unit_pb.UnitInMantoGPS;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnitMantoListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnitMantoListResponse): UnitMantoListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnitMantoListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnitMantoListResponse;
    static deserializeBinaryFromReader(message: UnitMantoListResponse, reader: jspb.BinaryReader): UnitMantoListResponse;
}

export namespace UnitMantoListResponse {
    export type AsObject = {
        truckList: Array<proto_entities_unit_pb.UnitInMantoGPS.AsObject>,
    }
}
