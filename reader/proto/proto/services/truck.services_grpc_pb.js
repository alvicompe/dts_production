// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_truck_services_pb = require('../../proto/services/truck.services_pb.js');
var proto_entities_truck_pb = require('../../proto/entities/truck_pb.js');
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

function serialize_pb_TruckListRequest(arg) {
  if (!(arg instanceof proto_services_truck_services_pb.TruckListRequest)) {
    throw new Error('Expected argument of type pb.TruckListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckListRequest(buffer_arg) {
  return proto_services_truck_services_pb.TruckListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckListResponse(arg) {
  if (!(arg instanceof proto_services_truck_services_pb.TruckListResponse)) {
    throw new Error('Expected argument of type pb.TruckListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckListResponse(buffer_arg) {
  return proto_services_truck_services_pb.TruckListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckRequest(arg) {
  if (!(arg instanceof proto_services_truck_services_pb.TruckRequest)) {
    throw new Error('Expected argument of type pb.TruckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckRequest(buffer_arg) {
  return proto_services_truck_services_pb.TruckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckResponse(arg) {
  if (!(arg instanceof proto_services_truck_services_pb.TruckResponse)) {
    throw new Error('Expected argument of type pb.TruckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckResponse(buffer_arg) {
  return proto_services_truck_services_pb.TruckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TrucksResponse(arg) {
  if (!(arg instanceof proto_services_truck_services_pb.TrucksResponse)) {
    throw new Error('Expected argument of type pb.TrucksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TrucksResponse(buffer_arg) {
  return proto_services_truck_services_pb.TrucksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TruckServiceService = exports.TruckServiceService = {
  createTruck: {
    path: '/pb.TruckService/CreateTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_truck_services_pb.TruckRequest,
    responseType: proto_services_truck_services_pb.TruckResponse,
    requestSerialize: serialize_pb_TruckRequest,
    requestDeserialize: deserialize_pb_TruckRequest,
    responseSerialize: serialize_pb_TruckResponse,
    responseDeserialize: deserialize_pb_TruckResponse,
  },
  createTruckList: {
    path: '/pb.TruckService/CreateTruckList',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_truck_services_pb.TruckListRequest,
    responseType: proto_services_truck_services_pb.TruckListResponse,
    requestSerialize: serialize_pb_TruckListRequest,
    requestDeserialize: deserialize_pb_TruckListRequest,
    responseSerialize: serialize_pb_TruckListResponse,
    responseDeserialize: deserialize_pb_TruckListResponse,
  },
  retrieveTruck: {
    path: '/pb.TruckService/RetrieveTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_truck_services_pb.TruckRequest,
    responseType: proto_services_truck_services_pb.TruckResponse,
    requestSerialize: serialize_pb_TruckRequest,
    requestDeserialize: deserialize_pb_TruckRequest,
    responseSerialize: serialize_pb_TruckResponse,
    responseDeserialize: deserialize_pb_TruckResponse,
  },
  retrieveTruckHyteraList: {
    path: '/pb.TruckService/RetrieveTruckHyteraList',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_services_truck_services_pb.TruckListResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_TruckListResponse,
    responseDeserialize: deserialize_pb_TruckListResponse,
  },
  retrieveTrucks: {
    path: '/pb.TruckService/RetrieveTrucks',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_truck_services_pb.TruckRequest,
    responseType: proto_services_truck_services_pb.TrucksResponse,
    requestSerialize: serialize_pb_TruckRequest,
    requestDeserialize: deserialize_pb_TruckRequest,
    responseSerialize: serialize_pb_TrucksResponse,
    responseDeserialize: deserialize_pb_TrucksResponse,
  },
  updateTruck: {
    path: '/pb.TruckService/UpdateTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_truck_services_pb.TruckRequest,
    responseType: proto_services_truck_services_pb.TruckResponse,
    requestSerialize: serialize_pb_TruckRequest,
    requestDeserialize: deserialize_pb_TruckRequest,
    responseSerialize: serialize_pb_TruckResponse,
    responseDeserialize: deserialize_pb_TruckResponse,
  },
  deleteTruck: {
    path: '/pb.TruckService/DeleteTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_truck_services_pb.TruckRequest,
    responseType: proto_services_truck_services_pb.TruckResponse,
    requestSerialize: serialize_pb_TruckRequest,
    requestDeserialize: deserialize_pb_TruckRequest,
    responseSerialize: serialize_pb_TruckResponse,
    responseDeserialize: deserialize_pb_TruckResponse,
  },
  deleteTruckList: {
    path: '/pb.TruckService/DeleteTruckList',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_truck_services_pb.TruckListRequest,
    responseType: proto_services_truck_services_pb.TruckListResponse,
    requestSerialize: serialize_pb_TruckListRequest,
    requestDeserialize: deserialize_pb_TruckListRequest,
    responseSerialize: serialize_pb_TruckListResponse,
    responseDeserialize: deserialize_pb_TruckListResponse,
  },
};

exports.TruckServiceClient = grpc.makeGenericClientConstructor(TruckServiceService);
