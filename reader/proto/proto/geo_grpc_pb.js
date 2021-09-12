// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_geo_pb = require('../proto/geo_pb.js');
var proto_material_pb = require('../proto/material_pb.js');
var proto_geofence_pb = require('../proto/geofence_pb.js');
var proto_road_pb = require('../proto/road_pb.js');
var proto_pit_pb = require('../proto/pit_pb.js');
var proto_pad_pb = require('../proto/pad_pb.js');
var proto_dme_pb = require('../proto/dme_pb.js');
var proto_stock_pb = require('../proto/stock_pb.js');

function serialize_pb_GeoChunkRequest(arg) {
  if (!(arg instanceof proto_geo_pb.GeoChunkRequest)) {
    throw new Error('Expected argument of type pb.GeoChunkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GeoChunkRequest(buffer_arg) {
  return proto_geo_pb.GeoChunkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GeoChunkResponse(arg) {
  if (!(arg instanceof proto_geo_pb.GeoChunkResponse)) {
    throw new Error('Expected argument of type pb.GeoChunkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GeoChunkResponse(buffer_arg) {
  return proto_geo_pb.GeoChunkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GeoRequest(arg) {
  if (!(arg instanceof proto_geo_pb.GeoRequest)) {
    throw new Error('Expected argument of type pb.GeoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GeoRequest(buffer_arg) {
  return proto_geo_pb.GeoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GeoResponse(arg) {
  if (!(arg instanceof proto_geo_pb.GeoResponse)) {
    throw new Error('Expected argument of type pb.GeoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GeoResponse(buffer_arg) {
  return proto_geo_pb.GeoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GeosResponse(arg) {
  if (!(arg instanceof proto_geo_pb.GeosResponse)) {
    throw new Error('Expected argument of type pb.GeosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GeosResponse(buffer_arg) {
  return proto_geo_pb.GeosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GeoServiceService = exports.GeoServiceService = {
  uploadGeo: {
    path: '/pb.GeoService/UploadGeo',
    requestStream: false,
    responseStream: false,
    requestType: proto_geo_pb.GeoChunkRequest,
    responseType: proto_geo_pb.GeoChunkResponse,
    requestSerialize: serialize_pb_GeoChunkRequest,
    requestDeserialize: deserialize_pb_GeoChunkRequest,
    responseSerialize: serialize_pb_GeoChunkResponse,
    responseDeserialize: deserialize_pb_GeoChunkResponse,
  },
  createGeo: {
    path: '/pb.GeoService/CreateGeo',
    requestStream: false,
    responseStream: false,
    requestType: proto_geo_pb.GeoRequest,
    responseType: proto_geo_pb.GeoResponse,
    requestSerialize: serialize_pb_GeoRequest,
    requestDeserialize: deserialize_pb_GeoRequest,
    responseSerialize: serialize_pb_GeoResponse,
    responseDeserialize: deserialize_pb_GeoResponse,
  },
  retrieveGeo: {
    path: '/pb.GeoService/RetrieveGeo',
    requestStream: false,
    responseStream: false,
    requestType: proto_geo_pb.GeoRequest,
    responseType: proto_geo_pb.GeoResponse,
    requestSerialize: serialize_pb_GeoRequest,
    requestDeserialize: deserialize_pb_GeoRequest,
    responseSerialize: serialize_pb_GeoResponse,
    responseDeserialize: deserialize_pb_GeoResponse,
  },
  retrieveGeos: {
    path: '/pb.GeoService/RetrieveGeos',
    requestStream: false,
    responseStream: false,
    requestType: proto_geo_pb.GeoRequest,
    responseType: proto_geo_pb.GeosResponse,
    requestSerialize: serialize_pb_GeoRequest,
    requestDeserialize: deserialize_pb_GeoRequest,
    responseSerialize: serialize_pb_GeosResponse,
    responseDeserialize: deserialize_pb_GeosResponse,
  },
  updateGeo: {
    path: '/pb.GeoService/UpdateGeo',
    requestStream: false,
    responseStream: false,
    requestType: proto_geo_pb.GeoRequest,
    responseType: proto_geo_pb.GeoResponse,
    requestSerialize: serialize_pb_GeoRequest,
    requestDeserialize: deserialize_pb_GeoRequest,
    responseSerialize: serialize_pb_GeoResponse,
    responseDeserialize: deserialize_pb_GeoResponse,
  },
  deleteGeo: {
    path: '/pb.GeoService/DeleteGeo',
    requestStream: false,
    responseStream: false,
    requestType: proto_geo_pb.GeoRequest,
    responseType: proto_geo_pb.GeoResponse,
    requestSerialize: serialize_pb_GeoRequest,
    requestDeserialize: deserialize_pb_GeoRequest,
    responseSerialize: serialize_pb_GeoResponse,
    responseDeserialize: deserialize_pb_GeoResponse,
  },
};

exports.GeoServiceClient = grpc.makeGenericClientConstructor(GeoServiceService);
