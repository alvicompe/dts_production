// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_polygon_pb = require('../proto/polygon_pb.js');
var proto_point_pb = require('../proto/point_pb.js');
var proto_material_pb = require('../proto/material_pb.js');

function serialize_pb_PolygonRequest(arg) {
  if (!(arg instanceof proto_polygon_pb.PolygonRequest)) {
    throw new Error('Expected argument of type pb.PolygonRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PolygonRequest(buffer_arg) {
  return proto_polygon_pb.PolygonRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PolygonResponse(arg) {
  if (!(arg instanceof proto_polygon_pb.PolygonResponse)) {
    throw new Error('Expected argument of type pb.PolygonResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PolygonResponse(buffer_arg) {
  return proto_polygon_pb.PolygonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PolygonsResponse(arg) {
  if (!(arg instanceof proto_polygon_pb.PolygonsResponse)) {
    throw new Error('Expected argument of type pb.PolygonsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PolygonsResponse(buffer_arg) {
  return proto_polygon_pb.PolygonsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PolygonServiceService = exports.PolygonServiceService = {
  createPolygon: {
    path: '/pb.PolygonService/CreatePolygon',
    requestStream: false,
    responseStream: false,
    requestType: proto_polygon_pb.PolygonRequest,
    responseType: proto_polygon_pb.PolygonResponse,
    requestSerialize: serialize_pb_PolygonRequest,
    requestDeserialize: deserialize_pb_PolygonRequest,
    responseSerialize: serialize_pb_PolygonResponse,
    responseDeserialize: deserialize_pb_PolygonResponse,
  },
  retrievePolygon: {
    path: '/pb.PolygonService/RetrievePolygon',
    requestStream: false,
    responseStream: false,
    requestType: proto_polygon_pb.PolygonRequest,
    responseType: proto_polygon_pb.PolygonResponse,
    requestSerialize: serialize_pb_PolygonRequest,
    requestDeserialize: deserialize_pb_PolygonRequest,
    responseSerialize: serialize_pb_PolygonResponse,
    responseDeserialize: deserialize_pb_PolygonResponse,
  },
  retrievePolygons: {
    path: '/pb.PolygonService/RetrievePolygons',
    requestStream: false,
    responseStream: false,
    requestType: proto_polygon_pb.PolygonRequest,
    responseType: proto_polygon_pb.PolygonsResponse,
    requestSerialize: serialize_pb_PolygonRequest,
    requestDeserialize: deserialize_pb_PolygonRequest,
    responseSerialize: serialize_pb_PolygonsResponse,
    responseDeserialize: deserialize_pb_PolygonsResponse,
  },
  updatePolygon: {
    path: '/pb.PolygonService/UpdatePolygon',
    requestStream: false,
    responseStream: false,
    requestType: proto_polygon_pb.PolygonRequest,
    responseType: proto_polygon_pb.PolygonResponse,
    requestSerialize: serialize_pb_PolygonRequest,
    requestDeserialize: deserialize_pb_PolygonRequest,
    responseSerialize: serialize_pb_PolygonResponse,
    responseDeserialize: deserialize_pb_PolygonResponse,
  },
  deletePolygon: {
    path: '/pb.PolygonService/DeletePolygon',
    requestStream: false,
    responseStream: false,
    requestType: proto_polygon_pb.PolygonRequest,
    responseType: proto_polygon_pb.PolygonResponse,
    requestSerialize: serialize_pb_PolygonRequest,
    requestDeserialize: deserialize_pb_PolygonRequest,
    responseSerialize: serialize_pb_PolygonResponse,
    responseDeserialize: deserialize_pb_PolygonResponse,
  },
};

exports.PolygonServiceClient = grpc.makeGenericClientConstructor(PolygonServiceService);
