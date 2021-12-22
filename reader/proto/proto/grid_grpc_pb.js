// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_grid_pb = require('../proto/grid_pb.js');
var proto_point_pb = require('../proto/point_pb.js');
var proto_geofence_pb = require('../proto/geofence_pb.js');
var proto_road_pb = require('../proto/road_pb.js');
var proto_pit_pb = require('../proto/pit_pb.js');
var proto_pad_pb = require('../proto/pad_pb.js');
var proto_stock_pb = require('../proto/stock_pb.js');
var proto_dme_pb = require('../proto/dme_pb.js');
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

function serialize_pb_DeleteGridByNameRequest(arg) {
  if (!(arg instanceof proto_grid_pb.DeleteGridByNameRequest)) {
    throw new Error('Expected argument of type pb.DeleteGridByNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DeleteGridByNameRequest(buffer_arg) {
  return proto_grid_pb.DeleteGridByNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GridResponse(arg) {
  if (!(arg instanceof proto_grid_pb.GridResponse)) {
    throw new Error('Expected argument of type pb.GridResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GridResponse(buffer_arg) {
  return proto_grid_pb.GridResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_UpdateGridRequest(arg) {
  if (!(arg instanceof proto_grid_pb.UpdateGridRequest)) {
    throw new Error('Expected argument of type pb.UpdateGridRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UpdateGridRequest(buffer_arg) {
  return proto_grid_pb.UpdateGridRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_UpdateGridResponse(arg) {
  if (!(arg instanceof proto_grid_pb.UpdateGridResponse)) {
    throw new Error('Expected argument of type pb.UpdateGridResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UpdateGridResponse(buffer_arg) {
  return proto_grid_pb.UpdateGridResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GridServiceService = exports.GridServiceService = {
  createGrid: {
    path: '/pb.GridService/CreateGrid',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_grid_pb.GridResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_GridResponse,
    responseDeserialize: deserialize_pb_GridResponse,
  },
  updateGrid: {
    path: '/pb.GridService/UpdateGrid',
    requestStream: false,
    responseStream: false,
    requestType: proto_grid_pb.UpdateGridRequest,
    responseType: proto_grid_pb.UpdateGridResponse,
    requestSerialize: serialize_pb_UpdateGridRequest,
    requestDeserialize: deserialize_pb_UpdateGridRequest,
    responseSerialize: serialize_pb_UpdateGridResponse,
    responseDeserialize: deserialize_pb_UpdateGridResponse,
  },
  updateGridWeb: {
    path: '/pb.GridService/UpdateGridWeb',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_grid_pb.UpdateGridResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_UpdateGridResponse,
    responseDeserialize: deserialize_pb_UpdateGridResponse,
  },
  deleteGridByName: {
    path: '/pb.GridService/DeleteGridByName',
    requestStream: false,
    responseStream: false,
    requestType: proto_grid_pb.DeleteGridByNameRequest,
    responseType: proto_grid_pb.GridResponse,
    requestSerialize: serialize_pb_DeleteGridByNameRequest,
    requestDeserialize: deserialize_pb_DeleteGridByNameRequest,
    responseSerialize: serialize_pb_GridResponse,
    responseDeserialize: deserialize_pb_GridResponse,
  },
};

exports.GridServiceClient = grpc.makeGenericClientConstructor(GridServiceService);
