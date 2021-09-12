// package: pb
// file: proto/cell.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_cell_pb from "../proto/cell_pb";
import * as proto_point_pb from "../proto/point_pb";

interface ICellServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCell: ICellServiceService_ICreateCell;
    retrieveCell: ICellServiceService_IRetrieveCell;
    retrieveCells: ICellServiceService_IRetrieveCells;
    updateCell: ICellServiceService_IUpdateCell;
    deleteCell: ICellServiceService_IDeleteCell;
}

interface ICellServiceService_ICreateCell extends grpc.MethodDefinition<proto_cell_pb.CellRequest, proto_cell_pb.CellResponse> {
    path: "/pb.CellService/CreateCell";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_cell_pb.CellRequest>;
    requestDeserialize: grpc.deserialize<proto_cell_pb.CellRequest>;
    responseSerialize: grpc.serialize<proto_cell_pb.CellResponse>;
    responseDeserialize: grpc.deserialize<proto_cell_pb.CellResponse>;
}
interface ICellServiceService_IRetrieveCell extends grpc.MethodDefinition<proto_cell_pb.CellRequest, proto_cell_pb.CellResponse> {
    path: "/pb.CellService/RetrieveCell";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_cell_pb.CellRequest>;
    requestDeserialize: grpc.deserialize<proto_cell_pb.CellRequest>;
    responseSerialize: grpc.serialize<proto_cell_pb.CellResponse>;
    responseDeserialize: grpc.deserialize<proto_cell_pb.CellResponse>;
}
interface ICellServiceService_IRetrieveCells extends grpc.MethodDefinition<proto_cell_pb.CellRequest, proto_cell_pb.CellsResponse> {
    path: "/pb.CellService/RetrieveCells";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_cell_pb.CellRequest>;
    requestDeserialize: grpc.deserialize<proto_cell_pb.CellRequest>;
    responseSerialize: grpc.serialize<proto_cell_pb.CellsResponse>;
    responseDeserialize: grpc.deserialize<proto_cell_pb.CellsResponse>;
}
interface ICellServiceService_IUpdateCell extends grpc.MethodDefinition<proto_cell_pb.CellRequest, proto_cell_pb.CellResponse> {
    path: "/pb.CellService/UpdateCell";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_cell_pb.CellRequest>;
    requestDeserialize: grpc.deserialize<proto_cell_pb.CellRequest>;
    responseSerialize: grpc.serialize<proto_cell_pb.CellResponse>;
    responseDeserialize: grpc.deserialize<proto_cell_pb.CellResponse>;
}
interface ICellServiceService_IDeleteCell extends grpc.MethodDefinition<proto_cell_pb.CellRequest, proto_cell_pb.CellResponse> {
    path: "/pb.CellService/DeleteCell";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_cell_pb.CellRequest>;
    requestDeserialize: grpc.deserialize<proto_cell_pb.CellRequest>;
    responseSerialize: grpc.serialize<proto_cell_pb.CellResponse>;
    responseDeserialize: grpc.deserialize<proto_cell_pb.CellResponse>;
}

export const CellServiceService: ICellServiceService;

export interface ICellServiceServer {
    createCell: grpc.handleUnaryCall<proto_cell_pb.CellRequest, proto_cell_pb.CellResponse>;
    retrieveCell: grpc.handleUnaryCall<proto_cell_pb.CellRequest, proto_cell_pb.CellResponse>;
    retrieveCells: grpc.handleUnaryCall<proto_cell_pb.CellRequest, proto_cell_pb.CellsResponse>;
    updateCell: grpc.handleUnaryCall<proto_cell_pb.CellRequest, proto_cell_pb.CellResponse>;
    deleteCell: grpc.handleUnaryCall<proto_cell_pb.CellRequest, proto_cell_pb.CellResponse>;
}

export interface ICellServiceClient {
    createCell(request: proto_cell_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    createCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    createCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    retrieveCell(request: proto_cell_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    retrieveCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    retrieveCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    retrieveCells(request: proto_cell_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    retrieveCells(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    retrieveCells(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    updateCell(request: proto_cell_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    updateCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    updateCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    deleteCell(request: proto_cell_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    deleteCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    deleteCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
}

export class CellServiceClient extends grpc.Client implements ICellServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createCell(request: proto_cell_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public createCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public createCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public retrieveCell(request: proto_cell_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public retrieveCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public retrieveCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public retrieveCells(request: proto_cell_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    public retrieveCells(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    public retrieveCells(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    public updateCell(request: proto_cell_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public updateCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public updateCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public deleteCell(request: proto_cell_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public deleteCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public deleteCell(request: proto_cell_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_cell_pb.CellResponse) => void): grpc.ClientUnaryCall;
}
