// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_excavator_pb = require('../proto/excavator_pb.js');
var proto_contractor_pb = require('../proto/contractor_pb.js');

function serialize_pb_ExcavatorRequest(arg) {
  if (!(arg instanceof proto_excavator_pb.ExcavatorRequest)) {
    throw new Error('Expected argument of type pb.ExcavatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorRequest(buffer_arg) {
  return proto_excavator_pb.ExcavatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorResponse(arg) {
  if (!(arg instanceof proto_excavator_pb.ExcavatorResponse)) {
    throw new Error('Expected argument of type pb.ExcavatorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorResponse(buffer_arg) {
  return proto_excavator_pb.ExcavatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorsResponse(arg) {
  if (!(arg instanceof proto_excavator_pb.ExcavatorsResponse)) {
    throw new Error('Expected argument of type pb.ExcavatorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorsResponse(buffer_arg) {
  return proto_excavator_pb.ExcavatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExcavatorServiceService = exports.ExcavatorServiceService = {
  createExcavator: {
    path: '/pb.ExcavatorService/CreateExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_excavator_pb.ExcavatorRequest,
    responseType: proto_excavator_pb.ExcavatorResponse,
    requestSerialize: serialize_pb_ExcavatorRequest,
    requestDeserialize: deserialize_pb_ExcavatorRequest,
    responseSerialize: serialize_pb_ExcavatorResponse,
    responseDeserialize: deserialize_pb_ExcavatorResponse,
  },
  retrieveExcavator: {
    path: '/pb.ExcavatorService/RetrieveExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_excavator_pb.ExcavatorRequest,
    responseType: proto_excavator_pb.ExcavatorResponse,
    requestSerialize: serialize_pb_ExcavatorRequest,
    requestDeserialize: deserialize_pb_ExcavatorRequest,
    responseSerialize: serialize_pb_ExcavatorResponse,
    responseDeserialize: deserialize_pb_ExcavatorResponse,
  },
  retrieveExcavators: {
    path: '/pb.ExcavatorService/RetrieveExcavators',
    requestStream: false,
    responseStream: false,
    requestType: proto_excavator_pb.ExcavatorRequest,
    responseType: proto_excavator_pb.ExcavatorsResponse,
    requestSerialize: serialize_pb_ExcavatorRequest,
    requestDeserialize: deserialize_pb_ExcavatorRequest,
    responseSerialize: serialize_pb_ExcavatorsResponse,
    responseDeserialize: deserialize_pb_ExcavatorsResponse,
  },
  updateExcavator: {
    path: '/pb.ExcavatorService/UpdateExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_excavator_pb.ExcavatorRequest,
    responseType: proto_excavator_pb.ExcavatorResponse,
    requestSerialize: serialize_pb_ExcavatorRequest,
    requestDeserialize: deserialize_pb_ExcavatorRequest,
    responseSerialize: serialize_pb_ExcavatorResponse,
    responseDeserialize: deserialize_pb_ExcavatorResponse,
  },
  deleteExcavator: {
    path: '/pb.ExcavatorService/DeleteExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_excavator_pb.ExcavatorRequest,
    responseType: proto_excavator_pb.ExcavatorResponse,
    requestSerialize: serialize_pb_ExcavatorRequest,
    requestDeserialize: deserialize_pb_ExcavatorRequest,
    responseSerialize: serialize_pb_ExcavatorResponse,
    responseDeserialize: deserialize_pb_ExcavatorResponse,
  },
};

exports.ExcavatorServiceClient = grpc.makeGenericClientConstructor(ExcavatorServiceService);
