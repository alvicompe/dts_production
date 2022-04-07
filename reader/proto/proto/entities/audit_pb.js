// source: proto/entities/audit.proto
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
goog.exportSymbol('proto.pb.Audit', null, global);
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
proto.pb.Audit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.Audit.repeatedFields_, null);
};
goog.inherits(proto.pb.Audit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Audit.displayName = 'proto.pb.Audit';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.Audit.repeatedFields_ = [2];



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
proto.pb.Audit.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Audit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Audit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Audit.toObject = function(includeInstance, msg) {
  var f, obj = {
    startedTime: (f = msg.getStartedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedTimeList: jspb.Message.toObjectList(msg.getUpdatedTimeList(),
    google_protobuf_timestamp_pb.Timestamp.toObject, includeInstance)
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
 * @return {!proto.pb.Audit}
 */
proto.pb.Audit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Audit;
  return proto.pb.Audit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Audit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Audit}
 */
proto.pb.Audit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedTime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.addUpdatedTime(value);
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
proto.pb.Audit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Audit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Audit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Audit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartedTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedTimeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp started_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.Audit.prototype.getStartedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.Audit} returns this
*/
proto.pb.Audit.prototype.setStartedTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Audit} returns this
 */
proto.pb.Audit.prototype.clearStartedTime = function() {
  return this.setStartedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Audit.prototype.hasStartedTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated google.protobuf.Timestamp updated_time = 2;
 * @return {!Array<!proto.google.protobuf.Timestamp>}
 */
proto.pb.Audit.prototype.getUpdatedTimeList = function() {
  return /** @type{!Array<!proto.google.protobuf.Timestamp>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.Timestamp>} value
 * @return {!proto.pb.Audit} returns this
*/
proto.pb.Audit.prototype.setUpdatedTimeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.Timestamp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.pb.Audit.prototype.addUpdatedTime = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.Timestamp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Audit} returns this
 */
proto.pb.Audit.prototype.clearUpdatedTimeList = function() {
  return this.setUpdatedTimeList([]);
};


goog.object.extend(exports, proto.pb);
