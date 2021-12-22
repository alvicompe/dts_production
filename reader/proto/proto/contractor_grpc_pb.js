// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_contractor_pb = require('../proto/contractor_pb.js');

function serialize_pb_ContractorRequest(arg) {
  if (!(arg instanceof proto_contractor_pb.ContractorRequest)) {
    throw new Error('Expected argument of type pb.ContractorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ContractorRequest(buffer_arg) {
  return proto_contractor_pb.ContractorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ContractorResponse(arg) {
  if (!(arg instanceof proto_contractor_pb.ContractorResponse)) {
    throw new Error('Expected argument of type pb.ContractorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ContractorResponse(buffer_arg) {
  return proto_contractor_pb.ContractorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ContractorsResponse(arg) {
  if (!(arg instanceof proto_contractor_pb.ContractorsResponse)) {
    throw new Error('Expected argument of type pb.ContractorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ContractorsResponse(buffer_arg) {
  return proto_contractor_pb.ContractorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContractorServiceService = exports.ContractorServiceService = {
  createContractor: {
    path: '/pb.ContractorService/CreateContractor',
    requestStream: false,
    responseStream: false,
    requestType: proto_contractor_pb.ContractorRequest,
    responseType: proto_contractor_pb.ContractorResponse,
    requestSerialize: serialize_pb_ContractorRequest,
    requestDeserialize: deserialize_pb_ContractorRequest,
    responseSerialize: serialize_pb_ContractorResponse,
    responseDeserialize: deserialize_pb_ContractorResponse,
  },
  retrieveContractor: {
    path: '/pb.ContractorService/RetrieveContractor',
    requestStream: false,
    responseStream: false,
    requestType: proto_contractor_pb.ContractorRequest,
    responseType: proto_contractor_pb.ContractorResponse,
    requestSerialize: serialize_pb_ContractorRequest,
    requestDeserialize: deserialize_pb_ContractorRequest,
    responseSerialize: serialize_pb_ContractorResponse,
    responseDeserialize: deserialize_pb_ContractorResponse,
  },
  retrieveContractors: {
    path: '/pb.ContractorService/RetrieveContractors',
    requestStream: false,
    responseStream: false,
    requestType: proto_contractor_pb.ContractorRequest,
    responseType: proto_contractor_pb.ContractorsResponse,
    requestSerialize: serialize_pb_ContractorRequest,
    requestDeserialize: deserialize_pb_ContractorRequest,
    responseSerialize: serialize_pb_ContractorsResponse,
    responseDeserialize: deserialize_pb_ContractorsResponse,
  },
  updateContractor: {
    path: '/pb.ContractorService/UpdateContractor',
    requestStream: false,
    responseStream: false,
    requestType: proto_contractor_pb.ContractorRequest,
    responseType: proto_contractor_pb.ContractorResponse,
    requestSerialize: serialize_pb_ContractorRequest,
    requestDeserialize: deserialize_pb_ContractorRequest,
    responseSerialize: serialize_pb_ContractorResponse,
    responseDeserialize: deserialize_pb_ContractorResponse,
  },
  deleteContractor: {
    path: '/pb.ContractorService/DeleteContractor',
    requestStream: false,
    responseStream: false,
    requestType: proto_contractor_pb.ContractorRequest,
    responseType: proto_contractor_pb.ContractorResponse,
    requestSerialize: serialize_pb_ContractorRequest,
    requestDeserialize: deserialize_pb_ContractorRequest,
    responseSerialize: serialize_pb_ContractorResponse,
    responseDeserialize: deserialize_pb_ContractorResponse,
  },
};

exports.ContractorServiceClient = grpc.makeGenericClientConstructor(ContractorServiceService);
