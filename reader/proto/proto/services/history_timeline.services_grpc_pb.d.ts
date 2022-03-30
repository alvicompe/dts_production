// package: pb
// file: proto/services/history_timeline.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_history_timeline_services_pb from "../../proto/services/history_timeline.services_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";
import * as proto_enums_asset_type_enums_pb from "../../proto/enums/asset_type.enums_pb";
import * as proto_entities_history_timeline_pb from "../../proto/entities/history_timeline_pb";

interface IHistoryTimelineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    filterHistoryTimeline: IHistoryTimelineServiceService_IFilterHistoryTimeline;
}

interface IHistoryTimelineServiceService_IFilterHistoryTimeline extends grpc.MethodDefinition<proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest, proto_services_history_timeline_services_pb.ListHistoryTimelineResponse> {
    path: string; // "/pb.HistoryTimelineService/FilterHistoryTimeline"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest>;
    requestDeserialize: grpc.deserialize<proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest>;
    responseSerialize: grpc.serialize<proto_services_history_timeline_services_pb.ListHistoryTimelineResponse>;
    responseDeserialize: grpc.deserialize<proto_services_history_timeline_services_pb.ListHistoryTimelineResponse>;
}

export const HistoryTimelineServiceService: IHistoryTimelineServiceService;

export interface IHistoryTimelineServiceServer {
    filterHistoryTimeline: grpc.handleUnaryCall<proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest, proto_services_history_timeline_services_pb.ListHistoryTimelineResponse>;
}

export interface IHistoryTimelineServiceClient {
    filterHistoryTimeline(request: proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_history_timeline_services_pb.ListHistoryTimelineResponse) => void): grpc.ClientUnaryCall;
    filterHistoryTimeline(request: proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_history_timeline_services_pb.ListHistoryTimelineResponse) => void): grpc.ClientUnaryCall;
    filterHistoryTimeline(request: proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_history_timeline_services_pb.ListHistoryTimelineResponse) => void): grpc.ClientUnaryCall;
}

export class HistoryTimelineServiceClient extends grpc.Client implements IHistoryTimelineServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public filterHistoryTimeline(request: proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest, callback: (error: grpc.ServiceError | null, response: proto_services_history_timeline_services_pb.ListHistoryTimelineResponse) => void): grpc.ClientUnaryCall;
    public filterHistoryTimeline(request: proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_history_timeline_services_pb.ListHistoryTimelineResponse) => void): grpc.ClientUnaryCall;
    public filterHistoryTimeline(request: proto_services_history_timeline_services_pb.FilterHistoryTimelineRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_history_timeline_services_pb.ListHistoryTimelineResponse) => void): grpc.ClientUnaryCall;
}
