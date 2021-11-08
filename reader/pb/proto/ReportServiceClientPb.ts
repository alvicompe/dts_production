/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_report_pb from '../proto/report_pb';


export class ReportServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoRetrieveReport = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_report_pb.ReportResponse,
    (request: proto_report_pb.ReportRequest) => {
      return request.serializeBinary();
    },
    proto_report_pb.ReportResponse.deserializeBinary
  );

  retrieveReport(
    request: proto_report_pb.ReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_report_pb.ReportResponse>;

  retrieveReport(
    request: proto_report_pb.ReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_report_pb.ReportResponse) => void): grpcWeb.ClientReadableStream<proto_report_pb.ReportResponse>;

  retrieveReport(
    request: proto_report_pb.ReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_report_pb.ReportResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ReportService/RetrieveReport',
        request,
        metadata || {},
        this.methodInfoRetrieveReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ReportService/RetrieveReport',
    request,
    metadata || {},
    this.methodInfoRetrieveReport);
  }

  methodInfoDownloadReport = new grpcWeb.AbstractClientBase.MethodInfo(
    proto_report_pb.DownloadResponse,
    (request: proto_report_pb.DownloadRequest) => {
      return request.serializeBinary();
    },
    proto_report_pb.DownloadResponse.deserializeBinary
  );

  downloadReport(
    request: proto_report_pb.DownloadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_report_pb.DownloadResponse>;

  downloadReport(
    request: proto_report_pb.DownloadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: proto_report_pb.DownloadResponse) => void): grpcWeb.ClientReadableStream<proto_report_pb.DownloadResponse>;

  downloadReport(
    request: proto_report_pb.DownloadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: proto_report_pb.DownloadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ReportService/DownloadReport',
        request,
        metadata || {},
        this.methodInfoDownloadReport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ReportService/DownloadReport',
    request,
    metadata || {},
    this.methodInfoDownloadReport);
  }

}

