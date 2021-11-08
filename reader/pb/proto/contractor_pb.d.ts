import * as jspb from 'google-protobuf'



export class Contractor extends jspb.Message {
  getId(): string;
  setId(value: string): Contractor;

  getName(): string;
  setName(value: string): Contractor;

  getDescription(): string;
  setDescription(value: string): Contractor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contractor.AsObject;
  static toObject(includeInstance: boolean, msg: Contractor): Contractor.AsObject;
  static serializeBinaryToWriter(message: Contractor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contractor;
  static deserializeBinaryFromReader(message: Contractor, reader: jspb.BinaryReader): Contractor;
}

export namespace Contractor {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
  }
}

export class ContractorRequest extends jspb.Message {
  getContractor(): Contractor | undefined;
  setContractor(value?: Contractor): ContractorRequest;
  hasContractor(): boolean;
  clearContractor(): ContractorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContractorRequest): ContractorRequest.AsObject;
  static serializeBinaryToWriter(message: ContractorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractorRequest;
  static deserializeBinaryFromReader(message: ContractorRequest, reader: jspb.BinaryReader): ContractorRequest;
}

export namespace ContractorRequest {
  export type AsObject = {
    contractor?: Contractor.AsObject,
  }
}

export class ContractorResponse extends jspb.Message {
  getContractor(): Contractor | undefined;
  setContractor(value?: Contractor): ContractorResponse;
  hasContractor(): boolean;
  clearContractor(): ContractorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContractorResponse): ContractorResponse.AsObject;
  static serializeBinaryToWriter(message: ContractorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractorResponse;
  static deserializeBinaryFromReader(message: ContractorResponse, reader: jspb.BinaryReader): ContractorResponse;
}

export namespace ContractorResponse {
  export type AsObject = {
    contractor?: Contractor.AsObject,
  }
}

export class ContractorsResponse extends jspb.Message {
  getContractorsList(): Array<Contractor>;
  setContractorsList(value: Array<Contractor>): ContractorsResponse;
  clearContractorsList(): ContractorsResponse;
  addContractors(value?: Contractor, index?: number): Contractor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContractorsResponse): ContractorsResponse.AsObject;
  static serializeBinaryToWriter(message: ContractorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractorsResponse;
  static deserializeBinaryFromReader(message: ContractorsResponse, reader: jspb.BinaryReader): ContractorsResponse;
}

export namespace ContractorsResponse {
  export type AsObject = {
    contractorsList: Array<Contractor.AsObject>,
  }
}

