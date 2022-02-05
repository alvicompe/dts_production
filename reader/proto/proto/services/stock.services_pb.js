// source: proto/services/stock.services.proto
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

var proto_entities_stock_pb = require('../../proto/entities/stock_pb.js');
goog.object.extend(proto, proto_entities_stock_pb);
goog.exportSymbol('proto.pb.StockRequest', null, global);
goog.exportSymbol('proto.pb.StockResponse', null, global);
goog.exportSymbol('proto.pb.StocksResponse', null, global);
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
proto.pb.StockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.StockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.StockRequest.displayName = 'proto.pb.StockRequest';
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
proto.pb.StockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.StockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.StockResponse.displayName = 'proto.pb.StockResponse';
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
proto.pb.StocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.StocksResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.StocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.StocksResponse.displayName = 'proto.pb.StocksResponse';
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
proto.pb.StockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.StockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.StockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stock: (f = msg.getStock()) && proto_entities_stock_pb.Stock.toObject(includeInstance, f)
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
 * @return {!proto.pb.StockRequest}
 */
proto.pb.StockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.StockRequest;
  return proto.pb.StockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.StockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.StockRequest}
 */
proto.pb.StockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_stock_pb.Stock;
      reader.readMessage(value,proto_entities_stock_pb.Stock.deserializeBinaryFromReader);
      msg.setStock(value);
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
proto.pb.StockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.StockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.StockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_stock_pb.Stock.serializeBinaryToWriter
    );
  }
};


/**
 * optional Stock stock = 1;
 * @return {?proto.pb.Stock}
 */
proto.pb.StockRequest.prototype.getStock = function() {
  return /** @type{?proto.pb.Stock} */ (
    jspb.Message.getWrapperField(this, proto_entities_stock_pb.Stock, 1));
};


/**
 * @param {?proto.pb.Stock|undefined} value
 * @return {!proto.pb.StockRequest} returns this
*/
proto.pb.StockRequest.prototype.setStock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.StockRequest} returns this
 */
proto.pb.StockRequest.prototype.clearStock = function() {
  return this.setStock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.StockRequest.prototype.hasStock = function() {
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
proto.pb.StockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.StockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.StockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    stock: (f = msg.getStock()) && proto_entities_stock_pb.Stock.toObject(includeInstance, f)
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
 * @return {!proto.pb.StockResponse}
 */
proto.pb.StockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.StockResponse;
  return proto.pb.StockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.StockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.StockResponse}
 */
proto.pb.StockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_stock_pb.Stock;
      reader.readMessage(value,proto_entities_stock_pb.Stock.deserializeBinaryFromReader);
      msg.setStock(value);
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
proto.pb.StockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.StockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.StockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_entities_stock_pb.Stock.serializeBinaryToWriter
    );
  }
};


/**
 * optional Stock stock = 1;
 * @return {?proto.pb.Stock}
 */
proto.pb.StockResponse.prototype.getStock = function() {
  return /** @type{?proto.pb.Stock} */ (
    jspb.Message.getWrapperField(this, proto_entities_stock_pb.Stock, 1));
};


/**
 * @param {?proto.pb.Stock|undefined} value
 * @return {!proto.pb.StockResponse} returns this
*/
proto.pb.StockResponse.prototype.setStock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.StockResponse} returns this
 */
proto.pb.StockResponse.prototype.clearStock = function() {
  return this.setStock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.StockResponse.prototype.hasStock = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.StocksResponse.repeatedFields_ = [1];



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
proto.pb.StocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.StocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.StocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    stocksList: jspb.Message.toObjectList(msg.getStocksList(),
    proto_entities_stock_pb.Stock.toObject, includeInstance)
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
 * @return {!proto.pb.StocksResponse}
 */
proto.pb.StocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.StocksResponse;
  return proto.pb.StocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.StocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.StocksResponse}
 */
proto.pb.StocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_entities_stock_pb.Stock;
      reader.readMessage(value,proto_entities_stock_pb.Stock.deserializeBinaryFromReader);
      msg.addStocks(value);
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
proto.pb.StocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.StocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.StocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_entities_stock_pb.Stock.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Stock stocks = 1;
 * @return {!Array<!proto.pb.Stock>}
 */
proto.pb.StocksResponse.prototype.getStocksList = function() {
  return /** @type{!Array<!proto.pb.Stock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_stock_pb.Stock, 1));
};


/**
 * @param {!Array<!proto.pb.Stock>} value
 * @return {!proto.pb.StocksResponse} returns this
*/
proto.pb.StocksResponse.prototype.setStocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Stock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Stock}
 */
proto.pb.StocksResponse.prototype.addStocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Stock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.StocksResponse} returns this
 */
proto.pb.StocksResponse.prototype.clearStocksList = function() {
  return this.setStocksList([]);
};


goog.object.extend(exports, proto.pb);