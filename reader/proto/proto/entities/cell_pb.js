// source: proto/entities/cell.proto
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
goog.exportSymbol('proto.pb.Cell', null, global);
goog.exportSymbol('proto.pb.Cell.State', null, global);
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
proto.pb.Cell = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.Cell.repeatedFields_, null);
};
goog.inherits(proto.pb.Cell, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Cell.displayName = 'proto.pb.Cell';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.Cell.repeatedFields_ = [4];



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
proto.pb.Cell.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Cell.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Cell} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Cell.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    proto_entities_point_pb.Point.toObject, includeInstance),
    centroid: (f = msg.getCentroid()) && proto_entities_point_pb.Point.toObject(includeInstance, f),
    height: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    color: jspb.Message.getFieldWithDefault(msg, 7, 0),
    altitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    area: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    state: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.pb.Cell}
 */
proto.pb.Cell.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Cell;
  return proto.pb.Cell.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Cell} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Cell}
 */
proto.pb.Cell.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_entities_point_pb.Point;
      reader.readMessage(value,proto_entities_point_pb.Point.deserializeBinaryFromReader);
      msg.addPoint(value);
      break;
    case 5:
      var value = new proto_entities_point_pb.Point;
      reader.readMessage(value,proto_entities_point_pb.Point.deserializeBinaryFromReader);
      msg.setCentroid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeight(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setColor(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAltitude(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setArea(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 11:
      var value = /** @type {!proto.pb.Cell.State} */ (reader.readEnum());
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
proto.pb.Cell.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Cell.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Cell} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Cell.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_entities_point_pb.Point.serializeBinaryToWriter
    );
  }
  f = message.getCentroid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_entities_point_pb.Point.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getColor();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getAltitude();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getArea();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.Cell.State = {
  UNKNOWN: 0,
  ACTIVE: 1,
  WAITING: 2,
  FINISHED: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.Cell.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pb.Cell.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.pb.Cell.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Point point = 4;
 * @return {!Array<!proto.pb.Point>}
 */
proto.pb.Cell.prototype.getPointList = function() {
  return /** @type{!Array<!proto.pb.Point>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_point_pb.Point, 4));
};


/**
 * @param {!Array<!proto.pb.Point>} value
 * @return {!proto.pb.Cell} returns this
*/
proto.pb.Cell.prototype.setPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pb.Point=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Point}
 */
proto.pb.Cell.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pb.Point, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.clearPointList = function() {
  return this.setPointList([]);
};


/**
 * optional Point centroid = 5;
 * @return {?proto.pb.Point}
 */
proto.pb.Cell.prototype.getCentroid = function() {
  return /** @type{?proto.pb.Point} */ (
    jspb.Message.getWrapperField(this, proto_entities_point_pb.Point, 5));
};


/**
 * @param {?proto.pb.Point|undefined} value
 * @return {!proto.pb.Cell} returns this
*/
proto.pb.Cell.prototype.setCentroid = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.clearCentroid = function() {
  return this.setCentroid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Cell.prototype.hasCentroid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double height = 6;
 * @return {number}
 */
proto.pb.Cell.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.setHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional uint32 color = 7;
 * @return {number}
 */
proto.pb.Cell.prototype.getColor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.setColor = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional double altitude = 8;
 * @return {number}
 */
proto.pb.Cell.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.setAltitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double area = 9;
 * @return {number}
 */
proto.pb.Cell.prototype.getArea = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.setArea = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double volume = 10;
 * @return {number}
 */
proto.pb.Cell.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional State state = 11;
 * @return {!proto.pb.Cell.State}
 */
proto.pb.Cell.prototype.getState = function() {
  return /** @type {!proto.pb.Cell.State} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.pb.Cell.State} value
 * @return {!proto.pb.Cell} returns this
 */
proto.pb.Cell.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


goog.object.extend(exports, proto.pb);
