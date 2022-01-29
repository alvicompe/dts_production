// package: pb
// file: proto/report_timeline.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_report_timeline_pb from "../proto/report_timeline_pb";
import * as proto_report_pb from "../proto/report_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IReportTimelineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    kpiDashboard: IReportTimelineServiceService_IkpiDashboard;
}

interface IReportTimelineServiceService_IkpiDashboard extends grpc.MethodDefinition<proto_report_pb.ReportRequest, proto_report_timeline_pb.kpiDashboardResponse> {
    path: string; // "/pb.ReportTimelineService/kpiDashboard"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_report_pb.ReportRequest>;
    requestDeserialize: grpc.deserialize<proto_report_pb.ReportRequest>;
    responseSerialize: grpc.serialize<proto_report_timeline_pb.kpiDashboardResponse>;
    responseDeserialize: grpc.deserialize<proto_report_timeline_pb.kpiDashboardResponse>;
}

export const ReportTimelineServiceService: IReportTimelineServiceService;

export interface IReportTimelineServiceServer {
    kpiDashboard: grpc.handleUnaryCall<proto_report_pb.ReportRequest, proto_report_timeline_pb.kpiDashboardResponse>;
}

export interface IReportTimelineServiceClient {
    kpiDashboard(request: proto_report_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: proto_report_timeline_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    kpiDashboard(request: proto_report_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_report_timeline_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    kpiDashboard(request: proto_report_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_report_timeline_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
}

export class ReportTimelineServiceClient extends grpc.Client implements IReportTimelineServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public kpiDashboard(request: proto_report_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: proto_report_timeline_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    public kpiDashboard(request: proto_report_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_report_timeline_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
    public kpiDashboard(request: proto_report_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_report_timeline_pb.kpiDashboardResponse) => void): grpc.ClientUnaryCall;
}
