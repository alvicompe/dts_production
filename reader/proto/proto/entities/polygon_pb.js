// source: proto/entities/polygon.proto
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
var proto_entities_material_pb = require('../../proto/entities/material_pb.js');
goog.object.extend(proto, proto_entities_material_pb);
goog.exportSymbol('proto.pb.Polygon', null, global);
goog.exportSymbol('proto.pb.Polygon.State', null, global);
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
proto.pb.Polygon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.Polygon.repeatedFields_, null);
};
goog.inherits(proto.pb.Polygon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Polygon.displayName = 'proto.pb.Polygon';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.Polygon.repeatedFields_ = [4];



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
proto.pb.Polygon.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Polygon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Polygon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Polygon.toObject = function(includeInstance, msg) {
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
    material: (f = msg.getMaterial()) && proto_entities_material_pb.Material.toObject(includeInstance, f),
    lito: jspb.Message.getFieldWithDefault(msg, 10, ""),
    alte: jspb.Message.getFieldWithDefault(msg, 11, ""),
    orezonet: jspb.Message.getFieldWithDefault(msg, 12, ""),
    au: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    ag: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    as: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    tonnes: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    onzas: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    auch: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    agcn: jspb.Message.getFloatingPointFieldWithDefault(msg, 20, 0.0),
    ptaucn: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0),
    s: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
    state: jspb.Message.getFieldWithDefault(msg, 23, 0),
    projectName: jspb.Message.getFieldWithDefault(msg, 24, "")
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
 * @return {!proto.pb.Polygon}
 */
proto.pb.Polygon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Polygon;
  return proto.pb.Polygon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Polygon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Polygon}
 */
proto.pb.Polygon.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_entities_material_pb.Material;
      reader.readMessage(value,proto_entities_material_pb.Material.deserializeBinaryFromReader);
      msg.setMaterial(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLito(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlte(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrezonet(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAu(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAg(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAs(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTonnes(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOnzas(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAuch(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAgcn(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPtaucn(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setS(value);
      break;
    case 23:
      var value = /** @type {!proto.pb.Polygon.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectName(value);
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
proto.pb.Polygon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Polygon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Polygon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Polygon.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMaterial();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_entities_material_pb.Material.serializeBinaryToWriter
    );
  }
  f = message.getLito();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAlte();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOrezonet();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAu();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getAg();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getAs();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getTonnes();
  if (f !== 0.0) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = message.getOnzas();
  if (f !== 0.0) {
    writer.writeDouble(
      18,
      f
    );
  }
  f = message.getAuch();
  if (f !== 0.0) {
    writer.writeDouble(
      19,
      f
    );
  }
  f = message.getAgcn();
  if (f !== 0.0) {
    writer.writeDouble(
      20,
      f
    );
  }
  f = message.getPtaucn();
  if (f !== 0.0) {
    writer.writeDouble(
      21,
      f
    );
  }
  f = message.getS();
  if (f !== 0.0) {
    writer.writeDouble(
      22,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      23,
      f
    );
  }
  f = message.getProjectName();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.Polygon.State = {
  UNKNOWN: 0,
  ACTIVE: 1,
  WAITING: 2,
  FINISHED: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.Polygon.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pb.Polygon.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.pb.Polygon.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Point point = 4;
 * @return {!Array<!proto.pb.Point>}
 */
proto.pb.Polygon.prototype.getPointList = function() {
  return /** @type{!Array<!proto.pb.Point>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_point_pb.Point, 4));
};


/**
 * @param {!Array<!proto.pb.Point>} value
 * @return {!proto.pb.Polygon} returns this
*/
proto.pb.Polygon.prototype.setPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pb.Point=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Point}
 */
proto.pb.Polygon.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pb.Point, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.clearPointList = function() {
  return this.setPointList([]);
};


/**
 * optional Point centroid = 5;
 * @return {?proto.pb.Point}
 */
proto.pb.Polygon.prototype.getCentroid = function() {
  return /** @type{?proto.pb.Point} */ (
    jspb.Message.getWrapperField(this, proto_entities_point_pb.Point, 5));
};


/**
 * @param {?proto.pb.Point|undefined} value
 * @return {!proto.pb.Polygon} returns this
*/
proto.pb.Polygon.prototype.setCentroid = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.clearCentroid = function() {
  return this.setCentroid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Polygon.prototype.hasCentroid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double height = 6;
 * @return {number}
 */
proto.pb.Polygon.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional uint32 color = 7;
 * @return {number}
 */
proto.pb.Polygon.prototype.getColor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setColor = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional double altitude = 8;
 * @return {number}
 */
proto.pb.Polygon.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setAltitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional Material material = 9;
 * @return {?proto.pb.Material}
 */
proto.pb.Polygon.prototype.getMaterial = function() {
  return /** @type{?proto.pb.Material} */ (
    jspb.Message.getWrapperField(this, proto_entities_material_pb.Material, 9));
};


/**
 * @param {?proto.pb.Material|undefined} value
 * @return {!proto.pb.Polygon} returns this
*/
proto.pb.Polygon.prototype.setMaterial = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.clearMaterial = function() {
  return this.setMaterial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Polygon.prototype.hasMaterial = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string lito = 10;
 * @return {string}
 */
proto.pb.Polygon.prototype.getLito = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setLito = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string alte = 11;
 * @return {string}
 */
proto.pb.Polygon.prototype.getAlte = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setAlte = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string orezonet = 12;
 * @return {string}
 */
proto.pb.Polygon.prototype.getOrezonet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setOrezonet = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional double au = 13;
 * @return {number}
 */
proto.pb.Polygon.prototype.getAu = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setAu = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double ag = 14;
 * @return {number}
 */
proto.pb.Polygon.prototype.getAg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setAg = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double as = 15;
 * @return {number}
 */
proto.pb.Polygon.prototype.getAs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setAs = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional double volume = 16;
 * @return {number}
 */
proto.pb.Polygon.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional double tonnes = 17;
 * @return {number}
 */
proto.pb.Polygon.prototype.getTonnes = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setTonnes = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional double onzas = 18;
 * @return {number}
 */
proto.pb.Polygon.prototype.getOnzas = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setOnzas = function(value) {
  return jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional double auch = 19;
 * @return {number}
 */
proto.pb.Polygon.prototype.getAuch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setAuch = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional double agcn = 20;
 * @return {number}
 */
proto.pb.Polygon.prototype.getAgcn = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setAgcn = function(value) {
  return jspb.Message.setProto3FloatField(this, 20, value);
};


/**
 * optional double ptaucn = 21;
 * @return {number}
 */
proto.pb.Polygon.prototype.getPtaucn = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setPtaucn = function(value) {
  return jspb.Message.setProto3FloatField(this, 21, value);
};


/**
 * optional double s = 22;
 * @return {number}
 */
proto.pb.Polygon.prototype.getS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setS = function(value) {
  return jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional State state = 23;
 * @return {!proto.pb.Polygon.State}
 */
proto.pb.Polygon.prototype.getState = function() {
  return /** @type {!proto.pb.Polygon.State} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {!proto.pb.Polygon.State} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 23, value);
};


/**
 * optional string project_name = 24;
 * @return {string}
 */
proto.pb.Polygon.prototype.getProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Polygon} returns this
 */
proto.pb.Polygon.prototype.setProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


goog.object.extend(exports, proto.pb);
