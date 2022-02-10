// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_timeline_truck_services_pb = require('../../proto/services/timeline_truck.services_pb.js');

function serialize_pb_TimelineFinalizeShiftRequest(arg) {
  if (!(arg instanceof proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest)) {
    throw new Error('Expected argument of type pb.TimelineFinalizeShiftRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelineFinalizeShiftRequest(buffer_arg) {
  return proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TimelineListRequest(arg) {
  if (!(arg instanceof proto_services_timeline_truck_services_pb.TimelineListRequest)) {
    throw new Error('Expected argument of type pb.TimelineListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelineListRequest(buffer_arg) {
  return proto_services_timeline_truck_services_pb.TimelineListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TimelineListResponse(arg) {
  if (!(arg instanceof proto_services_timeline_truck_services_pb.TimelineListResponse)) {
    throw new Error('Expected argument of type pb.TimelineListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelineListResponse(buffer_arg) {
  return proto_services_timeline_truck_services_pb.TimelineListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TimelineRequest(arg) {
  if (!(arg instanceof proto_services_timeline_truck_services_pb.TimelineRequest)) {
    throw new Error('Expected argument of type pb.TimelineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelineRequest(buffer_arg) {
  return proto_services_timeline_truck_services_pb.TimelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TimelineResponse(arg) {
  if (!(arg instanceof proto_services_timeline_truck_services_pb.TimelineResponse)) {
    throw new Error('Expected argument of type pb.TimelineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelineResponse(buffer_arg) {
  return proto_services_timeline_truck_services_pb.TimelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TimelinesShiftRequest(arg) {
  if (!(arg instanceof proto_services_timeline_truck_services_pb.TimelinesShiftRequest)) {
    throw new Error('Expected argument of type pb.TimelinesShiftRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelinesShiftRequest(buffer_arg) {
  return proto_services_timeline_truck_services_pb.TimelinesShiftRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_TimelinesShiftResponse(arg) {
  if (!(arg instanceof proto_services_timeline_truck_services_pb.TimelinesShiftResponse)) {
    throw new Error('Expected argument of type pb.TimelinesShiftResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_TimelinesShiftResponse(buffer_arg) {
  return proto_services_timeline_truck_services_pb.TimelinesShiftResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TimelineExcavatorServiceService = exports.TimelineExcavatorServiceService = {
  retrieveTimelineExcavator: {
    path: '/pb.TimelineExcavatorService/RetrieveTimelineExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  retrieveTimelinesShiftExcavator: {
    path: '/pb.TimelineExcavatorService/RetrieveTimelinesShiftExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelinesShiftRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelinesShiftResponse,
    requestSerialize: serialize_pb_TimelinesShiftRequest,
    requestDeserialize: deserialize_pb_TimelinesShiftRequest,
    responseSerialize: serialize_pb_TimelinesShiftResponse,
    responseDeserialize: deserialize_pb_TimelinesShiftResponse,
  },
  createTimelineExcavator: {
    path: '/pb.TimelineExcavatorService/CreateTimelineExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  updateTimelineExcavator: {
    path: '/pb.TimelineExcavatorService/UpdateTimelineExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  updateTimelineExcavatorList: {
    path: '/pb.TimelineExcavatorService/UpdateTimelineExcavatorList',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineListRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineListResponse,
    requestSerialize: serialize_pb_TimelineListRequest,
    requestDeserialize: deserialize_pb_TimelineListRequest,
    responseSerialize: serialize_pb_TimelineListResponse,
    responseDeserialize: deserialize_pb_TimelineListResponse,
  },
  updateTimelineExcavatorBeforeShiftChange: {
    path: '/pb.TimelineExcavatorService/UpdateTimelineExcavatorBeforeShiftChange',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineListResponse,
    requestSerialize: serialize_pb_TimelineFinalizeShiftRequest,
    requestDeserialize: deserialize_pb_TimelineFinalizeShiftRequest,
    responseSerialize: serialize_pb_TimelineListResponse,
    responseDeserialize: deserialize_pb_TimelineListResponse,
  },
  updateInitialHourmeterTimelineExcavator: {
    path: '/pb.TimelineExcavatorService/UpdateInitialHourmeterTimelineExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  finalizeShiftExcavator: {
    path: '/pb.TimelineExcavatorService/FinalizeShiftExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineListResponse,
    requestSerialize: serialize_pb_TimelineFinalizeShiftRequest,
    requestDeserialize: deserialize_pb_TimelineFinalizeShiftRequest,
    responseSerialize: serialize_pb_TimelineListResponse,
    responseDeserialize: deserialize_pb_TimelineListResponse,
  },
  deleteTimelineExcavator: {
    path: '/pb.TimelineExcavatorService/DeleteTimelineExcavator',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
};

exports.TimelineExcavatorServiceClient = grpc.makeGenericClientConstructor(TimelineExcavatorServiceService);
