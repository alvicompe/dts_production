// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_event_state_services_pb = require('../../proto/services/event_state.services_pb.js');
var proto_entities_event_state_pb = require('../../proto/entities/event_state_pb.js');
var proto_enums_event_enums_pb = require('../../proto/enums/event.enums_pb.js');
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

function serialize_pb_EventStateByEventRequest(arg) {
  if (!(arg instanceof proto_services_event_state_services_pb.EventStateByEventRequest)) {
    throw new Error('Expected argument of type pb.EventStateByEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_EventStateByEventRequest(buffer_arg) {
  return proto_services_event_state_services_pb.EventStateByEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_EventStateRequest(arg) {
  if (!(arg instanceof proto_services_event_state_services_pb.EventStateRequest)) {
    throw new Error('Expected argument of type pb.EventStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_EventStateRequest(buffer_arg) {
  return proto_services_event_state_services_pb.EventStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_EventStateResponse(arg) {
  if (!(arg instanceof proto_services_event_state_services_pb.EventStateResponse)) {
    throw new Error('Expected argument of type pb.EventStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_EventStateResponse(buffer_arg) {
  return proto_services_event_state_services_pb.EventStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ListEventStateResponse(arg) {
  if (!(arg instanceof proto_services_event_state_services_pb.ListEventStateResponse)) {
    throw new Error('Expected argument of type pb.ListEventStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ListEventStateResponse(buffer_arg) {
  return proto_services_event_state_services_pb.ListEventStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventStateServiceService = exports.EventStateServiceService = {
  retrieveEventState: {
    path: '/pb.EventStateService/RetrieveEventState',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_event_state_services_pb.EventStateRequest,
    responseType: proto_services_event_state_services_pb.EventStateResponse,
    requestSerialize: serialize_pb_EventStateRequest,
    requestDeserialize: deserialize_pb_EventStateRequest,
    responseSerialize: serialize_pb_EventStateResponse,
    responseDeserialize: deserialize_pb_EventStateResponse,
  },
  retrieveEventStates: {
    path: '/pb.EventStateService/RetrieveEventStates',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_services_event_state_services_pb.ListEventStateResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_ListEventStateResponse,
    responseDeserialize: deserialize_pb_ListEventStateResponse,
  },
  retrieveEventStateByEvent: {
    path: '/pb.EventStateService/RetrieveEventStateByEvent',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_event_state_services_pb.EventStateByEventRequest,
    responseType: proto_services_event_state_services_pb.ListEventStateResponse,
    requestSerialize: serialize_pb_EventStateByEventRequest,
    requestDeserialize: deserialize_pb_EventStateByEventRequest,
    responseSerialize: serialize_pb_ListEventStateResponse,
    responseDeserialize: deserialize_pb_ListEventStateResponse,
  },
  createEventState: {
    path: '/pb.EventStateService/CreateEventState',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_event_state_services_pb.EventStateRequest,
    responseType: proto_services_event_state_services_pb.EventStateResponse,
    requestSerialize: serialize_pb_EventStateRequest,
    requestDeserialize: deserialize_pb_EventStateRequest,
    responseSerialize: serialize_pb_EventStateResponse,
    responseDeserialize: deserialize_pb_EventStateResponse,
  },
  updateEventState: {
    path: '/pb.EventStateService/UpdateEventState',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_event_state_services_pb.EventStateRequest,
    responseType: proto_services_event_state_services_pb.EventStateResponse,
    requestSerialize: serialize_pb_EventStateRequest,
    requestDeserialize: deserialize_pb_EventStateRequest,
    responseSerialize: serialize_pb_EventStateResponse,
    responseDeserialize: deserialize_pb_EventStateResponse,
  },
  deleteEventState: {
    path: '/pb.EventStateService/DeleteEventState',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_event_state_services_pb.EventStateRequest,
    responseType: proto_services_event_state_services_pb.EventStateResponse,
    requestSerialize: serialize_pb_EventStateRequest,
    requestDeserialize: deserialize_pb_EventStateRequest,
    responseSerialize: serialize_pb_EventStateResponse,
    responseDeserialize: deserialize_pb_EventStateResponse,
  },
};

exports.EventStateServiceClient = grpc.makeGenericClientConstructor(EventStateServiceService);
