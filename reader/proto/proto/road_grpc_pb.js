// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_road_pb = require('../proto/road_pb.js');
var proto_point_pb = require('../proto/point_pb.js');

function serialize_pb_RoadRequest(arg) {
  if (!(arg instanceof proto_road_pb.RoadRequest)) {
    throw new Error('Expected argument of type pb.RoadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RoadRequest(buffer_arg) {
  return proto_road_pb.RoadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_RoadResponse(arg) {
  if (!(arg instanceof proto_road_pb.RoadResponse)) {
    throw new Error('Expected argument of type pb.RoadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RoadResponse(buffer_arg) {
  return proto_road_pb.RoadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_RoadsResponse(arg) {
  if (!(arg instanceof proto_road_pb.RoadsResponse)) {
    throw new Error('Expected argument of type pb.RoadsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_RoadsResponse(buffer_arg) {
  return proto_road_pb.RoadsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RoadServiceService = exports.RoadServiceService = {
  createRoad: {
    path: '/pb.RoadService/CreateRoad',
    requestStream: false,
    responseStream: false,
    requestType: proto_road_pb.RoadRequest,
    responseType: proto_road_pb.RoadResponse,
    requestSerialize: serialize_pb_RoadRequest,
    requestDeserialize: deserialize_pb_RoadRequest,
    responseSerialize: serialize_pb_RoadResponse,
    responseDeserialize: deserialize_pb_RoadResponse,
  },
  retrieveRoad: {
    path: '/pb.RoadService/RetrieveRoad',
    requestStream: false,
    responseStream: false,
    requestType: proto_road_pb.RoadRequest,
    responseType: proto_road_pb.RoadResponse,
    requestSerialize: serialize_pb_RoadRequest,
    requestDeserialize: deserialize_pb_RoadRequest,
    responseSerialize: serialize_pb_RoadResponse,
    responseDeserialize: deserialize_pb_RoadResponse,
  },
  retrieveRoads: {
    path: '/pb.RoadService/RetrieveRoads',
    requestStream: false,
    responseStream: false,
    requestType: proto_road_pb.RoadRequest,
    responseType: proto_road_pb.RoadsResponse,
    requestSerialize: serialize_pb_RoadRequest,
    requestDeserialize: deserialize_pb_RoadRequest,
    responseSerialize: serialize_pb_RoadsResponse,
    responseDeserialize: deserialize_pb_RoadsResponse,
  },
  updateRoad: {
    path: '/pb.RoadService/UpdateRoad',
    requestStream: false,
    responseStream: false,
    requestType: proto_road_pb.RoadRequest,
    responseType: proto_road_pb.RoadResponse,
    requestSerialize: serialize_pb_RoadRequest,
    requestDeserialize: deserialize_pb_RoadRequest,
    responseSerialize: serialize_pb_RoadResponse,
    responseDeserialize: deserialize_pb_RoadResponse,
  },
  deleteRoad: {
    path: '/pb.RoadService/DeleteRoad',
    requestStream: false,
    responseStream: false,
    requestType: proto_road_pb.RoadRequest,
    responseType: proto_road_pb.RoadResponse,
    requestSerialize: serialize_pb_RoadRequest,
    requestDeserialize: deserialize_pb_RoadRequest,
    responseSerialize: serialize_pb_RoadResponse,
    responseDeserialize: deserialize_pb_RoadResponse,
  },
};

exports.RoadServiceClient = grpc.makeGenericClientConstructor(RoadServiceService);