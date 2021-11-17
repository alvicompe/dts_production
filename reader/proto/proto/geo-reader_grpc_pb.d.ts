// package: pb
// file: proto/geo-reader.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_geo_reader_pb from "../proto/geo-reader_pb";
import * as proto_geo_pb from "../proto/geo_pb";

interface IGeoReaderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveTreeGeo: IGeoReaderServiceService_IRetrieveTreeGeo;
}

interface IGeoReaderServiceService_IRetrieveTreeGeo extends grpc.MethodDefinition<proto_geo_reader_pb.GeoTreeRequest, proto_geo_reader_pb.GeoTreeResponse> {
    path: "/pb.GeoReaderService/RetrieveTreeGeo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_geo_reader_pb.GeoTreeRequest>;
    requestDeserialize: grpc.deserialize<proto_geo_reader_pb.GeoTreeRequest>;
    responseSerialize: grpc.serialize<proto_geo_reader_pb.GeoTreeResponse>;
    responseDeserialize: grpc.deserialize<proto_geo_reader_pb.GeoTreeResponse>;
}

export const GeoReaderServiceService: IGeoReaderServiceService;

export interface IGeoReaderServiceServer {
    retrieveTreeGeo: grpc.handleUnaryCall<proto_geo_reader_pb.GeoTreeRequest, proto_geo_reader_pb.GeoTreeResponse>;
}

export interface IGeoReaderServiceClient {
    retrieveTreeGeo(request: proto_geo_reader_pb.GeoTreeRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTreeGeo(request: proto_geo_reader_pb.GeoTreeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    retrieveTreeGeo(request: proto_geo_reader_pb.GeoTreeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
}

export class GeoReaderServiceClient extends grpc.Client implements IGeoReaderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveTreeGeo(request: proto_geo_reader_pb.GeoTreeRequest, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTreeGeo(request: proto_geo_reader_pb.GeoTreeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
    public retrieveTreeGeo(request: proto_geo_reader_pb.GeoTreeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_geo_reader_pb.GeoTreeResponse) => void): grpc.ClientUnaryCall;
}
