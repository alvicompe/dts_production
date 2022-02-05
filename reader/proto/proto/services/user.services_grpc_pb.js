// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_user_services_pb = require('../../proto/services/user.services_pb.js');
var proto_entities_user_pb = require('../../proto/entities/user_pb.js');

function serialize_pb_UserRequest(arg) {
  if (!(arg instanceof proto_services_user_services_pb.UserRequest)) {
    throw new Error('Expected argument of type pb.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UserRequest(buffer_arg) {
  return proto_services_user_services_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_UserResponse(arg) {
  if (!(arg instanceof proto_services_user_services_pb.UserResponse)) {
    throw new Error('Expected argument of type pb.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UserResponse(buffer_arg) {
  return proto_services_user_services_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_UsersResponse(arg) {
  if (!(arg instanceof proto_services_user_services_pb.UsersResponse)) {
    throw new Error('Expected argument of type pb.UsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UsersResponse(buffer_arg) {
  return proto_services_user_services_pb.UsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/pb.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_user_services_pb.UserRequest,
    responseType: proto_services_user_services_pb.UserResponse,
    requestSerialize: serialize_pb_UserRequest,
    requestDeserialize: deserialize_pb_UserRequest,
    responseSerialize: serialize_pb_UserResponse,
    responseDeserialize: deserialize_pb_UserResponse,
  },
  retrieveUser: {
    path: '/pb.UserService/RetrieveUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_user_services_pb.UserRequest,
    responseType: proto_services_user_services_pb.UserResponse,
    requestSerialize: serialize_pb_UserRequest,
    requestDeserialize: deserialize_pb_UserRequest,
    responseSerialize: serialize_pb_UserResponse,
    responseDeserialize: deserialize_pb_UserResponse,
  },
  retrieveUsers: {
    path: '/pb.UserService/RetrieveUsers',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_user_services_pb.UserRequest,
    responseType: proto_services_user_services_pb.UsersResponse,
    requestSerialize: serialize_pb_UserRequest,
    requestDeserialize: deserialize_pb_UserRequest,
    responseSerialize: serialize_pb_UsersResponse,
    responseDeserialize: deserialize_pb_UsersResponse,
  },
  updateUser: {
    path: '/pb.UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_user_services_pb.UserRequest,
    responseType: proto_services_user_services_pb.UserResponse,
    requestSerialize: serialize_pb_UserRequest,
    requestDeserialize: deserialize_pb_UserRequest,
    responseSerialize: serialize_pb_UserResponse,
    responseDeserialize: deserialize_pb_UserResponse,
  },
  deleteUser: {
    path: '/pb.UserService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_user_services_pb.UserRequest,
    responseType: proto_services_user_services_pb.UserResponse,
    requestSerialize: serialize_pb_UserRequest,
    requestDeserialize: deserialize_pb_UserRequest,
    responseSerialize: serialize_pb_UserResponse,
    responseDeserialize: deserialize_pb_UserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
