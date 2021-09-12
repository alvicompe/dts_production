// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_grid_pb = require('../proto/grid_pb.js');
var proto_polygon_pb = require('../proto/polygon_pb.js');
var proto_cell_pb = require('../proto/cell_pb.js');
var proto_geofence_pb = require('../proto/geofence_pb.js');
var proto_road_pb = require('../proto/road_pb.js');
var proto_point_pb = require('../proto/point_pb.js');

function serialize_pb_GridRequest(arg) {
  if (!(arg instanceof proto_grid_pb.GridRequest)) {
    throw new Error('Expected argument of type pb.GridRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GridRequest(buffer_arg) {
  return proto_grid_pb.GridRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var GridServiceService = exports.GridServiceService = {
  createGrid: {
    path: '/pb.GridService/CreateGrid',
    requestStream: false,
    responseStream: false,
    requestType: proto_grid_pb.GridRequest,
    responseType: proto_grid_pb.GridResponse,
    requestSerialize: serialize_pb_GridRequest,
    requestDeserialize: deserialize_pb_GridRequest,
    responseSerialize: serialize_pb_GridResponse,
    responseDeserialize: deserialize_pb_GridResponse,
  },
};

exports.GridServiceClient = grpc.makeGenericClientConstructor(GridServiceService);
