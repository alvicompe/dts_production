// source: proto/services/report.services.proto
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

var proto_entities_report_pb = require('../../proto/entities/report_pb.js');
goog.object.extend(proto, proto_entities_report_pb);
var proto_entities_truck_pb = require('../../proto/entities/truck_pb.js');
goog.object.extend(proto, proto_entities_truck_pb);
var proto_enums_shift_enums_pb = require('../../proto/enums/shift.enums_pb.js');
goog.object.extend(proto, proto_enums_shift_enums_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.pb.DownloadRequest', null, global);
goog.exportSymbol('proto.pb.DownloadResponse', null, global);
goog.exportSymbol('proto.pb.ReportPerformancePerHourResponse', null, global);
goog.exportSymbol('proto.pb.ReportRequest', null, global);
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
proto.pb.ReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ReportRequest.displayName = 'proto.pb.ReportRequest';
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
proto.pb.DownloadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.DownloadRequest.repeatedFields_, null);
};
goog.inherits(proto.pb.DownloadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.DownloadRequest.displayName = 'proto.pb.DownloadRequest';
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
proto.pb.ReportPerformancePerHourResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ReportPerformancePerHourResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ReportPerformancePerHourResponse.displayName = 'proto.pb.ReportPerformancePerHourResponse';
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
proto.pb.DownloadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.DownloadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.DownloadResponse.displayName = 'proto.pb.DownloadResponse';
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
proto.pb.ReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateStart: (f = msg.getDateStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateEnd: (f = msg.getDateEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.pb.ReportRequest}
 */
proto.pb.ReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ReportRequest;
  return proto.pb.ReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ReportRequest}
 */
proto.pb.ReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateStart(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateEnd(value);
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
proto.pb.ReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp date_start = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.ReportRequest.prototype.getDateStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.ReportRequest} returns this
*/
proto.pb.ReportRequest.prototype.setDateStart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ReportRequest} returns this
 */
proto.pb.ReportRequest.prototype.clearDateStart = function() {
  return this.setDateStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ReportRequest.prototype.hasDateStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp date_end = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.ReportRequest.prototype.getDateEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.ReportRequest} returns this
*/
proto.pb.ReportRequest.prototype.setDateEnd = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ReportRequest} returns this
 */
proto.pb.ReportRequest.prototype.clearDateEnd = function() {
  return this.setDateEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ReportRequest.prototype.hasDateEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.DownloadRequest.repeatedFields_ = [5];



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
proto.pb.DownloadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.DownloadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.DownloadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.DownloadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateStart: (f = msg.getDateStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateEnd: (f = msg.getDateEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    shift: jspb.Message.getFieldWithDefault(msg, 3, 0),
    allTruck: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    truckList: jspb.Message.toObjectList(msg.getTruckList(),
    proto_entities_truck_pb.Truck.toObject, includeInstance)
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
 * @return {!proto.pb.DownloadRequest}
 */
proto.pb.DownloadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.DownloadRequest;
  return proto.pb.DownloadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.DownloadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.DownloadRequest}
 */
proto.pb.DownloadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateStart(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateEnd(value);
      break;
    case 3:
      var value = /** @type {!proto.pb.Shift} */ (reader.readEnum());
      msg.setShift(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllTruck(value);
      break;
    case 5:
      var value = new proto_entities_truck_pb.Truck;
      reader.readMessage(value,proto_entities_truck_pb.Truck.deserializeBinaryFromReader);
      msg.addTruck(value);
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
proto.pb.DownloadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.DownloadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.DownloadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.DownloadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getShift();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAllTruck();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTruckList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_entities_truck_pb.Truck.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp date_start = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.DownloadRequest.prototype.getDateStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.DownloadRequest} returns this
*/
proto.pb.DownloadRequest.prototype.setDateStart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.DownloadRequest} returns this
 */
proto.pb.DownloadRequest.prototype.clearDateStart = function() {
  return this.setDateStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.DownloadRequest.prototype.hasDateStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp date_end = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.DownloadRequest.prototype.getDateEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.DownloadRequest} returns this
*/
proto.pb.DownloadRequest.prototype.setDateEnd = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.DownloadRequest} returns this
 */
proto.pb.DownloadRequest.prototype.clearDateEnd = function() {
  return this.setDateEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.DownloadRequest.prototype.hasDateEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Shift shift = 3;
 * @return {!proto.pb.Shift}
 */
proto.pb.DownloadRequest.prototype.getShift = function() {
  return /** @type {!proto.pb.Shift} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pb.Shift} value
 * @return {!proto.pb.DownloadRequest} returns this
 */
proto.pb.DownloadRequest.prototype.setShift = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool all_truck = 4;
 * @return {boolean}
 */
proto.pb.DownloadRequest.prototype.getAllTruck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.DownloadRequest} returns this
 */
proto.pb.DownloadRequest.prototype.setAllTruck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated Truck truck = 5;
 * @return {!Array<!proto.pb.Truck>}
 */
proto.pb.DownloadRequest.prototype.getTruckList = function() {
  return /** @type{!Array<!proto.pb.Truck>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_truck_pb.Truck, 5));
};


/**
 * @param {!Array<!proto.pb.Truck>} value
 * @return {!proto.pb.DownloadRequest} returns this
*/
proto.pb.DownloadRequest.prototype.setTruckList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.pb.Truck=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Truck}
 */
proto.pb.DownloadRequest.prototype.addTruck = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.pb.Truck, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.DownloadRequest} returns this
 */
proto.pb.DownloadRequest.prototype.clearTruckList = function() {
  return this.setTruckList([]);
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
proto.pb.ReportPerformancePerHourResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ReportPerformancePerHourResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ReportPerformancePerHourResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ReportPerformancePerHourResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    day: (f = msg.getDay()) && proto_entities_report_pb.ReportPerformancePerHour.toObject(includeInstance, f),
    night: (f = msg.getNight()) && proto_entities_report_pb.ReportPerformancePerHour.toObject(includeInstance, f)
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
 * @return {!proto.pb.ReportPerformancePerHourResponse}
 */
proto.pb.ReportPerformancePerHourResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ReportPerformancePerHourResponse;
  return proto.pb.ReportPerformancePerHourResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ReportPerformancePerHourResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ReportPerformancePerHourResponse}
 */
proto.pb.ReportPerformancePerHourResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto_entities_report_pb.ReportPerformancePerHour;
      reader.readMessage(value,proto_entities_report_pb.ReportPerformancePerHour.deserializeBinaryFromReader);
      msg.setDay(value);
      break;
    case 4:
      var value = new proto_entities_report_pb.ReportPerformancePerHour;
      reader.readMessage(value,proto_entities_report_pb.ReportPerformancePerHour.deserializeBinaryFromReader);
      msg.setNight(value);
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
proto.pb.ReportPerformancePerHourResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ReportPerformancePerHourResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ReportPerformancePerHourResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ReportPerformancePerHourResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
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
  f = message.getDay();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_entities_report_pb.ReportPerformancePerHour.serializeBinaryToWriter
    );
  }
  f = message.getNight();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_entities_report_pb.ReportPerformancePerHour.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.pb.ReportPerformancePerHourResponse.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.ReportPerformancePerHourResponse} returns this
 */
proto.pb.ReportPerformancePerHourResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.pb.ReportPerformancePerHourResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ReportPerformancePerHourResponse} returns this
 */
proto.pb.ReportPerformancePerHourResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ReportPerformancePerHour day = 3;
 * @return {?proto.pb.ReportPerformancePerHour}
 */
proto.pb.ReportPerformancePerHourResponse.prototype.getDay = function() {
  return /** @type{?proto.pb.ReportPerformancePerHour} */ (
    jspb.Message.getWrapperField(this, proto_entities_report_pb.ReportPerformancePerHour, 3));
};


/**
 * @param {?proto.pb.ReportPerformancePerHour|undefined} value
 * @return {!proto.pb.ReportPerformancePerHourResponse} returns this
*/
proto.pb.ReportPerformancePerHourResponse.prototype.setDay = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ReportPerformancePerHourResponse} returns this
 */
proto.pb.ReportPerformancePerHourResponse.prototype.clearDay = function() {
  return this.setDay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ReportPerformancePerHourResponse.prototype.hasDay = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ReportPerformancePerHour night = 4;
 * @return {?proto.pb.ReportPerformancePerHour}
 */
proto.pb.ReportPerformancePerHourResponse.prototype.getNight = function() {
  return /** @type{?proto.pb.ReportPerformancePerHour} */ (
    jspb.Message.getWrapperField(this, proto_entities_report_pb.ReportPerformancePerHour, 4));
};


/**
 * @param {?proto.pb.ReportPerformancePerHour|undefined} value
 * @return {!proto.pb.ReportPerformancePerHourResponse} returns this
*/
proto.pb.ReportPerformancePerHourResponse.prototype.setNight = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ReportPerformancePerHourResponse} returns this
 */
proto.pb.ReportPerformancePerHourResponse.prototype.clearNight = function() {
  return this.setNight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ReportPerformancePerHourResponse.prototype.hasNight = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.pb.DownloadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.DownloadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.DownloadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.DownloadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    file: msg.getFile_asB64()
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
 * @return {!proto.pb.DownloadResponse}
 */
proto.pb.DownloadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.DownloadResponse;
  return proto.pb.DownloadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.DownloadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.DownloadResponse}
 */
proto.pb.DownloadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFile(value);
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
proto.pb.DownloadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.DownloadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.DownloadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.DownloadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getFile_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string file_name = 1;
 * @return {string}
 */
proto.pb.DownloadResponse.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.DownloadResponse} returns this
 */
proto.pb.DownloadResponse.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.pb.DownloadResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.DownloadResponse} returns this
 */
proto.pb.DownloadResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bytes file = 3;
 * @return {!(string|Uint8Array)}
 */
proto.pb.DownloadResponse.prototype.getFile = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes file = 3;
 * This is a type-conversion wrapper around `getFile()`
 * @return {string}
 */
proto.pb.DownloadResponse.prototype.getFile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFile()));
};


/**
 * optional bytes file = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFile()`
 * @return {!Uint8Array}
 */
proto.pb.DownloadResponse.prototype.getFile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFile()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pb.DownloadResponse} returns this
 */
proto.pb.DownloadResponse.prototype.setFile = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


goog.object.extend(exports, proto.pb);
