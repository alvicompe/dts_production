// package: pb
// file: proto/services/cycle.services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_cycle_services_pb from "../../proto/services/cycle.services_pb";
import * as proto_entities_cycle_pb from "../../proto/entities/cycle_pb";
import * as proto_entities_excavator_pb from "../../proto/entities/excavator_pb";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_enums_shift_enums_pb from "../../proto/enums/shift.enums_pb";

interface ICycleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCycle: ICycleServiceService_ICreateCycle;
    retrieveCycleListByExcavatorByShift: ICycleServiceService_IRetrieveCycleListByExcavatorByShift;
    retrieveCycleListByTruckByShift: ICycleServiceService_IRetrieveCycleListByTruckByShift;
    retrieveCycle: ICycleServiceService_IRetrieveCycle;
    retrieveCycles: ICycleServiceService_IRetrieveCycles;
    updateCycle: ICycleServiceService_IUpdateCycle;
    deleteCycle: ICycleServiceService_IDeleteCycle;
}

interface ICycleServiceService_ICreateCycle extends grpc.MethodDefinition<proto_services_cycle_services_pb.CycleRequest, proto_services_cycle_services_pb.CycleResponse> {
    path: string; // "/pb.CycleService/CreateCycle"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cycle_services_pb.CycleRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CycleRequest>;
    responseSerialize: grpc.serialize<proto_services_cycle_services_pb.CycleResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CycleResponse>;
}
interface ICycleServiceService_IRetrieveCycleListByExcavatorByShift extends grpc.MethodDefinition<proto_services_cycle_services_pb.ExcavatorShiftRequest, proto_services_cycle_services_pb.CyclesResponse> {
    path: string; // "/pb.CycleService/RetrieveCycleListByExcavatorByShift"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cycle_services_pb.ExcavatorShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cycle_services_pb.ExcavatorShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_cycle_services_pb.CyclesResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CyclesResponse>;
}
interface ICycleServiceService_IRetrieveCycleListByTruckByShift extends grpc.MethodDefinition<proto_services_cycle_services_pb.TruckShiftRequest, proto_services_cycle_services_pb.CyclesResponse> {
    path: string; // "/pb.CycleService/RetrieveCycleListByTruckByShift"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cycle_services_pb.TruckShiftRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cycle_services_pb.TruckShiftRequest>;
    responseSerialize: grpc.serialize<proto_services_cycle_services_pb.CyclesResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CyclesResponse>;
}
interface ICycleServiceService_IRetrieveCycle extends grpc.MethodDefinition<proto_services_cycle_services_pb.CycleRequest, proto_services_cycle_services_pb.CycleResponse> {
    path: string; // "/pb.CycleService/RetrieveCycle"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cycle_services_pb.CycleRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CycleRequest>;
    responseSerialize: grpc.serialize<proto_services_cycle_services_pb.CycleResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CycleResponse>;
}
interface ICycleServiceService_IRetrieveCycles extends grpc.MethodDefinition<proto_services_cycle_services_pb.CycleRequest, proto_services_cycle_services_pb.CyclesResponse> {
    path: string; // "/pb.CycleService/RetrieveCycles"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cycle_services_pb.CycleRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CycleRequest>;
    responseSerialize: grpc.serialize<proto_services_cycle_services_pb.CyclesResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CyclesResponse>;
}
interface ICycleServiceService_IUpdateCycle extends grpc.MethodDefinition<proto_services_cycle_services_pb.CycleRequest, proto_services_cycle_services_pb.CycleResponse> {
    path: string; // "/pb.CycleService/UpdateCycle"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cycle_services_pb.CycleRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CycleRequest>;
    responseSerialize: grpc.serialize<proto_services_cycle_services_pb.CycleResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CycleResponse>;
}
interface ICycleServiceService_IDeleteCycle extends grpc.MethodDefinition<proto_services_cycle_services_pb.CycleRequest, proto_services_cycle_services_pb.CycleResponse> {
    path: string; // "/pb.CycleService/DeleteCycle"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_cycle_services_pb.CycleRequest>;
    requestDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CycleRequest>;
    responseSerialize: grpc.serialize<proto_services_cycle_services_pb.CycleResponse>;
    responseDeserialize: grpc.deserialize<proto_services_cycle_services_pb.CycleResponse>;
}

export const CycleServiceService: ICycleServiceService;

export interface ICycleServiceServer {
    createCycle: grpc.handleUnaryCall<proto_services_cycle_services_pb.CycleRequest, proto_services_cycle_services_pb.CycleResponse>;
    retrieveCycleListByExcavatorByShift: grpc.handleUnaryCall<proto_services_cycle_services_pb.ExcavatorShiftRequest, proto_services_cycle_services_pb.CyclesResponse>;
    retrieveCycleListByTruckByShift: grpc.handleUnaryCall<proto_services_cycle_services_pb.TruckShiftRequest, proto_services_cycle_services_pb.CyclesResponse>;
    retrieveCycle: grpc.handleUnaryCall<proto_services_cycle_services_pb.CycleRequest, proto_services_cycle_services_pb.CycleResponse>;
    retrieveCycles: grpc.handleUnaryCall<proto_services_cycle_services_pb.CycleRequest, proto_services_cycle_services_pb.CyclesResponse>;
    updateCycle: grpc.handleUnaryCall<proto_services_cycle_services_pb.CycleRequest, proto_services_cycle_services_pb.CycleResponse>;
    deleteCycle: grpc.handleUnaryCall<proto_services_cycle_services_pb.CycleRequest, proto_services_cycle_services_pb.CycleResponse>;
}

export interface ICycleServiceClient {
    createCycle(request: proto_services_cycle_services_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    createCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    createCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    retrieveCycleListByExcavatorByShift(request: proto_services_cycle_services_pb.ExcavatorShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    retrieveCycleListByExcavatorByShift(request: proto_services_cycle_services_pb.ExcavatorShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    retrieveCycleListByExcavatorByShift(request: proto_services_cycle_services_pb.ExcavatorShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    retrieveCycleListByTruckByShift(request: proto_services_cycle_services_pb.TruckShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    retrieveCycleListByTruckByShift(request: proto_services_cycle_services_pb.TruckShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    retrieveCycleListByTruckByShift(request: proto_services_cycle_services_pb.TruckShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    retrieveCycle(request: proto_services_cycle_services_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    retrieveCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    retrieveCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    retrieveCycles(request: proto_services_cycle_services_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    retrieveCycles(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    retrieveCycles(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    updateCycle(request: proto_services_cycle_services_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    updateCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    updateCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    deleteCycle(request: proto_services_cycle_services_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    deleteCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    deleteCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
}

export class CycleServiceClient extends grpc.Client implements ICycleServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createCycle(request: proto_services_cycle_services_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public createCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public createCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycleListByExcavatorByShift(request: proto_services_cycle_services_pb.ExcavatorShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycleListByExcavatorByShift(request: proto_services_cycle_services_pb.ExcavatorShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycleListByExcavatorByShift(request: proto_services_cycle_services_pb.ExcavatorShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycleListByTruckByShift(request: proto_services_cycle_services_pb.TruckShiftRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycleListByTruckByShift(request: proto_services_cycle_services_pb.TruckShiftRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycleListByTruckByShift(request: proto_services_cycle_services_pb.TruckShiftRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycle(request: proto_services_cycle_services_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycles(request: proto_services_cycle_services_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycles(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public retrieveCycles(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CyclesResponse) => void): grpc.ClientUnaryCall;
    public updateCycle(request: proto_services_cycle_services_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public updateCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public updateCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public deleteCycle(request: proto_services_cycle_services_pb.CycleRequest, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public deleteCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
    public deleteCycle(request: proto_services_cycle_services_pb.CycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_cycle_services_pb.CycleResponse) => void): grpc.ClientUnaryCall;
}
