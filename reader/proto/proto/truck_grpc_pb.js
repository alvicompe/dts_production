// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_truck_pb = require('../proto/truck_pb.js');
var proto_contractor_pb = require('../proto/contractor_pb.js');

function serialize_pb_TruckRequest(arg) {
  if (!(arg instanceof proto_truck_pb.TruckRequest)) {
    throw new Error('Expected argument of type pb.TruckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckRequest(buffer_arg) {
  return proto_truck_pb.TruckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckResponse(arg) {
  if (!(arg instanceof proto_truck_pb.TruckResponse)) {
    throw new Error('Expected argument of type pb.TruckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckResponse(buffer_arg) {
  return proto_truck_pb.TruckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TrucksResponse(arg) {
  if (!(arg instanceof proto_truck_pb.TrucksResponse)) {
    throw new Error('Expected argument of type pb.TrucksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TrucksResponse(buffer_arg) {
  return proto_truck_pb.TrucksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TruckServiceService = exports.TruckServiceService = {
  createTruck: {
    path: '/pb.TruckService/CreateTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_truck_pb.TruckRequest,
    responseType: proto_truck_pb.TruckResponse,
    requestSerialize: serialize_pb_TruckRequest,
    requestDeserialize: deserialize_pb_TruckRequest,
    responseSerialize: serialize_pb_TruckResponse,
    responseDeserialize: deserialize_pb_TruckResponse,
  },
  retrieveTruck: {
    path: '/pb.TruckService/RetrieveTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_truck_pb.TruckRequest,
    responseType: proto_truck_pb.TruckResponse,
    requestSerialize: serialize_pb_TruckRequest,
    requestDeserialize: deserialize_pb_TruckRequest,
    responseSerialize: serialize_pb_TruckResponse,
    responseDeserialize: deserialize_pb_TruckResponse,
  },
  retrieveTrucks: {
    path: '/pb.TruckService/RetrieveTrucks',
    requestStream: false,
    responseStream: false,
    requestType: proto_truck_pb.TruckRequest,
    responseType: proto_truck_pb.TrucksResponse,
    requestSerialize: serialize_pb_TruckRequest,
    requestDeserialize: deserialize_pb_TruckRequest,
    responseSerialize: serialize_pb_TrucksResponse,
    responseDeserialize: deserialize_pb_TrucksResponse,
  },
  updateTruck: {
    path: '/pb.TruckService/UpdateTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_truck_pb.TruckRequest,
    responseType: proto_truck_pb.TruckResponse,
    requestSerialize: serialize_pb_TruckRequest,
    requestDeserialize: deserialize_pb_TruckRequest,
    responseSerialize: serialize_pb_TruckResponse,
    responseDeserialize: deserialize_pb_TruckResponse,
  },
  deleteTruck: {
    path: '/pb.TruckService/DeleteTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_truck_pb.TruckRequest,
    responseType: proto_truck_pb.TruckResponse,
    requestSerialize: serialize_pb_TruckRequest,
    requestDeserialize: deserialize_pb_TruckRequest,
    responseSerialize: serialize_pb_TruckResponse,
    responseDeserialize: deserialize_pb_TruckResponse,
  },
};

exports.TruckServiceClient = grpc.makeGenericClientConstructor(TruckServiceService);
