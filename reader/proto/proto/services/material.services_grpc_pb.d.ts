// package: pb
// file: proto/services/material.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_material_services_pb from "../../proto/services/material.services_pb";
import * as proto_entities_material_pb from "../../proto/entities/material_pb";

interface IMaterialServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createMaterial: IMaterialServiceService_ICreateMaterial;
    retrieveMaterial: IMaterialServiceService_IRetrieveMaterial;
    retrieveMaterials: IMaterialServiceService_IRetrieveMaterials;
    updateMaterial: IMaterialServiceService_IUpdateMaterial;
    deleteMaterial: IMaterialServiceService_IDeleteMaterial;
}

interface IMaterialServiceService_ICreateMaterial extends grpc.MethodDefinition<proto_services_material_services_pb.MaterialRequest, proto_services_material_services_pb.MaterialResponse> {
    path: string; // "/pb.MaterialService/CreateMaterial"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_material_services_pb.MaterialRequest>;
    requestDeserialize: grpc.deserialize<proto_services_material_services_pb.MaterialRequest>;
    responseSerialize: grpc.serialize<proto_services_material_services_pb.MaterialResponse>;
    responseDeserialize: grpc.deserialize<proto_services_material_services_pb.MaterialResponse>;
}
interface IMaterialServiceService_IRetrieveMaterial extends grpc.MethodDefinition<proto_services_material_services_pb.MaterialRequest, proto_services_material_services_pb.MaterialResponse> {
    path: string; // "/pb.MaterialService/RetrieveMaterial"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_material_services_pb.MaterialRequest>;
    requestDeserialize: grpc.deserialize<proto_services_material_services_pb.MaterialRequest>;
    responseSerialize: grpc.serialize<proto_services_material_services_pb.MaterialResponse>;
    responseDeserialize: grpc.deserialize<proto_services_material_services_pb.MaterialResponse>;
}
interface IMaterialServiceService_IRetrieveMaterials extends grpc.MethodDefinition<proto_services_material_services_pb.MaterialRequest, proto_services_material_services_pb.MaterialsResponse> {
    path: string; // "/pb.MaterialService/RetrieveMaterials"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_material_services_pb.MaterialRequest>;
    requestDeserialize: grpc.deserialize<proto_services_material_services_pb.MaterialRequest>;
    responseSerialize: grpc.serialize<proto_services_material_services_pb.MaterialsResponse>;
    responseDeserialize: grpc.deserialize<proto_services_material_services_pb.MaterialsResponse>;
}
interface IMaterialServiceService_IUpdateMaterial extends grpc.MethodDefinition<proto_services_material_services_pb.MaterialRequest, proto_services_material_services_pb.MaterialResponse> {
    path: string; // "/pb.MaterialService/UpdateMaterial"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_material_services_pb.MaterialRequest>;
    requestDeserialize: grpc.deserialize<proto_services_material_services_pb.MaterialRequest>;
    responseSerialize: grpc.serialize<proto_services_material_services_pb.MaterialResponse>;
    responseDeserialize: grpc.deserialize<proto_services_material_services_pb.MaterialResponse>;
}
interface IMaterialServiceService_IDeleteMaterial extends grpc.MethodDefinition<proto_services_material_services_pb.MaterialRequest, proto_services_material_services_pb.MaterialResponse> {
    path: string; // "/pb.MaterialService/DeleteMaterial"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_material_services_pb.MaterialRequest>;
    requestDeserialize: grpc.deserialize<proto_services_material_services_pb.MaterialRequest>;
    responseSerialize: grpc.serialize<proto_services_material_services_pb.MaterialResponse>;
    responseDeserialize: grpc.deserialize<proto_services_material_services_pb.MaterialResponse>;
}

export const MaterialServiceService: IMaterialServiceService;

export interface IMaterialServiceServer {
    createMaterial: grpc.handleUnaryCall<proto_services_material_services_pb.MaterialRequest, proto_services_material_services_pb.MaterialResponse>;
    retrieveMaterial: grpc.handleUnaryCall<proto_services_material_services_pb.MaterialRequest, proto_services_material_services_pb.MaterialResponse>;
    retrieveMaterials: grpc.handleUnaryCall<proto_services_material_services_pb.MaterialRequest, proto_services_material_services_pb.MaterialsResponse>;
    updateMaterial: grpc.handleUnaryCall<proto_services_material_services_pb.MaterialRequest, proto_services_material_services_pb.MaterialResponse>;
    deleteMaterial: grpc.handleUnaryCall<proto_services_material_services_pb.MaterialRequest, proto_services_material_services_pb.MaterialResponse>;
}

export interface IMaterialServiceClient {
    createMaterial(request: proto_services_material_services_pb.MaterialRequest, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    createMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    createMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    retrieveMaterial(request: proto_services_material_services_pb.MaterialRequest, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    retrieveMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    retrieveMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    retrieveMaterials(request: proto_services_material_services_pb.MaterialRequest, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialsResponse) => void): grpc.ClientUnaryCall;
    retrieveMaterials(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialsResponse) => void): grpc.ClientUnaryCall;
    retrieveMaterials(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialsResponse) => void): grpc.ClientUnaryCall;
    updateMaterial(request: proto_services_material_services_pb.MaterialRequest, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    updateMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    updateMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    deleteMaterial(request: proto_services_material_services_pb.MaterialRequest, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    deleteMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    deleteMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
}

export class MaterialServiceClient extends grpc.Client implements IMaterialServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createMaterial(request: proto_services_material_services_pb.MaterialRequest, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public createMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public createMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public retrieveMaterial(request: proto_services_material_services_pb.MaterialRequest, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public retrieveMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public retrieveMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public retrieveMaterials(request: proto_services_material_services_pb.MaterialRequest, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialsResponse) => void): grpc.ClientUnaryCall;
    public retrieveMaterials(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialsResponse) => void): grpc.ClientUnaryCall;
    public retrieveMaterials(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialsResponse) => void): grpc.ClientUnaryCall;
    public updateMaterial(request: proto_services_material_services_pb.MaterialRequest, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public updateMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public updateMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public deleteMaterial(request: proto_services_material_services_pb.MaterialRequest, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public deleteMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
    public deleteMaterial(request: proto_services_material_services_pb.MaterialRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_material_services_pb.MaterialResponse) => void): grpc.ClientUnaryCall;
}