// source: proto/entities/material.proto
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

goog.exportSymbol('proto.pb.Material', null, global);
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
proto.pb.Material = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.Material, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Material.displayName = 'proto.pb.Material';
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
proto.pb.Material.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Material.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Material} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Material.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    crs: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orezone: jspb.Message.getFieldWithDefault(msg, 5, ""),
    law: jspb.Message.getFieldWithDefault(msg, 6, ""),
    thins: jspb.Message.getFieldWithDefault(msg, 7, ""),
    cf: jspb.Message.getFieldWithDefault(msg, 8, ""),
    place: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.pb.Material}
 */
proto.pb.Material.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Material;
  return proto.pb.Material.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Material} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Material}
 */
proto.pb.Material.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCrs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrezone(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLaw(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setThins(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCf(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlace(value);
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
proto.pb.Material.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Material.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Material} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Material.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
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
  f = message.getCrs();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrezone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLaw();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getThins();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCf();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPlace();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.Material.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Material} returns this
 */
proto.pb.Material.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.pb.Material.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Material} returns this
 */
proto.pb.Material.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.pb.Material.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Material} returns this
 */
proto.pb.Material.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string crs = 4;
 * @return {string}
 */
proto.pb.Material.prototype.getCrs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Material} returns this
 */
proto.pb.Material.prototype.setCrs = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string orezone = 5;
 * @return {string}
 */
proto.pb.Material.prototype.getOrezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Material} returns this
 */
proto.pb.Material.prototype.setOrezone = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string law = 6;
 * @return {string}
 */
proto.pb.Material.prototype.getLaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Material} returns this
 */
proto.pb.Material.prototype.setLaw = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string thins = 7;
 * @return {string}
 */
proto.pb.Material.prototype.getThins = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Material} returns this
 */
proto.pb.Material.prototype.setThins = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string cf = 8;
 * @return {string}
 */
proto.pb.Material.prototype.getCf = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Material} returns this
 */
proto.pb.Material.prototype.setCf = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string place = 9;
 * @return {string}
 */
proto.pb.Material.prototype.getPlace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Material} returns this
 */
proto.pb.Material.prototype.setPlace = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


goog.object.extend(exports, proto.pb);