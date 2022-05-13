// source: proto/services/history_timeline.services.proto
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
var proto_enums_shift_enums_pb = require('../../proto/enums/shift.enums_pb.js');
goog.object.extend(proto, proto_enums_shift_enums_pb);
var proto_enums_asset_type_enums_pb = require('../../proto/enums/asset_type.enums_pb.js');
goog.object.extend(proto, proto_enums_asset_type_enums_pb);
var proto_services_timeline_services_pb = require('../../proto/services/timeline.services_pb.js');
goog.object.extend(proto, proto_services_timeline_services_pb);
goog.exportSymbol('proto.pb.FilterHistoryTimelineRequest', null, global);
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
proto.pb.FilterHistoryTimelineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.FilterHistoryTimelineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.FilterHistoryTimelineRequest.displayName = 'proto.pb.FilterHistoryTimelineRequest';
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
proto.pb.FilterHistoryTimelineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.FilterHistoryTimelineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.FilterHistoryTimelineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.FilterHistoryTimelineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    shiftDate: (f = msg.getShiftDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    shift: jspb.Message.getFieldWithDefault(msg, 2, 0),
    assetType: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.pb.FilterHistoryTimelineRequest}
 */
proto.pb.FilterHistoryTimelineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.FilterHistoryTimelineRequest;
  return proto.pb.FilterHistoryTimelineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.FilterHistoryTimelineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.FilterHistoryTimelineRequest}
 */
proto.pb.FilterHistoryTimelineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setShiftDate(value);
      break;
    case 2:
      var value = /** @type {!proto.pb.Shift} */ (reader.readEnum());
      msg.setShift(value);
      break;
    case 3:
      var value = /** @type {!proto.pb.EnumAssetType} */ (reader.readEnum());
      msg.setAssetType(value);
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
proto.pb.FilterHistoryTimelineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.FilterHistoryTimelineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.FilterHistoryTimelineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.FilterHistoryTimelineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShiftDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getShift();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAssetType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp shift_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.FilterHistoryTimelineRequest.prototype.getShiftDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.FilterHistoryTimelineRequest} returns this
*/
proto.pb.FilterHistoryTimelineRequest.prototype.setShiftDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.FilterHistoryTimelineRequest} returns this
 */
proto.pb.FilterHistoryTimelineRequest.prototype.clearShiftDate = function() {
  return this.setShiftDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.FilterHistoryTimelineRequest.prototype.hasShiftDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Shift shift = 2;
 * @return {!proto.pb.Shift}
 */
proto.pb.FilterHistoryTimelineRequest.prototype.getShift = function() {
  return /** @type {!proto.pb.Shift} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pb.Shift} value
 * @return {!proto.pb.FilterHistoryTimelineRequest} returns this
 */
proto.pb.FilterHistoryTimelineRequest.prototype.setShift = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional EnumAssetType asset_type = 3;
 * @return {!proto.pb.EnumAssetType}
 */
proto.pb.FilterHistoryTimelineRequest.prototype.getAssetType = function() {
  return /** @type {!proto.pb.EnumAssetType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pb.EnumAssetType} value
 * @return {!proto.pb.FilterHistoryTimelineRequest} returns this
 */
proto.pb.FilterHistoryTimelineRequest.prototype.setAssetType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


goog.object.extend(exports, proto.pb);
