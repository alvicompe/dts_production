// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_streaming_pb = require('../proto/streaming_pb.js');
var proto_geofence_pb = require('../proto/geofence_pb.js');
var proto_road_pb = require('../proto/road_pb.js');
var proto_point_pb = require('../proto/point_pb.js');
var proto_sensor_pb = require('../proto/sensor_pb.js');
var proto_pit_pb = require('../proto/pit_pb.js');
var proto_pad_pb = require('../proto/pad_pb.js');
var proto_stock_pb = require('../proto/stock_pb.js');
var proto_dme_pb = require('../proto/dme_pb.js');
var proto_excavator_pb = require('../proto/excavator_pb.js');
var proto_truck_pb = require('../proto/truck_pb.js');
var proto_load_pb = require('../proto/load_pb.js');

function serialize_pb_ExcavatorInfoRequest(arg) {
  if (!(arg instanceof proto_streaming_pb.ExcavatorInfoRequest)) {
    throw new Error('Expected argument of type pb.ExcavatorInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorInfoRequest(buffer_arg) {
  return proto_streaming_pb.ExcavatorInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorInfoResponse(arg) {
  if (!(arg instanceof proto_streaming_pb.ExcavatorInfoResponse)) {
    throw new Error('Expected argument of type pb.ExcavatorInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorInfoResponse(buffer_arg) {
  return proto_streaming_pb.ExcavatorInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckInfoRequest(arg) {
  if (!(arg instanceof proto_streaming_pb.TruckInfoRequest)) {
    throw new Error('Expected argument of type pb.TruckInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckInfoRequest(buffer_arg) {
  return proto_streaming_pb.TruckInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckInfoResponse(arg) {
  if (!(arg instanceof proto_streaming_pb.TruckInfoResponse)) {
    throw new Error('Expected argument of type pb.TruckInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckInfoResponse(buffer_arg) {
  return proto_streaming_pb.TruckInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TruckInfoServiceService = exports.TruckInfoServiceService = {
  serverStream: {
    path: '/pb.TruckInfoService/ServerStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_streaming_pb.TruckInfoRequest,
    responseType: proto_streaming_pb.TruckInfoResponse,
    requestSerialize: serialize_pb_TruckInfoRequest,
    requestDeserialize: deserialize_pb_TruckInfoRequest,
    responseSerialize: serialize_pb_TruckInfoResponse,
    responseDeserialize: deserialize_pb_TruckInfoResponse,
  },
};

exports.TruckInfoServiceClient = grpc.makeGenericClientConstructor(TruckInfoServiceService);
var ExcavatorInfoServiceService = exports.ExcavatorInfoServiceService = {
  serverStream: {
    path: '/pb.ExcavatorInfoService/ServerStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_streaming_pb.ExcavatorInfoRequest,
    responseType: proto_streaming_pb.ExcavatorInfoResponse,
    requestSerialize: serialize_pb_ExcavatorInfoRequest,
    requestDeserialize: deserialize_pb_ExcavatorInfoRequest,
    responseSerialize: serialize_pb_ExcavatorInfoResponse,
    responseDeserialize: deserialize_pb_ExcavatorInfoResponse,
  },
};

exports.ExcavatorInfoServiceClient = grpc.makeGenericClientConstructor(ExcavatorInfoServiceService);
