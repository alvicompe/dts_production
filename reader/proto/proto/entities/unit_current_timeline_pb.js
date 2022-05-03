// source: proto/entities/unit_current_timeline.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var proto_entities_timeline_pb = require('../../proto/entities/timeline_pb.js');
goog.object.extend(proto, proto_entities_timeline_pb);
var proto_entities_event_state_pb = require('../../proto/entities/event_state_pb.js');
goog.object.extend(proto, proto_entities_event_state_pb);
var proto_enums_event_enums_pb = require('../../proto/enums/event.enums_pb.js');
goog.object.extend(proto, proto_enums_event_enums_pb);
var proto_enums_asset_type_enums_pb = require('../../proto/enums/asset_type.enums_pb.js');
goog.object.extend(proto, proto_enums_asset_type_enums_pb);
var proto_enums_shift_enums_pb = require('../../proto/enums/shift.enums_pb.js');
goog.object.extend(proto, proto_enums_shift_enums_pb);
goog.exportSymbol('proto.pb.CurrentShift', null, global);
goog.exportSymbol('proto.pb.CurrentShift.State', null, global);
goog.exportSymbol('proto.pb.UnitCurrentTimeline', null, global);
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
proto.pb.CurrentShift = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CurrentShift, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CurrentShift.displayName = 'proto.pb.CurrentShift';
}
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
proto.pb.UnitCurrentTimeline = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.UnitCurrentTimeline.repeatedFields_, null);
};
goog.inherits(proto.pb.UnitCurrentTimeline, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UnitCurrentTimeline.displayName = 'proto.pb.UnitCurrentTimeline';
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
proto.pb.CurrentShift.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CurrentShift.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CurrentShift} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CurrentShift.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shiftDate: (f = msg.getShiftDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    shift: jspb.Message.getFieldWithDefault(msg, 3, 0),
    state: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.pb.CurrentShift}
 */
proto.pb.CurrentShift.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CurrentShift;
  return proto.pb.CurrentShift.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CurrentShift} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CurrentShift}
 */
proto.pb.CurrentShift.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setShiftDate(value);
      break;
    case 3:
      var value = /** @type {!proto.pb.Shift} */ (reader.readEnum());
      msg.setShift(value);
      break;
    case 4:
      var value = /** @type {!proto.pb.CurrentShift.State} */ (reader.readEnum());
      msg.setState(value);
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
proto.pb.CurrentShift.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CurrentShift.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CurrentShift} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CurrentShift.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShiftDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getShift();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.CurrentShift.State = {
  IN_PROGRESS: 0,
  CLOSED: 1
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.CurrentShift.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CurrentShift} returns this
 */
proto.pb.CurrentShift.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp shift_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CurrentShift.prototype.getShiftDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CurrentShift} returns this
*/
proto.pb.CurrentShift.prototype.setShiftDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CurrentShift} returns this
 */
proto.pb.CurrentShift.prototype.clearShiftDate = function() {
  return this.setShiftDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CurrentShift.prototype.hasShiftDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Shift shift = 3;
 * @return {!proto.pb.Shift}
 */
proto.pb.CurrentShift.prototype.getShift = function() {
  return /** @type {!proto.pb.Shift} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pb.Shift} value
 * @return {!proto.pb.CurrentShift} returns this
 */
proto.pb.CurrentShift.prototype.setShift = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional State state = 4;
 * @return {!proto.pb.CurrentShift.State}
 */
proto.pb.CurrentShift.prototype.getState = function() {
  return /** @type {!proto.pb.CurrentShift.State} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pb.CurrentShift.State} value
 * @return {!proto.pb.CurrentShift} returns this
 */
proto.pb.CurrentShift.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.UnitCurrentTimeline.repeatedFields_ = [10];



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
proto.pb.UnitCurrentTimeline.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UnitCurrentTimeline.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UnitCurrentTimeline} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UnitCurrentTimeline.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceAlias: jspb.Message.getFieldWithDefault(msg, 3, ""),
    currentTimeline: (f = msg.getCurrentTimeline()) && proto_entities_timeline_pb.Timeline.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 5, 0),
    eventState: (f = msg.getEventState()) && proto_entities_event_state_pb.EventState.toObject(includeInstance, f),
    shiftDate: (f = msg.getShiftDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    assetType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    historyShiftList: jspb.Message.toObjectList(msg.getHistoryShiftList(),
    proto_entities_timeline_pb.Timeline.toObject, includeInstance),
    shift: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.pb.UnitCurrentTimeline}
 */
proto.pb.UnitCurrentTimeline.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UnitCurrentTimeline;
  return proto.pb.UnitCurrentTimeline.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UnitCurrentTimeline} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UnitCurrentTimeline}
 */
proto.pb.UnitCurrentTimeline.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_entities_timeline_pb.Timeline;
      reader.readMessage(value,proto_entities_timeline_pb.Timeline.deserializeBinaryFromReader);
      msg.setCurrentTimeline(value);
      break;
    case 5:
      var value = /** @type {!proto.pb.EnumEvent} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 6:
      var value = new proto_entities_event_state_pb.EventState;
      reader.readMessage(value,proto_entities_event_state_pb.EventState.deserializeBinaryFromReader);
      msg.setEventState(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setShiftDate(value);
      break;
    case 9:
      var value = /** @type {!proto.pb.EnumAssetType} */ (reader.readEnum());
      msg.setAssetType(value);
      break;
    case 10:
      var value = new proto_entities_timeline_pb.Timeline;
      reader.readMessage(value,proto_entities_timeline_pb.Timeline.deserializeBinaryFromReader);
      msg.addHistoryShift(value);
      break;
    case 14:
      var value = /** @type {!proto.pb.Shift} */ (reader.readEnum());
      msg.setShift(value);
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
proto.pb.UnitCurrentTimeline.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UnitCurrentTimeline.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UnitCurrentTimeline} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UnitCurrentTimeline.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCurrentTimeline();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_entities_timeline_pb.Timeline.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getEventState();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_entities_event_state_pb.EventState.serializeBinaryToWriter
    );
  }
  f = message.getShiftDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAssetType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getHistoryShiftList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_entities_timeline_pb.Timeline.serializeBinaryToWriter
    );
  }
  f = message.getShift();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.UnitCurrentTimeline.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnitCurrentTimeline} returns this
 */
proto.pb.UnitCurrentTimeline.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device_id = 2;
 * @return {string}
 */
proto.pb.UnitCurrentTimeline.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnitCurrentTimeline} returns this
 */
proto.pb.UnitCurrentTimeline.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string device_alias = 3;
 * @return {string}
 */
proto.pb.UnitCurrentTimeline.prototype.getDeviceAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnitCurrentTimeline} returns this
 */
proto.pb.UnitCurrentTimeline.prototype.setDeviceAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Timeline current_timeline = 4;
 * @return {?proto.pb.Timeline}
 */
proto.pb.UnitCurrentTimeline.prototype.getCurrentTimeline = function() {
  return /** @type{?proto.pb.Timeline} */ (
    jspb.Message.getWrapperField(this, proto_entities_timeline_pb.Timeline, 4));
};


/**
 * @param {?proto.pb.Timeline|undefined} value
 * @return {!proto.pb.UnitCurrentTimeline} returns this
*/
proto.pb.UnitCurrentTimeline.prototype.setCurrentTimeline = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UnitCurrentTimeline} returns this
 */
proto.pb.UnitCurrentTimeline.prototype.clearCurrentTimeline = function() {
  return this.setCurrentTimeline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnitCurrentTimeline.prototype.hasCurrentTimeline = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional EnumEvent state = 5;
 * @return {!proto.pb.EnumEvent}
 */
proto.pb.UnitCurrentTimeline.prototype.getState = function() {
  return /** @type {!proto.pb.EnumEvent} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pb.EnumEvent} value
 * @return {!proto.pb.UnitCurrentTimeline} returns this
 */
proto.pb.UnitCurrentTimeline.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional EventState event_state = 6;
 * @return {?proto.pb.EventState}
 */
proto.pb.UnitCurrentTimeline.prototype.getEventState = function() {
  return /** @type{?proto.pb.EventState} */ (
    jspb.Message.getWrapperField(this, proto_entities_event_state_pb.EventState, 6));
};


/**
 * @param {?proto.pb.EventState|undefined} value
 * @return {!proto.pb.UnitCurrentTimeline} returns this
*/
proto.pb.UnitCurrentTimeline.prototype.setEventState = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UnitCurrentTimeline} returns this
 */
proto.pb.UnitCurrentTimeline.prototype.clearEventState = function() {
  return this.setEventState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnitCurrentTimeline.prototype.hasEventState = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp shift_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.UnitCurrentTimeline.prototype.getShiftDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.UnitCurrentTimeline} returns this
*/
proto.pb.UnitCurrentTimeline.prototype.setShiftDate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UnitCurrentTimeline} returns this
 */
proto.pb.UnitCurrentTimeline.prototype.clearShiftDate = function() {
  return this.setShiftDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnitCurrentTimeline.prototype.hasShiftDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional EnumAssetType asset_type = 9;
 * @return {!proto.pb.EnumAssetType}
 */
proto.pb.UnitCurrentTimeline.prototype.getAssetType = function() {
  return /** @type {!proto.pb.EnumAssetType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.pb.EnumAssetType} value
 * @return {!proto.pb.UnitCurrentTimeline} returns this
 */
proto.pb.UnitCurrentTimeline.prototype.setAssetType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * repeated Timeline history_shift = 10;
 * @return {!Array<!proto.pb.Timeline>}
 */
proto.pb.UnitCurrentTimeline.prototype.getHistoryShiftList = function() {
  return /** @type{!Array<!proto.pb.Timeline>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_timeline_pb.Timeline, 10));
};


/**
 * @param {!Array<!proto.pb.Timeline>} value
 * @return {!proto.pb.UnitCurrentTimeline} returns this
*/
proto.pb.UnitCurrentTimeline.prototype.setHistoryShiftList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.pb.Timeline=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Timeline}
 */
proto.pb.UnitCurrentTimeline.prototype.addHistoryShift = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.pb.Timeline, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.UnitCurrentTimeline} returns this
 */
proto.pb.UnitCurrentTimeline.prototype.clearHistoryShiftList = function() {
  return this.setHistoryShiftList([]);
};


/**
 * optional Shift shift = 14;
 * @return {!proto.pb.Shift}
 */
proto.pb.UnitCurrentTimeline.prototype.getShift = function() {
  return /** @type {!proto.pb.Shift} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.pb.Shift} value
 * @return {!proto.pb.UnitCurrentTimeline} returns this
 */
proto.pb.UnitCurrentTimeline.prototype.setShift = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


goog.object.extend(exports, proto.pb);
