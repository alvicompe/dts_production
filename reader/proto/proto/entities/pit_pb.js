// source: proto/entities/pit.proto
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

var proto_entities_project_pb = require('../../proto/entities/project_pb.js');
goog.object.extend(proto, proto_entities_project_pb);
goog.exportSymbol('proto.pb.Pit', null, global);
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
proto.pb.Pit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.Pit.repeatedFields_, null);
};
goog.inherits(proto.pb.Pit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Pit.displayName = 'proto.pb.Pit';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.Pit.repeatedFields_ = [4];



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
proto.pb.Pit.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Pit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Pit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Pit.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    projectList: jspb.Message.toObjectList(msg.getProjectList(),
    proto_entities_project_pb.Project.toObject, includeInstance)
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
 * @return {!proto.pb.Pit}
 */
proto.pb.Pit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Pit;
  return proto.pb.Pit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Pit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Pit}
 */
proto.pb.Pit.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_entities_project_pb.Project;
      reader.readMessage(value,proto_entities_project_pb.Project.deserializeBinaryFromReader);
      msg.addProject(value);
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
proto.pb.Pit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Pit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Pit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Pit.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getProjectList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_entities_project_pb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.Pit.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Pit} returns this
 */
proto.pb.Pit.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pb.Pit.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Pit} returns this
 */
proto.pb.Pit.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.pb.Pit.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Pit} returns this
 */
proto.pb.Pit.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Project project = 4;
 * @return {!Array<!proto.pb.Project>}
 */
proto.pb.Pit.prototype.getProjectList = function() {
  return /** @type{!Array<!proto.pb.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_entities_project_pb.Project, 4));
};


/**
 * @param {!Array<!proto.pb.Project>} value
 * @return {!proto.pb.Pit} returns this
*/
proto.pb.Pit.prototype.setProjectList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pb.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Project}
 */
proto.pb.Pit.prototype.addProject = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pb.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Pit} returns this
 */
proto.pb.Pit.prototype.clearProjectList = function() {
  return this.setProjectList([]);
};


goog.object.extend(exports, proto.pb);