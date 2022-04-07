// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_pad_services_pb = require('../../proto/services/pad.services_pb.js');
var proto_entities_pad_pb = require('../../proto/entities/pad_pb.js');

function serialize_pb_PadRequest(arg) {
  if (!(arg instanceof proto_services_pad_services_pb.PadRequest)) {
    throw new Error('Expected argument of type pb.PadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PadRequest(buffer_arg) {
  return proto_services_pad_services_pb.PadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PadResponse(arg) {
  if (!(arg instanceof proto_services_pad_services_pb.PadResponse)) {
    throw new Error('Expected argument of type pb.PadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PadResponse(buffer_arg) {
  return proto_services_pad_services_pb.PadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PadsResponse(arg) {
  if (!(arg instanceof proto_services_pad_services_pb.PadsResponse)) {
    throw new Error('Expected argument of type pb.PadsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PadsResponse(buffer_arg) {
  return proto_services_pad_services_pb.PadsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PadServiceService = exports.PadServiceService = {
  createPad: {
    path: '/pb.PadService/CreatePad',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_pad_services_pb.PadRequest,
    responseType: proto_services_pad_services_pb.PadResponse,
    requestSerialize: serialize_pb_PadRequest,
    requestDeserialize: deserialize_pb_PadRequest,
    responseSerialize: serialize_pb_PadResponse,
    responseDeserialize: deserialize_pb_PadResponse,
  },
  retrievePad: {
    path: '/pb.PadService/RetrievePad',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_pad_services_pb.PadRequest,
    responseType: proto_services_pad_services_pb.PadResponse,
    requestSerialize: serialize_pb_PadRequest,
    requestDeserialize: deserialize_pb_PadRequest,
    responseSerialize: serialize_pb_PadResponse,
    responseDeserialize: deserialize_pb_PadResponse,
  },
  retrievePads: {
    path: '/pb.PadService/RetrievePads',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_pad_services_pb.PadRequest,
    responseType: proto_services_pad_services_pb.PadsResponse,
    requestSerialize: serialize_pb_PadRequest,
    requestDeserialize: deserialize_pb_PadRequest,
    responseSerialize: serialize_pb_PadsResponse,
    responseDeserialize: deserialize_pb_PadsResponse,
  },
  updatePad: {
    path: '/pb.PadService/UpdatePad',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_pad_services_pb.PadRequest,
    responseType: proto_services_pad_services_pb.PadResponse,
    requestSerialize: serialize_pb_PadRequest,
    requestDeserialize: deserialize_pb_PadRequest,
    responseSerialize: serialize_pb_PadResponse,
    responseDeserialize: deserialize_pb_PadResponse,
  },
  deletePad: {
    path: '/pb.PadService/DeletePad',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_pad_services_pb.PadRequest,
    responseType: proto_services_pad_services_pb.PadResponse,
    requestSerialize: serialize_pb_PadRequest,
    requestDeserialize: deserialize_pb_PadRequest,
    responseSerialize: serialize_pb_PadResponse,
    responseDeserialize: deserialize_pb_PadResponse,
  },
};

exports.PadServiceClient = grpc.makeGenericClientConstructor(PadServiceService);
