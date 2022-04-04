// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_timeline_truck_services_pb = require('../../proto/services/timeline_truck.services_pb.js');
var proto_entities_unit_pb = require('../../proto/entities/unit_pb.js');
var proto_entities_timeline_pb = require('../../proto/entities/timeline_pb.js');
var proto_entities_event_state_pb = require('../../proto/entities/event_state_pb.js');
var proto_entities_unit_current_timeline_pb = require('../../proto/entities/unit_current_timeline_pb.js');
var proto_enums_event_enums_pb = require('../../proto/enums/event.enums_pb.js');
var proto_enums_shift_enums_pb = require('../../proto/enums/shift.enums_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var proto_enums_asset_type_enums_pb = require('../../proto/enums/asset_type.enums_pb.js');

function serialize_pb_CurrentTimelineByTruckRequest(arg) {
  if (!(arg instanceof proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest)) {
    throw new Error('Expected argument of type pb.CurrentTimelineByTruckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CurrentTimelineByTruckRequest(buffer_arg) {
  return proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

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


var TimelineTruckServiceService = exports.TimelineTruckServiceService = {
  retrieveTimelineTruck: {
    path: '/pb.TimelineTruckService/RetrieveTimelineTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  retrieveTimelinesShiftTruck: {
    path: '/pb.TimelineTruckService/RetrieveTimelinesShiftTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelinesShiftRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelinesShiftResponse,
    requestSerialize: serialize_pb_TimelinesShiftRequest,
    requestDeserialize: deserialize_pb_TimelinesShiftRequest,
    responseSerialize: serialize_pb_TimelinesShiftResponse,
    responseDeserialize: deserialize_pb_TimelinesShiftResponse,
  },
  retrieveCurrentTimelineByTruck: {
    path: '/pb.TimelineTruckService/RetrieveCurrentTimelineByTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.CurrentTimelineByTruckRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_CurrentTimelineByTruckRequest,
    requestDeserialize: deserialize_pb_CurrentTimelineByTruckRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  createTimelineTruck: {
    path: '/pb.TimelineTruckService/CreateTimelineTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  updateTimelineTruck: {
    path: '/pb.TimelineTruckService/UpdateTimelineTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  updateInitialHourmeterTimelineTruck: {
    path: '/pb.TimelineTruckService/UpdateInitialHourmeterTimelineTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineResponse,
    requestSerialize: serialize_pb_TimelineRequest,
    requestDeserialize: deserialize_pb_TimelineRequest,
    responseSerialize: serialize_pb_TimelineResponse,
    responseDeserialize: deserialize_pb_TimelineResponse,
  },
  updateTimelineTruckList: {
    path: '/pb.TimelineTruckService/UpdateTimelineTruckList',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineListRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineListResponse,
    requestSerialize: serialize_pb_TimelineListRequest,
    requestDeserialize: deserialize_pb_TimelineListRequest,
    responseSerialize: serialize_pb_TimelineListResponse,
    responseDeserialize: deserialize_pb_TimelineListResponse,
  },
  updateTimelineTruckBeforeShiftChange: {
    path: '/pb.TimelineTruckService/UpdateTimelineTruckBeforeShiftChange',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.UnitCurrentTimelineRequest,
    responseType: proto_services_timeline_truck_services_pb.UnitCurrentTimelineResponse,
    requestSerialize: serialize_pb_UnitCurrentTimelineRequest,
    requestDeserialize: deserialize_pb_UnitCurrentTimelineRequest,
    responseSerialize: serialize_pb_UnitCurrentTimelineResponse,
    responseDeserialize: deserialize_pb_UnitCurrentTimelineResponse,
  },
  updateTimelineTruckListBeforeShiftChange: {
    path: '/pb.TimelineTruckService/UpdateTimelineTruckListBeforeShiftChange',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineListResponse,
    requestSerialize: serialize_pb_TimelineFinalizeShiftRequest,
    requestDeserialize: deserialize_pb_TimelineFinalizeShiftRequest,
    responseSerialize: serialize_pb_TimelineListResponse,
    responseDeserialize: deserialize_pb_TimelineListResponse,
  },
  finalizeShiftTruck: {
    path: '/pb.TimelineTruckService/FinalizeShiftTruck',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_timeline_truck_services_pb.TimelineFinalizeShiftRequest,
    responseType: proto_services_timeline_truck_services_pb.TimelineListResponse,
    requestSerialize: serialize_pb_TimelineFinalizeShiftRequest,
    requestDeserialize: deserialize_pb_TimelineFinalizeShiftRequest,
    responseSerialize: serialize_pb_TimelineListResponse,
    responseDeserialize: deserialize_pb_TimelineListResponse,
  },
  deleteTimelineTruck: {
    path: '/pb.TimelineTruckService/DeleteTimelineTruck',
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

exports.TimelineTruckServiceClient = grpc.makeGenericClientConstructor(TimelineTruckServiceService);
