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

function serialize_pb_UnitCurrentTimelineRequest(arg) {
  if (!(arg instanceof proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest)) {
    throw new Error('Expected argument of type pb.UnitCurrentTimelineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UnitCurrentTimelineRequest(buffer_arg) {
  return proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_UnitCurrentTimelineResponse(arg) {
  if (!(arg instanceof proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse)) {
    throw new Error('Expected argument of type pb.UnitCurrentTimelineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_UnitCurrentTimelineResponse(buffer_arg) {
  return proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TimelineYellowLineServiceService = exports.TimelineYellowLineServiceService = {
  retrieveTimelineYellowLine: {
    path: '/pb.TimelineYellowLineService/RetrieveTimelineYellowLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  retrieveTimelinesShiftYellowLine: {
    path: '/pb.TimelineYellowLineService/RetrieveTimelinesShiftYellowLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelinesShiftRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelinesShiftResponse,
    requestSerialize: serialize_pb_TimelinesShiftRequest,
    requestDeserialize: deserialize_pb_TimelinesShiftRequest,
    responseSerialize: serialize_pb_TimelinesShiftResponse,
    responseDeserialize: deserialize_pb_TimelinesShiftResponse,
  },
  createTimelineYellowLine: {
    path: '/pb.TimelineYellowLineService/CreateTimelineYellowLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  updateTimelineYellowLine: {
    path: '/pb.TimelineYellowLineService/UpdateTimelineYellowLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  updateTimelineYellowLineList: {
    path: '/pb.TimelineYellowLineService/UpdateTimelineYellowLineList',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineListRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineListResponse,
    requestSerialize: serialize_pb_TimelineListRequest,
    requestDeserialize: deserialize_pb_TimelineListRequest,
    responseSerialize: serialize_pb_TimelineListResponse,
    responseDeserialize: deserialize_pb_TimelineListResponse,
  },
  updateTimelineYellowLineBeforeShiftChange: {
    path: '/pb.TimelineYellowLineService/UpdateTimelineYellowLineBeforeShiftChange',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse,
    requestSerialize: serialize_pb_UnitCurrentTimelineRequest,
    requestDeserialize: deserialize_pb_UnitCurrentTimelineRequest,
    responseSerialize: serialize_pb_UnitCurrentTimelineResponse,
    responseDeserialize: deserialize_pb_UnitCurrentTimelineResponse,
  },
  updateTimelineYellowLineListBeforeShiftChange: {
    path: '/pb.TimelineYellowLineService/UpdateTimelineYellowLineListBeforeShiftChange',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineListResponse,
    requestSerialize: serialize_pb_TimelineFinalizeShiftRequest,
    requestDeserialize: deserialize_pb_TimelineFinalizeShiftRequest,
    responseSerialize: serialize_pb_TimelineListResponse,
    responseDeserialize: deserialize_pb_TimelineListResponse,
  },
  finalizeShiftYellowLine: {
    path: '/pb.TimelineYellowLineService/FinalizeShiftYellowLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineListResponse,
    requestSerialize: serialize_pb_TimelineFinalizeShiftRequest,
    requestDeserialize: deserialize_pb_TimelineFinalizeShiftRequest,
    responseSerialize: serialize_pb_TimelineListResponse,
    responseDeserialize: deserialize_pb_TimelineListResponse,
  },
  deleteTimelineYellowLine: {
    path: '/pb.TimelineYellowLineService/DeleteTimelineYellowLine',
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

exports.TimelineYellowLineServiceClient = grpc.makeGenericClientConstructor(TimelineYellowLineServiceService);
