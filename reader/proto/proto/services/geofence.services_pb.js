// source: proto/services/geofence.services.proto
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

var proto_entities_geofence_pb = require('../../proto/entities/geofence_pb.js');
goog.object.extend(proto, proto_entities_geofence_pb);
goog.exportSymbol('proto.pb.GeofenceRequest', null, global);
goog.exportSymbol('proto.pb.GeofenceResponse', null, global);
goog.exportSymbol('proto.pb.GeofencesResponse', null, global);
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
proto.pb.GeofenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GeofenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GeofenceRequest.displayName = 'proto.pb.GeofenceRequest';
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
proto.pb.GeofenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GeofenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GeofenceResponse.displayName = 'proto.pb.GeofenceResponse';
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
proto.pb.GeofencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.GeofencesResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.GeofencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GeofencesResponse.displayName = 'proto.pb.GeofencesResponse';
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
proto.pb.GeofenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GeofenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GeofenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GeofenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    geofence: (f = msg.getGeofence()) && proto_entities_geofence_pb.Geofence.toObject(includeInstance, f)
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
 * @return {!proto.pb.GeofenceRequest}
 */
proto.pb.GeofenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GeofenceRequest;
  return proto.pb.GeofenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GeofenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GeofenceRequest}
 */
proto.pb.GeofenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_geofence_pb.Geofence;
      reader.readMessage(value,proto_entities_geofence_pb.Geofence.deserializeBinaryFromReader);
      msg.setGeofence(value);
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
proto.pb.GeofenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GeofenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GeofenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GeofenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeofence();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_geofence_pb.Geofence.serializeBinaryToWriter
    );
  }
};


/**
 * optional Geofence geofence = 1;
 * @return {?proto.pb.Geofence}
 */
proto.pb.GeofenceRequest.prototype.getGeofence = function() {
  return /** @type{?proto.pb.Geofence} */ (
    jspb.Message.getWrapperField(this, proto_entities_geofence_pb.Geofence, 1));
};


/**
 * @param {?proto.pb.Geofence|undefined} value
 * @return {!proto.pb.GeofenceRequest} returns this
*/
proto.pb.GeofenceRequest.prototype.setGeofence = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.GeofenceRequest} returns this
 */
proto.pb.GeofenceRequest.prototype.clearGeofence = function() {
  return this.setGeofence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GeofenceRequest.prototype.hasGeofence = function() {
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
proto.pb.GeofenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GeofenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GeofenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GeofenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    geofence: (f = msg.getGeofence()) && proto_entities_geofence_pb.Geofence.toObject(includeInstance, f)
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
 * @return {!proto.pb.GeofenceResponse}
 */
proto.pb.GeofenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GeofenceResponse;
  return proto.pb.GeofenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GeofenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GeofenceResponse}
 */
proto.pb.GeofenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_geofence_pb.Geofence;
      reader.readMessage(value,proto_entities_geofence_pb.Geofence.deserializeBinaryFromReader);
      msg.setGeofence(value);
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
proto.pb.GeofenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GeofenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GeofenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GeofenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeofence();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_geofence_pb.Geofence.serializeBinaryToWriter
    );
  }
};


/**
 * optional Geofence geofence = 1;
 * @return {?proto.pb.Geofence}
 */
proto.pb.GeofenceResponse.prototype.getGeofence = function() {
  return /** @type{?proto.pb.Geofence} */ (
    jspb.Message.getWrapperField(this, proto_entities_geofence_pb.Geofence, 1));
};


/**
 * @param {?proto.pb.Geofence|undefined} value
 * @return {!proto.pb.GeofenceResponse} returns this
*/
proto.pb.GeofenceResponse.prototype.setGeofence = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.GeofenceResponse} returns this
 */
proto.pb.GeofenceResponse.prototype.clearGeofence = function() {
  return this.setGeofence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GeofenceResponse.prototype.hasGeofence = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.GeofencesResponse.repeatedFields_ = [1];



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
proto.pb.GeofencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GeofencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GeofencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GeofencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    geofencesList: jspb.Message.toObjectList(msg.getGeofencesList(),
    proto_entities_geofence_pb.Geofence.toObject, includeInstance)
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
 * @return {!proto.pb.GeofencesResponse}
 */
proto.pb.GeofencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GeofencesResponse;
  return proto.pb.GeofencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GeofencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GeofencesResponse}
 */
proto.pb.GeofencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_geofence_pb.Geofence;
      reader.readMessage(value,proto_entities_geofence_pb.Geofence.deserializeBinaryFromReader);
      msg.addGeofences(value);
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
proto.pb.GeofencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GeofencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GeofencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GeofencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeofencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_entities_geofence_pb.Geofence.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Geofence geofences = 1;
 * @return {!Array<!proto.pb.Geofence>}
 */
proto.pb.GeofencesResponse.prototype.getGeofencesList = function() {
  return /** @type{!Array<!proto.pb.Geofence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_geofence_pb.Geofence, 1));
};


/**
 * @param {!Array<!proto.pb.Geofence>} value
 * @return {!proto.pb.GeofencesResponse} returns this
*/
proto.pb.GeofencesResponse.prototype.setGeofencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Geofence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Geofence}
 */
proto.pb.GeofencesResponse.prototype.addGeofences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Geofence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.GeofencesResponse} returns this
 */
proto.pb.GeofencesResponse.prototype.clearGeofencesList = function() {
  return this.setGeofencesList([]);
};


goog.object.extend(exports, proto.pb);
