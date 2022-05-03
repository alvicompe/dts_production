// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_asset_type_services_pb = require('../../proto/services/asset_type.services_pb.js');
var proto_entities_asset_type_pb = require('../../proto/entities/asset_type_pb.js');

function serialize_pb_AssetTypeRequest(arg) {
  if (!(arg instanceof proto_services_asset_type_services_pb.AssetTypeRequest)) {
    throw new Error('Expected argument of type pb.AssetTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AssetTypeRequest(buffer_arg) {
  return proto_services_asset_type_services_pb.AssetTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_AssetTypeResponse(arg) {
  if (!(arg instanceof proto_services_asset_type_services_pb.AssetTypeResponse)) {
    throw new Error('Expected argument of type pb.AssetTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AssetTypeResponse(buffer_arg) {
  return proto_services_asset_type_services_pb.AssetTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_AssetTypesResponse(arg) {
  if (!(arg instanceof proto_services_asset_type_services_pb.AssetTypesResponse)) {
    throw new Error('Expected argument of type pb.AssetTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AssetTypesResponse(buffer_arg) {
  return proto_services_asset_type_services_pb.AssetTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AssetTypeServiceService = exports.AssetTypeServiceService = {
  createAssetType: {
    path: '/pb.AssetTypeService/CreateAssetType',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_asset_type_services_pb.AssetTypeRequest,
    responseType: proto_services_asset_type_services_pb.AssetTypeResponse,
    requestSerialize: serialize_pb_AssetTypeRequest,
    requestDeserialize: deserialize_pb_AssetTypeRequest,
    responseSerialize: serialize_pb_AssetTypeResponse,
    responseDeserialize: deserialize_pb_AssetTypeResponse,
  },
  retrieveAssetType: {
    path: '/pb.AssetTypeService/RetrieveAssetType',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_asset_type_services_pb.AssetTypeRequest,
    responseType: proto_services_asset_type_services_pb.AssetTypeResponse,
    requestSerialize: serialize_pb_AssetTypeRequest,
    requestDeserialize: deserialize_pb_AssetTypeRequest,
    responseSerialize: serialize_pb_AssetTypeResponse,
    responseDeserialize: deserialize_pb_AssetTypeResponse,
  },
  retrieveAssetTypes: {
    path: '/pb.AssetTypeService/RetrieveAssetTypes',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_asset_type_services_pb.AssetTypeRequest,
    responseType: proto_services_asset_type_services_pb.AssetTypesResponse,
    requestSerialize: serialize_pb_AssetTypeRequest,
    requestDeserialize: deserialize_pb_AssetTypeRequest,
    responseSerialize: serialize_pb_AssetTypesResponse,
    responseDeserialize: deserialize_pb_AssetTypesResponse,
  },
  updateAssetType: {
    path: '/pb.AssetTypeService/UpdateAssetType',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_asset_type_services_pb.AssetTypeRequest,
    responseType: proto_services_asset_type_services_pb.AssetTypeResponse,
    requestSerialize: serialize_pb_AssetTypeRequest,
    requestDeserialize: deserialize_pb_AssetTypeRequest,
    responseSerialize: serialize_pb_AssetTypeResponse,
    responseDeserialize: deserialize_pb_AssetTypeResponse,
  },
  deleteAssetType: {
    path: '/pb.AssetTypeService/DeleteAssetType',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_asset_type_services_pb.AssetTypeRequest,
    responseType: proto_services_asset_type_services_pb.AssetTypeResponse,
    requestSerialize: serialize_pb_AssetTypeRequest,
    requestDeserialize: deserialize_pb_AssetTypeRequest,
    responseSerialize: serialize_pb_AssetTypeResponse,
    responseDeserialize: deserialize_pb_AssetTypeResponse,
  },
};

exports.AssetTypeServiceClient = grpc.makeGenericClientConstructor(AssetTypeServiceService);
