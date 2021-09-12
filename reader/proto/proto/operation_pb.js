// source: proto/operation.proto
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

var proto_truck_pb = require('../proto/truck_pb.js');
goog.object.extend(proto, proto_truck_pb);
var proto_excavator_pb = require('../proto/excavator_pb.js');
goog.object.extend(proto, proto_excavator_pb);
var proto_road_pb = require('../proto/road_pb.js');
goog.object.extend(proto, proto_road_pb);
var proto_cycle_pb = require('../proto/cycle_pb.js');
goog.object.extend(proto, proto_cycle_pb);
var proto_load_pb = require('../proto/load_pb.js');
goog.object.extend(proto, proto_load_pb);
var proto_material_pb = require('../proto/material_pb.js');
goog.object.extend(proto, proto_material_pb);
goog.exportSymbol('proto.pb.Operation', null, global);
goog.exportSymbol('proto.pb.Operation.Shift', null, global);
goog.exportSymbol('proto.pb.Operation.State', null, global);
goog.exportSymbol('proto.pb.OperationRequest', null, global);
goog.exportSymbol('proto.pb.OperationResponse', null, global);
goog.exportSymbol('proto.pb.OperationsResponse', null, global);
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
proto.pb.Operation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.Operation.repeatedFields_, null);
};
goog.inherits(proto.pb.Operation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Operation.displayName = 'proto.pb.Operation';
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
proto.pb.OperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.OperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.OperationRequest.displayName = 'proto.pb.OperationRequest';
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
proto.pb.OperationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.OperationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.OperationResponse.displayName = 'proto.pb.OperationResponse';
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
proto.pb.OperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.OperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.OperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.OperationsResponse.displayName = 'proto.pb.OperationsResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.Operation.repeatedFields_ = [12,13,14,15];



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
proto.pb.Operation.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Operation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Operation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Operation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    startTime: jspb.Message.getFieldWithDefault(msg, 4, ""),
    endTime: jspb.Message.getFieldWithDefault(msg, 5, ""),
    distance: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    duration: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    shift: jspb.Message.getFieldWithDefault(msg, 8, 0),
    state: jspb.Message.getFieldWithDefault(msg, 9, 0),
    upload: (f = msg.getUpload()) && proto_load_pb.Upload.toObject(includeInstance, f),
    download: (f = msg.getDownload()) && proto_load_pb.Download.toObject(includeInstance, f),
    roadList: jspb.Message.toObjectList(msg.getRoadList(),
    proto_road_pb.Road.toObject, includeInstance),
    truckList: jspb.Message.toObjectList(msg.getTruckList(),
    proto_truck_pb.Truck.toObject, includeInstance),
    excavatorList: jspb.Message.toObjectList(msg.getExcavatorList(),
    proto_excavator_pb.Excavator.toObject, includeInstance),
    cycleList: jspb.Message.toObjectList(msg.getCycleList(),
    proto_cycle_pb.Cycle.toObject, includeInstance)
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
 * @return {!proto.pb.Operation}
 */
proto.pb.Operation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Operation;
  return proto.pb.Operation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Operation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Operation}
 */
proto.pb.Operation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndTime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDistance(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDuration(value);
      break;
    case 8:
      var value = /** @type {!proto.pb.Operation.Shift} */ (reader.readEnum());
      msg.setShift(value);
      break;
    case 9:
      var value = /** @type {!proto.pb.Operation.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 10:
      var value = new proto_load_pb.Upload;
      reader.readMessage(value,proto_load_pb.Upload.deserializeBinaryFromReader);
      msg.setUpload(value);
      break;
    case 11:
      var value = new proto_load_pb.Download;
      reader.readMessage(value,proto_load_pb.Download.deserializeBinaryFromReader);
      msg.setDownload(value);
      break;
    case 12:
      var value = new proto_road_pb.Road;
      reader.readMessage(value,proto_road_pb.Road.deserializeBinaryFromReader);
      msg.addRoad(value);
      break;
    case 13:
      var value = new proto_truck_pb.Truck;
      reader.readMessage(value,proto_truck_pb.Truck.deserializeBinaryFromReader);
      msg.addTruck(value);
      break;
    case 14:
      var value = new proto_excavator_pb.Excavator;
      reader.readMessage(value,proto_excavator_pb.Excavator.deserializeBinaryFromReader);
      msg.addExcavator(value);
      break;
    case 15:
      var value = new proto_cycle_pb.Cycle;
      reader.readMessage(value,proto_cycle_pb.Cycle.deserializeBinaryFromReader);
      msg.addCycle(value);
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
proto.pb.Operation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Operation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Operation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Operation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStartTime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEndTime();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDistance();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getShift();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getUpload();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_load_pb.Upload.serializeBinaryToWriter
    );
  }
  f = message.getDownload();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_load_pb.Download.serializeBinaryToWriter
    );
  }
  f = message.getRoadList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto_road_pb.Road.serializeBinaryToWriter
    );
  }
  f = message.getTruckList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto_truck_pb.Truck.serializeBinaryToWriter
    );
  }
  f = message.getExcavatorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto_excavator_pb.Excavator.serializeBinaryToWriter
    );
  }
  f = message.getCycleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto_cycle_pb.Cycle.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.Operation.Shift = {
  UNKNOWN_SHIFT: 0,
  NIGHT: 1,
  DAY: 2
};

/**
 * @enum {number}
 */
proto.pb.Operation.State = {
  UNKNOWN_STATE: 0,
  PENDING: 1,
  OPENED: 2,
  CLOSED: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.Operation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pb.Operation.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.pb.Operation.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string start_time = 4;
 * @return {string}
 */
proto.pb.Operation.prototype.getStartTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string end_time = 5;
 * @return {string}
 */
proto.pb.Operation.prototype.getEndTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.setEndTime = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double distance = 6;
 * @return {number}
 */
proto.pb.Operation.prototype.getDistance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.setDistance = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double duration = 7;
 * @return {number}
 */
proto.pb.Operation.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.setDuration = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional Shift shift = 8;
 * @return {!proto.pb.Operation.Shift}
 */
proto.pb.Operation.prototype.getShift = function() {
  return /** @type {!proto.pb.Operation.Shift} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.pb.Operation.Shift} value
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.setShift = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional State state = 9;
 * @return {!proto.pb.Operation.State}
 */
proto.pb.Operation.prototype.getState = function() {
  return /** @type {!proto.pb.Operation.State} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.pb.Operation.State} value
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional Upload upload = 10;
 * @return {?proto.pb.Upload}
 */
proto.pb.Operation.prototype.getUpload = function() {
  return /** @type{?proto.pb.Upload} */ (
    jspb.Message.getWrapperField(this, proto_load_pb.Upload, 10));
};


/**
 * @param {?proto.pb.Upload|undefined} value
 * @return {!proto.pb.Operation} returns this
*/
proto.pb.Operation.prototype.setUpload = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.clearUpload = function() {
  return this.setUpload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Operation.prototype.hasUpload = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Download download = 11;
 * @return {?proto.pb.Download}
 */
proto.pb.Operation.prototype.getDownload = function() {
  return /** @type{?proto.pb.Download} */ (
    jspb.Message.getWrapperField(this, proto_load_pb.Download, 11));
};


/**
 * @param {?proto.pb.Download|undefined} value
 * @return {!proto.pb.Operation} returns this
*/
proto.pb.Operation.prototype.setDownload = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.clearDownload = function() {
  return this.setDownload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Operation.prototype.hasDownload = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated Road road = 12;
 * @return {!Array<!proto.pb.Road>}
 */
proto.pb.Operation.prototype.getRoadList = function() {
  return /** @type{!Array<!proto.pb.Road>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_road_pb.Road, 12));
};


/**
 * @param {!Array<!proto.pb.Road>} value
 * @return {!proto.pb.Operation} returns this
*/
proto.pb.Operation.prototype.setRoadList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.pb.Road=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Road}
 */
proto.pb.Operation.prototype.addRoad = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.pb.Road, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.clearRoadList = function() {
  return this.setRoadList([]);
};


/**
 * repeated Truck truck = 13;
 * @return {!Array<!proto.pb.Truck>}
 */
proto.pb.Operation.prototype.getTruckList = function() {
  return /** @type{!Array<!proto.pb.Truck>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_truck_pb.Truck, 13));
};


/**
 * @param {!Array<!proto.pb.Truck>} value
 * @return {!proto.pb.Operation} returns this
*/
proto.pb.Operation.prototype.setTruckList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.pb.Truck=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Truck}
 */
proto.pb.Operation.prototype.addTruck = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.pb.Truck, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.clearTruckList = function() {
  return this.setTruckList([]);
};


/**
 * repeated Excavator excavator = 14;
 * @return {!Array<!proto.pb.Excavator>}
 */
proto.pb.Operation.prototype.getExcavatorList = function() {
  return /** @type{!Array<!proto.pb.Excavator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_excavator_pb.Excavator, 14));
};


/**
 * @param {!Array<!proto.pb.Excavator>} value
 * @return {!proto.pb.Operation} returns this
*/
proto.pb.Operation.prototype.setExcavatorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.pb.Excavator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Excavator}
 */
proto.pb.Operation.prototype.addExcavator = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.pb.Excavator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.clearExcavatorList = function() {
  return this.setExcavatorList([]);
};


/**
 * repeated Cycle cycle = 15;
 * @return {!Array<!proto.pb.Cycle>}
 */
proto.pb.Operation.prototype.getCycleList = function() {
  return /** @type{!Array<!proto.pb.Cycle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_cycle_pb.Cycle, 15));
};


/**
 * @param {!Array<!proto.pb.Cycle>} value
 * @return {!proto.pb.Operation} returns this
*/
proto.pb.Operation.prototype.setCycleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.pb.Cycle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Cycle}
 */
proto.pb.Operation.prototype.addCycle = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.pb.Cycle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Operation} returns this
 */
proto.pb.Operation.prototype.clearCycleList = function() {
  return this.setCycleList([]);
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
proto.pb.OperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.OperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.OperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.OperationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: (f = msg.getOperation()) && proto.pb.Operation.toObject(includeInstance, f)
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
 * @return {!proto.pb.OperationRequest}
 */
proto.pb.OperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.OperationRequest;
  return proto.pb.OperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.OperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.OperationRequest}
 */
proto.pb.OperationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Operation;
      reader.readMessage(value,proto.pb.Operation.deserializeBinaryFromReader);
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
proto.pb.OperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.OperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.OperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.OperationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.Operation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Operation operation = 1;
 * @return {?proto.pb.Operation}
 */
proto.pb.OperationRequest.prototype.getOperation = function() {
  return /** @type{?proto.pb.Operation} */ (
    jspb.Message.getWrapperField(this, proto.pb.Operation, 1));
};


/**
 * @param {?proto.pb.Operation|undefined} value
 * @return {!proto.pb.OperationRequest} returns this
*/
proto.pb.OperationRequest.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.OperationRequest} returns this
 */
proto.pb.OperationRequest.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.OperationRequest.prototype.hasOperation = function() {
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
proto.pb.OperationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.OperationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.OperationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.OperationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: (f = msg.getOperation()) && proto.pb.Operation.toObject(includeInstance, f)
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
 * @return {!proto.pb.OperationResponse}
 */
proto.pb.OperationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.OperationResponse;
  return proto.pb.OperationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.OperationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.OperationResponse}
 */
proto.pb.OperationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Operation;
      reader.readMessage(value,proto.pb.Operation.deserializeBinaryFromReader);
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
proto.pb.OperationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.OperationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.OperationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.OperationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.Operation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Operation operation = 1;
 * @return {?proto.pb.Operation}
 */
proto.pb.OperationResponse.prototype.getOperation = function() {
  return /** @type{?proto.pb.Operation} */ (
    jspb.Message.getWrapperField(this, proto.pb.Operation, 1));
};


/**
 * @param {?proto.pb.Operation|undefined} value
 * @return {!proto.pb.OperationResponse} returns this
*/
proto.pb.OperationResponse.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.OperationResponse} returns this
 */
proto.pb.OperationResponse.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.OperationResponse.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.OperationsResponse.repeatedFields_ = [1];



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
proto.pb.OperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.OperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.OperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.OperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.pb.Operation.toObject, includeInstance)
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
 * @return {!proto.pb.OperationsResponse}
 */
proto.pb.OperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.OperationsResponse;
  return proto.pb.OperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.OperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.OperationsResponse}
 */
proto.pb.OperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Operation;
      reader.readMessage(value,proto.pb.Operation.deserializeBinaryFromReader);
      msg.addOperations(value);
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
proto.pb.OperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.OperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.OperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.OperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.Operation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Operation operations = 1;
 * @return {!Array<!proto.pb.Operation>}
 */
proto.pb.OperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.pb.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.Operation, 1));
};


/**
 * @param {!Array<!proto.pb.Operation>} value
 * @return {!proto.pb.OperationsResponse} returns this
*/
proto.pb.OperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Operation}
 */
proto.pb.OperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.OperationsResponse} returns this
 */
proto.pb.OperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


goog.object.extend(exports, proto.pb);
