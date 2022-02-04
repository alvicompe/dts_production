// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_cycle_services_pb = require('../../proto/services/cycle.services_pb.js');
var proto_entities_cycle_pb = require('../../proto/entities/cycle_pb.js');

function serialize_pb_CycleRequest(arg) {
  if (!(arg instanceof proto_services_cycle_services_pb.CycleRequest)) {
    throw new Error('Expected argument of type pb.CycleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CycleRequest(buffer_arg) {
  return proto_services_cycle_services_pb.CycleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CycleResponse(arg) {
  if (!(arg instanceof proto_services_cycle_services_pb.CycleResponse)) {
    throw new Error('Expected argument of type pb.CycleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CycleResponse(buffer_arg) {
  return proto_services_cycle_services_pb.CycleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CyclesResponse(arg) {
  if (!(arg instanceof proto_services_cycle_services_pb.CyclesResponse)) {
    throw new Error('Expected argument of type pb.CyclesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CyclesResponse(buffer_arg) {
  return proto_services_cycle_services_pb.CyclesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CycleServiceService = exports.CycleServiceService = {
  createCycle: {
    path: '/pb.CycleService/CreateCycle',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_cycle_services_pb.CycleRequest,
    responseType: proto_services_cycle_services_pb.CycleResponse,
    requestSerialize: serialize_pb_CycleRequest,
    requestDeserialize: deserialize_pb_CycleRequest,
    responseSerialize: serialize_pb_CycleResponse,
    responseDeserialize: deserialize_pb_CycleResponse,
  },
  retrieveCycle: {
    path: '/pb.CycleService/RetrieveCycle',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_cycle_services_pb.CycleRequest,
    responseType: proto_services_cycle_services_pb.CycleResponse,
    requestSerialize: serialize_pb_CycleRequest,
    requestDeserialize: deserialize_pb_CycleRequest,
    responseSerialize: serialize_pb_CycleResponse,
    responseDeserialize: deserialize_pb_CycleResponse,
  },
  retrieveCycles: {
    path: '/pb.CycleService/RetrieveCycles',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_cycle_services_pb.CycleRequest,
    responseType: proto_services_cycle_services_pb.CyclesResponse,
    requestSerialize: serialize_pb_CycleRequest,
    requestDeserialize: deserialize_pb_CycleRequest,
    responseSerialize: serialize_pb_CyclesResponse,
    responseDeserialize: deserialize_pb_CyclesResponse,
  },
  updateCycle: {
    path: '/pb.CycleService/UpdateCycle',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_cycle_services_pb.CycleRequest,
    responseType: proto_services_cycle_services_pb.CycleResponse,
    requestSerialize: serialize_pb_CycleRequest,
    requestDeserialize: deserialize_pb_CycleRequest,
    responseSerialize: serialize_pb_CycleResponse,
    responseDeserialize: deserialize_pb_CycleResponse,
  },
  deleteCycle: {
    path: '/pb.CycleService/DeleteCycle',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_cycle_services_pb.CycleRequest,
    responseType: proto_services_cycle_services_pb.CycleResponse,
    requestSerialize: serialize_pb_CycleRequest,
    requestDeserialize: deserialize_pb_CycleRequest,
    responseSerialize: serialize_pb_CycleResponse,
    responseDeserialize: deserialize_pb_CycleResponse,
  },
};

exports.CycleServiceClient = grpc.makeGenericClientConstructor(CycleServiceService);
