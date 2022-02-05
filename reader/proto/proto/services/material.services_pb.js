// source: proto/services/material.services.proto
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

var proto_entities_material_pb = require('../../proto/entities/material_pb.js');
goog.object.extend(proto, proto_entities_material_pb);
goog.exportSymbol('proto.pb.MaterialRequest', null, global);
goog.exportSymbol('proto.pb.MaterialResponse', null, global);
goog.exportSymbol('proto.pb.MaterialsResponse', null, global);
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
proto.pb.MaterialRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.MaterialRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.MaterialRequest.displayName = 'proto.pb.MaterialRequest';
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
proto.pb.MaterialResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.MaterialResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.MaterialResponse.displayName = 'proto.pb.MaterialResponse';
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
proto.pb.MaterialsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.MaterialsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.MaterialsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.MaterialsResponse.displayName = 'proto.pb.MaterialsResponse';
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
proto.pb.MaterialRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.MaterialRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.MaterialRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.MaterialRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    material: (f = msg.getMaterial()) && proto_entities_material_pb.Material.toObject(includeInstance, f)
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
 * @return {!proto.pb.MaterialRequest}
 */
proto.pb.MaterialRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.MaterialRequest;
  return proto.pb.MaterialRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.MaterialRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.MaterialRequest}
 */
proto.pb.MaterialRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_material_pb.Material;
      reader.readMessage(value,proto_entities_material_pb.Material.deserializeBinaryFromReader);
      msg.setMaterial(value);
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
proto.pb.MaterialRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.MaterialRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.MaterialRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.MaterialRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaterial();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_material_pb.Material.serializeBinaryToWriter
    );
  }
};


/**
 * optional Material material = 1;
 * @return {?proto.pb.Material}
 */
proto.pb.MaterialRequest.prototype.getMaterial = function() {
  return /** @type{?proto.pb.Material} */ (
    jspb.Message.getWrapperField(this, proto_entities_material_pb.Material, 1));
};


/**
 * @param {?proto.pb.Material|undefined} value
 * @return {!proto.pb.MaterialRequest} returns this
*/
proto.pb.MaterialRequest.prototype.setMaterial = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.MaterialRequest} returns this
 */
proto.pb.MaterialRequest.prototype.clearMaterial = function() {
  return this.setMaterial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.MaterialRequest.prototype.hasMaterial = function() {
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
proto.pb.MaterialResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.MaterialResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.MaterialResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.MaterialResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    material: (f = msg.getMaterial()) && proto_entities_material_pb.Material.toObject(includeInstance, f)
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
 * @return {!proto.pb.MaterialResponse}
 */
proto.pb.MaterialResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.MaterialResponse;
  return proto.pb.MaterialResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.MaterialResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.MaterialResponse}
 */
proto.pb.MaterialResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_material_pb.Material;
      reader.readMessage(value,proto_entities_material_pb.Material.deserializeBinaryFromReader);
      msg.setMaterial(value);
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
proto.pb.MaterialResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.MaterialResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.MaterialResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.MaterialResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaterial();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_material_pb.Material.serializeBinaryToWriter
    );
  }
};


/**
 * optional Material material = 1;
 * @return {?proto.pb.Material}
 */
proto.pb.MaterialResponse.prototype.getMaterial = function() {
  return /** @type{?proto.pb.Material} */ (
    jspb.Message.getWrapperField(this, proto_entities_material_pb.Material, 1));
};


/**
 * @param {?proto.pb.Material|undefined} value
 * @return {!proto.pb.MaterialResponse} returns this
*/
proto.pb.MaterialResponse.prototype.setMaterial = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.MaterialResponse} returns this
 */
proto.pb.MaterialResponse.prototype.clearMaterial = function() {
  return this.setMaterial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.MaterialResponse.prototype.hasMaterial = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.MaterialsResponse.repeatedFields_ = [1];



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
proto.pb.MaterialsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.MaterialsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.MaterialsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.MaterialsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    materialsList: jspb.Message.toObjectList(msg.getMaterialsList(),
    proto_entities_material_pb.Material.toObject, includeInstance)
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
 * @return {!proto.pb.MaterialsResponse}
 */
proto.pb.MaterialsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.MaterialsResponse;
  return proto.pb.MaterialsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.MaterialsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.MaterialsResponse}
 */
proto.pb.MaterialsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_material_pb.Material;
      reader.readMessage(value,proto_entities_material_pb.Material.deserializeBinaryFromReader);
      msg.addMaterials(value);
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
proto.pb.MaterialsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.MaterialsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.MaterialsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.MaterialsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaterialsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_entities_material_pb.Material.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Material materials = 1;
 * @return {!Array<!proto.pb.Material>}
 */
proto.pb.MaterialsResponse.prototype.getMaterialsList = function() {
  return /** @type{!Array<!proto.pb.Material>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_material_pb.Material, 1));
};


/**
 * @param {!Array<!proto.pb.Material>} value
 * @return {!proto.pb.MaterialsResponse} returns this
*/
proto.pb.MaterialsResponse.prototype.setMaterialsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Material=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Material}
 */
proto.pb.MaterialsResponse.prototype.addMaterials = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Material, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.MaterialsResponse} returns this
 */
proto.pb.MaterialsResponse.prototype.clearMaterialsList = function() {
  return this.setMaterialsList([]);
};


goog.object.extend(exports, proto.pb);