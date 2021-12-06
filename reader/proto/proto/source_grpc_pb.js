// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_source_pb = require('../proto/source_pb.js');

function serialize_pb_SourceRequest(arg) {
  if (!(arg instanceof proto_source_pb.SourceRequest)) {
    throw new Error('Expected argument of type pb.SourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SourceRequest(buffer_arg) {
  return proto_source_pb.SourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SourceResponse(arg) {
  if (!(arg instanceof proto_source_pb.SourceResponse)) {
    throw new Error('Expected argument of type pb.SourceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SourceResponse(buffer_arg) {
  return proto_source_pb.SourceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SourceServiceService = exports.SourceServiceService = {
  load: {
    path: '/pb.SourceService/Load',
    requestStream: false,
    responseStream: false,
    requestType: proto_source_pb.SourceRequest,
    responseType: proto_source_pb.SourceResponse,
    requestSerialize: serialize_pb_SourceRequest,
    requestDeserialize: deserialize_pb_SourceRequest,
    responseSerialize: serialize_pb_SourceResponse,
    responseDeserialize: deserialize_pb_SourceResponse,
  },
};

exports.SourceServiceClient = grpc.makeGenericClientConstructor(SourceServiceService);
