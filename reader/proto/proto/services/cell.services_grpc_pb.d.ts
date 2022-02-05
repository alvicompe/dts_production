// package: pb
// file: proto/services/cell.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_cell_services_pb from "../../proto/services/cell.services_pb";
import * as proto_entities_cell_pb from "../../proto/entities/cell_pb";
import * as proto_enums_type_download_enums_pb from "../../proto/enums/type_download.enums_pb";

interface ICellServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCell: ICellServiceService_ICreateCell;
    retrieveCell: ICellServiceService_IRetrieveCell;
    retrieveCells: ICellServiceService_IRetrieveCells;
    updateCell: ICellServiceService_IUpdateCell;
    deleteCell: ICellServiceService_IDeleteCell;
    finalizeCellList: ICellServiceService_IFinalizeCellList;
}

interface ICellServiceService_ICreateCell extends grpc.MethodDefinition<proto_services_cell_services_pb.CellRequest, proto_services_cell_services_pb.CellResponse> {
    path: string; // "/pb.CellService/CreateCell"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cell_services_pb.CellRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellRequest>;
    responseSerialize: grpc.serialize<proto_services_cell_services_pb.CellResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellResponse>;
}
interface ICellServiceService_IRetrieveCell extends grpc.MethodDefinition<proto_services_cell_services_pb.CellRequest, proto_services_cell_services_pb.CellResponse> {
    path: string; // "/pb.CellService/RetrieveCell"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cell_services_pb.CellRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellRequest>;
    responseSerialize: grpc.serialize<proto_services_cell_services_pb.CellResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellResponse>;
}
interface ICellServiceService_IRetrieveCells extends grpc.MethodDefinition<proto_services_cell_services_pb.CellRequest, proto_services_cell_services_pb.CellsResponse> {
    path: string; // "/pb.CellService/RetrieveCells"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cell_services_pb.CellRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellRequest>;
    responseSerialize: grpc.serialize<proto_services_cell_services_pb.CellsResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellsResponse>;
}
interface ICellServiceService_IUpdateCell extends grpc.MethodDefinition<proto_services_cell_services_pb.CellUpdateRequest, proto_services_cell_services_pb.CellResponse> {
    path: string; // "/pb.CellService/UpdateCell"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cell_services_pb.CellUpdateRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellUpdateRequest>;
    responseSerialize: grpc.serialize<proto_services_cell_services_pb.CellResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellResponse>;
}
interface ICellServiceService_IDeleteCell extends grpc.MethodDefinition<proto_services_cell_services_pb.CellRequest, proto_services_cell_services_pb.CellResponse> {
    path: string; // "/pb.CellService/DeleteCell"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cell_services_pb.CellRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellRequest>;
    responseSerialize: grpc.serialize<proto_services_cell_services_pb.CellResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellResponse>;
}
interface ICellServiceService_IFinalizeCellList extends grpc.MethodDefinition<proto_services_cell_services_pb.CellListRequest, proto_services_cell_services_pb.CellListResponse> {
    path: string; // "/pb.CellService/FinalizeCellList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cell_services_pb.CellListRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellListRequest>;
    responseSerialize: grpc.serialize<proto_services_cell_services_pb.CellListResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cell_services_pb.CellListResponse>;
}

export const CellServiceService: ICellServiceService;

export interface ICellServiceServer {
    createCell: grpc.handleUnaryCall<proto_services_cell_services_pb.CellRequest, proto_services_cell_services_pb.CellResponse>;
    retrieveCell: grpc.handleUnaryCall<proto_services_cell_services_pb.CellRequest, proto_services_cell_services_pb.CellResponse>;
    retrieveCells: grpc.handleUnaryCall<proto_services_cell_services_pb.CellRequest, proto_services_cell_services_pb.CellsResponse>;
    updateCell: grpc.handleUnaryCall<proto_services_cell_services_pb.CellUpdateRequest, proto_services_cell_services_pb.CellResponse>;
    deleteCell: grpc.handleUnaryCall<proto_services_cell_services_pb.CellRequest, proto_services_cell_services_pb.CellResponse>;
    finalizeCellList: grpc.handleUnaryCall<proto_services_cell_services_pb.CellListRequest, proto_services_cell_services_pb.CellListResponse>;
}

export interface ICellServiceClient {
    createCell(request: proto_services_cell_services_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    createCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    createCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    retrieveCell(request: proto_services_cell_services_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    retrieveCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    retrieveCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    retrieveCells(request: proto_services_cell_services_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    retrieveCells(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    retrieveCells(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    updateCell(request: proto_services_cell_services_pb.CellUpdateRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    updateCell(request: proto_services_cell_services_pb.CellUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    updateCell(request: proto_services_cell_services_pb.CellUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    deleteCell(request: proto_services_cell_services_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    deleteCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    deleteCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    finalizeCellList(request: proto_services_cell_services_pb.CellListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellListResponse) => void): grpc.ClientUnaryCall;
    finalizeCellList(request: proto_services_cell_services_pb.CellListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellListResponse) => void): grpc.ClientUnaryCall;
    finalizeCellList(request: proto_services_cell_services_pb.CellListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellListResponse) => void): grpc.ClientUnaryCall;
}

export class CellServiceClient extends grpc.Client implements ICellServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createCell(request: proto_services_cell_services_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public createCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public createCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public retrieveCell(request: proto_services_cell_services_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public retrieveCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public retrieveCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public retrieveCells(request: proto_services_cell_services_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    public retrieveCells(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    public retrieveCells(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellsResponse) => void): grpc.ClientUnaryCall;
    public updateCell(request: proto_services_cell_services_pb.CellUpdateRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public updateCell(request: proto_services_cell_services_pb.CellUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public updateCell(request: proto_services_cell_services_pb.CellUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public deleteCell(request: proto_services_cell_services_pb.CellRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public deleteCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public deleteCell(request: proto_services_cell_services_pb.CellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellResponse) => void): grpc.ClientUnaryCall;
    public finalizeCellList(request: proto_services_cell_services_pb.CellListRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellListResponse) => void): grpc.ClientUnaryCall;
    public finalizeCellList(request: proto_services_cell_services_pb.CellListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellListResponse) => void): grpc.ClientUnaryCall;
    public finalizeCellList(request: proto_services_cell_services_pb.CellListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cell_services_pb.CellListResponse) => void): grpc.ClientUnaryCall;
}
