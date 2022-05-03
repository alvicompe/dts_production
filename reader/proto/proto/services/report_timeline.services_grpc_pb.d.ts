// package: pb
// file: proto/services/report_timeline.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_report_timeline_services_pb from "../../proto/services/report_timeline.services_pb";
import * as proto_services_report_services_pb from "../../proto/services/report.services_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";

interface IReportTimelineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    kpiDashboard: IReportTimelineServiceService_IkpiDashboard;
    resumeTimelineByShift: IReportTimelineServiceService_IResumeTimelineByShift;
    historyTimelineByShift: IReportTimelineServiceService_IHistoryTimelineByShift;
}

interface IReportTimelineServiceService_IkpiDashboard extends grpc.MethodDefinition<proto_services_report_services_pb.ReportRequest, proto_services_report_timeline_services_pb.kpiDashboardResponse> {
    path: string; // "/pb.ReportTimelineService/kpiDashboard"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_report_services_pb.ReportRequest>;
    requestDeserialize: grpc.deserialize<proto_services_report_services_pb.ReportRequest>;
    responseSerialize: grpc.serialize<proto_services_report_timeline_services_pb.kpiDashboardResponse>;
    responseDeserialize: grpc.deserialize<proto_services_report_timeline_services_pb.kpiDashboardResponse>;
}
interface IReportTimelineServiceService_IResumeTimelineByShift extends grpc.MethodDefinition<proto_services_report_timeline_services_pb.DownloadTimelineRequest, proto_services_report_services_pb.DownloadResponse> {
    path: string; // "/pb.ReportTimelineService/ResumeTimelineByShift"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_report_timeline_services_pb.DownloadTimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_report_timeline_services_pb.DownloadTimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_report_services_pb.DownloadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_report_services_pb.DownloadResponse>;
}
interface IReportTimelineServiceService_IHistoryTimelineByShift extends grpc.MethodDefinition<proto_services_report_timeline_services_pb.DownloadTimelineRequest, proto_services_report_services_pb.DownloadResponse> {
    path: string; // "/pb.ReportTimelineService/HistoryTimelineByShift"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_report_timeline_services_pb.DownloadTimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_report_timeline_services_pb.DownloadTimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_report_services_pb.DownloadResponse>;
    responseDeserialize: grpc.deserialize<proto_services_report_services_pb.DownloadResponse>;
}

export const ReportTimelineServiceService: IReportTimelineServiceService;

export interface IReportTimelineServiceServer {
    kpiDashboard: grpc.handleUnaryCall<proto_services_report_services_pb.ReportRequest, proto_services_report_timeline_services_pb.kpiDashboardResponse>;
    resumeTimelineByShift: grpc.handleUnaryCall<proto_services_report_timeline_services_pb.DownloadTimelineRequest, proto_services_report_services_pb.DownloadResponse>;
    historyTimelineByShift: grpc.handleUnaryCall<proto_services_report_timeline_services_pb.DownloadTimelineRequest, proto_services_report_services_pb.DownloadResponse>;
}

export interface IReportTimelineServiceClient {
    kpiDashboard(request: proto_services_report_services_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    kpiDashboard(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    kpiDashboard(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    resumeTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    resumeTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    resumeTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    historyTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    historyTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    historyTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
}

export class ReportTimelineServiceClient extends grpc.Client implements IReportTimelineServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public kpiDashboard(request: proto_services_report_services_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    public kpiDashboard(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    public kpiDashboard(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    public resumeTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public resumeTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public resumeTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public historyTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public historyTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public historyTimelineByShift(request: proto_services_report_timeline_services_pb.DownloadTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_services_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
}
