// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_timeline_pb = require('../proto/timeline_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var proto_cycle_pb = require('../proto/cycle_pb.js');

function serialize_pb_TimelineRequest(arg) {
  if (!(arg instanceof proto_timeline_pb.TimelineRequest)) {
    throw new Error('Expected argument of type pb.TimelineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelineRequest(buffer_arg) {
  return proto_timeline_pb.TimelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TimelineResponse(arg) {
  if (!(arg instanceof proto_timeline_pb.TimelineResponse)) {
    throw new Error('Expected argument of type pb.TimelineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelineResponse(buffer_arg) {
  return proto_timeline_pb.TimelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TimelinesShiftRequest(arg) {
  if (!(arg instanceof proto_timeline_pb.TimelinesShiftRequest)) {
    throw new Error('Expected argument of type pb.TimelinesShiftRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelinesShiftRequest(buffer_arg) {
  return proto_timeline_pb.TimelinesShiftRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TimelinesShiftResponse(arg) {
  if (!(arg instanceof proto_timeline_pb.TimelinesShiftResponse)) {
    throw new Error('Expected argument of type pb.TimelinesShiftResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelinesShiftResponse(buffer_arg) {
  return proto_timeline_pb.TimelinesShiftResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TimelineServiceService = exports.TimelineServiceService = {
  createTimeline: {
    path: '/pb.TimelineService/CreateTimeline',
    requestStream: false,
    responseStream: false,
    requestType: proto_timeline_pb.TimelineRequest,
    responseType: proto_timeline_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  retrieveTimeline: {
    path: '/pb.TimelineService/RetrieveTimeline',
    requestStream: false,
    responseStream: false,
    requestType: proto_timeline_pb.TimelineRequest,
    responseType: proto_timeline_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  updateTimeline: {
    path: '/pb.TimelineService/UpdateTimeline',
    requestStream: false,
    responseStream: false,
    requestType: proto_timeline_pb.TimelineRequest,
    responseType: proto_timeline_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  deleteTimeline: {
    path: '/pb.TimelineService/DeleteTimeline',
    requestStream: false,
    responseStream: false,
    requestType: proto_timeline_pb.TimelineRequest,
    responseType: proto_timeline_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  retrieveTimelinesShift: {
    path: '/pb.TimelineService/RetrieveTimelinesShift',
    requestStream: false,
    responseStream: false,
    requestType: proto_timeline_pb.TimelinesShiftRequest,
    responseType: proto_timeline_pb.TimelinesShiftResponse,
    requestSerialize: serialize_pb_TimelinesShiftRequest,
    requestDeserialize: deserialize_pb_TimelinesShiftRequest,
    responseSerialize: serialize_pb_TimelinesShiftResponse,
    responseDeserialize: deserialize_pb_TimelinesShiftResponse,
  },
};

exports.TimelineServiceClient = grpc.makeGenericClientConstructor(TimelineServiceService);
