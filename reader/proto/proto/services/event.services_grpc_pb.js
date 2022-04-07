// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_event_services_pb = require('../../proto/services/event.services_pb.js');
var proto_entities_event_pb = require('../../proto/entities/event_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_EventRequest(arg) {
  if (!(arg instanceof proto_services_event_services_pb.EventRequest)) {
    throw new Error('Expected argument of type pb.EventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_EventRequest(buffer_arg) {
  return proto_services_event_services_pb.EventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_EventResponse(arg) {
  if (!(arg instanceof proto_services_event_services_pb.EventResponse)) {
    throw new Error('Expected argument of type pb.EventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_EventResponse(buffer_arg) {
  return proto_services_event_services_pb.EventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ListEventResponse(arg) {
  if (!(arg instanceof proto_services_event_services_pb.ListEventResponse)) {
    throw new Error('Expected argument of type pb.ListEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ListEventResponse(buffer_arg) {
  return proto_services_event_services_pb.ListEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventServiceService = exports.EventServiceService = {
  retrieveEvent: {
    path: '/pb.EventService/RetrieveEvent',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_event_services_pb.EventRequest,
    responseType: proto_services_event_services_pb.EventResponse,
    requestSerialize: serialize_pb_EventRequest,
    requestDeserialize: deserialize_pb_EventRequest,
    responseSerialize: serialize_pb_EventResponse,
    responseDeserialize: deserialize_pb_EventResponse,
  },
  retrieveEvents: {
    path: '/pb.EventService/RetrieveEvents',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_services_event_services_pb.ListEventResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_ListEventResponse,
    responseDeserialize: deserialize_pb_ListEventResponse,
  },
  createEvent: {
    path: '/pb.EventService/CreateEvent',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_event_services_pb.EventRequest,
    responseType: proto_services_event_services_pb.EventResponse,
    requestSerialize: serialize_pb_EventRequest,
    requestDeserialize: deserialize_pb_EventRequest,
    responseSerialize: serialize_pb_EventResponse,
    responseDeserialize: deserialize_pb_EventResponse,
  },
  updateEvent: {
    path: '/pb.EventService/UpdateEvent',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_event_services_pb.EventRequest,
    responseType: proto_services_event_services_pb.EventResponse,
    requestSerialize: serialize_pb_EventRequest,
    requestDeserialize: deserialize_pb_EventRequest,
    responseSerialize: serialize_pb_EventResponse,
    responseDeserialize: deserialize_pb_EventResponse,
  },
  deleteEvent: {
    path: '/pb.EventService/DeleteEvent',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_event_services_pb.EventRequest,
    responseType: proto_services_event_services_pb.EventResponse,
    requestSerialize: serialize_pb_EventRequest,
    requestDeserialize: deserialize_pb_EventRequest,
    responseSerialize: serialize_pb_EventResponse,
    responseDeserialize: deserialize_pb_EventResponse,
  },
};

exports.EventServiceClient = grpc.makeGenericClientConstructor(EventServiceService);
