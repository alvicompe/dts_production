// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_tree_pb = require('../proto/tree_pb.js');
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

function serialize_pb_CreateTreeRequest(arg) {
  if (!(arg instanceof proto_tree_pb.CreateTreeRequest)) {
    throw new Error('Expected argument of type pb.CreateTreeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateTreeRequest(buffer_arg) {
  return proto_tree_pb.CreateTreeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TreeResponse(arg) {
  if (!(arg instanceof proto_tree_pb.TreeResponse)) {
    throw new Error('Expected argument of type pb.TreeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TreeResponse(buffer_arg) {
  return proto_tree_pb.TreeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TreeServiceService = exports.TreeServiceService = {
  retrieveTree: {
    path: '/pb.TreeService/RetrieveTree',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_tree_pb.TreeResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_TreeResponse,
    responseDeserialize: deserialize_pb_TreeResponse,
  },
  createTree: {
    path: '/pb.TreeService/CreateTree',
    requestStream: false,
    responseStream: false,
    requestType: proto_tree_pb.CreateTreeRequest,
    responseType: proto_tree_pb.TreeResponse,
    requestSerialize: serialize_pb_CreateTreeRequest,
    requestDeserialize: deserialize_pb_CreateTreeRequest,
    responseSerialize: serialize_pb_TreeResponse,
    responseDeserialize: deserialize_pb_TreeResponse,
  },
  updateTree: {
    path: '/pb.TreeService/UpdateTree',
    requestStream: false,
    responseStream: false,
    requestType: proto_tree_pb.CreateTreeRequest,
    responseType: proto_tree_pb.TreeResponse,
    requestSerialize: serialize_pb_CreateTreeRequest,
    requestDeserialize: deserialize_pb_CreateTreeRequest,
    responseSerialize: serialize_pb_TreeResponse,
    responseDeserialize: deserialize_pb_TreeResponse,
  },
};

exports.TreeServiceClient = grpc.makeGenericClientConstructor(TreeServiceService);
