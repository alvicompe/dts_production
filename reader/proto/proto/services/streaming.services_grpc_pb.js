// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_streaming_services_pb = require('../../proto/services/streaming.services_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var proto_entities_streaming_pb = require('../../proto/entities/streaming_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorInfo(arg) {
  if (!(arg instanceof proto_entities_streaming_pb.ExcavatorInfo)) {
    throw new Error('Expected argument of type pb.ExcavatorInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorInfo(buffer_arg) {
  return proto_entities_streaming_pb.ExcavatorInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorInfoRequest(arg) {
  if (!(arg instanceof proto_services_streaming_services_pb.ExcavatorInfoRequest)) {
    throw new Error('Expected argument of type pb.ExcavatorInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorInfoRequest(buffer_arg) {
  return proto_services_streaming_services_pb.ExcavatorInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExcavatorInfoResponse(arg) {
  if (!(arg instanceof proto_services_streaming_services_pb.ExcavatorInfoResponse)) {
    throw new Error('Expected argument of type pb.ExcavatorInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExcavatorInfoResponse(buffer_arg) {
  return proto_services_streaming_services_pb.ExcavatorInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_Socket(arg) {
  if (!(arg instanceof proto_entities_streaming_pb.Socket)) {
    throw new Error('Expected argument of type pb.Socket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_Socket(buffer_arg) {
  return proto_entities_streaming_pb.Socket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckInfo(arg) {
  if (!(arg instanceof proto_entities_streaming_pb.TruckInfo)) {
    throw new Error('Expected argument of type pb.TruckInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckInfo(buffer_arg) {
  return proto_entities_streaming_pb.TruckInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckInfoRequest(arg) {
  if (!(arg instanceof proto_services_streaming_services_pb.TruckInfoRequest)) {
    throw new Error('Expected argument of type pb.TruckInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckInfoRequest(buffer_arg) {
  return proto_services_streaming_services_pb.TruckInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TruckInfoResponse(arg) {
  if (!(arg instanceof proto_services_streaming_services_pb.TruckInfoResponse)) {
    throw new Error('Expected argument of type pb.TruckInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TruckInfoResponse(buffer_arg) {
  return proto_services_streaming_services_pb.TruckInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service truck
var TruckInfoServiceService = exports.TruckInfoServiceService = {
  serverStream: {
    path: '/pb.TruckInfoService/ServerStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_services_streaming_services_pb.TruckInfoRequest,
    responseType: proto_services_streaming_services_pb.TruckInfoResponse,
    requestSerialize: serialize_pb_TruckInfoRequest,
    requestDeserialize: deserialize_pb_TruckInfoRequest,
    responseSerialize: serialize_pb_TruckInfoResponse,
    responseDeserialize: deserialize_pb_TruckInfoResponse,
  },
};

exports.TruckInfoServiceClient = grpc.makeGenericClientConstructor(TruckInfoServiceService);
// Service excavator
var ExcavatorInfoServiceService = exports.ExcavatorInfoServiceService = {
  serverStream: {
    path: '/pb.ExcavatorInfoService/ServerStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_services_streaming_services_pb.ExcavatorInfoRequest,
    responseType: proto_services_streaming_services_pb.ExcavatorInfoResponse,
    requestSerialize: serialize_pb_ExcavatorInfoRequest,
    requestDeserialize: deserialize_pb_ExcavatorInfoRequest,
    responseSerialize: serialize_pb_ExcavatorInfoResponse,
    responseDeserialize: deserialize_pb_ExcavatorInfoResponse,
  },
};

exports.ExcavatorInfoServiceClient = grpc.makeGenericClientConstructor(ExcavatorInfoServiceService);
// Service Socket Stream
var SocketStreamServiceService = exports.SocketStreamServiceService = {
  socketStream: {
    path: '/pb.SocketStreamService/SocketStream',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_entities_streaming_pb.Socket,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_Socket,
    responseDeserialize: deserialize_pb_Socket,
  },
  truckInfoStream: {
    path: '/pb.SocketStreamService/TruckInfoStream',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_entities_streaming_pb.TruckInfo,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_TruckInfo,
    responseDeserialize: deserialize_pb_TruckInfo,
  },
  excavatorInfoStream: {
    path: '/pb.SocketStreamService/ExcavatorInfoStream',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_entities_streaming_pb.ExcavatorInfo,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_ExcavatorInfo,
    responseDeserialize: deserialize_pb_ExcavatorInfo,
  },
};

exports.SocketStreamServiceClient = grpc.makeGenericClientConstructor(SocketStreamServiceService);
