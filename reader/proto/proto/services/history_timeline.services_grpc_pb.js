// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_history_timeline_services_pb = require('../../proto/services/history_timeline.services_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var proto_enums_shift_enums_pb = require('../../proto/enums/shift.enums_pb.js');
var proto_enums_asset_type_enums_pb = require('../../proto/enums/asset_type.enums_pb.js');
var proto_entities_history_timeline_pb = require('../../proto/entities/history_timeline_pb.js');

function serialize_pb_FilterHistoryTimelineRequest(arg) {
  if (!(arg instanceof proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest)) {
    throw new Error('Expected argument of type pb.FilterHistoryTimelineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_FilterHistoryTimelineRequest(buffer_arg) {
  return proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ListHistoryTimelineResponse(arg) {
  if (!(arg instanceof proto_services_history_timeline_services_pb.ListHistoryTimelineResponse)) {
    throw new Error('Expected argument of type pb.ListHistoryTimelineResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ListHistoryTimelineResponse(buffer_arg) {
  return proto_services_history_timeline_services_pb.ListHistoryTimelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Services
var HistoryTimelineServiceService = exports.HistoryTimelineServiceService = {
  filterHistoryTimeline: {
    path: '/pb.HistoryTimelineService/FilterHistoryTimeline',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest,
    responseType: proto_services_history_timeline_services_pb.ListHistoryTimelineResponse,
    requestSerialize: serialize_pb_FilterHistoryTimelineRequest,
    requestDeserialize: deserialize_pb_FilterHistoryTimelineRequest,
    responseSerialize: serialize_pb_ListHistoryTimelineResponse,
    responseDeserialize: deserialize_pb_ListHistoryTimelineResponse,
  },
};

exports.HistoryTimelineServiceClient = grpc.makeGenericClientConstructor(HistoryTimelineServiceService);
