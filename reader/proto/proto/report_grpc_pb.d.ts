// package: pb
// file: proto/report.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_report_pb from "../proto/report_pb";
import * as proto_cycle_pb from "../proto/cycle_pb";
import * as proto_truck_pb from "../proto/truck_pb";
import * as proto_excavator_pb from "../proto/excavator_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IReportServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrievePerformancePerHourReport: IReportServiceService_IRetrievePerformancePerHourReport;
    downloadReport: IReportServiceService_IDownloadReport;
}

interface IReportServiceService_IRetrievePerformancePerHourReport extends grpc.MethodDefinition<proto_report_pb.ReportRequest, proto_report_pb.ReportPerformancePerHourResponse> {
    path: "/pb.ReportService/RetrievePerformancePerHourReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_report_pb.ReportRequest>;
    requestDeserialize: grpc.deserialize<proto_report_pb.ReportRequest>;
    responseSerialize: grpc.serialize<proto_report_pb.ReportPerformancePerHourResponse>;
    responseDeserialize: grpc.deserialize<proto_report_pb.ReportPerformancePerHourResponse>;
}
interface IReportServiceService_IDownloadReport extends grpc.MethodDefinition<proto_report_pb.DownloadRequest, proto_report_pb.DownloadResponse> {
    path: "/pb.ReportService/DownloadReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_report_pb.DownloadRequest>;
    requestDeserialize: grpc.deserialize<proto_report_pb.DownloadRequest>;
    responseSerialize: grpc.serialize<proto_report_pb.DownloadResponse>;
    responseDeserialize: grpc.deserialize<proto_report_pb.DownloadResponse>;
}

export const ReportServiceService: IReportServiceService;

export interface IReportServiceServer {
    retrievePerformancePerHourReport: grpc.handleUnaryCall<proto_report_pb.ReportRequest, proto_report_pb.ReportPerformancePerHourResponse>;
    downloadReport: grpc.handleUnaryCall<proto_report_pb.DownloadRequest, proto_report_pb.DownloadResponse>;
}

export interface IReportServiceClient {
    retrievePerformancePerHourReport(request: proto_report_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: proto_report_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    retrievePerformancePerHourReport(request: proto_report_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_report_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    retrievePerformancePerHourReport(request: proto_report_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_report_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    downloadReport(request: proto_report_pb.DownloadRequest, callback: (error: grpc.ServiceError | null, response: proto_report_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    downloadReport(request: proto_report_pb.DownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_report_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    downloadReport(request: proto_report_pb.DownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_report_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
}

export class ReportServiceClient extends grpc.Client implements IReportServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrievePerformancePerHourReport(request: proto_report_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: proto_report_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    public retrievePerformancePerHourReport(request: proto_report_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_report_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    public retrievePerformancePerHourReport(request: proto_report_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_report_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    public downloadReport(request: proto_report_pb.DownloadRequest, callback: (error: grpc.ServiceError | null, response: proto_report_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public downloadReport(request: proto_report_pb.DownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_report_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public downloadReport(request: proto_report_pb.DownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_report_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
}
