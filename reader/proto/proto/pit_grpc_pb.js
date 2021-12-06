// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_pit_pb = require('../proto/pit_pb.js');
var proto_project_pb = require('../proto/project_pb.js');

function serialize_pb_PitRequest(arg) {
  if (!(arg instanceof proto_pit_pb.PitRequest)) {
    throw new Error('Expected argument of type pb.PitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PitRequest(buffer_arg) {
  return proto_pit_pb.PitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PitResponse(arg) {
  if (!(arg instanceof proto_pit_pb.PitResponse)) {
    throw new Error('Expected argument of type pb.PitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PitResponse(buffer_arg) {
  return proto_pit_pb.PitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PitsResponse(arg) {
  if (!(arg instanceof proto_pit_pb.PitsResponse)) {
    throw new Error('Expected argument of type pb.PitsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PitsResponse(buffer_arg) {
  return proto_pit_pb.PitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PitServiceService = exports.PitServiceService = {
  createPit: {
    path: '/pb.PitService/CreatePit',
    requestStream: false,
    responseStream: false,
    requestType: proto_pit_pb.PitRequest,
    responseType: proto_pit_pb.PitResponse,
    requestSerialize: serialize_pb_PitRequest,
    requestDeserialize: deserialize_pb_PitRequest,
    responseSerialize: serialize_pb_PitResponse,
    responseDeserialize: deserialize_pb_PitResponse,
  },
  retrievePit: {
    path: '/pb.PitService/RetrievePit',
    requestStream: false,
    responseStream: false,
    requestType: proto_pit_pb.PitRequest,
    responseType: proto_pit_pb.PitResponse,
    requestSerialize: serialize_pb_PitRequest,
    requestDeserialize: deserialize_pb_PitRequest,
    responseSerialize: serialize_pb_PitResponse,
    responseDeserialize: deserialize_pb_PitResponse,
  },
  retrievePits: {
    path: '/pb.PitService/RetrievePits',
    requestStream: false,
    responseStream: false,
    requestType: proto_pit_pb.PitRequest,
    responseType: proto_pit_pb.PitsResponse,
    requestSerialize: serialize_pb_PitRequest,
    requestDeserialize: deserialize_pb_PitRequest,
    responseSerialize: serialize_pb_PitsResponse,
    responseDeserialize: deserialize_pb_PitsResponse,
  },
  updatePit: {
    path: '/pb.PitService/UpdatePit',
    requestStream: false,
    responseStream: false,
    requestType: proto_pit_pb.PitRequest,
    responseType: proto_pit_pb.PitResponse,
    requestSerialize: serialize_pb_PitRequest,
    requestDeserialize: deserialize_pb_PitRequest,
    responseSerialize: serialize_pb_PitResponse,
    responseDeserialize: deserialize_pb_PitResponse,
  },
  deletePit: {
    path: '/pb.PitService/DeletePit',
    requestStream: false,
    responseStream: false,
    requestType: proto_pit_pb.PitRequest,
    responseType: proto_pit_pb.PitResponse,
    requestSerialize: serialize_pb_PitRequest,
    requestDeserialize: deserialize_pb_PitRequest,
    responseSerialize: serialize_pb_PitResponse,
    responseDeserialize: deserialize_pb_PitResponse,
  },
};

exports.PitServiceClient = grpc.makeGenericClientConstructor(PitServiceService);
