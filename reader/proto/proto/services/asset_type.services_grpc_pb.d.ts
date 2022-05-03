// package: pb
// file: proto/services/asset_type.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_asset_type_services_pb from "../../proto/services/asset_type.services_pb";
import * as proto_entities_asset_type_pb from "../../proto/entities/asset_type_pb";

interface IAssetTypeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createAssetType: IAssetTypeServiceService_ICreateAssetType;
    retrieveAssetType: IAssetTypeServiceService_IRetrieveAssetType;
    retrieveAssetTypes: IAssetTypeServiceService_IRetrieveAssetTypes;
    updateAssetType: IAssetTypeServiceService_IUpdateAssetType;
    deleteAssetType: IAssetTypeServiceService_IDeleteAssetType;
}

interface IAssetTypeServiceService_ICreateAssetType extends grpc.MethodDefinition<proto_services_asset_type_services_pb.AssetTypeRequest, proto_services_asset_type_services_pb.AssetTypeResponse> {
    path: string; // "/pb.AssetTypeService/CreateAssetType"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_asset_type_services_pb.AssetTypeRequest>;
    requestDeserialize: grpc.deserialize<proto_services_asset_type_services_pb.AssetTypeRequest>;
    responseSerialize: grpc.serialize<proto_services_asset_type_services_pb.AssetTypeResponse>;
    responseDeserialize: grpc.deserialize<proto_services_asset_type_services_pb.AssetTypeResponse>;
}
interface IAssetTypeServiceService_IRetrieveAssetType extends grpc.MethodDefinition<proto_services_asset_type_services_pb.AssetTypeRequest, proto_services_asset_type_services_pb.AssetTypeResponse> {
    path: string; // "/pb.AssetTypeService/RetrieveAssetType"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_asset_type_services_pb.AssetTypeRequest>;
    requestDeserialize: grpc.deserialize<proto_services_asset_type_services_pb.AssetTypeRequest>;
    responseSerialize: grpc.serialize<proto_services_asset_type_services_pb.AssetTypeResponse>;
    responseDeserialize: grpc.deserialize<proto_services_asset_type_services_pb.AssetTypeResponse>;
}
interface IAssetTypeServiceService_IRetrieveAssetTypes extends grpc.MethodDefinition<proto_services_asset_type_services_pb.AssetTypeRequest, proto_services_asset_type_services_pb.AssetTypesResponse> {
    path: string; // "/pb.AssetTypeService/RetrieveAssetTypes"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_asset_type_services_pb.AssetTypeRequest>;
    requestDeserialize: grpc.deserialize<proto_services_asset_type_services_pb.AssetTypeRequest>;
    responseSerialize: grpc.serialize<proto_services_asset_type_services_pb.AssetTypesResponse>;
    responseDeserialize: grpc.deserialize<proto_services_asset_type_services_pb.AssetTypesResponse>;
}
interface IAssetTypeServiceService_IUpdateAssetType extends grpc.MethodDefinition<proto_services_asset_type_services_pb.AssetTypeRequest, proto_services_asset_type_services_pb.AssetTypeResponse> {
    path: string; // "/pb.AssetTypeService/UpdateAssetType"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_asset_type_services_pb.AssetTypeRequest>;
    requestDeserialize: grpc.deserialize<proto_services_asset_type_services_pb.AssetTypeRequest>;
    responseSerialize: grpc.serialize<proto_services_asset_type_services_pb.AssetTypeResponse>;
    responseDeserialize: grpc.deserialize<proto_services_asset_type_services_pb.AssetTypeResponse>;
}
interface IAssetTypeServiceService_IDeleteAssetType extends grpc.MethodDefinition<proto_services_asset_type_services_pb.AssetTypeRequest, proto_services_asset_type_services_pb.AssetTypeResponse> {
    path: string; // "/pb.AssetTypeService/DeleteAssetType"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_asset_type_services_pb.AssetTypeRequest>;
    requestDeserialize: grpc.deserialize<proto_services_asset_type_services_pb.AssetTypeRequest>;
    responseSerialize: grpc.serialize<proto_services_asset_type_services_pb.AssetTypeResponse>;
    responseDeserialize: grpc.deserialize<proto_services_asset_type_services_pb.AssetTypeResponse>;
}

export const AssetTypeServiceService: IAssetTypeServiceService;

export interface IAssetTypeServiceServer {
    createAssetType: grpc.handleUnaryCall<proto_services_asset_type_services_pb.AssetTypeRequest, proto_services_asset_type_services_pb.AssetTypeResponse>;
    retrieveAssetType: grpc.handleUnaryCall<proto_services_asset_type_services_pb.AssetTypeRequest, proto_services_asset_type_services_pb.AssetTypeResponse>;
    retrieveAssetTypes: grpc.handleUnaryCall<proto_services_asset_type_services_pb.AssetTypeRequest, proto_services_asset_type_services_pb.AssetTypesResponse>;
    updateAssetType: grpc.handleUnaryCall<proto_services_asset_type_services_pb.AssetTypeRequest, proto_services_asset_type_services_pb.AssetTypeResponse>;
    deleteAssetType: grpc.handleUnaryCall<proto_services_asset_type_services_pb.AssetTypeRequest, proto_services_asset_type_services_pb.AssetTypeResponse>;
}

export interface IAssetTypeServiceClient {
    createAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    createAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    createAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    retrieveAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    retrieveAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    retrieveAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    retrieveAssetTypes(request: proto_services_asset_type_services_pb.AssetTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypesResponse) => void): grpc.ClientUnaryCall;
    retrieveAssetTypes(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypesResponse) => void): grpc.ClientUnaryCall;
    retrieveAssetTypes(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypesResponse) => void): grpc.ClientUnaryCall;
    updateAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    updateAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    updateAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    deleteAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    deleteAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    deleteAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
}

export class AssetTypeServiceClient extends grpc.Client implements IAssetTypeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public createAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public createAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public retrieveAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public retrieveAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public retrieveAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public retrieveAssetTypes(request: proto_services_asset_type_services_pb.AssetTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypesResponse) => void): grpc.ClientUnaryCall;
    public retrieveAssetTypes(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypesResponse) => void): grpc.ClientUnaryCall;
    public retrieveAssetTypes(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypesResponse) => void): grpc.ClientUnaryCall;
    public updateAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public updateAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public updateAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public deleteAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public deleteAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
    public deleteAssetType(request: proto_services_asset_type_services_pb.AssetTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_asset_type_services_pb.AssetTypeResponse) => void): grpc.ClientUnaryCall;
}
