// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_stock_pb = require('../proto/stock_pb.js');
var proto_cell_pb = require('../proto/cell_pb.js');

function serialize_pb_StockRequest(arg) {
  if (!(arg instanceof proto_stock_pb.StockRequest)) {
    throw new Error('Expected argument of type pb.StockRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_StockRequest(buffer_arg) {
  return proto_stock_pb.StockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_StockResponse(arg) {
  if (!(arg instanceof proto_stock_pb.StockResponse)) {
    throw new Error('Expected argument of type pb.StockResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_StockResponse(buffer_arg) {
  return proto_stock_pb.StockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_StocksResponse(arg) {
  if (!(arg instanceof proto_stock_pb.StocksResponse)) {
    throw new Error('Expected argument of type pb.StocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_StocksResponse(buffer_arg) {
  return proto_stock_pb.StocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StockServiceService = exports.StockServiceService = {
  createStock: {
    path: '/pb.StockService/CreateStock',
    requestStream: false,
    responseStream: false,
    requestType: proto_stock_pb.StockRequest,
    responseType: proto_stock_pb.StockResponse,
    requestSerialize: serialize_pb_StockRequest,
    requestDeserialize: deserialize_pb_StockRequest,
    responseSerialize: serialize_pb_StockResponse,
    responseDeserialize: deserialize_pb_StockResponse,
  },
  retrieveStock: {
    path: '/pb.StockService/RetrieveStock',
    requestStream: false,
    responseStream: false,
    requestType: proto_stock_pb.StockRequest,
    responseType: proto_stock_pb.StockResponse,
    requestSerialize: serialize_pb_StockRequest,
    requestDeserialize: deserialize_pb_StockRequest,
    responseSerialize: serialize_pb_StockResponse,
    responseDeserialize: deserialize_pb_StockResponse,
  },
  retrieveStocks: {
    path: '/pb.StockService/RetrieveStocks',
    requestStream: false,
    responseStream: false,
    requestType: proto_stock_pb.StockRequest,
    responseType: proto_stock_pb.StocksResponse,
    requestSerialize: serialize_pb_StockRequest,
    requestDeserialize: deserialize_pb_StockRequest,
    responseSerialize: serialize_pb_StocksResponse,
    responseDeserialize: deserialize_pb_StocksResponse,
  },
  updateStock: {
    path: '/pb.StockService/UpdateStock',
    requestStream: false,
    responseStream: false,
    requestType: proto_stock_pb.StockRequest,
    responseType: proto_stock_pb.StockResponse,
    requestSerialize: serialize_pb_StockRequest,
    requestDeserialize: deserialize_pb_StockRequest,
    responseSerialize: serialize_pb_StockResponse,
    responseDeserialize: deserialize_pb_StockResponse,
  },
  deleteStock: {
    path: '/pb.StockService/DeleteStock',
    requestStream: false,
    responseStream: false,
    requestType: proto_stock_pb.StockRequest,
    responseType: proto_stock_pb.StockResponse,
    requestSerialize: serialize_pb_StockRequest,
    requestDeserialize: deserialize_pb_StockRequest,
    responseSerialize: serialize_pb_StockResponse,
    responseDeserialize: deserialize_pb_StockResponse,
  },
};

exports.StockServiceClient = grpc.makeGenericClientConstructor(StockServiceService);
