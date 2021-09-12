// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_sensor_pb = require('../proto/sensor_pb.js');

function serialize_pb_ServerSensorRequest(arg) {
  if (!(arg instanceof proto_sensor_pb.ServerSensorRequest)) {
    throw new Error('Expected argument of type pb.ServerSensorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ServerSensorRequest(buffer_arg) {
  return proto_sensor_pb.ServerSensorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ServerSensorResponse(arg) {
  if (!(arg instanceof proto_sensor_pb.ServerSensorResponse)) {
    throw new Error('Expected argument of type pb.ServerSensorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ServerSensorResponse(buffer_arg) {
  return proto_sensor_pb.ServerSensorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SensorServiceService = exports.SensorServiceService = {
  serverStream: {
    path: '/pb.SensorService/ServerStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_sensor_pb.ServerSensorRequest,
    responseType: proto_sensor_pb.ServerSensorResponse,
    requestSerialize: serialize_pb_ServerSensorRequest,
    requestDeserialize: deserialize_pb_ServerSensorRequest,
    responseSerialize: serialize_pb_ServerSensorResponse,
    responseDeserialize: deserialize_pb_ServerSensorResponse,
  },
};

exports.SensorServiceClient = grpc.makeGenericClientConstructor(SensorServiceService);
