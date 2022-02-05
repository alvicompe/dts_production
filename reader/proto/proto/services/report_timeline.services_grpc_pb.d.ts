// package: pb
// file: proto/services/report_timeline.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_report_timeline_services_pb from "../../proto/services/report_timeline.services_pb";
import * as proto_services_report_services_pb from "../../proto/services/report.services_pb";

interface IReportTimelineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    kpiDashboard: IReportTimelineServiceService_IkpiDashboard;
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

export const ReportTimelineServiceService: IReportTimelineServiceService;

export interface IReportTimelineServiceServer {
    kpiDashboard: grpc.handleUnaryCall<proto_services_report_services_pb.ReportRequest, proto_services_report_timeline_services_pb.kpiDashboardResponse>;
}

export interface IReportTimelineServiceClient {
    kpiDashboard(request: proto_services_report_services_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    kpiDashboard(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    kpiDashboard(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
}

export class ReportTimelineServiceClient extends grpc.Client implements IReportTimelineServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public kpiDashboard(request: proto_services_report_services_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    public kpiDashboard(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    public kpiDashboard(request: proto_services_report_services_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_timeline_services_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
}