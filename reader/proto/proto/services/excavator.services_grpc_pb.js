// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_excavator_services_pb = require('../../proto/services/excavator.services_pb.js');
var proto_entities_excavator_pb = require('../../proto/entities/excavator_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorListRequest(arg) {
  if (!(arg instanceof proto_services_excavator_services_pb.ExcavatorListRequest)) {
    throw new Error('Expected argument of type pb.ExcavatorListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorListRequest(buffer_arg) {
  return proto_services_excavator_services_pb.ExcavatorListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorListResponse(arg) {
  if (!(arg instanceof proto_services_excavator_services_pb.ExcavatorListResponse)) {
    throw new Error('Expected argument of type pb.ExcavatorListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorListResponse(buffer_arg) {
  return proto_services_excavator_services_pb.ExcavatorListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorRequest(arg) {
  if (!(arg instanceof proto_services_excavator_services_pb.ExcavatorRequest)) {
    throw new Error('Expected argument of type pb.ExcavatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorRequest(buffer_arg) {
  return proto_services_excavator_services_pb.ExcavatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorResponse(arg) {
  if (!(arg instanceof proto_services_excavator_services_pb.ExcavatorResponse)) {
    throw new Error('Expected argument of type pb.ExcavatorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorResponse(buffer_arg) {
  return proto_services_excavator_services_pb.ExcavatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorsResponse(arg) {
  if (!(arg instanceof proto_services_excavator_services_pb.ExcavatorsResponse)) {
    throw new Error('Expected argument of type pb.ExcavatorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorsResponse(buffer_arg) {
  return proto_services_excavator_services_pb.ExcavatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExcavatorServiceService = exports.ExcavatorServiceService = {
  createExcavator: {
    path: '/pb.ExcavatorService/CreateExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_excavator_services_pb.ExcavatorRequest,
    responseType: proto_services_excavator_services_pb.ExcavatorResponse,
    requestSerialize: serialize_pb_ExcavatorRequest,
    requestDeserialize: deserialize_pb_ExcavatorRequest,
    responseSerialize: serialize_pb_ExcavatorResponse,
    responseDeserialize: deserialize_pb_ExcavatorResponse,
  },
  createExcavatorList: {
    path: '/pb.ExcavatorService/CreateExcavatorList',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_excavator_services_pb.ExcavatorListRequest,
    responseType: proto_services_excavator_services_pb.ExcavatorListResponse,
    requestSerialize: serialize_pb_ExcavatorListRequest,
    requestDeserialize: deserialize_pb_ExcavatorListRequest,
    responseSerialize: serialize_pb_ExcavatorListResponse,
    responseDeserialize: deserialize_pb_ExcavatorListResponse,
  },
  retrieveExcavator: {
    path: '/pb.ExcavatorService/RetrieveExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_excavator_services_pb.ExcavatorRequest,
    responseType: proto_services_excavator_services_pb.ExcavatorResponse,
    requestSerialize: serialize_pb_ExcavatorRequest,
    requestDeserialize: deserialize_pb_ExcavatorRequest,
    responseSerialize: serialize_pb_ExcavatorResponse,
    responseDeserialize: deserialize_pb_ExcavatorResponse,
  },
  retrieveExcavators: {
    path: '/pb.ExcavatorService/RetrieveExcavators',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_excavator_services_pb.ExcavatorRequest,
    responseType: proto_services_excavator_services_pb.ExcavatorsResponse,
    requestSerialize: serialize_pb_ExcavatorRequest,
    requestDeserialize: deserialize_pb_ExcavatorRequest,
    responseSerialize: serialize_pb_ExcavatorsResponse,
    responseDeserialize: deserialize_pb_ExcavatorsResponse,
  },
  retrieveExcavatorHyteraList: {
    path: '/pb.ExcavatorService/RetrieveExcavatorHyteraList',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_services_excavator_services_pb.ExcavatorListResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_ExcavatorListResponse,
    responseDeserialize: deserialize_pb_ExcavatorListResponse,
  },
  updateExcavator: {
    path: '/pb.ExcavatorService/UpdateExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_excavator_services_pb.ExcavatorRequest,
    responseType: proto_services_excavator_services_pb.ExcavatorResponse,
    requestSerialize: serialize_pb_ExcavatorRequest,
    requestDeserialize: deserialize_pb_ExcavatorRequest,
    responseSerialize: serialize_pb_ExcavatorResponse,
    responseDeserialize: deserialize_pb_ExcavatorResponse,
  },
  deleteExcavator: {
    path: '/pb.ExcavatorService/DeleteExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_excavator_services_pb.ExcavatorRequest,
    responseType: proto_services_excavator_services_pb.ExcavatorResponse,
    requestSerialize: serialize_pb_ExcavatorRequest,
    requestDeserialize: deserialize_pb_ExcavatorRequest,
    responseSerialize: serialize_pb_ExcavatorResponse,
    responseDeserialize: deserialize_pb_ExcavatorResponse,
  },
  deleteExcavatorList: {
    path: '/pb.ExcavatorService/DeleteExcavatorList',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_excavator_services_pb.ExcavatorListRequest,
    responseType: proto_services_excavator_services_pb.ExcavatorListResponse,
    requestSerialize: serialize_pb_ExcavatorListRequest,
    requestDeserialize: deserialize_pb_ExcavatorListRequest,
    responseSerialize: serialize_pb_ExcavatorListResponse,
    responseDeserialize: deserialize_pb_ExcavatorListResponse,
  },
};

exports.ExcavatorServiceClient = grpc.makeGenericClientConstructor(ExcavatorServiceService);
