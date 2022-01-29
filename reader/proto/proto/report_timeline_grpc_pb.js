// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_report_timeline_pb = require('../proto/report_timeline_pb.js');
var proto_report_pb = require('../proto/report_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_pb_ReportRequest(arg) {
  if (!(arg instanceof proto_report_pb.ReportRequest)) {
    throw new Error('Expected argument of type pb.ReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ReportRequest(buffer_arg) {
  return proto_report_pb.ReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_kpiDashboardResponse(arg) {
  if (!(arg instanceof proto_report_timeline_pb.kpiDashboardResponse)) {
    throw new Error('Expected argument of type pb.kpiDashboardResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_kpiDashboardResponse(buffer_arg) {
  return proto_report_timeline_pb.kpiDashboardResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Services
var ReportTimelineServiceService = exports.ReportTimelineServiceService = {
  kpiDashboard: {
    path: '/pb.ReportTimelineService/kpiDashboard',
    requestStream: false,
    responseStream: false,
    requestType: proto_report_pb.ReportRequest,
    responseType: proto_report_timeline_pb.kpiDashboardResponse,
    requestSerialize: serialize_pb_ReportRequest,
    requestDeserialize: deserialize_pb_ReportRequest,
    responseSerialize: serialize_pb_kpiDashboardResponse,
    responseDeserialize: deserialize_pb_kpiDashboardResponse,
  },
};

exports.ReportTimelineServiceClient = grpc.makeGenericClientConstructor(ReportTimelineServiceService);
