// package: pb
// file: proto/services/contractor.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_contractor_services_pb from "../../proto/services/contractor.services_pb";
import * as proto_entities_contractor_pb from "../../proto/entities/contractor_pb";

interface IContractorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createContractor: IContractorServiceService_ICreateContractor;
    retrieveContractor: IContractorServiceService_IRetrieveContractor;
    retrieveContractors: IContractorServiceService_IRetrieveContractors;
    updateContractor: IContractorServiceService_IUpdateContractor;
    deleteContractor: IContractorServiceService_IDeleteContractor;
}

interface IContractorServiceService_ICreateContractor extends grpc.MethodDefinition<proto_services_contractor_services_pb.ContractorRequest, proto_services_contractor_services_pb.ContractorResponse> {
    path: string; // "/pb.ContractorService/CreateContractor"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_contractor_services_pb.ContractorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_contractor_services_pb.ContractorRequest>;
    responseSerialize: grpc.serialize<proto_services_contractor_services_pb.ContractorResponse>;
    responseDeserialize: grpc.deserialize<proto_services_contractor_services_pb.ContractorResponse>;
}
interface IContractorServiceService_IRetrieveContractor extends grpc.MethodDefinition<proto_services_contractor_services_pb.ContractorRequest, proto_services_contractor_services_pb.ContractorResponse> {
    path: string; // "/pb.ContractorService/RetrieveContractor"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_contractor_services_pb.ContractorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_contractor_services_pb.ContractorRequest>;
    responseSerialize: grpc.serialize<proto_services_contractor_services_pb.ContractorResponse>;
    responseDeserialize: grpc.deserialize<proto_services_contractor_services_pb.ContractorResponse>;
}
interface IContractorServiceService_IRetrieveContractors extends grpc.MethodDefinition<proto_services_contractor_services_pb.ContractorRequest, proto_services_contractor_services_pb.ContractorsResponse> {
    path: string; // "/pb.ContractorService/RetrieveContractors"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_contractor_services_pb.ContractorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_contractor_services_pb.ContractorRequest>;
    responseSerialize: grpc.serialize<proto_services_contractor_services_pb.ContractorsResponse>;
    responseDeserialize: grpc.deserialize<proto_services_contractor_services_pb.ContractorsResponse>;
}
interface IContractorServiceService_IUpdateContractor extends grpc.MethodDefinition<proto_services_contractor_services_pb.ContractorRequest, proto_services_contractor_services_pb.ContractorResponse> {
    path: string; // "/pb.ContractorService/UpdateContractor"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_contractor_services_pb.ContractorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_contractor_services_pb.ContractorRequest>;
    responseSerialize: grpc.serialize<proto_services_contractor_services_pb.ContractorResponse>;
    responseDeserialize: grpc.deserialize<proto_services_contractor_services_pb.ContractorResponse>;
}
interface IContractorServiceService_IDeleteContractor extends grpc.MethodDefinition<proto_services_contractor_services_pb.ContractorRequest, proto_services_contractor_services_pb.ContractorResponse> {
    path: string; // "/pb.ContractorService/DeleteContractor"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_contractor_services_pb.ContractorRequest>;
    requestDeserialize: grpc.deserialize<proto_services_contractor_services_pb.ContractorRequest>;
    responseSerialize: grpc.serialize<proto_services_contractor_services_pb.ContractorResponse>;
    responseDeserialize: grpc.deserialize<proto_services_contractor_services_pb.ContractorResponse>;
}

export const ContractorServiceService: IContractorServiceService;

export interface IContractorServiceServer {
    createContractor: grpc.handleUnaryCall<proto_services_contractor_services_pb.ContractorRequest, proto_services_contractor_services_pb.ContractorResponse>;
    retrieveContractor: grpc.handleUnaryCall<proto_services_contractor_services_pb.ContractorRequest, proto_services_contractor_services_pb.ContractorResponse>;
    retrieveContractors: grpc.handleUnaryCall<proto_services_contractor_services_pb.ContractorRequest, proto_services_contractor_services_pb.ContractorsResponse>;
    updateContractor: grpc.handleUnaryCall<proto_services_contractor_services_pb.ContractorRequest, proto_services_contractor_services_pb.ContractorResponse>;
    deleteContractor: grpc.handleUnaryCall<proto_services_contractor_services_pb.ContractorRequest, proto_services_contractor_services_pb.ContractorResponse>;
}

export interface IContractorServiceClient {
    createContractor(request: proto_services_contractor_services_pb.ContractorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    createContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    createContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    retrieveContractor(request: proto_services_contractor_services_pb.ContractorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    retrieveContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    retrieveContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    retrieveContractors(request: proto_services_contractor_services_pb.ContractorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorsResponse) => void): grpc.ClientUnaryCall;
    retrieveContractors(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorsResponse) => void): grpc.ClientUnaryCall;
    retrieveContractors(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorsResponse) => void): grpc.ClientUnaryCall;
    updateContractor(request: proto_services_contractor_services_pb.ContractorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    updateContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    updateContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    deleteContractor(request: proto_services_contractor_services_pb.ContractorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    deleteContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    deleteContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
}

export class ContractorServiceClient extends grpc.Client implements IContractorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createContractor(request: proto_services_contractor_services_pb.ContractorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public createContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public createContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public retrieveContractor(request: proto_services_contractor_services_pb.ContractorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public retrieveContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public retrieveContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public retrieveContractors(request: proto_services_contractor_services_pb.ContractorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorsResponse) => void): grpc.ClientUnaryCall;
    public retrieveContractors(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorsResponse) => void): grpc.ClientUnaryCall;
    public retrieveContractors(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorsResponse) => void): grpc.ClientUnaryCall;
    public updateContractor(request: proto_services_contractor_services_pb.ContractorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public updateContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public updateContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public deleteContractor(request: proto_services_contractor_services_pb.ContractorRequest, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public deleteContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
    public deleteContractor(request: proto_services_contractor_services_pb.ContractorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_contractor_services_pb.ContractorResponse) => void): grpc.ClientUnaryCall;
}
