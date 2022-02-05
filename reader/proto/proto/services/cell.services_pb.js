// source: proto/services/cell.services.proto
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

var proto_entities_cell_pb = require('../../proto/entities/cell_pb.js');
goog.object.extend(proto, proto_entities_cell_pb);
var proto_enums_type_download_enums_pb = require('../../proto/enums/type_download.enums_pb.js');
goog.object.extend(proto, proto_enums_type_download_enums_pb);
goog.exportSymbol('proto.pb.CellListRequest', null, global);
goog.exportSymbol('proto.pb.CellListResponse', null, global);
goog.exportSymbol('proto.pb.CellRequest', null, global);
goog.exportSymbol('proto.pb.CellResponse', null, global);
goog.exportSymbol('proto.pb.CellUpdateRequest', null, global);
goog.exportSymbol('proto.pb.CellsResponse', null, global);
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
proto.pb.CellListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.CellListRequest.repeatedFields_, null);
};
goog.inherits(proto.pb.CellListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CellListRequest.displayName = 'proto.pb.CellListRequest';
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
proto.pb.CellRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CellRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CellRequest.displayName = 'proto.pb.CellRequest';
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
proto.pb.CellUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CellUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CellUpdateRequest.displayName = 'proto.pb.CellUpdateRequest';
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
proto.pb.CellResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CellResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CellResponse.displayName = 'proto.pb.CellResponse';
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
proto.pb.CellsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.CellsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.CellsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CellsResponse.displayName = 'proto.pb.CellsResponse';
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
proto.pb.CellListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CellListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CellListResponse.displayName = 'proto.pb.CellListResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.CellListRequest.repeatedFields_ = [1];



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
proto.pb.CellListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CellListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CellListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cellList: jspb.Message.toObjectList(msg.getCellList(),
    proto_entities_cell_pb.Cell.toObject, includeInstance),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.pb.CellListRequest}
 */
proto.pb.CellListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CellListRequest;
  return proto.pb.CellListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CellListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CellListRequest}
 */
proto.pb.CellListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_cell_pb.Cell;
      reader.readMessage(value,proto_entities_cell_pb.Cell.deserializeBinaryFromReader);
      msg.addCell(value);
      break;
    case 2:
      var value = /** @type {!proto.pb.TypeDownload} */ (reader.readEnum());
      msg.setType(value);
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
proto.pb.CellListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CellListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CellListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCellList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_entities_cell_pb.Cell.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * repeated Cell cell = 1;
 * @return {!Array<!proto.pb.Cell>}
 */
proto.pb.CellListRequest.prototype.getCellList = function() {
  return /** @type{!Array<!proto.pb.Cell>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_cell_pb.Cell, 1));
};


/**
 * @param {!Array<!proto.pb.Cell>} value
 * @return {!proto.pb.CellListRequest} returns this
*/
proto.pb.CellListRequest.prototype.setCellList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Cell=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Cell}
 */
proto.pb.CellListRequest.prototype.addCell = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Cell, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.CellListRequest} returns this
 */
proto.pb.CellListRequest.prototype.clearCellList = function() {
  return this.setCellList([]);
};


/**
 * optional TypeDownload type = 2;
 * @return {!proto.pb.TypeDownload}
 */
proto.pb.CellListRequest.prototype.getType = function() {
  return /** @type {!proto.pb.TypeDownload} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pb.TypeDownload} value
 * @return {!proto.pb.CellListRequest} returns this
 */
proto.pb.CellListRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.pb.CellRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CellRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CellRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cell: (f = msg.getCell()) && proto_entities_cell_pb.Cell.toObject(includeInstance, f)
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
 * @return {!proto.pb.CellRequest}
 */
proto.pb.CellRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CellRequest;
  return proto.pb.CellRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CellRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CellRequest}
 */
proto.pb.CellRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_cell_pb.Cell;
      reader.readMessage(value,proto_entities_cell_pb.Cell.deserializeBinaryFromReader);
      msg.setCell(value);
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
proto.pb.CellRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CellRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CellRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCell();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_cell_pb.Cell.serializeBinaryToWriter
    );
  }
};


/**
 * optional Cell cell = 1;
 * @return {?proto.pb.Cell}
 */
proto.pb.CellRequest.prototype.getCell = function() {
  return /** @type{?proto.pb.Cell} */ (
    jspb.Message.getWrapperField(this, proto_entities_cell_pb.Cell, 1));
};


/**
 * @param {?proto.pb.Cell|undefined} value
 * @return {!proto.pb.CellRequest} returns this
*/
proto.pb.CellRequest.prototype.setCell = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CellRequest} returns this
 */
proto.pb.CellRequest.prototype.clearCell = function() {
  return this.setCell(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CellRequest.prototype.hasCell = function() {
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
proto.pb.CellUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CellUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CellUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cell: (f = msg.getCell()) && proto_entities_cell_pb.Cell.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.pb.CellUpdateRequest}
 */
proto.pb.CellUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CellUpdateRequest;
  return proto.pb.CellUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CellUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CellUpdateRequest}
 */
proto.pb.CellUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_cell_pb.Cell;
      reader.readMessage(value,proto_entities_cell_pb.Cell.deserializeBinaryFromReader);
      msg.setCell(value);
      break;
    case 2:
      var value = /** @type {!proto.pb.TypeDownload} */ (reader.readEnum());
      msg.setType(value);
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
proto.pb.CellUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CellUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CellUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCell();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_cell_pb.Cell.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional Cell cell = 1;
 * @return {?proto.pb.Cell}
 */
proto.pb.CellUpdateRequest.prototype.getCell = function() {
  return /** @type{?proto.pb.Cell} */ (
    jspb.Message.getWrapperField(this, proto_entities_cell_pb.Cell, 1));
};


/**
 * @param {?proto.pb.Cell|undefined} value
 * @return {!proto.pb.CellUpdateRequest} returns this
*/
proto.pb.CellUpdateRequest.prototype.setCell = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CellUpdateRequest} returns this
 */
proto.pb.CellUpdateRequest.prototype.clearCell = function() {
  return this.setCell(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CellUpdateRequest.prototype.hasCell = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TypeDownload type = 2;
 * @return {!proto.pb.TypeDownload}
 */
proto.pb.CellUpdateRequest.prototype.getType = function() {
  return /** @type {!proto.pb.TypeDownload} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pb.TypeDownload} value
 * @return {!proto.pb.CellUpdateRequest} returns this
 */
proto.pb.CellUpdateRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.pb.CellResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CellResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CellResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cell: (f = msg.getCell()) && proto_entities_cell_pb.Cell.toObject(includeInstance, f)
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
 * @return {!proto.pb.CellResponse}
 */
proto.pb.CellResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CellResponse;
  return proto.pb.CellResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CellResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CellResponse}
 */
proto.pb.CellResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_cell_pb.Cell;
      reader.readMessage(value,proto_entities_cell_pb.Cell.deserializeBinaryFromReader);
      msg.setCell(value);
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
proto.pb.CellResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CellResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CellResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCell();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_cell_pb.Cell.serializeBinaryToWriter
    );
  }
};


/**
 * optional Cell cell = 1;
 * @return {?proto.pb.Cell}
 */
proto.pb.CellResponse.prototype.getCell = function() {
  return /** @type{?proto.pb.Cell} */ (
    jspb.Message.getWrapperField(this, proto_entities_cell_pb.Cell, 1));
};


/**
 * @param {?proto.pb.Cell|undefined} value
 * @return {!proto.pb.CellResponse} returns this
*/
proto.pb.CellResponse.prototype.setCell = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CellResponse} returns this
 */
proto.pb.CellResponse.prototype.clearCell = function() {
  return this.setCell(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CellResponse.prototype.hasCell = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.CellsResponse.repeatedFields_ = [1];



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
proto.pb.CellsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CellsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CellsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cellsList: jspb.Message.toObjectList(msg.getCellsList(),
    proto_entities_cell_pb.Cell.toObject, includeInstance)
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
 * @return {!proto.pb.CellsResponse}
 */
proto.pb.CellsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CellsResponse;
  return proto.pb.CellsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CellsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CellsResponse}
 */
proto.pb.CellsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_cell_pb.Cell;
      reader.readMessage(value,proto_entities_cell_pb.Cell.deserializeBinaryFromReader);
      msg.addCells(value);
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
proto.pb.CellsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CellsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CellsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCellsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_entities_cell_pb.Cell.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Cell cells = 1;
 * @return {!Array<!proto.pb.Cell>}
 */
proto.pb.CellsResponse.prototype.getCellsList = function() {
  return /** @type{!Array<!proto.pb.Cell>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_cell_pb.Cell, 1));
};


/**
 * @param {!Array<!proto.pb.Cell>} value
 * @return {!proto.pb.CellsResponse} returns this
*/
proto.pb.CellsResponse.prototype.setCellsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Cell=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Cell}
 */
proto.pb.CellsResponse.prototype.addCells = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Cell, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.CellsResponse} returns this
 */
proto.pb.CellsResponse.prototype.clearCellsList = function() {
  return this.setCellsList([]);
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
proto.pb.CellListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CellListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CellListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    done: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.pb.CellListResponse}
 */
proto.pb.CellListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CellListResponse;
  return proto.pb.CellListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CellListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CellListResponse}
 */
proto.pb.CellListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDone(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pb.CellListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CellListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CellListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CellListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDone();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool done = 1;
 * @return {boolean}
 */
proto.pb.CellListResponse.prototype.getDone = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CellListResponse} returns this
 */
proto.pb.CellListResponse.prototype.setDone = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.pb.CellListResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CellListResponse} returns this
 */
proto.pb.CellListResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.pb);