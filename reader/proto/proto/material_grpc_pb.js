// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_material_pb = require('../proto/material_pb.js');

function serialize_pb_MaterialRequest(arg) {
  if (!(arg instanceof proto_material_pb.MaterialRequest)) {
    throw new Error('Expected argument of type pb.MaterialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_MaterialRequest(buffer_arg) {
  return proto_material_pb.MaterialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_MaterialResponse(arg) {
  if (!(arg instanceof proto_material_pb.MaterialResponse)) {
    throw new Error('Expected argument of type pb.MaterialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_MaterialResponse(buffer_arg) {
  return proto_material_pb.MaterialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_MaterialsResponse(arg) {
  if (!(arg instanceof proto_material_pb.MaterialsResponse)) {
    throw new Error('Expected argument of type pb.MaterialsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_MaterialsResponse(buffer_arg) {
  return proto_material_pb.MaterialsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MaterialServiceService = exports.MaterialServiceService = {
  createMaterial: {
    path: '/pb.MaterialService/CreateMaterial',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_pb.MaterialRequest,
    responseType: proto_material_pb.MaterialResponse,
    requestSerialize: serialize_pb_MaterialRequest,
    requestDeserialize: deserialize_pb_MaterialRequest,
    responseSerialize: serialize_pb_MaterialResponse,
    responseDeserialize: deserialize_pb_MaterialResponse,
  },
  retrieveMaterial: {
    path: '/pb.MaterialService/RetrieveMaterial',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_pb.MaterialRequest,
    responseType: proto_material_pb.MaterialResponse,
    requestSerialize: serialize_pb_MaterialRequest,
    requestDeserialize: deserialize_pb_MaterialRequest,
    responseSerialize: serialize_pb_MaterialResponse,
    responseDeserialize: deserialize_pb_MaterialResponse,
  },
  retrieveMaterials: {
    path: '/pb.MaterialService/RetrieveMaterials',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_pb.MaterialRequest,
    responseType: proto_material_pb.MaterialsResponse,
    requestSerialize: serialize_pb_MaterialRequest,
    requestDeserialize: deserialize_pb_MaterialRequest,
    responseSerialize: serialize_pb_MaterialsResponse,
    responseDeserialize: deserialize_pb_MaterialsResponse,
  },
  updateMaterial: {
    path: '/pb.MaterialService/UpdateMaterial',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_pb.MaterialRequest,
    responseType: proto_material_pb.MaterialResponse,
    requestSerialize: serialize_pb_MaterialRequest,
    requestDeserialize: deserialize_pb_MaterialRequest,
    responseSerialize: serialize_pb_MaterialResponse,
    responseDeserialize: deserialize_pb_MaterialResponse,
  },
  deleteMaterial: {
    path: '/pb.MaterialService/DeleteMaterial',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_pb.MaterialRequest,
    responseType: proto_material_pb.MaterialResponse,
    requestSerialize: serialize_pb_MaterialRequest,
    requestDeserialize: deserialize_pb_MaterialRequest,
    responseSerialize: serialize_pb_MaterialResponse,
    responseDeserialize: deserialize_pb_MaterialResponse,
  },
};

exports.MaterialServiceClient = grpc.makeGenericClientConstructor(MaterialServiceService);
