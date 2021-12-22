// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_bench_pb = require('../proto/bench_pb.js');
var proto_project_pb = require('../proto/project_pb.js');

function serialize_pb_BenchRequest(arg) {
  if (!(arg instanceof proto_bench_pb.BenchRequest)) {
    throw new Error('Expected argument of type pb.BenchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_BenchRequest(buffer_arg) {
  return proto_bench_pb.BenchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_BenchResponse(arg) {
  if (!(arg instanceof proto_bench_pb.BenchResponse)) {
    throw new Error('Expected argument of type pb.BenchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_BenchResponse(buffer_arg) {
  return proto_bench_pb.BenchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_BenchesResponse(arg) {
  if (!(arg instanceof proto_bench_pb.BenchesResponse)) {
    throw new Error('Expected argument of type pb.BenchesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_BenchesResponse(buffer_arg) {
  return proto_bench_pb.BenchesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BenchServiceService = exports.BenchServiceService = {
  createBench: {
    path: '/pb.BenchService/CreateBench',
    requestStream: false,
    responseStream: false,
    requestType: proto_bench_pb.BenchRequest,
    responseType: proto_bench_pb.BenchResponse,
    requestSerialize: serialize_pb_BenchRequest,
    requestDeserialize: deserialize_pb_BenchRequest,
    responseSerialize: serialize_pb_BenchResponse,
    responseDeserialize: deserialize_pb_BenchResponse,
  },
  retrieveBench: {
    path: '/pb.BenchService/RetrieveBench',
    requestStream: false,
    responseStream: false,
    requestType: proto_bench_pb.BenchRequest,
    responseType: proto_bench_pb.BenchResponse,
    requestSerialize: serialize_pb_BenchRequest,
    requestDeserialize: deserialize_pb_BenchRequest,
    responseSerialize: serialize_pb_BenchResponse,
    responseDeserialize: deserialize_pb_BenchResponse,
  },
  retrieveBenches: {
    path: '/pb.BenchService/RetrieveBenches',
    requestStream: false,
    responseStream: false,
    requestType: proto_bench_pb.BenchRequest,
    responseType: proto_bench_pb.BenchesResponse,
    requestSerialize: serialize_pb_BenchRequest,
    requestDeserialize: deserialize_pb_BenchRequest,
    responseSerialize: serialize_pb_BenchesResponse,
    responseDeserialize: deserialize_pb_BenchesResponse,
  },
  updateBench: {
    path: '/pb.BenchService/UpdateBench',
    requestStream: false,
    responseStream: false,
    requestType: proto_bench_pb.BenchRequest,
    responseType: proto_bench_pb.BenchResponse,
    requestSerialize: serialize_pb_BenchRequest,
    requestDeserialize: deserialize_pb_BenchRequest,
    responseSerialize: serialize_pb_BenchResponse,
    responseDeserialize: deserialize_pb_BenchResponse,
  },
  deleteBench: {
    path: '/pb.BenchService/DeleteBench',
    requestStream: false,
    responseStream: false,
    requestType: proto_bench_pb.BenchRequest,
    responseType: proto_bench_pb.BenchResponse,
    requestSerialize: serialize_pb_BenchRequest,
    requestDeserialize: deserialize_pb_BenchRequest,
    responseSerialize: serialize_pb_BenchResponse,
    responseDeserialize: deserialize_pb_BenchResponse,
  },
};

exports.BenchServiceClient = grpc.makeGenericClientConstructor(BenchServiceService);
