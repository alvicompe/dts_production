// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_report_services_pb = require('../../proto/services/report.services_pb.js');
var proto_entities_report_pb = require('../../proto/entities/report_pb.js');
var proto_entities_truck_pb = require('../../proto/entities/truck_pb.js');
var proto_enums_shift_enums_pb = require('../../proto/enums/shift.enums_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pb_DownloadRequest(arg) {
  if (!(arg instanceof proto_services_report_services_pb.DownloadRequest)) {
    throw new Error('Expected argument of type pb.DownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DownloadRequest(buffer_arg) {
  return proto_services_report_services_pb.DownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DownloadResponse(arg) {
  if (!(arg instanceof proto_services_report_services_pb.DownloadResponse)) {
    throw new Error('Expected argument of type pb.DownloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DownloadResponse(buffer_arg) {
  return proto_services_report_services_pb.DownloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ReportPerformancePerHourResponse(arg) {
  if (!(arg instanceof proto_services_report_services_pb.ReportPerformancePerHourResponse)) {
    throw new Error('Expected argument of type pb.ReportPerformancePerHourResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ReportPerformancePerHourResponse(buffer_arg) {
  return proto_services_report_services_pb.ReportPerformancePerHourResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var ReportServiceService = exports.ReportServiceService = {
  retrievePerformancePerHourReport: {
    path: '/pb.ReportService/RetrievePerformancePerHourReport',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_report_services_pb.ReportRequest,
    responseType: proto_services_report_services_pb.ReportPerformancePerHourResponse,
    requestSerialize: serialize_pb_ReportRequest,
    requestDeserialize: deserialize_pb_ReportRequest,
    responseSerialize: serialize_pb_ReportPerformancePerHourResponse,
    responseDeserialize: deserialize_pb_ReportPerformancePerHourResponse,
  },
  downloadReport: {
    path: '/pb.ReportService/DownloadReport',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_report_services_pb.DownloadRequest,
    responseType: proto_services_report_services_pb.DownloadResponse,
    requestSerialize: serialize_pb_DownloadRequest,
    requestDeserialize: deserialize_pb_DownloadRequest,
    responseSerialize: serialize_pb_DownloadResponse,
    responseDeserialize: deserialize_pb_DownloadResponse,
  },
};

exports.ReportServiceClient = grpc.makeGenericClientConstructor(ReportServiceService);
