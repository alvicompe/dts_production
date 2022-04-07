// package: pb
// file: proto/services/stock.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_stock_services_pb from "../../proto/services/stock.services_pb";
import * as proto_entities_stock_pb from "../../proto/entities/stock_pb";

interface IStockServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createStock: IStockServiceService_ICreateStock;
    retrieveStock: IStockServiceService_IRetrieveStock;
    retrieveStocks: IStockServiceService_IRetrieveStocks;
    updateStock: IStockServiceService_IUpdateStock;
    deleteStock: IStockServiceService_IDeleteStock;
}

interface IStockServiceService_ICreateStock extends grpc.MethodDefinition<proto_services_stock_services_pb.StockRequest, proto_services_stock_services_pb.StockResponse> {
    path: string; // "/pb.StockService/CreateStock"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_stock_services_pb.StockRequest>;
    requestDeserialize: grpc.deserialize<proto_services_stock_services_pb.StockRequest>;
    responseSerialize: grpc.serialize<proto_services_stock_services_pb.StockResponse>;
    responseDeserialize: grpc.deserialize<proto_services_stock_services_pb.StockResponse>;
}
interface IStockServiceService_IRetrieveStock extends grpc.MethodDefinition<proto_services_stock_services_pb.StockRequest, proto_services_stock_services_pb.StockResponse> {
    path: string; // "/pb.StockService/RetrieveStock"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_stock_services_pb.StockRequest>;
    requestDeserialize: grpc.deserialize<proto_services_stock_services_pb.StockRequest>;
    responseSerialize: grpc.serialize<proto_services_stock_services_pb.StockResponse>;
    responseDeserialize: grpc.deserialize<proto_services_stock_services_pb.StockResponse>;
}
interface IStockServiceService_IRetrieveStocks extends grpc.MethodDefinition<proto_services_stock_services_pb.StockRequest, proto_services_stock_services_pb.StocksResponse> {
    path: string; // "/pb.StockService/RetrieveStocks"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_stock_services_pb.StockRequest>;
    requestDeserialize: grpc.deserialize<proto_services_stock_services_pb.StockRequest>;
    responseSerialize: grpc.serialize<proto_services_stock_services_pb.StocksResponse>;
    responseDeserialize: grpc.deserialize<proto_services_stock_services_pb.StocksResponse>;
}
interface IStockServiceService_IUpdateStock extends grpc.MethodDefinition<proto_services_stock_services_pb.StockRequest, proto_services_stock_services_pb.StockResponse> {
    path: string; // "/pb.StockService/UpdateStock"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_stock_services_pb.StockRequest>;
    requestDeserialize: grpc.deserialize<proto_services_stock_services_pb.StockRequest>;
    responseSerialize: grpc.serialize<proto_services_stock_services_pb.StockResponse>;
    responseDeserialize: grpc.deserialize<proto_services_stock_services_pb.StockResponse>;
}
interface IStockServiceService_IDeleteStock extends grpc.MethodDefinition<proto_services_stock_services_pb.StockRequest, proto_services_stock_services_pb.StockResponse> {
    path: string; // "/pb.StockService/DeleteStock"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_stock_services_pb.StockRequest>;
    requestDeserialize: grpc.deserialize<proto_services_stock_services_pb.StockRequest>;
    responseSerialize: grpc.serialize<proto_services_stock_services_pb.StockResponse>;
    responseDeserialize: grpc.deserialize<proto_services_stock_services_pb.StockResponse>;
}

export const StockServiceService: IStockServiceService;

export interface IStockServiceServer {
    createStock: grpc.handleUnaryCall<proto_services_stock_services_pb.StockRequest, proto_services_stock_services_pb.StockResponse>;
    retrieveStock: grpc.handleUnaryCall<proto_services_stock_services_pb.StockRequest, proto_services_stock_services_pb.StockResponse>;
    retrieveStocks: grpc.handleUnaryCall<proto_services_stock_services_pb.StockRequest, proto_services_stock_services_pb.StocksResponse>;
    updateStock: grpc.handleUnaryCall<proto_services_stock_services_pb.StockRequest, proto_services_stock_services_pb.StockResponse>;
    deleteStock: grpc.handleUnaryCall<proto_services_stock_services_pb.StockRequest, proto_services_stock_services_pb.StockResponse>;
}

export interface IStockServiceClient {
    createStock(request: proto_services_stock_services_pb.StockRequest, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    createStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    createStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    retrieveStock(request: proto_services_stock_services_pb.StockRequest, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    retrieveStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    retrieveStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    retrieveStocks(request: proto_services_stock_services_pb.StockRequest, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StocksResponse) => void): grpc.ClientUnaryCall;
    retrieveStocks(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StocksResponse) => void): grpc.ClientUnaryCall;
    retrieveStocks(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StocksResponse) => void): grpc.ClientUnaryCall;
    updateStock(request: proto_services_stock_services_pb.StockRequest, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    updateStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    updateStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    deleteStock(request: proto_services_stock_services_pb.StockRequest, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    deleteStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    deleteStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
}

export class StockServiceClient extends grpc.Client implements IStockServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createStock(request: proto_services_stock_services_pb.StockRequest, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public createStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public createStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public retrieveStock(request: proto_services_stock_services_pb.StockRequest, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public retrieveStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public retrieveStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public retrieveStocks(request: proto_services_stock_services_pb.StockRequest, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StocksResponse) => void): grpc.ClientUnaryCall;
    public retrieveStocks(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StocksResponse) => void): grpc.ClientUnaryCall;
    public retrieveStocks(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StocksResponse) => void): grpc.ClientUnaryCall;
    public updateStock(request: proto_services_stock_services_pb.StockRequest, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public updateStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public updateStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public deleteStock(request: proto_services_stock_services_pb.StockRequest, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public deleteStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
    public deleteStock(request: proto_services_stock_services_pb.StockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_stock_services_pb.StockResponse) => void): grpc.ClientUnaryCall;
}
