// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_report_timeline_services_pb = require('../../proto/services/report_timeline.services_pb.js');
var proto_services_report_services_pb = require('../../proto/services/report.services_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var proto_enums_shift_enums_pb = require('../../proto/enums/shift.enums_pb.js');
var proto_enums_asset_type_enums_pb = require('../../proto/enums/asset_type.enums_pb.js');

function serialize_pb_DownloadResponse(arg) {
  if (!(arg instanceof proto_services_report_services_pb.DownloadResponse)) {
    throw new Error('Expected argument of type pb.DownloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DownloadResponse(buffer_arg) {
  return proto_services_report_services_pb.DownloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DownloadTimelineRequest(arg) {
  if (!(arg instanceof proto_services_report_timeline_services_pb.DownloadTimelineRequest)) {
    throw new Error('Expected argument of type pb.DownloadTimelineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DownloadTimelineRequest(buffer_arg) {
  return proto_services_report_timeline_services_pb.DownloadTimelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ReportRequest(arg) {
  if (!(arg instanceof proto_services_report_services_pb.ReportRequest)) {
    throw new Error('Expected argument of type pb.ReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ReportRequest(buffer_arg) {
  return proto_services_report_services_pb.ReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_kpiDashboardResponse(arg) {
  if (!(arg instanceof proto_services_report_timeline_services_pb.kpiDashboardResponse)) {
    throw new Error('Expected argument of type pb.kpiDashboardResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_kpiDashboardResponse(buffer_arg) {
  return proto_services_report_timeline_services_pb.kpiDashboardResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Services
var ReportTimelineServiceService = exports.ReportTimelineServiceService = {
  kpiDashboard: {
    path: '/pb.ReportTimelineService/kpiDashboard',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_report_services_pb.ReportRequest,
    responseType: proto_services_report_timeline_services_pb.kpiDashboardResponse,
    requestSerialize: serialize_pb_ReportRequest,
    requestDeserialize: deserialize_pb_ReportRequest,
    responseSerialize: serialize_pb_kpiDashboardResponse,
    responseDeserialize: deserialize_pb_kpiDashboardResponse,
  },
  timelineByShift: {
    path: '/pb.ReportTimelineService/TimelineByShift',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_report_timeline_services_pb.DownloadTimelineRequest,
    responseType: proto_services_report_services_pb.DownloadResponse,
    requestSerialize: serialize_pb_DownloadTimelineRequest,
    requestDeserialize: deserialize_pb_DownloadTimelineRequest,
    responseSerialize: serialize_pb_DownloadResponse,
    responseDeserialize: deserialize_pb_DownloadResponse,
  },
};

exports.ReportTimelineServiceClient = grpc.makeGenericClientConstructor(ReportTimelineServiceService);
