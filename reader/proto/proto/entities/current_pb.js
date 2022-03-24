// source: proto/entities/current.proto
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

var proto_entities_sensor_pb = require('../../proto/entities/sensor_pb.js');
goog.object.extend(proto, proto_entities_sensor_pb);
var proto_entities_operation_pb = require('../../proto/entities/operation_pb.js');
goog.object.extend(proto, proto_entities_operation_pb);
var proto_enums_event_state_enums_pb = require('../../proto/enums/event_state.enums_pb.js');
goog.object.extend(proto, proto_enums_event_state_enums_pb);
goog.exportSymbol('proto.pb.enums.ExcavatorCurrentState', null, global);
goog.exportSymbol('proto.pb.enums.TruckCurrentState', null, global);
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
proto.pb.enums.TruckCurrentState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.enums.TruckCurrentState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.enums.TruckCurrentState.displayName = 'proto.pb.enums.TruckCurrentState';
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
proto.pb.enums.ExcavatorCurrentState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.enums.ExcavatorCurrentState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.enums.ExcavatorCurrentState.displayName = 'proto.pb.enums.ExcavatorCurrentState';
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
proto.pb.enums.TruckCurrentState.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.enums.TruckCurrentState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.enums.TruckCurrentState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.enums.TruckCurrentState.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sensor: (f = msg.getSensor()) && proto_entities_sensor_pb.Sensor.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cycleId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cycleNumber: jspb.Message.getFieldWithDefault(msg, 5, 0),
    oldOperation: (f = msg.getOldOperation()) && proto_entities_operation_pb.Operation.toObject(includeInstance, f),
    operation: (f = msg.getOperation()) && proto_entities_operation_pb.Operation.toObject(includeInstance, f)
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
 * @return {!proto.pb.enums.TruckCurrentState}
 */
proto.pb.enums.TruckCurrentState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.enums.TruckCurrentState;
  return proto.pb.enums.TruckCurrentState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.enums.TruckCurrentState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.enums.TruckCurrentState}
 */
proto.pb.enums.TruckCurrentState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 2:
      var value = new proto_entities_sensor_pb.Sensor;
      reader.readMessage(value,proto_entities_sensor_pb.Sensor.deserializeBinaryFromReader);
      msg.setSensor(value);
      break;
    case 3:
      var value = /** @type {!proto.pb.EnumEventState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCycleId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCycleNumber(value);
      break;
    case 6:
      var value = new proto_entities_operation_pb.Operation;
      reader.readMessage(value,proto_entities_operation_pb.Operation.deserializeBinaryFromReader);
      msg.setOldOperation(value);
      break;
    case 7:
      var value = new proto_entities_operation_pb.Operation;
      reader.readMessage(value,proto_entities_operation_pb.Operation.deserializeBinaryFromReader);
      msg.setOperation(value);
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
proto.pb.enums.TruckCurrentState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.enums.TruckCurrentState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.enums.TruckCurrentState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.enums.TruckCurrentState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSensor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_entities_sensor_pb.Sensor.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCycleId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCycleNumber();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getOldOperation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_entities_operation_pb.Operation.serializeBinaryToWriter
    );
  }
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_entities_operation_pb.Operation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string device_id = 1;
 * @return {string}
 */
proto.pb.enums.TruckCurrentState.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.enums.TruckCurrentState} returns this
 */
proto.pb.enums.TruckCurrentState.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pb.Sensor sensor = 2;
 * @return {?proto.pb.Sensor}
 */
proto.pb.enums.TruckCurrentState.prototype.getSensor = function() {
  return /** @type{?proto.pb.Sensor} */ (
    jspb.Message.getWrapperField(this, proto_entities_sensor_pb.Sensor, 2));
};


/**
 * @param {?proto.pb.Sensor|undefined} value
 * @return {!proto.pb.enums.TruckCurrentState} returns this
*/
proto.pb.enums.TruckCurrentState.prototype.setSensor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.enums.TruckCurrentState} returns this
 */
proto.pb.enums.TruckCurrentState.prototype.clearSensor = function() {
  return this.setSensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.enums.TruckCurrentState.prototype.hasSensor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional pb.EnumEventState state = 3;
 * @return {!proto.pb.EnumEventState}
 */
proto.pb.enums.TruckCurrentState.prototype.getState = function() {
  return /** @type {!proto.pb.EnumEventState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pb.EnumEventState} value
 * @return {!proto.pb.enums.TruckCurrentState} returns this
 */
proto.pb.enums.TruckCurrentState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string cycle_id = 4;
 * @return {string}
 */
proto.pb.enums.TruckCurrentState.prototype.getCycleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.enums.TruckCurrentState} returns this
 */
proto.pb.enums.TruckCurrentState.prototype.setCycleId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 cycle_number = 5;
 * @return {number}
 */
proto.pb.enums.TruckCurrentState.prototype.getCycleNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.enums.TruckCurrentState} returns this
 */
proto.pb.enums.TruckCurrentState.prototype.setCycleNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional pb.Operation old_operation = 6;
 * @return {?proto.pb.Operation}
 */
proto.pb.enums.TruckCurrentState.prototype.getOldOperation = function() {
  return /** @type{?proto.pb.Operation} */ (
    jspb.Message.getWrapperField(this, proto_entities_operation_pb.Operation, 6));
};


/**
 * @param {?proto.pb.Operation|undefined} value
 * @return {!proto.pb.enums.TruckCurrentState} returns this
*/
proto.pb.enums.TruckCurrentState.prototype.setOldOperation = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.enums.TruckCurrentState} returns this
 */
proto.pb.enums.TruckCurrentState.prototype.clearOldOperation = function() {
  return this.setOldOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.enums.TruckCurrentState.prototype.hasOldOperation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional pb.Operation operation = 7;
 * @return {?proto.pb.Operation}
 */
proto.pb.enums.TruckCurrentState.prototype.getOperation = function() {
  return /** @type{?proto.pb.Operation} */ (
    jspb.Message.getWrapperField(this, proto_entities_operation_pb.Operation, 7));
};


/**
 * @param {?proto.pb.Operation|undefined} value
 * @return {!proto.pb.enums.TruckCurrentState} returns this
*/
proto.pb.enums.TruckCurrentState.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.enums.TruckCurrentState} returns this
 */
proto.pb.enums.TruckCurrentState.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.enums.TruckCurrentState.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.pb.enums.ExcavatorCurrentState.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.enums.ExcavatorCurrentState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.enums.ExcavatorCurrentState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.enums.ExcavatorCurrentState.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sensor: (f = msg.getSensor()) && proto_entities_sensor_pb.Sensor.toObject(includeInstance, f),
    onsite: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    state: jspb.Message.getFieldWithDefault(msg, 4, 0),
    operation: (f = msg.getOperation()) && proto_entities_operation_pb.Operation.toObject(includeInstance, f)
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
 * @return {!proto.pb.enums.ExcavatorCurrentState}
 */
proto.pb.enums.ExcavatorCurrentState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.enums.ExcavatorCurrentState;
  return proto.pb.enums.ExcavatorCurrentState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.enums.ExcavatorCurrentState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.enums.ExcavatorCurrentState}
 */
proto.pb.enums.ExcavatorCurrentState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 2:
      var value = new proto_entities_sensor_pb.Sensor;
      reader.readMessage(value,proto_entities_sensor_pb.Sensor.deserializeBinaryFromReader);
      msg.setSensor(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnsite(value);
      break;
    case 4:
      var value = /** @type {!proto.pb.EnumEventState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 5:
      var value = new proto_entities_operation_pb.Operation;
      reader.readMessage(value,proto_entities_operation_pb.Operation.deserializeBinaryFromReader);
      msg.setOperation(value);
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
proto.pb.enums.ExcavatorCurrentState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.enums.ExcavatorCurrentState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.enums.ExcavatorCurrentState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.enums.ExcavatorCurrentState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSensor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_entities_sensor_pb.Sensor.serializeBinaryToWriter
    );
  }
  f = message.getOnsite();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_entities_operation_pb.Operation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string device_id = 1;
 * @return {string}
 */
proto.pb.enums.ExcavatorCurrentState.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.enums.ExcavatorCurrentState} returns this
 */
proto.pb.enums.ExcavatorCurrentState.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pb.Sensor sensor = 2;
 * @return {?proto.pb.Sensor}
 */
proto.pb.enums.ExcavatorCurrentState.prototype.getSensor = function() {
  return /** @type{?proto.pb.Sensor} */ (
    jspb.Message.getWrapperField(this, proto_entities_sensor_pb.Sensor, 2));
};


/**
 * @param {?proto.pb.Sensor|undefined} value
 * @return {!proto.pb.enums.ExcavatorCurrentState} returns this
*/
proto.pb.enums.ExcavatorCurrentState.prototype.setSensor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.enums.ExcavatorCurrentState} returns this
 */
proto.pb.enums.ExcavatorCurrentState.prototype.clearSensor = function() {
  return this.setSensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.enums.ExcavatorCurrentState.prototype.hasSensor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool onSite = 3;
 * @return {boolean}
 */
proto.pb.enums.ExcavatorCurrentState.prototype.getOnsite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.enums.ExcavatorCurrentState} returns this
 */
proto.pb.enums.ExcavatorCurrentState.prototype.setOnsite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional pb.EnumEventState state = 4;
 * @return {!proto.pb.EnumEventState}
 */
proto.pb.enums.ExcavatorCurrentState.prototype.getState = function() {
  return /** @type {!proto.pb.EnumEventState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pb.EnumEventState} value
 * @return {!proto.pb.enums.ExcavatorCurrentState} returns this
 */
proto.pb.enums.ExcavatorCurrentState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional pb.Operation operation = 5;
 * @return {?proto.pb.Operation}
 */
proto.pb.enums.ExcavatorCurrentState.prototype.getOperation = function() {
  return /** @type{?proto.pb.Operation} */ (
    jspb.Message.getWrapperField(this, proto_entities_operation_pb.Operation, 5));
};


/**
 * @param {?proto.pb.Operation|undefined} value
 * @return {!proto.pb.enums.ExcavatorCurrentState} returns this
*/
proto.pb.enums.ExcavatorCurrentState.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.enums.ExcavatorCurrentState} returns this
 */
proto.pb.enums.ExcavatorCurrentState.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.enums.ExcavatorCurrentState.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.pb.enums);
