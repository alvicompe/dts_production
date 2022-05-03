// package: pb
// file: proto/services/unit.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_unit_services_pb from "../../proto/services/unit.services_pb";
import * as proto_entities_unit_pb from "../../proto/entities/unit_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUnitInMantoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrieveUnitMantoList: IUnitInMantoServiceService_IRetrieveUnitMantoList;
}

interface IUnitInMantoServiceService_IRetrieveUnitMantoList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_services_unit_services_pb.UnitMantoListResponse> {
    path: string; // "/pb.UnitInMantoService/RetrieveUnitMantoList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_services_unit_services_pb.UnitMantoListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_unit_services_pb.UnitMantoListResponse>;
}

export const UnitInMantoServiceService: IUnitInMantoServiceService;

export interface IUnitInMantoServiceServer {
    retrieveUnitMantoList: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_services_unit_services_pb.UnitMantoListResponse>;
}

export interface IUnitInMantoServiceClient {
    retrieveUnitMantoList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_unit_services_pb.UnitMantoListResponse) => void): grpc.ClientUnaryCall;
    retrieveUnitMantoList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_unit_services_pb.UnitMantoListResponse) => void): grpc.ClientUnaryCall;
    retrieveUnitMantoList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_unit_services_pb.UnitMantoListResponse) => void): grpc.ClientUnaryCall;
}

export class UnitInMantoServiceClient extends grpc.Client implements IUnitInMantoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrieveUnitMantoList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_services_unit_services_pb.UnitMantoListResponse) => void): grpc.ClientUnaryCall;
    public retrieveUnitMantoList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_unit_services_pb.UnitMantoListResponse) => void): grpc.ClientUnaryCall;
    public retrieveUnitMantoList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_unit_services_pb.UnitMantoListResponse) => void): grpc.ClientUnaryCall;
}
