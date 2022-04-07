// source: proto/services/excavator.services.proto
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

var proto_entities_excavator_pb = require('../../proto/entities/excavator_pb.js');
goog.object.extend(proto, proto_entities_excavator_pb);
var proto_services_operation_services_pb = require('../../proto/services/operation.services_pb.js');
goog.object.extend(proto, proto_services_operation_services_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.pb.ExcavatorListRequest', null, global);
goog.exportSymbol('proto.pb.ExcavatorListResponse', null, global);
goog.exportSymbol('proto.pb.ExcavatorRequest', null, global);
goog.exportSymbol('proto.pb.ExcavatorResponse', null, global);
goog.exportSymbol('proto.pb.ExcavatorsResponse', null, global);
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
proto.pb.ExcavatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ExcavatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ExcavatorRequest.displayName = 'proto.pb.ExcavatorRequest';
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
proto.pb.ExcavatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ExcavatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ExcavatorResponse.displayName = 'proto.pb.ExcavatorResponse';
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
proto.pb.ExcavatorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ExcavatorsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ExcavatorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ExcavatorsResponse.displayName = 'proto.pb.ExcavatorsResponse';
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
proto.pb.ExcavatorListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ExcavatorListRequest.repeatedFields_, null);
};
goog.inherits(proto.pb.ExcavatorListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ExcavatorListRequest.displayName = 'proto.pb.ExcavatorListRequest';
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
proto.pb.ExcavatorListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ExcavatorListResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ExcavatorListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ExcavatorListResponse.displayName = 'proto.pb.ExcavatorListResponse';
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
proto.pb.ExcavatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ExcavatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ExcavatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExcavatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    excavator: (f = msg.getExcavator()) && proto_entities_excavator_pb.Excavator.toObject(includeInstance, f)
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
 * @return {!proto.pb.ExcavatorRequest}
 */
proto.pb.ExcavatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ExcavatorRequest;
  return proto.pb.ExcavatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ExcavatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ExcavatorRequest}
 */
proto.pb.ExcavatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_excavator_pb.Excavator;
      reader.readMessage(value,proto_entities_excavator_pb.Excavator.deserializeBinaryFromReader);
      msg.setExcavator(value);
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
proto.pb.ExcavatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ExcavatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ExcavatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExcavatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcavator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_excavator_pb.Excavator.serializeBinaryToWriter
    );
  }
};


/**
 * optional Excavator excavator = 1;
 * @return {?proto.pb.Excavator}
 */
proto.pb.ExcavatorRequest.prototype.getExcavator = function() {
  return /** @type{?proto.pb.Excavator} */ (
    jspb.Message.getWrapperField(this, proto_entities_excavator_pb.Excavator, 1));
};


/**
 * @param {?proto.pb.Excavator|undefined} value
 * @return {!proto.pb.ExcavatorRequest} returns this
*/
proto.pb.ExcavatorRequest.prototype.setExcavator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ExcavatorRequest} returns this
 */
proto.pb.ExcavatorRequest.prototype.clearExcavator = function() {
  return this.setExcavator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ExcavatorRequest.prototype.hasExcavator = function() {
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
proto.pb.ExcavatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ExcavatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ExcavatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExcavatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    excavator: (f = msg.getExcavator()) && proto_entities_excavator_pb.Excavator.toObject(includeInstance, f)
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
 * @return {!proto.pb.ExcavatorResponse}
 */
proto.pb.ExcavatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ExcavatorResponse;
  return proto.pb.ExcavatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ExcavatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ExcavatorResponse}
 */
proto.pb.ExcavatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_excavator_pb.Excavator;
      reader.readMessage(value,proto_entities_excavator_pb.Excavator.deserializeBinaryFromReader);
      msg.setExcavator(value);
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
proto.pb.ExcavatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ExcavatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ExcavatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExcavatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcavator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_excavator_pb.Excavator.serializeBinaryToWriter
    );
  }
};


/**
 * optional Excavator excavator = 1;
 * @return {?proto.pb.Excavator}
 */
proto.pb.ExcavatorResponse.prototype.getExcavator = function() {
  return /** @type{?proto.pb.Excavator} */ (
    jspb.Message.getWrapperField(this, proto_entities_excavator_pb.Excavator, 1));
};


/**
 * @param {?proto.pb.Excavator|undefined} value
 * @return {!proto.pb.ExcavatorResponse} returns this
*/
proto.pb.ExcavatorResponse.prototype.setExcavator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ExcavatorResponse} returns this
 */
proto.pb.ExcavatorResponse.prototype.clearExcavator = function() {
  return this.setExcavator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ExcavatorResponse.prototype.hasExcavator = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ExcavatorsResponse.repeatedFields_ = [1];



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
proto.pb.ExcavatorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ExcavatorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ExcavatorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExcavatorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    excavatorsList: jspb.Message.toObjectList(msg.getExcavatorsList(),
    proto_entities_excavator_pb.Excavator.toObject, includeInstance)
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
 * @return {!proto.pb.ExcavatorsResponse}
 */
proto.pb.ExcavatorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ExcavatorsResponse;
  return proto.pb.ExcavatorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ExcavatorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ExcavatorsResponse}
 */
proto.pb.ExcavatorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_excavator_pb.Excavator;
      reader.readMessage(value,proto_entities_excavator_pb.Excavator.deserializeBinaryFromReader);
      msg.addExcavators(value);
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
proto.pb.ExcavatorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ExcavatorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ExcavatorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExcavatorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcavatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_entities_excavator_pb.Excavator.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Excavator excavators = 1;
 * @return {!Array<!proto.pb.Excavator>}
 */
proto.pb.ExcavatorsResponse.prototype.getExcavatorsList = function() {
  return /** @type{!Array<!proto.pb.Excavator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_excavator_pb.Excavator, 1));
};


/**
 * @param {!Array<!proto.pb.Excavator>} value
 * @return {!proto.pb.ExcavatorsResponse} returns this
*/
proto.pb.ExcavatorsResponse.prototype.setExcavatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Excavator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Excavator}
 */
proto.pb.ExcavatorsResponse.prototype.addExcavators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Excavator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ExcavatorsResponse} returns this
 */
proto.pb.ExcavatorsResponse.prototype.clearExcavatorsList = function() {
  return this.setExcavatorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ExcavatorListRequest.repeatedFields_ = [1];



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
proto.pb.ExcavatorListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ExcavatorListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ExcavatorListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExcavatorListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    excavatorList: jspb.Message.toObjectList(msg.getExcavatorList(),
    proto_entities_excavator_pb.Excavator.toObject, includeInstance)
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
 * @return {!proto.pb.ExcavatorListRequest}
 */
proto.pb.ExcavatorListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ExcavatorListRequest;
  return proto.pb.ExcavatorListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ExcavatorListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ExcavatorListRequest}
 */
proto.pb.ExcavatorListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_excavator_pb.Excavator;
      reader.readMessage(value,proto_entities_excavator_pb.Excavator.deserializeBinaryFromReader);
      msg.addExcavator(value);
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
proto.pb.ExcavatorListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ExcavatorListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ExcavatorListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExcavatorListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcavatorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_entities_excavator_pb.Excavator.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Excavator excavator = 1;
 * @return {!Array<!proto.pb.Excavator>}
 */
proto.pb.ExcavatorListRequest.prototype.getExcavatorList = function() {
  return /** @type{!Array<!proto.pb.Excavator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_excavator_pb.Excavator, 1));
};


/**
 * @param {!Array<!proto.pb.Excavator>} value
 * @return {!proto.pb.ExcavatorListRequest} returns this
*/
proto.pb.ExcavatorListRequest.prototype.setExcavatorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Excavator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Excavator}
 */
proto.pb.ExcavatorListRequest.prototype.addExcavator = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Excavator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ExcavatorListRequest} returns this
 */
proto.pb.ExcavatorListRequest.prototype.clearExcavatorList = function() {
  return this.setExcavatorList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ExcavatorListResponse.repeatedFields_ = [1];



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
proto.pb.ExcavatorListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ExcavatorListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ExcavatorListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExcavatorListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    excavatorList: jspb.Message.toObjectList(msg.getExcavatorList(),
    proto_entities_excavator_pb.Excavator.toObject, includeInstance)
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
 * @return {!proto.pb.ExcavatorListResponse}
 */
proto.pb.ExcavatorListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ExcavatorListResponse;
  return proto.pb.ExcavatorListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ExcavatorListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ExcavatorListResponse}
 */
proto.pb.ExcavatorListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_excavator_pb.Excavator;
      reader.readMessage(value,proto_entities_excavator_pb.Excavator.deserializeBinaryFromReader);
      msg.addExcavator(value);
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
proto.pb.ExcavatorListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ExcavatorListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ExcavatorListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExcavatorListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcavatorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_entities_excavator_pb.Excavator.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Excavator excavator = 1;
 * @return {!Array<!proto.pb.Excavator>}
 */
proto.pb.ExcavatorListResponse.prototype.getExcavatorList = function() {
  return /** @type{!Array<!proto.pb.Excavator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_excavator_pb.Excavator, 1));
};


/**
 * @param {!Array<!proto.pb.Excavator>} value
 * @return {!proto.pb.ExcavatorListResponse} returns this
*/
proto.pb.ExcavatorListResponse.prototype.setExcavatorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Excavator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Excavator}
 */
proto.pb.ExcavatorListResponse.prototype.addExcavator = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Excavator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ExcavatorListResponse} returns this
 */
proto.pb.ExcavatorListResponse.prototype.clearExcavatorList = function() {
  return this.setExcavatorList([]);
};


goog.object.extend(exports, proto.pb);
