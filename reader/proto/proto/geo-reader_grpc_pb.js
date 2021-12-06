// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_geo$reader_pb = require('../proto/geo-reader_pb.js');
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

function serialize_pb_CreateTreeGeoResponse(arg) {
  if (!(arg instanceof proto_geo$reader_pb.CreateTreeGeoResponse)) {
    throw new Error('Expected argument of type pb.CreateTreeGeoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateTreeGeoResponse(buffer_arg) {
  return proto_geo$reader_pb.CreateTreeGeoResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_geo$reader_pb.GeoTreeResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_GeoTreeResponse,
    responseDeserialize: deserialize_pb_GeoTreeResponse,
  },
  createTreeDirectory: {
    path: '/pb.GeoReaderService/CreateTreeDirectory',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_geo$reader_pb.GeoTreeResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_GeoTreeResponse,
    responseDeserialize: deserialize_pb_GeoTreeResponse,
  },
  updateTreeDirectory: {
    path: '/pb.GeoReaderService/UpdateTreeDirectory',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_geo$reader_pb.CreateTreeGeoResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_CreateTreeGeoResponse,
    responseDeserialize: deserialize_pb_CreateTreeGeoResponse,
  },
  createTreeGeo: {
    path: '/pb.GeoReaderService/CreateTreeGeo',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_geo$reader_pb.CreateTreeGeoResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_CreateTreeGeoResponse,
    responseDeserialize: deserialize_pb_CreateTreeGeoResponse,
  },
};

exports.GeoReaderServiceClient = grpc.makeGenericClientConstructor(GeoReaderServiceService);
