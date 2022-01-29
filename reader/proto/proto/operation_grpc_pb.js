// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_operation_pb = require('../proto/operation_pb.js');
var proto_truck_pb = require('../proto/truck_pb.js');
var proto_excavator_pb = require('../proto/excavator_pb.js');
var proto_road_pb = require('../proto/road_pb.js');
var proto_cycle_pb = require('../proto/cycle_pb.js');
var proto_load_pb = require('../proto/load_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pb_MigrateOperationRequest(arg) {
  if (!(arg instanceof proto_operation_pb.MigrateOperationRequest)) {
    throw new Error('Expected argument of type pb.MigrateOperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_MigrateOperationRequest(buffer_arg) {
  return proto_operation_pb.MigrateOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_MigrateOperationResponse(arg) {
  if (!(arg instanceof proto_operation_pb.MigrateOperationResponse)) {
    throw new Error('Expected argument of type pb.MigrateOperationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_MigrateOperationResponse(buffer_arg) {
  return proto_operation_pb.MigrateOperationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_OperationFinalizeResponse(arg) {
  if (!(arg instanceof proto_operation_pb.OperationFinalizeResponse)) {
    throw new Error('Expected argument of type pb.OperationFinalizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_OperationFinalizeResponse(buffer_arg) {
  return proto_operation_pb.OperationFinalizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_OperationReassigmentRequest(arg) {
  if (!(arg instanceof proto_operation_pb.OperationReassigmentRequest)) {
    throw new Error('Expected argument of type pb.OperationReassigmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_OperationReassigmentRequest(buffer_arg) {
  return proto_operation_pb.OperationReassigmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_OperationReassigmentResponse(arg) {
  if (!(arg instanceof proto_operation_pb.OperationReassigmentResponse)) {
    throw new Error('Expected argument of type pb.OperationReassigmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_OperationReassigmentResponse(buffer_arg) {
  return proto_operation_pb.OperationReassigmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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
  removeTrucksOperation: {
    path: '/pb.OperationService/RemoveTrucksOperation',
    requestStream: false,
    responseStream: false,
    requestType: proto_operation_pb.OperationRequest,
    responseType: proto_operation_pb.OperationResponse,
    requestSerialize: serialize_pb_OperationRequest,
    requestDeserialize: deserialize_pb_OperationRequest,
    responseSerialize: serialize_pb_OperationResponse,
    responseDeserialize: deserialize_pb_OperationResponse,
  },
  reassigmentTrucksOperation: {
    path: '/pb.OperationService/ReassigmentTrucksOperation',
    requestStream: false,
    responseStream: false,
    requestType: proto_operation_pb.OperationReassigmentRequest,
    responseType: proto_operation_pb.OperationReassigmentResponse,
    requestSerialize: serialize_pb_OperationReassigmentRequest,
    requestDeserialize: deserialize_pb_OperationReassigmentRequest,
    responseSerialize: serialize_pb_OperationReassigmentResponse,
    responseDeserialize: deserialize_pb_OperationReassigmentResponse,
  },
  finalizeOperation: {
    path: '/pb.OperationService/FinalizeOperation',
    requestStream: false,
    responseStream: false,
    requestType: proto_operation_pb.OperationRequest,
    responseType: proto_operation_pb.OperationFinalizeResponse,
    requestSerialize: serialize_pb_OperationRequest,
    requestDeserialize: deserialize_pb_OperationRequest,
    responseSerialize: serialize_pb_OperationFinalizeResponse,
    responseDeserialize: deserialize_pb_OperationFinalizeResponse,
  },
  migrateOperation: {
    path: '/pb.OperationService/MigrateOperation',
    requestStream: false,
    responseStream: false,
    requestType: proto_operation_pb.MigrateOperationRequest,
    responseType: proto_operation_pb.MigrateOperationResponse,
    requestSerialize: serialize_pb_MigrateOperationRequest,
    requestDeserialize: deserialize_pb_MigrateOperationRequest,
    responseSerialize: serialize_pb_MigrateOperationResponse,
    responseDeserialize: deserialize_pb_MigrateOperationResponse,
  },
};

exports.OperationServiceClient = grpc.makeGenericClientConstructor(OperationServiceService);
