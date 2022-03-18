// package: pb
// file: proto/services/geo_reader.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_geo_reader_services_pb from "../../proto/services/geo_reader.services_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IGeoReaderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveTreeGeo: IGeoReaderServiceService_IRetrieveTreeGeo;
    createTreeDirectory: IGeoReaderServiceService_ICreateTreeDirectory;
    updateTreeDirectory: IGeoReaderServiceService_IUpdateTreeDirectory;
    createTreeGeo: IGeoReaderServiceService_ICreateTreeGeo;
    checkChangesTreeGeo: IGeoReaderServiceService_ICheckChangesTreeGeo;
    automaticallyExecuteChangeTreeGeo: IGeoReaderServiceService_IAutomaticallyExecuteChangeTreeGeo;
}

interface IGeoReaderServiceService_IRetrieveTreeGeo extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.GeoTreeResponse> {
    path: string; // "/pb.GeoReaderService/RetrieveTreeGeo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_geo_reader_services_pb.GeoTreeResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_reader_services_pb.GeoTreeResponse>;
}
interface IGeoReaderServiceService_ICreateTreeDirectory extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.GeoTreeResponse> {
    path: string; // "/pb.GeoReaderService/CreateTreeDirectory"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_geo_reader_services_pb.GeoTreeResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_reader_services_pb.GeoTreeResponse>;
}
interface IGeoReaderServiceService_IUpdateTreeDirectory extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.GeoTreeResponse> {
    path: string; // "/pb.GeoReaderService/UpdateTreeDirectory"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_geo_reader_services_pb.GeoTreeResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_reader_services_pb.GeoTreeResponse>;
}
interface IGeoReaderServiceService_ICreateTreeGeo extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.CreateTreeGeoResponse> {
    path: string; // "/pb.GeoReaderService/CreateTreeGeo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_geo_reader_services_pb.CreateTreeGeoResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_reader_services_pb.CreateTreeGeoResponse>;
}
interface IGeoReaderServiceService_ICheckChangesTreeGeo extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.ChangesGeoNotificationResponse> {
    path: string; // "/pb.GeoReaderService/CheckChangesTreeGeo"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_geo_reader_services_pb.ChangesGeoNotificationResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_reader_services_pb.ChangesGeoNotificationResponse>;
}
interface IGeoReaderServiceService_IAutomaticallyExecuteChangeTreeGeo extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.AutomaticallyExecuteChangeTreeGeoResponse> {
    path: string; // "/pb.GeoReaderService/AutomaticallyExecuteChangeTreeGeo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_geo_reader_services_pb.AutomaticallyExecuteChangeTreeGeoResponse>;
    responseDeserialize: grpc.deserialize<proto_services_geo_reader_services_pb.AutomaticallyExecuteChangeTreeGeoResponse>;
}

export const GeoReaderServiceService: IGeoReaderServiceService;

export interface IGeoReaderServiceServer {
    retrieveTreeGeo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.GeoTreeResponse>;
    createTreeDirectory: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.GeoTreeResponse>;
    updateTreeDirectory: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.GeoTreeResponse>;
    createTreeGeo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.CreateTreeGeoResponse>;
    checkChangesTreeGeo: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.ChangesGeoNotificationResponse>;
    automaticallyExecuteChangeTreeGeo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_geo_reader_services_pb.AutomaticallyExecuteChangeTreeGeoResponse>;
}

export interface IGeoReaderServiceClient {
    retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    createTreeDirectory(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    createTreeDirectory(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    createTreeDirectory(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    updateTreeDirectory(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    updateTreeDirectory(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    updateTreeDirectory(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    createTreeGeo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
    createTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
    createTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
    checkChangesTreeGeo(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_geo_reader_services_pb.ChangesGeoNotificationResponse>;
    checkChangesTreeGeo(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_geo_reader_services_pb.ChangesGeoNotificationResponse>;
    automaticallyExecuteChangeTreeGeo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.AutomaticallyExecuteChangeTreeGeoResponse) => void): grpc.ClientUnaryCall;
    automaticallyExecuteChangeTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.AutomaticallyExecuteChangeTreeGeoResponse) => void): grpc.ClientUnaryCall;
    automaticallyExecuteChangeTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.AutomaticallyExecuteChangeTreeGeoResponse) => void): grpc.ClientUnaryCall;
}

export class GeoReaderServiceClient extends grpc.Client implements IGeoReaderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public createTreeDirectory(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public createTreeDirectory(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public createTreeDirectory(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public updateTreeDirectory(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public updateTreeDirectory(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public updateTreeDirectory(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public createTreeGeo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
    public createTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
    public createTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
    public checkChangesTreeGeo(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_geo_reader_services_pb.ChangesGeoNotificationResponse>;
    public checkChangesTreeGeo(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_services_geo_reader_services_pb.ChangesGeoNotificationResponse>;
    public automaticallyExecuteChangeTreeGeo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.AutomaticallyExecuteChangeTreeGeoResponse) => void): grpc.ClientUnaryCall;
    public automaticallyExecuteChangeTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.AutomaticallyExecuteChangeTreeGeoResponse) => void): grpc.ClientUnaryCall;
    public automaticallyExecuteChangeTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_geo_reader_services_pb.AutomaticallyExecuteChangeTreeGeoResponse) => void): grpc.ClientUnaryCall;
}
