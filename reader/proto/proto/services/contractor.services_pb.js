// source: proto/services/contractor.services.proto
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

var proto_entities_contractor_pb = require('../../proto/entities/contractor_pb.js');
goog.object.extend(proto, proto_entities_contractor_pb);
goog.exportSymbol('proto.pb.ContractorRequest', null, global);
goog.exportSymbol('proto.pb.ContractorResponse', null, global);
goog.exportSymbol('proto.pb.ContractorsResponse', null, global);
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
proto.pb.ContractorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ContractorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ContractorRequest.displayName = 'proto.pb.ContractorRequest';
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
proto.pb.ContractorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ContractorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ContractorResponse.displayName = 'proto.pb.ContractorResponse';
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
proto.pb.ContractorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ContractorsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ContractorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ContractorsResponse.displayName = 'proto.pb.ContractorsResponse';
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
proto.pb.ContractorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ContractorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ContractorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ContractorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractor: (f = msg.getContractor()) && proto_entities_contractor_pb.Contractor.toObject(includeInstance, f)
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
 * @return {!proto.pb.ContractorRequest}
 */
proto.pb.ContractorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ContractorRequest;
  return proto.pb.ContractorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ContractorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ContractorRequest}
 */
proto.pb.ContractorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_contractor_pb.Contractor;
      reader.readMessage(value,proto_entities_contractor_pb.Contractor.deserializeBinaryFromReader);
      msg.setContractor(value);
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
proto.pb.ContractorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ContractorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ContractorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ContractorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_contractor_pb.Contractor.serializeBinaryToWriter
    );
  }
};


/**
 * optional Contractor contractor = 1;
 * @return {?proto.pb.Contractor}
 */
proto.pb.ContractorRequest.prototype.getContractor = function() {
  return /** @type{?proto.pb.Contractor} */ (
    jspb.Message.getWrapperField(this, proto_entities_contractor_pb.Contractor, 1));
};


/**
 * @param {?proto.pb.Contractor|undefined} value
 * @return {!proto.pb.ContractorRequest} returns this
*/
proto.pb.ContractorRequest.prototype.setContractor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ContractorRequest} returns this
 */
proto.pb.ContractorRequest.prototype.clearContractor = function() {
  return this.setContractor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ContractorRequest.prototype.hasContractor = function() {
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
proto.pb.ContractorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ContractorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ContractorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ContractorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractor: (f = msg.getContractor()) && proto_entities_contractor_pb.Contractor.toObject(includeInstance, f)
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
 * @return {!proto.pb.ContractorResponse}
 */
proto.pb.ContractorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ContractorResponse;
  return proto.pb.ContractorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ContractorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ContractorResponse}
 */
proto.pb.ContractorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_contractor_pb.Contractor;
      reader.readMessage(value,proto_entities_contractor_pb.Contractor.deserializeBinaryFromReader);
      msg.setContractor(value);
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
proto.pb.ContractorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ContractorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ContractorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ContractorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_contractor_pb.Contractor.serializeBinaryToWriter
    );
  }
};


/**
 * optional Contractor contractor = 1;
 * @return {?proto.pb.Contractor}
 */
proto.pb.ContractorResponse.prototype.getContractor = function() {
  return /** @type{?proto.pb.Contractor} */ (
    jspb.Message.getWrapperField(this, proto_entities_contractor_pb.Contractor, 1));
};


/**
 * @param {?proto.pb.Contractor|undefined} value
 * @return {!proto.pb.ContractorResponse} returns this
*/
proto.pb.ContractorResponse.prototype.setContractor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ContractorResponse} returns this
 */
proto.pb.ContractorResponse.prototype.clearContractor = function() {
  return this.setContractor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ContractorResponse.prototype.hasContractor = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ContractorsResponse.repeatedFields_ = [1];



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
proto.pb.ContractorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ContractorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ContractorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ContractorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractorsList: jspb.Message.toObjectList(msg.getContractorsList(),
    proto_entities_contractor_pb.Contractor.toObject, includeInstance)
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
 * @return {!proto.pb.ContractorsResponse}
 */
proto.pb.ContractorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ContractorsResponse;
  return proto.pb.ContractorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ContractorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ContractorsResponse}
 */
proto.pb.ContractorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_contractor_pb.Contractor;
      reader.readMessage(value,proto_entities_contractor_pb.Contractor.deserializeBinaryFromReader);
      msg.addContractors(value);
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
proto.pb.ContractorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ContractorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ContractorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ContractorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_entities_contractor_pb.Contractor.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Contractor contractors = 1;
 * @return {!Array<!proto.pb.Contractor>}
 */
proto.pb.ContractorsResponse.prototype.getContractorsList = function() {
  return /** @type{!Array<!proto.pb.Contractor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_contractor_pb.Contractor, 1));
};


/**
 * @param {!Array<!proto.pb.Contractor>} value
 * @return {!proto.pb.ContractorsResponse} returns this
*/
proto.pb.ContractorsResponse.prototype.setContractorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Contractor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Contractor}
 */
proto.pb.ContractorsResponse.prototype.addContractors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Contractor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ContractorsResponse} returns this
 */
proto.pb.ContractorsResponse.prototype.clearContractorsList = function() {
  return this.setContractorsList([]);
};


goog.object.extend(exports, proto.pb);
