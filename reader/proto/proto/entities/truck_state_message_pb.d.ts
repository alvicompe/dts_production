// package: pb
// file: proto/entities/truck_state_message.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";

export class TruckStateMessage extends jspb.Message { 

    hasTruckError(): boolean;
    clearTruckError(): void;
    getTruckError(): proto_entities_truck_pb.Truck | undefined;
    setTruckError(value?: proto_entities_truck_pb.Truck): TruckStateMessage;

    getState(): TruckStateMessage.State;
    setState(value: TruckStateMessage.State): TruckStateMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckStateMessage.AsObject;
    static toObject(includeInstance: boolean, msg: TruckStateMessage): TruckStateMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckStateMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckStateMessage;
    static deserializeBinaryFromReader(message: TruckStateMessage, reader: jspb.BinaryReader): TruckStateMessage;
}

export namespace TruckStateMessage {
    export type AsObject = {
        truckError?: proto_entities_truck_pb.Truck.AsObject,
        state: TruckStateMessage.State,
    }

    export enum State {
    UNKNOWN_STATE = 0,
    UPLOAD = 1,
    DOWNLOAD = 2,
    TO_UPLOAD = 3,
    TO_DOWNLOAD = 4,
    WAITING = 5,
    QUEUE = 6,
    }

}
