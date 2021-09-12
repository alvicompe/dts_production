// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_geofence_pb = require('../proto/geofence_pb.js');
var proto_point_pb = require('../proto/point_pb.js');

function serialize_pb_GeofenceRequest(arg) {
  if (!(arg instanceof proto_geofence_pb.GeofenceRequest)) {
    throw new Error('Expected argument of type pb.GeofenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GeofenceRequest(buffer_arg) {
  return proto_geofence_pb.GeofenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GeofenceResponse(arg) {
  if (!(arg instanceof proto_geofence_pb.GeofenceResponse)) {
    throw new Error('Expected argument of type pb.GeofenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GeofenceResponse(buffer_arg) {
  return proto_geofence_pb.GeofenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GeofencesResponse(arg) {
  if (!(arg instanceof proto_geofence_pb.GeofencesResponse)) {
    throw new Error('Expected argument of type pb.GeofencesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GeofencesResponse(buffer_arg) {
  return proto_geofence_pb.GeofencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GeofenceServiceService = exports.GeofenceServiceService = {
  createGeofence: {
    path: '/pb.GeofenceService/CreateGeofence',
    requestStream: false,
    responseStream: false,
    requestType: proto_geofence_pb.GeofenceRequest,
    responseType: proto_geofence_pb.GeofenceResponse,
    requestSerialize: serialize_pb_GeofenceRequest,
    requestDeserialize: deserialize_pb_GeofenceRequest,
    responseSerialize: serialize_pb_GeofenceResponse,
    responseDeserialize: deserialize_pb_GeofenceResponse,
  },
  retrieveGeofence: {
    path: '/pb.GeofenceService/RetrieveGeofence',
    requestStream: false,
    responseStream: false,
    requestType: proto_geofence_pb.GeofenceRequest,
    responseType: proto_geofence_pb.GeofenceResponse,
    requestSerialize: serialize_pb_GeofenceRequest,
    requestDeserialize: deserialize_pb_GeofenceRequest,
    responseSerialize: serialize_pb_GeofenceResponse,
    responseDeserialize: deserialize_pb_GeofenceResponse,
  },
  retrieveGeofences: {
    path: '/pb.GeofenceService/RetrieveGeofences',
    requestStream: false,
    responseStream: false,
    requestType: proto_geofence_pb.GeofenceRequest,
    responseType: proto_geofence_pb.GeofencesResponse,
    requestSerialize: serialize_pb_GeofenceRequest,
    requestDeserialize: deserialize_pb_GeofenceRequest,
    responseSerialize: serialize_pb_GeofencesResponse,
    responseDeserialize: deserialize_pb_GeofencesResponse,
  },
  updateGeofence: {
    path: '/pb.GeofenceService/UpdateGeofence',
    requestStream: false,
    responseStream: false,
    requestType: proto_geofence_pb.GeofenceRequest,
    responseType: proto_geofence_pb.GeofenceResponse,
    requestSerialize: serialize_pb_GeofenceRequest,
    requestDeserialize: deserialize_pb_GeofenceRequest,
    responseSerialize: serialize_pb_GeofenceResponse,
    responseDeserialize: deserialize_pb_GeofenceResponse,
  },
  deleteGeofence: {
    path: '/pb.GeofenceService/DeleteGeofence',
    requestStream: false,
    responseStream: false,
    requestType: proto_geofence_pb.GeofenceRequest,
    responseType: proto_geofence_pb.GeofenceResponse,
    requestSerialize: serialize_pb_GeofenceRequest,
    requestDeserialize: deserialize_pb_GeofenceRequest,
    responseSerialize: serialize_pb_GeofenceResponse,
    responseDeserialize: deserialize_pb_GeofenceResponse,
  },
};

exports.GeofenceServiceClient = grpc.makeGenericClientConstructor(GeofenceServiceService);
