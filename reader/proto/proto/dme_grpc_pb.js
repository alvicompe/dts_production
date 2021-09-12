// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_dme_pb = require('../proto/dme_pb.js');
var proto_cell_pb = require('../proto/cell_pb.js');

function serialize_pb_DmeRequest(arg) {
  if (!(arg instanceof proto_dme_pb.DmeRequest)) {
    throw new Error('Expected argument of type pb.DmeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DmeRequest(buffer_arg) {
  return proto_dme_pb.DmeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DmeResponse(arg) {
  if (!(arg instanceof proto_dme_pb.DmeResponse)) {
    throw new Error('Expected argument of type pb.DmeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DmeResponse(buffer_arg) {
  return proto_dme_pb.DmeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DmesResponse(arg) {
  if (!(arg instanceof proto_dme_pb.DmesResponse)) {
    throw new Error('Expected argument of type pb.DmesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DmesResponse(buffer_arg) {
  return proto_dme_pb.DmesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DmeServiceService = exports.DmeServiceService = {
  createDme: {
    path: '/pb.DmeService/CreateDme',
    requestStream: false,
    responseStream: false,
    requestType: proto_dme_pb.DmeRequest,
    responseType: proto_dme_pb.DmeResponse,
    requestSerialize: serialize_pb_DmeRequest,
    requestDeserialize: deserialize_pb_DmeRequest,
    responseSerialize: serialize_pb_DmeResponse,
    responseDeserialize: deserialize_pb_DmeResponse,
  },
  retrieveDme: {
    path: '/pb.DmeService/RetrieveDme',
    requestStream: false,
    responseStream: false,
    requestType: proto_dme_pb.DmeRequest,
    responseType: proto_dme_pb.DmeResponse,
    requestSerialize: serialize_pb_DmeRequest,
    requestDeserialize: deserialize_pb_DmeRequest,
    responseSerialize: serialize_pb_DmeResponse,
    responseDeserialize: deserialize_pb_DmeResponse,
  },
  retrieveDmes: {
    path: '/pb.DmeService/RetrieveDmes',
    requestStream: false,
    responseStream: false,
    requestType: proto_dme_pb.DmeRequest,
    responseType: proto_dme_pb.DmesResponse,
    requestSerialize: serialize_pb_DmeRequest,
    requestDeserialize: deserialize_pb_DmeRequest,
    responseSerialize: serialize_pb_DmesResponse,
    responseDeserialize: deserialize_pb_DmesResponse,
  },
  updateDme: {
    path: '/pb.DmeService/UpdateDme',
    requestStream: false,
    responseStream: false,
    requestType: proto_dme_pb.DmeRequest,
    responseType: proto_dme_pb.DmeResponse,
    requestSerialize: serialize_pb_DmeRequest,
    requestDeserialize: deserialize_pb_DmeRequest,
    responseSerialize: serialize_pb_DmeResponse,
    responseDeserialize: deserialize_pb_DmeResponse,
  },
  deleteDme: {
    path: '/pb.DmeService/DeleteDme',
    requestStream: false,
    responseStream: false,
    requestType: proto_dme_pb.DmeRequest,
    responseType: proto_dme_pb.DmeResponse,
    requestSerialize: serialize_pb_DmeRequest,
    requestDeserialize: deserialize_pb_DmeRequest,
    responseSerialize: serialize_pb_DmeResponse,
    responseDeserialize: deserialize_pb_DmeResponse,
  },
};

exports.DmeServiceClient = grpc.makeGenericClientConstructor(DmeServiceService);
