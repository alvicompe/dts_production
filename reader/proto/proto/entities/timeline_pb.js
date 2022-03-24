// source: proto/entities/timeline.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_entities_event_state_pb = require('../../proto/entities/event_state_pb.js');
goog.object.extend(proto, proto_entities_event_state_pb);
var proto_enums_event_enums_pb = require('../../proto/enums/event.enums_pb.js');
goog.object.extend(proto, proto_enums_event_enums_pb);
var proto_enums_shift_enums_pb = require('../../proto/enums/shift.enums_pb.js');
goog.object.extend(proto, proto_enums_shift_enums_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.pb.Timeline', null, global);
goog.exportSymbol('proto.pb.Timeline.StateTimeline', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.Timeline = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.Timeline, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Timeline.displayName = 'proto.pb.Timeline';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.Timeline.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Timeline.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Timeline} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Timeline.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceAlias: jspb.Message.getFieldWithDefault(msg, 3, ""),
    initialHourmeter: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    finalHourmeter: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    initialState: jspb.Message.getFieldWithDefault(msg, 6, 0),
    finalState: jspb.Message.getFieldWithDefault(msg, 7, 0),
    initialEventState: (f = msg.getInitialEventState()) && proto_entities_event_state_pb.EventState.toObject(includeInstance, f),
    finalEventState: (f = msg.getFinalEventState()) && proto_entities_event_state_pb.EventState.toObject(includeInstance, f),
    initialTime: (f = msg.getInitialTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    finalTime: (f = msg.getFinalTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    durationTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    shiftDate: (f = msg.getShiftDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    shift: jspb.Message.getFieldWithDefault(msg, 14, 0),
    stateRegister: jspb.Message.getFieldWithDefault(msg, 15, 0),
    adjustment: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    status: jspb.Message.getBooleanFieldWithDefault(msg, 17, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.Timeline}
 */
proto.pb.Timeline.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Timeline;
  return proto.pb.Timeline.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Timeline} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Timeline}
 */
proto.pb.Timeline.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceAlias(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setInitialHourmeter(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFinalHourmeter(value);
      break;
    case 6:
      var value = /** @type {!proto.pb.EnumEvent} */ (reader.readEnum());
      msg.setInitialState(value);
      break;
    case 7:
      var value = /** @type {!proto.pb.EnumEvent} */ (reader.readEnum());
      msg.setFinalState(value);
      break;
    case 8:
      var value = new proto_entities_event_state_pb.EventState;
      reader.readMessage(value,proto_entities_event_state_pb.EventState.deserializeBinaryFromReader);
      msg.setInitialEventState(value);
      break;
    case 9:
      var value = new proto_entities_event_state_pb.EventState;
      reader.readMessage(value,proto_entities_event_state_pb.EventState.deserializeBinaryFromReader);
      msg.setFinalEventState(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setInitialTime(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinalTime(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationTime(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setShiftDate(value);
      break;
    case 14:
      var value = /** @type {!proto.pb.Shift} */ (reader.readEnum());
      msg.setShift(value);
      break;
    case 15:
      var value = /** @type {!proto.pb.Timeline.StateTimeline} */ (reader.readEnum());
      msg.setStateRegister(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAdjustment(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.Timeline.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Timeline.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Timeline} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Timeline.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeviceAlias();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInitialHourmeter();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getFinalHourmeter();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getInitialState();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getFinalState();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getInitialEventState();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_entities_event_state_pb.EventState.serializeBinaryToWriter
    );
  }
  f = message.getFinalEventState();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_entities_event_state_pb.EventState.serializeBinaryToWriter
    );
  }
  f = message.getInitialTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFinalTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDurationTime();
  if (f !== 0.0) {
    writer.writeFloat(
      12,
      f
    );
  }
  f = message.getShiftDate();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getShift();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getStateRegister();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getAdjustment();
  if (f !== 0.0) {
    writer.writeFloat(
      16,
      f
    );
  }
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.Timeline.StateTimeline = {
  UNKNOWN: 0,
  IN_PROGRESS: 1,
  CLOSED: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.Timeline.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device_id = 2;
 * @return {string}
 */
proto.pb.Timeline.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string device_alias = 3;
 * @return {string}
 */
proto.pb.Timeline.prototype.getDeviceAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setDeviceAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float initial_hourmeter = 4;
 * @return {number}
 */
proto.pb.Timeline.prototype.getInitialHourmeter = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setInitialHourmeter = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float final_hourmeter = 5;
 * @return {number}
 */
proto.pb.Timeline.prototype.getFinalHourmeter = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setFinalHourmeter = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional EnumEvent initial_state = 6;
 * @return {!proto.pb.EnumEvent}
 */
proto.pb.Timeline.prototype.getInitialState = function() {
  return /** @type {!proto.pb.EnumEvent} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.pb.EnumEvent} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setInitialState = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional EnumEvent final_state = 7;
 * @return {!proto.pb.EnumEvent}
 */
proto.pb.Timeline.prototype.getFinalState = function() {
  return /** @type {!proto.pb.EnumEvent} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.pb.EnumEvent} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setFinalState = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional EventState initial_event_state = 8;
 * @return {?proto.pb.EventState}
 */
proto.pb.Timeline.prototype.getInitialEventState = function() {
  return /** @type{?proto.pb.EventState} */ (
    jspb.Message.getWrapperField(this, proto_entities_event_state_pb.EventState, 8));
};


/**
 * @param {?proto.pb.EventState|undefined} value
 * @return {!proto.pb.Timeline} returns this
*/
proto.pb.Timeline.prototype.setInitialEventState = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.clearInitialEventState = function() {
  return this.setInitialEventState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Timeline.prototype.hasInitialEventState = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional EventState final_event_state = 9;
 * @return {?proto.pb.EventState}
 */
proto.pb.Timeline.prototype.getFinalEventState = function() {
  return /** @type{?proto.pb.EventState} */ (
    jspb.Message.getWrapperField(this, proto_entities_event_state_pb.EventState, 9));
};


/**
 * @param {?proto.pb.EventState|undefined} value
 * @return {!proto.pb.Timeline} returns this
*/
proto.pb.Timeline.prototype.setFinalEventState = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.clearFinalEventState = function() {
  return this.setFinalEventState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Timeline.prototype.hasFinalEventState = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp initial_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.Timeline.prototype.getInitialTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.Timeline} returns this
*/
proto.pb.Timeline.prototype.setInitialTime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.clearInitialTime = function() {
  return this.setInitialTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Timeline.prototype.hasInitialTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp final_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.Timeline.prototype.getFinalTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.Timeline} returns this
*/
proto.pb.Timeline.prototype.setFinalTime = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.clearFinalTime = function() {
  return this.setFinalTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Timeline.prototype.hasFinalTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional float duration_time = 12;
 * @return {number}
 */
proto.pb.Timeline.prototype.getDurationTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setDurationTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp shift_date = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.Timeline.prototype.getShiftDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.Timeline} returns this
*/
proto.pb.Timeline.prototype.setShiftDate = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.clearShiftDate = function() {
  return this.setShiftDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Timeline.prototype.hasShiftDate = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Shift shift = 14;
 * @return {!proto.pb.Shift}
 */
proto.pb.Timeline.prototype.getShift = function() {
  return /** @type {!proto.pb.Shift} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.pb.Shift} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setShift = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional StateTimeline state_register = 15;
 * @return {!proto.pb.Timeline.StateTimeline}
 */
proto.pb.Timeline.prototype.getStateRegister = function() {
  return /** @type {!proto.pb.Timeline.StateTimeline} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.pb.Timeline.StateTimeline} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setStateRegister = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional float adjustment = 16;
 * @return {number}
 */
proto.pb.Timeline.prototype.getAdjustment = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setAdjustment = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional bool status = 17;
 * @return {boolean}
 */
proto.pb.Timeline.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.Timeline} returns this
 */
proto.pb.Timeline.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


goog.object.extend(exports, proto.pb);
