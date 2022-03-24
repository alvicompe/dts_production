// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_streaming_services_pb = require('../../proto/services/streaming.services_pb.js');
var proto_entities_streaming_pb = require('../../proto/entities/streaming_pb.js');

function serialize_pb_ExcavatorInfoRequest(arg) {
  if (!(arg instanceof proto_services_streaming_services_pb.ExcavatorInfoRequest)) {
    throw new Error('Expected argument of type pb.ExcavatorInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorInfoRequest(buffer_arg) {
  return proto_services_streaming_services_pb.ExcavatorInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorInfoResponse(arg) {
  if (!(arg instanceof proto_services_streaming_services_pb.ExcavatorInfoResponse)) {
    throw new Error('Expected argument of type pb.ExcavatorInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorInfoResponse(buffer_arg) {
  return proto_services_streaming_services_pb.ExcavatorInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckInfoRequest(arg) {
  if (!(arg instanceof proto_services_streaming_services_pb.TruckInfoRequest)) {
    throw new Error('Expected argument of type pb.TruckInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckInfoRequest(buffer_arg) {
  return proto_services_streaming_services_pb.TruckInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckInfoResponse(arg) {
  if (!(arg instanceof proto_services_streaming_services_pb.TruckInfoResponse)) {
    throw new Error('Expected argument of type pb.TruckInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckInfoResponse(buffer_arg) {
  return proto_services_streaming_services_pb.TruckInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service truck
var TruckInfoServiceService = exports.TruckInfoServiceService = {
  serverStream: {
    path: '/pb.TruckInfoService/ServerStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_services_streaming_services_pb.TruckInfoRequest,
    responseType: proto_services_streaming_services_pb.TruckInfoResponse,
    requestSerialize: serialize_pb_TruckInfoRequest,
    requestDeserialize: deserialize_pb_TruckInfoRequest,
    responseSerialize: serialize_pb_TruckInfoResponse,
    responseDeserialize: deserialize_pb_TruckInfoResponse,
  },
};

exports.TruckInfoServiceClient = grpc.makeGenericClientConstructor(TruckInfoServiceService);
// Service excavator
var ExcavatorInfoServiceService = exports.ExcavatorInfoServiceService = {
  serverStream: {
    path: '/pb.ExcavatorInfoService/ServerStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_services_streaming_services_pb.ExcavatorInfoRequest,
    responseType: proto_services_streaming_services_pb.ExcavatorInfoResponse,
    requestSerialize: serialize_pb_ExcavatorInfoRequest,
    requestDeserialize: deserialize_pb_ExcavatorInfoRequest,
    responseSerialize: serialize_pb_ExcavatorInfoResponse,
    responseDeserialize: deserialize_pb_ExcavatorInfoResponse,
  },
};

exports.ExcavatorInfoServiceClient = grpc.makeGenericClientConstructor(ExcavatorInfoServiceService);
