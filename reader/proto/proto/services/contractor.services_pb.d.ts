// package: pb
// file: proto/services/contractor.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_contractor_pb from "../../proto/entities/contractor_pb";

export class ContractorRequest extends jspb.Message { 

    hasContractor(): boolean;
    clearContractor(): void;
    getContractor(): proto_entities_contractor_pb.Contractor | undefined;
    setContractor(value?: proto_entities_contractor_pb.Contractor): ContractorRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ContractorRequest): ContractorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractorRequest;
    static deserializeBinaryFromReader(message: ContractorRequest, reader: jspb.BinaryReader): ContractorRequest;
}

export namespace ContractorRequest {
    export type AsObject = {
        contractor?: proto_entities_contractor_pb.Contractor.AsObject,
    }
}

export class ContractorResponse extends jspb.Message { 

    hasContractor(): boolean;
    clearContractor(): void;
    getContractor(): proto_entities_contractor_pb.Contractor | undefined;
    setContractor(value?: proto_entities_contractor_pb.Contractor): ContractorResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ContractorResponse): ContractorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractorResponse;
    static deserializeBinaryFromReader(message: ContractorResponse, reader: jspb.BinaryReader): ContractorResponse;
}

export namespace ContractorResponse {
    export type AsObject = {
        contractor?: proto_entities_contractor_pb.Contractor.AsObject,
    }
}

export class ContractorsResponse extends jspb.Message { 
    clearContractorsList(): void;
    getContractorsList(): Array<proto_entities_contractor_pb.Contractor>;
    setContractorsList(value: Array<proto_entities_contractor_pb.Contractor>): ContractorsResponse;
    addContractors(value?: proto_entities_contractor_pb.Contractor, index?: number): proto_entities_contractor_pb.Contractor;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ContractorsResponse): ContractorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractorsResponse;
    static deserializeBinaryFromReader(message: ContractorsResponse, reader: jspb.BinaryReader): ContractorsResponse;
}

export namespace ContractorsResponse {
    export type AsObject = {
        contractorsList: Array<proto_entities_contractor_pb.Contractor.AsObject>,
    }
}
