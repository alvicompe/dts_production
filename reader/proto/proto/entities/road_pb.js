// source: proto/entities/road.proto
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

var proto_entities_point_pb = require('../../proto/entities/point_pb.js');
goog.object.extend(proto, proto_entities_point_pb);
goog.exportSymbol('proto.pb.Road', null, global);
goog.exportSymbol('proto.pb.Road.State', null, global);
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
proto.pb.Road = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.Road.repeatedFields_, null);
};
goog.inherits(proto.pb.Road, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Road.displayName = 'proto.pb.Road';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.Road.repeatedFields_ = [5,6];



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
proto.pb.Road.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Road.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Road} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Road.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    color: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    proto_entities_point_pb.Point.toObject, includeInstance),
    bufferList: jspb.Message.toObjectList(msg.getBufferList(),
    proto_entities_point_pb.Point.toObject, includeInstance)
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
 * @return {!proto.pb.Road}
 */
proto.pb.Road.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Road;
  return proto.pb.Road.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Road} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Road}
 */
proto.pb.Road.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setColor(value);
      break;
    case 5:
      var value = new proto_entities_point_pb.Point;
      reader.readMessage(value,proto_entities_point_pb.Point.deserializeBinaryFromReader);
      msg.addPoint(value);
      break;
    case 6:
      var value = new proto_entities_point_pb.Point;
      reader.readMessage(value,proto_entities_point_pb.Point.deserializeBinaryFromReader);
      msg.addBuffer(value);
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
proto.pb.Road.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Road.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Road} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Road.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getColor();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_entities_point_pb.Point.serializeBinaryToWriter
    );
  }
  f = message.getBufferList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_entities_point_pb.Point.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.Road.State = {
  UNKNOWN: 0
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.Road.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Road} returns this
 */
proto.pb.Road.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pb.Road.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Road} returns this
 */
proto.pb.Road.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.pb.Road.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Road} returns this
 */
proto.pb.Road.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 color = 4;
 * @return {number}
 */
proto.pb.Road.prototype.getColor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Road} returns this
 */
proto.pb.Road.prototype.setColor = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Point point = 5;
 * @return {!Array<!proto.pb.Point>}
 */
proto.pb.Road.prototype.getPointList = function() {
  return /** @type{!Array<!proto.pb.Point>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_point_pb.Point, 5));
};


/**
 * @param {!Array<!proto.pb.Point>} value
 * @return {!proto.pb.Road} returns this
*/
proto.pb.Road.prototype.setPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.pb.Point=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Point}
 */
proto.pb.Road.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.pb.Point, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Road} returns this
 */
proto.pb.Road.prototype.clearPointList = function() {
  return this.setPointList([]);
};


/**
 * repeated Point buffer = 6;
 * @return {!Array<!proto.pb.Point>}
 */
proto.pb.Road.prototype.getBufferList = function() {
  return /** @type{!Array<!proto.pb.Point>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_point_pb.Point, 6));
};


/**
 * @param {!Array<!proto.pb.Point>} value
 * @return {!proto.pb.Road} returns this
*/
proto.pb.Road.prototype.setBufferList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.pb.Point=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Point}
 */
proto.pb.Road.prototype.addBuffer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.pb.Point, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Road} returns this
 */
proto.pb.Road.prototype.clearBufferList = function() {
  return this.setBufferList([]);
};


goog.object.extend(exports, proto.pb);
