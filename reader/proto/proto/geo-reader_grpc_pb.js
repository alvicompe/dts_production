// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_geo$reader_pb = require('../proto/geo-reader_pb.js');
var proto_geo_pb = require('../proto/geo_pb.js');

function serialize_pb_GeoTreeRequest(arg) {
  if (!(arg instanceof proto_geo$reader_pb.GeoTreeRequest)) {
    throw new Error('Expected argument of type pb.GeoTreeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GeoTreeRequest(buffer_arg) {
  return proto_geo$reader_pb.GeoTreeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GeoTreeResponse(arg) {
  if (!(arg instanceof proto_geo$reader_pb.GeoTreeResponse)) {
    throw new Error('Expected argument of type pb.GeoTreeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GeoTreeResponse(buffer_arg) {
  return proto_geo$reader_pb.GeoTreeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GeoReaderServiceService = exports.GeoReaderServiceService = {
  retrieveTreeGeo: {
    path: '/pb.GeoReaderService/RetrieveTreeGeo',
    requestStream: false,
    responseStream: false,
    requestType: proto_geo$reader_pb.GeoTreeRequest,
    responseType: proto_geo$reader_pb.GeoTreeResponse,
    requestSerialize: serialize_pb_GeoTreeRequest,
    requestDeserialize: deserialize_pb_GeoTreeRequest,
    responseSerialize: serialize_pb_GeoTreeResponse,
    responseDeserialize: deserialize_pb_GeoTreeResponse,
  },
};

exports.GeoReaderServiceClient = grpc.makeGenericClientConstructor(GeoReaderServiceService);
