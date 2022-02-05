// source: proto/services/road.services.proto
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

var proto_entities_road_pb = require('../../proto/entities/road_pb.js');
goog.object.extend(proto, proto_entities_road_pb);
goog.exportSymbol('proto.pb.RoadRequest', null, global);
goog.exportSymbol('proto.pb.RoadResponse', null, global);
goog.exportSymbol('proto.pb.RoadsResponse', null, global);
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
proto.pb.RoadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.RoadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.RoadRequest.displayName = 'proto.pb.RoadRequest';
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
proto.pb.RoadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.RoadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.RoadResponse.displayName = 'proto.pb.RoadResponse';
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
proto.pb.RoadsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.RoadsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.RoadsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.RoadsResponse.displayName = 'proto.pb.RoadsResponse';
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
proto.pb.RoadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.RoadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.RoadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RoadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    road: (f = msg.getRoad()) && proto_entities_road_pb.Road.toObject(includeInstance, f)
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
 * @return {!proto.pb.RoadRequest}
 */
proto.pb.RoadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.RoadRequest;
  return proto.pb.RoadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.RoadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.RoadRequest}
 */
proto.pb.RoadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_road_pb.Road;
      reader.readMessage(value,proto_entities_road_pb.Road.deserializeBinaryFromReader);
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
proto.pb.RoadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.RoadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.RoadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RoadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoad();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_road_pb.Road.serializeBinaryToWriter
    );
  }
};


/**
 * optional Road road = 1;
 * @return {?proto.pb.Road}
 */
proto.pb.RoadRequest.prototype.getRoad = function() {
  return /** @type{?proto.pb.Road} */ (
    jspb.Message.getWrapperField(this, proto_entities_road_pb.Road, 1));
};


/**
 * @param {?proto.pb.Road|undefined} value
 * @return {!proto.pb.RoadRequest} returns this
*/
proto.pb.RoadRequest.prototype.setRoad = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.RoadRequest} returns this
 */
proto.pb.RoadRequest.prototype.clearRoad = function() {
  return this.setRoad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.RoadRequest.prototype.hasRoad = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.pb.RoadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.RoadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.RoadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RoadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    road: (f = msg.getRoad()) && proto_entities_road_pb.Road.toObject(includeInstance, f)
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
 * @return {!proto.pb.RoadResponse}
 */
proto.pb.RoadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.RoadResponse;
  return proto.pb.RoadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.RoadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.RoadResponse}
 */
proto.pb.RoadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_road_pb.Road;
      reader.readMessage(value,proto_entities_road_pb.Road.deserializeBinaryFromReader);
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
proto.pb.RoadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.RoadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.RoadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RoadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoad();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_road_pb.Road.serializeBinaryToWriter
    );
  }
};


/**
 * optional Road road = 1;
 * @return {?proto.pb.Road}
 */
proto.pb.RoadResponse.prototype.getRoad = function() {
  return /** @type{?proto.pb.Road} */ (
    jspb.Message.getWrapperField(this, proto_entities_road_pb.Road, 1));
};


/**
 * @param {?proto.pb.Road|undefined} value
 * @return {!proto.pb.RoadResponse} returns this
*/
proto.pb.RoadResponse.prototype.setRoad = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.RoadResponse} returns this
 */
proto.pb.RoadResponse.prototype.clearRoad = function() {
  return this.setRoad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.RoadResponse.prototype.hasRoad = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.RoadsResponse.repeatedFields_ = [1];



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
proto.pb.RoadsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.RoadsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.RoadsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RoadsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    roadsList: jspb.Message.toObjectList(msg.getRoadsList(),
    proto_entities_road_pb.Road.toObject, includeInstance)
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
 * @return {!proto.pb.RoadsResponse}
 */
proto.pb.RoadsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.RoadsResponse;
  return proto.pb.RoadsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.RoadsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.RoadsResponse}
 */
proto.pb.RoadsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_road_pb.Road;
      reader.readMessage(value,proto_entities_road_pb.Road.deserializeBinaryFromReader);
      msg.addRoads(value);
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
proto.pb.RoadsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.RoadsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.RoadsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RoadsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_entities_road_pb.Road.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Road roads = 1;
 * @return {!Array<!proto.pb.Road>}
 */
proto.pb.RoadsResponse.prototype.getRoadsList = function() {
  return /** @type{!Array<!proto.pb.Road>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_road_pb.Road, 1));
};


/**
 * @param {!Array<!proto.pb.Road>} value
 * @return {!proto.pb.RoadsResponse} returns this
*/
proto.pb.RoadsResponse.prototype.setRoadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Road=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Road}
 */
proto.pb.RoadsResponse.prototype.addRoads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Road, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.RoadsResponse} returns this
 */
proto.pb.RoadsResponse.prototype.clearRoadsList = function() {
  return this.setRoadsList([]);
};


goog.object.extend(exports, proto.pb);