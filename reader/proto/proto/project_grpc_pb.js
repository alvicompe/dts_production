// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_project_pb = require('../proto/project_pb.js');
var proto_polygon_pb = require('../proto/polygon_pb.js');

function serialize_pb_ProjectRequest(arg) {
  if (!(arg instanceof proto_project_pb.ProjectRequest)) {
    throw new Error('Expected argument of type pb.ProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ProjectRequest(buffer_arg) {
  return proto_project_pb.ProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ProjectResponse(arg) {
  if (!(arg instanceof proto_project_pb.ProjectResponse)) {
    throw new Error('Expected argument of type pb.ProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ProjectResponse(buffer_arg) {
  return proto_project_pb.ProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ProjectsResponse(arg) {
  if (!(arg instanceof proto_project_pb.ProjectsResponse)) {
    throw new Error('Expected argument of type pb.ProjectsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ProjectsResponse(buffer_arg) {
  return proto_project_pb.ProjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProjectServiceService = exports.ProjectServiceService = {
  createProject: {
    path: '/pb.ProjectService/CreateProject',
    requestStream: false,
    responseStream: false,
    requestType: proto_project_pb.ProjectRequest,
    responseType: proto_project_pb.ProjectResponse,
    requestSerialize: serialize_pb_ProjectRequest,
    requestDeserialize: deserialize_pb_ProjectRequest,
    responseSerialize: serialize_pb_ProjectResponse,
    responseDeserialize: deserialize_pb_ProjectResponse,
  },
  retrieveProject: {
    path: '/pb.ProjectService/RetrieveProject',
    requestStream: false,
    responseStream: false,
    requestType: proto_project_pb.ProjectRequest,
    responseType: proto_project_pb.ProjectResponse,
    requestSerialize: serialize_pb_ProjectRequest,
    requestDeserialize: deserialize_pb_ProjectRequest,
    responseSerialize: serialize_pb_ProjectResponse,
    responseDeserialize: deserialize_pb_ProjectResponse,
  },
  retrieveProjects: {
    path: '/pb.ProjectService/RetrieveProjects',
    requestStream: false,
    responseStream: false,
    requestType: proto_project_pb.ProjectRequest,
    responseType: proto_project_pb.ProjectsResponse,
    requestSerialize: serialize_pb_ProjectRequest,
    requestDeserialize: deserialize_pb_ProjectRequest,
    responseSerialize: serialize_pb_ProjectsResponse,
    responseDeserialize: deserialize_pb_ProjectsResponse,
  },
  updateProject: {
    path: '/pb.ProjectService/UpdateProject',
    requestStream: false,
    responseStream: false,
    requestType: proto_project_pb.ProjectRequest,
    responseType: proto_project_pb.ProjectResponse,
    requestSerialize: serialize_pb_ProjectRequest,
    requestDeserialize: deserialize_pb_ProjectRequest,
    responseSerialize: serialize_pb_ProjectResponse,
    responseDeserialize: deserialize_pb_ProjectResponse,
  },
  deleteProject: {
    path: '/pb.ProjectService/DeleteProject',
    requestStream: false,
    responseStream: false,
    requestType: proto_project_pb.ProjectRequest,
    responseType: proto_project_pb.ProjectResponse,
    requestSerialize: serialize_pb_ProjectRequest,
    requestDeserialize: deserialize_pb_ProjectRequest,
    responseSerialize: serialize_pb_ProjectResponse,
    responseDeserialize: deserialize_pb_ProjectResponse,
  },
};

exports.ProjectServiceClient = grpc.makeGenericClientConstructor(ProjectServiceService);
