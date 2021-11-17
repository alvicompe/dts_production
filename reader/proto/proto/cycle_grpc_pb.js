// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_cycle_pb = require('../proto/cycle_pb.js');
var proto_truck_pb = require('../proto/truck_pb.js');
var proto_excavator_pb = require('../proto/excavator_pb.js');
var proto_material_pb = require('../proto/material_pb.js');
var proto_streaming_pb = require('../proto/streaming_pb.js');
var proto_load_pb = require('../proto/load_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pb_CycleRequest(arg) {
  if (!(arg instanceof proto_cycle_pb.CycleRequest)) {
    throw new Error('Expected argument of type pb.CycleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CycleRequest(buffer_arg) {
  return proto_cycle_pb.CycleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CycleResponse(arg) {
  if (!(arg instanceof proto_cycle_pb.CycleResponse)) {
    throw new Error('Expected argument of type pb.CycleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CycleResponse(buffer_arg) {
  return proto_cycle_pb.CycleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CyclesResponse(arg) {
  if (!(arg instanceof proto_cycle_pb.CyclesResponse)) {
    throw new Error('Expected argument of type pb.CyclesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CyclesResponse(buffer_arg) {
  return proto_cycle_pb.CyclesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CycleServiceService = exports.CycleServiceService = {
  createCycle: {
    path: '/pb.CycleService/CreateCycle',
    requestStream: false,
    responseStream: false,
    requestType: proto_cycle_pb.CycleRequest,
    responseType: proto_cycle_pb.CycleResponse,
    requestSerialize: serialize_pb_CycleRequest,
    requestDeserialize: deserialize_pb_CycleRequest,
    responseSerialize: serialize_pb_CycleResponse,
    responseDeserialize: deserialize_pb_CycleResponse,
  },
  retrieveCycle: {
    path: '/pb.CycleService/RetrieveCycle',
    requestStream: false,
    responseStream: false,
    requestType: proto_cycle_pb.CycleRequest,
    responseType: proto_cycle_pb.CycleResponse,
    requestSerialize: serialize_pb_CycleRequest,
    requestDeserialize: deserialize_pb_CycleRequest,
    responseSerialize: serialize_pb_CycleResponse,
    responseDeserialize: deserialize_pb_CycleResponse,
  },
  retrieveCycles: {
    path: '/pb.CycleService/RetrieveCycles',
    requestStream: false,
    responseStream: false,
    requestType: proto_cycle_pb.CycleRequest,
    responseType: proto_cycle_pb.CyclesResponse,
    requestSerialize: serialize_pb_CycleRequest,
    requestDeserialize: deserialize_pb_CycleRequest,
    responseSerialize: serialize_pb_CyclesResponse,
    responseDeserialize: deserialize_pb_CyclesResponse,
  },
  updateCycle: {
    path: '/pb.CycleService/UpdateCycle',
    requestStream: false,
    responseStream: false,
    requestType: proto_cycle_pb.CycleRequest,
    responseType: proto_cycle_pb.CycleResponse,
    requestSerialize: serialize_pb_CycleRequest,
    requestDeserialize: deserialize_pb_CycleRequest,
    responseSerialize: serialize_pb_CycleResponse,
    responseDeserialize: deserialize_pb_CycleResponse,
  },
  deleteCycle: {
    path: '/pb.CycleService/DeleteCycle',
    requestStream: false,
    responseStream: false,
    requestType: proto_cycle_pb.CycleRequest,
    responseType: proto_cycle_pb.CycleResponse,
    requestSerialize: serialize_pb_CycleRequest,
    requestDeserialize: deserialize_pb_CycleRequest,
    responseSerialize: serialize_pb_CycleResponse,
    responseDeserialize: deserialize_pb_CycleResponse,
  },
};

exports.CycleServiceClient = grpc.makeGenericClientConstructor(CycleServiceService);
