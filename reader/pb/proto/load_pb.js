// source: proto/load.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_pit_pb = require('../proto/pit_pb.js');
goog.object.extend(proto, proto_pit_pb);
var proto_pad_pb = require('../proto/pad_pb.js');
goog.object.extend(proto, proto_pad_pb);
var proto_stock_pb = require('../proto/stock_pb.js');
goog.object.extend(proto, proto_stock_pb);
var proto_dme_pb = require('../proto/dme_pb.js');
goog.object.extend(proto, proto_dme_pb);
var proto_road_pb = require('../proto/road_pb.js');
goog.object.extend(proto, proto_road_pb);
goog.exportSymbol('proto.pb.Download', null, global);
goog.exportSymbol('proto.pb.Download.Type', null, global);
goog.exportSymbol('proto.pb.Upload', null, global);
goog.exportSymbol('proto.pb.Upload.Type', null, global);
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
proto.pb.Upload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.Upload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Upload.displayName = 'proto.pb.Upload';
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
proto.pb.Download = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.Download, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Download.displayName = 'proto.pb.Download';
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
proto.pb.Upload.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Upload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Upload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Upload.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pit: (f = msg.getPit()) && proto_pit_pb.Pit.toObject(includeInstance, f),
    pad: (f = msg.getPad()) && proto_pad_pb.Pad.toObject(includeInstance, f),
    stock: (f = msg.getStock()) && proto_stock_pb.Stock.toObject(includeInstance, f),
    dme: (f = msg.getDme()) && proto_dme_pb.Dme.toObject(includeInstance, f),
    road: (f = msg.getRoad()) && proto_road_pb.Road.toObject(includeInstance, f)
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
 * @return {!proto.pb.Upload}
 */
proto.pb.Upload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Upload;
  return proto.pb.Upload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Upload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Upload}
 */
proto.pb.Upload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.Upload.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto_pit_pb.Pit;
      reader.readMessage(value,proto_pit_pb.Pit.deserializeBinaryFromReader);
      msg.setPit(value);
      break;
    case 3:
      var value = new proto_pad_pb.Pad;
      reader.readMessage(value,proto_pad_pb.Pad.deserializeBinaryFromReader);
      msg.setPad(value);
      break;
    case 4:
      var value = new proto_stock_pb.Stock;
      reader.readMessage(value,proto_stock_pb.Stock.deserializeBinaryFromReader);
      msg.setStock(value);
      break;
    case 5:
      var value = new proto_dme_pb.Dme;
      reader.readMessage(value,proto_dme_pb.Dme.deserializeBinaryFromReader);
      msg.setDme(value);
      break;
    case 6:
      var value = new proto_road_pb.Road;
      reader.readMessage(value,proto_road_pb.Road.deserializeBinaryFromReader);
      msg.setRoad(value);
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
proto.pb.Upload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Upload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Upload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Upload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_pit_pb.Pit.serializeBinaryToWriter
    );
  }
  f = message.getPad();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_pad_pb.Pad.serializeBinaryToWriter
    );
  }
  f = message.getStock();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stock_pb.Stock.serializeBinaryToWriter
    );
  }
  f = message.getDme();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_dme_pb.Dme.serializeBinaryToWriter
    );
  }
  f = message.getRoad();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_road_pb.Road.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.Upload.Type = {
  UNKNOWN: 0,
  PIT: 1,
  PAD: 2,
  STOCK: 3,
  DME: 4,
  ROAD: 5
};

/**
 * optional Type type = 1;
 * @return {!proto.pb.Upload.Type}
 */
proto.pb.Upload.prototype.getType = function() {
  return /** @type {!proto.pb.Upload.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pb.Upload.Type} value
 * @return {!proto.pb.Upload} returns this
 */
proto.pb.Upload.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Pit pit = 2;
 * @return {?proto.pb.Pit}
 */
proto.pb.Upload.prototype.getPit = function() {
  return /** @type{?proto.pb.Pit} */ (
    jspb.Message.getWrapperField(this, proto_pit_pb.Pit, 2));
};


/**
 * @param {?proto.pb.Pit|undefined} value
 * @return {!proto.pb.Upload} returns this
*/
proto.pb.Upload.prototype.setPit = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Upload} returns this
 */
proto.pb.Upload.prototype.clearPit = function() {
  return this.setPit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Upload.prototype.hasPit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Pad pad = 3;
 * @return {?proto.pb.Pad}
 */
proto.pb.Upload.prototype.getPad = function() {
  return /** @type{?proto.pb.Pad} */ (
    jspb.Message.getWrapperField(this, proto_pad_pb.Pad, 3));
};


/**
 * @param {?proto.pb.Pad|undefined} value
 * @return {!proto.pb.Upload} returns this
*/
proto.pb.Upload.prototype.setPad = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Upload} returns this
 */
proto.pb.Upload.prototype.clearPad = function() {
  return this.setPad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Upload.prototype.hasPad = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Stock stock = 4;
 * @return {?proto.pb.Stock}
 */
proto.pb.Upload.prototype.getStock = function() {
  return /** @type{?proto.pb.Stock} */ (
    jspb.Message.getWrapperField(this, proto_stock_pb.Stock, 4));
};


/**
 * @param {?proto.pb.Stock|undefined} value
 * @return {!proto.pb.Upload} returns this
*/
proto.pb.Upload.prototype.setStock = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Upload} returns this
 */
proto.pb.Upload.prototype.clearStock = function() {
  return this.setStock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Upload.prototype.hasStock = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Dme dme = 5;
 * @return {?proto.pb.Dme}
 */
proto.pb.Upload.prototype.getDme = function() {
  return /** @type{?proto.pb.Dme} */ (
    jspb.Message.getWrapperField(this, proto_dme_pb.Dme, 5));
};


/**
 * @param {?proto.pb.Dme|undefined} value
 * @return {!proto.pb.Upload} returns this
*/
proto.pb.Upload.prototype.setDme = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Upload} returns this
 */
proto.pb.Upload.prototype.clearDme = function() {
  return this.setDme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Upload.prototype.hasDme = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Road road = 6;
 * @return {?proto.pb.Road}
 */
proto.pb.Upload.prototype.getRoad = function() {
  return /** @type{?proto.pb.Road} */ (
    jspb.Message.getWrapperField(this, proto_road_pb.Road, 6));
};


/**
 * @param {?proto.pb.Road|undefined} value
 * @return {!proto.pb.Upload} returns this
*/
proto.pb.Upload.prototype.setRoad = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Upload} returns this
 */
proto.pb.Upload.prototype.clearRoad = function() {
  return this.setRoad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Upload.prototype.hasRoad = function() {
  return jspb.Message.getField(this, 6) != null;
};





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
proto.pb.Download.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Download.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Download} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Download.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pit: (f = msg.getPit()) && proto_pit_pb.Pit.toObject(includeInstance, f),
    pad: (f = msg.getPad()) && proto_pad_pb.Pad.toObject(includeInstance, f),
    stock: (f = msg.getStock()) && proto_stock_pb.Stock.toObject(includeInstance, f),
    dme: (f = msg.getDme()) && proto_dme_pb.Dme.toObject(includeInstance, f),
    road: (f = msg.getRoad()) && proto_road_pb.Road.toObject(includeInstance, f)
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
 * @return {!proto.pb.Download}
 */
proto.pb.Download.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Download;
  return proto.pb.Download.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Download} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Download}
 */
proto.pb.Download.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.Download.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto_pit_pb.Pit;
      reader.readMessage(value,proto_pit_pb.Pit.deserializeBinaryFromReader);
      msg.setPit(value);
      break;
    case 3:
      var value = new proto_pad_pb.Pad;
      reader.readMessage(value,proto_pad_pb.Pad.deserializeBinaryFromReader);
      msg.setPad(value);
      break;
    case 4:
      var value = new proto_stock_pb.Stock;
      reader.readMessage(value,proto_stock_pb.Stock.deserializeBinaryFromReader);
      msg.setStock(value);
      break;
    case 5:
      var value = new proto_dme_pb.Dme;
      reader.readMessage(value,proto_dme_pb.Dme.deserializeBinaryFromReader);
      msg.setDme(value);
      break;
    case 6:
      var value = new proto_road_pb.Road;
      reader.readMessage(value,proto_road_pb.Road.deserializeBinaryFromReader);
      msg.setRoad(value);
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
proto.pb.Download.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Download.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Download} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Download.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_pit_pb.Pit.serializeBinaryToWriter
    );
  }
  f = message.getPad();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_pad_pb.Pad.serializeBinaryToWriter
    );
  }
  f = message.getStock();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stock_pb.Stock.serializeBinaryToWriter
    );
  }
  f = message.getDme();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_dme_pb.Dme.serializeBinaryToWriter
    );
  }
  f = message.getRoad();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_road_pb.Road.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.Download.Type = {
  UNKNOWN: 0,
  PIT: 1,
  PAD: 2,
  STOCK: 3,
  DME: 4,
  ROAD: 5
};

/**
 * optional Type type = 1;
 * @return {!proto.pb.Download.Type}
 */
proto.pb.Download.prototype.getType = function() {
  return /** @type {!proto.pb.Download.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pb.Download.Type} value
 * @return {!proto.pb.Download} returns this
 */
proto.pb.Download.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Pit pit = 2;
 * @return {?proto.pb.Pit}
 */
proto.pb.Download.prototype.getPit = function() {
  return /** @type{?proto.pb.Pit} */ (
    jspb.Message.getWrapperField(this, proto_pit_pb.Pit, 2));
};


/**
 * @param {?proto.pb.Pit|undefined} value
 * @return {!proto.pb.Download} returns this
*/
proto.pb.Download.prototype.setPit = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Download} returns this
 */
proto.pb.Download.prototype.clearPit = function() {
  return this.setPit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Download.prototype.hasPit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Pad pad = 3;
 * @return {?proto.pb.Pad}
 */
proto.pb.Download.prototype.getPad = function() {
  return /** @type{?proto.pb.Pad} */ (
    jspb.Message.getWrapperField(this, proto_pad_pb.Pad, 3));
};


/**
 * @param {?proto.pb.Pad|undefined} value
 * @return {!proto.pb.Download} returns this
*/
proto.pb.Download.prototype.setPad = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Download} returns this
 */
proto.pb.Download.prototype.clearPad = function() {
  return this.setPad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Download.prototype.hasPad = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Stock stock = 4;
 * @return {?proto.pb.Stock}
 */
proto.pb.Download.prototype.getStock = function() {
  return /** @type{?proto.pb.Stock} */ (
    jspb.Message.getWrapperField(this, proto_stock_pb.Stock, 4));
};


/**
 * @param {?proto.pb.Stock|undefined} value
 * @return {!proto.pb.Download} returns this
*/
proto.pb.Download.prototype.setStock = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Download} returns this
 */
proto.pb.Download.prototype.clearStock = function() {
  return this.setStock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Download.prototype.hasStock = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Dme dme = 5;
 * @return {?proto.pb.Dme}
 */
proto.pb.Download.prototype.getDme = function() {
  return /** @type{?proto.pb.Dme} */ (
    jspb.Message.getWrapperField(this, proto_dme_pb.Dme, 5));
};


/**
 * @param {?proto.pb.Dme|undefined} value
 * @return {!proto.pb.Download} returns this
*/
proto.pb.Download.prototype.setDme = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Download} returns this
 */
proto.pb.Download.prototype.clearDme = function() {
  return this.setDme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Download.prototype.hasDme = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Road road = 6;
 * @return {?proto.pb.Road}
 */
proto.pb.Download.prototype.getRoad = function() {
  return /** @type{?proto.pb.Road} */ (
    jspb.Message.getWrapperField(this, proto_road_pb.Road, 6));
};


/**
 * @param {?proto.pb.Road|undefined} value
 * @return {!proto.pb.Download} returns this
*/
proto.pb.Download.prototype.setRoad = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Download} returns this
 */
proto.pb.Download.prototype.clearRoad = function() {
  return this.setRoad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Download.prototype.hasRoad = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.pb);
