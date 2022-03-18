// package: pb
// file: proto/entities/truck.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_contractor_pb from "../../proto/entities/contractor_pb";
import * as proto_enums_event_state_enums_pb from "../../proto/enums/event_state.enums_pb";
import * as proto_entities_event_state_pb from "../../proto/entities/event_state_pb";

export class Truck extends jspb.Message { 
    getId(): string;
    setId(value: string): Truck;

    getDeviceId(): string;
    setDeviceId(value: string): Truck;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): Truck;

    getDeviceInterval(): number;
    setDeviceInterval(value: number): Truck;

    getDescription(): string;
    setDescription(value: string): Truck;

    getPlate(): string;
    setPlate(value: string): Truck;

    getHourmeter(): number;
    setHourmeter(value: number): Truck;


    hasContractor(): boolean;
    clearContractor(): void;
    getContractor(): proto_entities_contractor_pb.Contractor | undefined;
    setContractor(value?: proto_entities_contractor_pb.Contractor): Truck;

    getState(): proto_enums_event_state_enums_pb.EnumEventState;
    setState(value: proto_enums_event_state_enums_pb.EnumEventState): Truck;


    hasEventState(): boolean;
    clearEventState(): void;
    getEventState(): proto_entities_event_state_pb.EventState | undefined;
    setEventState(value?: proto_entities_event_state_pb.EventState): Truck;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Truck.AsObject;
    static toObject(includeInstance: boolean, msg: Truck): Truck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Truck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Truck;
    static deserializeBinaryFromReader(message: Truck, reader: jspb.BinaryReader): Truck;
}

export namespace Truck {
    export type AsObject = {
        id: string,
        deviceId: string,
        deviceAlias: string,
        deviceInterval: number,
        description: string,
        plate: string,
        hourmeter: number,
        contractor?: proto_entities_contractor_pb.Contractor.AsObject,
        state: proto_enums_event_state_enums_pb.EnumEventState,
        eventState?: proto_entities_event_state_pb.EventState.AsObject,
    }
}
