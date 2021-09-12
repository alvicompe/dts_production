// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_cell_pb = require('../proto/cell_pb.js');
var proto_point_pb = require('../proto/point_pb.js');

function serialize_pb_CellRequest(arg) {
  if (!(arg instanceof proto_cell_pb.CellRequest)) {
    throw new Error('Expected argument of type pb.CellRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CellRequest(buffer_arg) {
  return proto_cell_pb.CellRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CellResponse(arg) {
  if (!(arg instanceof proto_cell_pb.CellResponse)) {
    throw new Error('Expected argument of type pb.CellResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CellResponse(buffer_arg) {
  return proto_cell_pb.CellResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CellsResponse(arg) {
  if (!(arg instanceof proto_cell_pb.CellsResponse)) {
    throw new Error('Expected argument of type pb.CellsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CellsResponse(buffer_arg) {
  return proto_cell_pb.CellsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CellServiceService = exports.CellServiceService = {
  createCell: {
    path: '/pb.CellService/CreateCell',
    requestStream: false,
    responseStream: false,
    requestType: proto_cell_pb.CellRequest,
    responseType: proto_cell_pb.CellResponse,
    requestSerialize: serialize_pb_CellRequest,
    requestDeserialize: deserialize_pb_CellRequest,
    responseSerialize: serialize_pb_CellResponse,
    responseDeserialize: deserialize_pb_CellResponse,
  },
  retrieveCell: {
    path: '/pb.CellService/RetrieveCell',
    requestStream: false,
    responseStream: false,
    requestType: proto_cell_pb.CellRequest,
    responseType: proto_cell_pb.CellResponse,
    requestSerialize: serialize_pb_CellRequest,
    requestDeserialize: deserialize_pb_CellRequest,
    responseSerialize: serialize_pb_CellResponse,
    responseDeserialize: deserialize_pb_CellResponse,
  },
  retrieveCells: {
    path: '/pb.CellService/RetrieveCells',
    requestStream: false,
    responseStream: false,
    requestType: proto_cell_pb.CellRequest,
    responseType: proto_cell_pb.CellsResponse,
    requestSerialize: serialize_pb_CellRequest,
    requestDeserialize: deserialize_pb_CellRequest,
    responseSerialize: serialize_pb_CellsResponse,
    responseDeserialize: deserialize_pb_CellsResponse,
  },
  updateCell: {
    path: '/pb.CellService/UpdateCell',
    requestStream: false,
    responseStream: false,
    requestType: proto_cell_pb.CellRequest,
    responseType: proto_cell_pb.CellResponse,
    requestSerialize: serialize_pb_CellRequest,
    requestDeserialize: deserialize_pb_CellRequest,
    responseSerialize: serialize_pb_CellResponse,
    responseDeserialize: deserialize_pb_CellResponse,
  },
  deleteCell: {
    path: '/pb.CellService/DeleteCell',
    requestStream: false,
    responseStream: false,
    requestType: proto_cell_pb.CellRequest,
    responseType: proto_cell_pb.CellResponse,
    requestSerialize: serialize_pb_CellRequest,
    requestDeserialize: deserialize_pb_CellRequest,
    responseSerialize: serialize_pb_CellResponse,
    responseDeserialize: deserialize_pb_CellResponse,
  },
};

exports.CellServiceClient = grpc.makeGenericClientConstructor(CellServiceService);
