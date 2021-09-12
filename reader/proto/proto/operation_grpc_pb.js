// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_operation_pb = require('../proto/operation_pb.js');
var proto_truck_pb = require('../proto/truck_pb.js');
var proto_excavator_pb = require('../proto/excavator_pb.js');
var proto_road_pb = require('../proto/road_pb.js');
var proto_cycle_pb = require('../proto/cycle_pb.js');
var proto_load_pb = require('../proto/load_pb.js');
var proto_material_pb = require('../proto/material_pb.js');

function serialize_pb_OperationRequest(arg) {
  if (!(arg instanceof proto_operation_pb.OperationRequest)) {
    throw new Error('Expected argument of type pb.OperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_OperationRequest(buffer_arg) {
  return proto_operation_pb.OperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_OperationResponse(arg) {
  if (!(arg instanceof proto_operation_pb.OperationResponse)) {
    throw new Error('Expected argument of type pb.OperationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_OperationResponse(buffer_arg) {
  return proto_operation_pb.OperationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_OperationsResponse(arg) {
  if (!(arg instanceof proto_operation_pb.OperationsResponse)) {
    throw new Error('Expected argument of type pb.OperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_OperationsResponse(buffer_arg) {
  return proto_operation_pb.OperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OperationServiceService = exports.OperationServiceService = {
  createOperation: {
    path: '/pb.OperationService/CreateOperation',
    requestStream: false,
    responseStream: false,
    requestType: proto_operation_pb.OperationRequest,
    responseType: proto_operation_pb.OperationResponse,
    requestSerialize: serialize_pb_OperationRequest,
    requestDeserialize: deserialize_pb_OperationRequest,
    responseSerialize: serialize_pb_OperationResponse,
    responseDeserialize: deserialize_pb_OperationResponse,
  },
  retrieveOperation: {
    path: '/pb.OperationService/RetrieveOperation',
    requestStream: false,
    responseStream: false,
    requestType: proto_operation_pb.OperationRequest,
    responseType: proto_operation_pb.OperationResponse,
    requestSerialize: serialize_pb_OperationRequest,
    requestDeserialize: deserialize_pb_OperationRequest,
    responseSerialize: serialize_pb_OperationResponse,
    responseDeserialize: deserialize_pb_OperationResponse,
  },
  retrieveOperations: {
    path: '/pb.OperationService/RetrieveOperations',
    requestStream: false,
    responseStream: false,
    requestType: proto_operation_pb.OperationRequest,
    responseType: proto_operation_pb.OperationsResponse,
    requestSerialize: serialize_pb_OperationRequest,
    requestDeserialize: deserialize_pb_OperationRequest,
    responseSerialize: serialize_pb_OperationsResponse,
    responseDeserialize: deserialize_pb_OperationsResponse,
  },
  updateOperation: {
    path: '/pb.OperationService/UpdateOperation',
    requestStream: false,
    responseStream: false,
    requestType: proto_operation_pb.OperationRequest,
    responseType: proto_operation_pb.OperationResponse,
    requestSerialize: serialize_pb_OperationRequest,
    requestDeserialize: deserialize_pb_OperationRequest,
    responseSerialize: serialize_pb_OperationResponse,
    responseDeserialize: deserialize_pb_OperationResponse,
  },
  deleteOperation: {
    path: '/pb.OperationService/DeleteOperation',
    requestStream: false,
    responseStream: false,
    requestType: proto_operation_pb.OperationRequest,
    responseType: proto_operation_pb.OperationResponse,
    requestSerialize: serialize_pb_OperationRequest,
    requestDeserialize: deserialize_pb_OperationRequest,
    responseSerialize: serialize_pb_OperationResponse,
    responseDeserialize: deserialize_pb_OperationResponse,
  },
};

exports.OperationServiceClient = grpc.makeGenericClientConstructor(OperationServiceService);
