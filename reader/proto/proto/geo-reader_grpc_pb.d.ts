// package: pb
// file: proto/geo-reader.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_geo_reader_pb from "../proto/geo-reader_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IGeoReaderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveTreeGeo: IGeoReaderServiceService_IRetrieveTreeGeo;
    createTreeGeo: IGeoReaderServiceService_ICreateTreeGeo;
}

interface IGeoReaderServiceService_IRetrieveTreeGeo extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_geo_reader_pb.GeoTreeResponse> {
    path: "/pb.GeoReaderService/RetrieveTreeGeo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_geo_reader_pb.GeoTreeResponse>;
    responseDeserialize: grpc.deserialize<proto_geo_reader_pb.GeoTreeResponse>;
}
interface IGeoReaderServiceService_ICreateTreeGeo extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_geo_reader_pb.CreateTreeGeoResponse> {
    path: "/pb.GeoReaderService/CreateTreeGeo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_geo_reader_pb.CreateTreeGeoResponse>;
    responseDeserialize: grpc.deserialize<proto_geo_reader_pb.CreateTreeGeoResponse>;
}

export const GeoReaderServiceService: IGeoReaderServiceService;

export interface IGeoReaderServiceServer {
    retrieveTreeGeo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_geo_reader_pb.GeoTreeResponse>;
    createTreeGeo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_geo_reader_pb.CreateTreeGeoResponse>;
}

export interface IGeoReaderServiceClient {
    retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    createTreeGeo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
    createTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
    createTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
}

export class GeoReaderServiceClient extends grpc.Client implements IGeoReaderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public createTreeGeo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
    public createTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
    public createTreeGeo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.CreateTreeGeoResponse) => void): grpc.ClientUnaryCall;
}
