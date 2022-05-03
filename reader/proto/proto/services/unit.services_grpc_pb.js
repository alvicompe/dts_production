// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_unit_services_pb = require('../../proto/services/unit.services_pb.js');
var proto_entities_unit_pb = require('../../proto/entities/unit_pb.js');
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

function serialize_pb_UnitMantoListResponse(arg) {
  if (!(arg instanceof proto_services_unit_services_pb.UnitMantoListResponse)) {
    throw new Error('Expected argument of type pb.UnitMantoListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UnitMantoListResponse(buffer_arg) {
  return proto_services_unit_services_pb.UnitMantoListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UnitInMantoServiceService = exports.UnitInMantoServiceService = {
  retrieveUnitMantoList: {
    path: '/pb.UnitInMantoService/RetrieveUnitMantoList',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_services_unit_services_pb.UnitMantoListResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_UnitMantoListResponse,
    responseDeserialize: deserialize_pb_UnitMantoListResponse,
  },
};

exports.UnitInMantoServiceClient = grpc.makeGenericClientConstructor(UnitInMantoServiceService);
