// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_auth_pb = require('../proto/auth_pb.js');
var proto_user_pb = require('../proto/user_pb.js');

function serialize_pb_LoginRequest(arg) {
  if (!(arg instanceof proto_auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type pb.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_LoginRequest(buffer_arg) {
  return proto_auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_LoginResponse(arg) {
  if (!(arg instanceof proto_auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type pb.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_LoginResponse(buffer_arg) {
  return proto_auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  login: {
    path: '/pb.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: proto_auth_pb.LoginRequest,
    responseType: proto_auth_pb.LoginResponse,
    requestSerialize: serialize_pb_LoginRequest,
    requestDeserialize: deserialize_pb_LoginRequest,
    responseSerialize: serialize_pb_LoginResponse,
    responseDeserialize: deserialize_pb_LoginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
