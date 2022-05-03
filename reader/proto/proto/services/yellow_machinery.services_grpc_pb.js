// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_yellow_machinery_services_pb = require('../../proto/services/yellow_machinery.services_pb.js');
var proto_entities_yellow_machinery_pb = require('../../proto/entities/yellow_machinery_pb.js');

function serialize_pb_ListYellowMachineryResponse(arg) {
  if (!(arg instanceof proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse)) {
    throw new Error('Expected argument of type pb.ListYellowMachineryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ListYellowMachineryResponse(buffer_arg) {
  return proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_YellowMachineryRequest(arg) {
  if (!(arg instanceof proto_services_yellow_machinery_services_pb.YellowMachineryRequest)) {
    throw new Error('Expected argument of type pb.YellowMachineryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_YellowMachineryRequest(buffer_arg) {
  return proto_services_yellow_machinery_services_pb.YellowMachineryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_YellowMachineryResponse(arg) {
  if (!(arg instanceof proto_services_yellow_machinery_services_pb.YellowMachineryResponse)) {
    throw new Error('Expected argument of type pb.YellowMachineryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_YellowMachineryResponse(buffer_arg) {
  return proto_services_yellow_machinery_services_pb.YellowMachineryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var YellowMachineryServiceService = exports.YellowMachineryServiceService = {
  createYellowMachinery: {
    path: '/pb.YellowMachineryService/CreateYellowMachinery',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_yellow_machinery_services_pb.YellowMachineryRequest,
    responseType: proto_services_yellow_machinery_services_pb.YellowMachineryResponse,
    requestSerialize: serialize_pb_YellowMachineryRequest,
    requestDeserialize: deserialize_pb_YellowMachineryRequest,
    responseSerialize: serialize_pb_YellowMachineryResponse,
    responseDeserialize: deserialize_pb_YellowMachineryResponse,
  },
  retrieveYellowMachinery: {
    path: '/pb.YellowMachineryService/RetrieveYellowMachinery',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_yellow_machinery_services_pb.YellowMachineryRequest,
    responseType: proto_services_yellow_machinery_services_pb.YellowMachineryResponse,
    requestSerialize: serialize_pb_YellowMachineryRequest,
    requestDeserialize: deserialize_pb_YellowMachineryRequest,
    responseSerialize: serialize_pb_YellowMachineryResponse,
    responseDeserialize: deserialize_pb_YellowMachineryResponse,
  },
  listYellowMachinery: {
    path: '/pb.YellowMachineryService/ListYellowMachinery',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_yellow_machinery_services_pb.YellowMachineryRequest,
    responseType: proto_services_yellow_machinery_services_pb.ListYellowMachineryResponse,
    requestSerialize: serialize_pb_YellowMachineryRequest,
    requestDeserialize: deserialize_pb_YellowMachineryRequest,
    responseSerialize: serialize_pb_ListYellowMachineryResponse,
    responseDeserialize: deserialize_pb_ListYellowMachineryResponse,
  },
  updateYellowMachinery: {
    path: '/pb.YellowMachineryService/UpdateYellowMachinery',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_yellow_machinery_services_pb.YellowMachineryRequest,
    responseType: proto_services_yellow_machinery_services_pb.YellowMachineryResponse,
    requestSerialize: serialize_pb_YellowMachineryRequest,
    requestDeserialize: deserialize_pb_YellowMachineryRequest,
    responseSerialize: serialize_pb_YellowMachineryResponse,
    responseDeserialize: deserialize_pb_YellowMachineryResponse,
  },
  deleteYellowMachinery: {
    path: '/pb.YellowMachineryService/DeleteYellowMachinery',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_yellow_machinery_services_pb.YellowMachineryRequest,
    responseType: proto_services_yellow_machinery_services_pb.YellowMachineryResponse,
    requestSerialize: serialize_pb_YellowMachineryRequest,
    requestDeserialize: deserialize_pb_YellowMachineryRequest,
    responseSerialize: serialize_pb_YellowMachineryResponse,
    responseDeserialize: deserialize_pb_YellowMachineryResponse,
  },
};

exports.YellowMachineryServiceClient = grpc.makeGenericClientConstructor(YellowMachineryServiceService);
