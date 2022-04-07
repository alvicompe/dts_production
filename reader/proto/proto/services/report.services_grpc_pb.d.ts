// package: pb
// file: proto/services/report.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_report_services_pb from "../../proto/services/report.services_pb";
import * as proto_entities_report_pb from "../../proto/entities/report_pb";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IReportServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    retrievePerformancePerHourReport: IReportServiceService_IRetrievePerformancePerHourReport;
    downloadReport: IReportServiceService_IDownloadReport;
}

interface IReportServiceService_IRetrievePerformancePerHourReport extends grpc.MethodDefinition<proto_services_report_services_pb.ReportRequest, proto_services_report_services_pb.ReportPerformancePerHourResponse> {
    path: string; // "/pb.ReportService/RetrievePerformancePerHourReport"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_report_services_pb.ReportRequest>;
    requestDeserialize: grpc.deserialize<proto_services_report_services_pb.ReportRequest>;
    responseSerialize: grpc.serialize<proto_services_report_services_pb.ReportPerformancePerHourResponse>;
    responseDeserialize: grpc.deserialize<proto_services_report_services_pb.ReportPerformancePerHourResponse>;
}
interface IReportServiceService_IDownloadReport extends grpc.MethodDefinition<proto_services_report_services_pb.DownloadRequest, proto_services_report_services_pb.DownloadResponse> {
    path: string; // "/pb.ReportService/DownloadReport"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_report_services_pb.DownloadRequest>;
    requestDeserialize: grpc.deserialize<proto_services_report_services_pb.DownloadRequest>;
    responseSerialize: grpc.serialize<proto_services_report_services_pb.DownloadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_report_services_pb.DownloadResponse>;
}

export const ReportServiceService: IReportServiceService;

export interface IReportServiceServer {
    retrievePerformancePerHourReport: grpc.handleUnaryCall<proto_services_report_services_pb.ReportRequest, proto_services_report_services_pb.ReportPerformancePerHourResponse>;
    downloadReport: grpc.handleUnaryCall<proto_services_report_services_pb.DownloadRequest, proto_services_report_services_pb.DownloadResponse>;
}

export interface IReportServiceClient {
    retrievePerformancePerHourReport(request: proto_services_report_services_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    retrievePerformancePerHourReport(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    retrievePerformancePerHourReport(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    downloadReport(request: proto_services_report_services_pb.DownloadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    downloadReport(request: proto_services_report_services_pb.DownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    downloadReport(request: proto_services_report_services_pb.DownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
}

export class ReportServiceClient extends grpc.Client implements IReportServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public retrievePerformancePerHourReport(request: proto_services_report_services_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    public retrievePerformancePerHourReport(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    public retrievePerformancePerHourReport(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.ReportPerformancePerHourResponse) => void): grpc.ClientUnaryCall;
    public downloadReport(request: proto_services_report_services_pb.DownloadRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public downloadReport(request: proto_services_report_services_pb.DownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public downloadReport(request: proto_services_report_services_pb.DownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
}
