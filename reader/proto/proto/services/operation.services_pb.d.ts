// package: pb
// file: proto/services/operation.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_operation_pb from "../../proto/entities/operation_pb";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
import * as proto_entities_truck_state_message_pb from "../../proto/entities/truck_state_message_pb";

export class OperationRequest extends jspb.Message { 

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): proto_entities_operation_pb.Operation | undefined;
    setOperation(value?: proto_entities_operation_pb.Operation): OperationRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OperationRequest): OperationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationRequest;
    static deserializeBinaryFromReader(message: OperationRequest, reader: jspb.BinaryReader): OperationRequest;
}

export namespace OperationRequest {
    export type AsObject = {
        operation?: proto_entities_operation_pb.Operation.AsObject,
    }
}

export class OperationResponse extends jspb.Message { 

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): proto_entities_operation_pb.Operation | undefined;
    setOperation(value?: proto_entities_operation_pb.Operation): OperationResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OperationResponse): OperationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationResponse;
    static deserializeBinaryFromReader(message: OperationResponse, reader: jspb.BinaryReader): OperationResponse;
}

export namespace OperationResponse {
    export type AsObject = {
        operation?: proto_entities_operation_pb.Operation.AsObject,
    }
}

export class OperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<proto_entities_operation_pb.Operation>;
    setOperationsList(value: Array<proto_entities_operation_pb.Operation>): OperationsResponse;
    addOperations(value?: proto_entities_operation_pb.Operation, index?: number): proto_entities_operation_pb.Operation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OperationsResponse): OperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationsResponse;
    static deserializeBinaryFromReader(message: OperationsResponse, reader: jspb.BinaryReader): OperationsResponse;
}

export namespace OperationsResponse {
    export type AsObject = {
        operationsList: Array<proto_entities_operation_pb.Operation.AsObject>,
    }
}

export class OperationReassigmentRequest extends jspb.Message { 
    clearTruckList(): void;
    getTruckList(): Array<proto_entities_truck_pb.Truck>;
    setTruckList(value: Array<proto_entities_truck_pb.Truck>): OperationReassigmentRequest;
    addTruck(value?: proto_entities_truck_pb.Truck, index?: number): proto_entities_truck_pb.Truck;


    hasOperationDestination(): boolean;
    clearOperationDestination(): void;
    getOperationDestination(): proto_entities_operation_pb.Operation | undefined;
    setOperationDestination(value?: proto_entities_operation_pb.Operation): OperationReassigmentRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationReassigmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OperationReassigmentRequest): OperationReassigmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationReassigmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationReassigmentRequest;
    static deserializeBinaryFromReader(message: OperationReassigmentRequest, reader: jspb.BinaryReader): OperationReassigmentRequest;
}

export namespace OperationReassigmentRequest {
    export type AsObject = {
        truckList: Array<proto_entities_truck_pb.Truck.AsObject>,
        operationDestination?: proto_entities_operation_pb.Operation.AsObject,
    }
}

export class OperationReassigmentResponse extends jspb.Message { 

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): proto_entities_operation_pb.Operation | undefined;
    setOperation(value?: proto_entities_operation_pb.Operation): OperationReassigmentResponse;

    clearTruckErrorList(): void;
    getTruckErrorList(): Array<proto_entities_truck_state_message_pb.TruckStateMessage>;
    setTruckErrorList(value: Array<proto_entities_truck_state_message_pb.TruckStateMessage>): OperationReassigmentResponse;
    addTruckError(value?: proto_entities_truck_state_message_pb.TruckStateMessage, index?: number): proto_entities_truck_state_message_pb.TruckStateMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationReassigmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OperationReassigmentResponse): OperationReassigmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationReassigmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationReassigmentResponse;
    static deserializeBinaryFromReader(message: OperationReassigmentResponse, reader: jspb.BinaryReader): OperationReassigmentResponse;
}

export namespace OperationReassigmentResponse {
    export type AsObject = {
        operation?: proto_entities_operation_pb.Operation.AsObject,
        truckErrorList: Array<proto_entities_truck_state_message_pb.TruckStateMessage.AsObject>,
    }
}

export class OperationFinalizeResponse extends jspb.Message { 

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): proto_entities_operation_pb.Operation | undefined;
    setOperation(value?: proto_entities_operation_pb.Operation): OperationFinalizeResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationFinalizeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OperationFinalizeResponse): OperationFinalizeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationFinalizeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationFinalizeResponse;
    static deserializeBinaryFromReader(message: OperationFinalizeResponse, reader: jspb.BinaryReader): OperationFinalizeResponse;
}

export namespace OperationFinalizeResponse {
    export type AsObject = {
        operation?: proto_entities_operation_pb.Operation.AsObject,
    }
}

export class MigrateOperationRequest extends jspb.Message { 
    getOperationid(): string;
    setOperationid(value: string): MigrateOperationRequest;


    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): proto_entities_operation_pb.Operation | undefined;
    setOperation(value?: proto_entities_operation_pb.Operation): MigrateOperationRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MigrateOperationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MigrateOperationRequest): MigrateOperationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MigrateOperationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MigrateOperationRequest;
    static deserializeBinaryFromReader(message: MigrateOperationRequest, reader: jspb.BinaryReader): MigrateOperationRequest;
}

export namespace MigrateOperationRequest {
    export type AsObject = {
        operationid: string,
        operation?: proto_entities_operation_pb.Operation.AsObject,
    }
}

export class MigrateOperationResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): MigrateOperationResponse;

    getMessage(): string;
    setMessage(value: string): MigrateOperationResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MigrateOperationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MigrateOperationResponse): MigrateOperationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MigrateOperationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MigrateOperationResponse;
    static deserializeBinaryFromReader(message: MigrateOperationResponse, reader: jspb.BinaryReader): MigrateOperationResponse;
}

export namespace MigrateOperationResponse {
    export type AsObject = {
        status: boolean,
        message: string,
    }
}
