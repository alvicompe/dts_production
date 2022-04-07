// package: pb
// file: proto/services/geofence.services.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_geofence_pb from "../../proto/entities/geofence_pb";

export class GeofenceRequest extends jspb.Message { 

    hasGeofence(): boolean;
    clearGeofence(): void;
    getGeofence(): proto_entities_geofence_pb.Geofence | undefined;
    setGeofence(value?: proto_entities_geofence_pb.Geofence): GeofenceRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeofenceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GeofenceRequest): GeofenceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeofenceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeofenceRequest;
    static deserializeBinaryFromReader(message: GeofenceRequest, reader: jspb.BinaryReader): GeofenceRequest;
}

export namespace GeofenceRequest {
    export type AsObject = {
        geofence?: proto_entities_geofence_pb.Geofence.AsObject,
    }
}

export class GeofenceResponse extends jspb.Message { 

    hasGeofence(): boolean;
    clearGeofence(): void;
    getGeofence(): proto_entities_geofence_pb.Geofence | undefined;
    setGeofence(value?: proto_entities_geofence_pb.Geofence): GeofenceResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeofenceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GeofenceResponse): GeofenceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeofenceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeofenceResponse;
    static deserializeBinaryFromReader(message: GeofenceResponse, reader: jspb.BinaryReader): GeofenceResponse;
}

export namespace GeofenceResponse {
    export type AsObject = {
        geofence?: proto_entities_geofence_pb.Geofence.AsObject,
    }
}

export class GeofencesResponse extends jspb.Message { 
    clearGeofencesList(): void;
    getGeofencesList(): Array<proto_entities_geofence_pb.Geofence>;
    setGeofencesList(value: Array<proto_entities_geofence_pb.Geofence>): GeofencesResponse;
    addGeofences(value?: proto_entities_geofence_pb.Geofence, index?: number): proto_entities_geofence_pb.Geofence;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeofencesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GeofencesResponse): GeofencesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeofencesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeofencesResponse;
    static deserializeBinaryFromReader(message: GeofencesResponse, reader: jspb.BinaryReader): GeofencesResponse;
}

export namespace GeofencesResponse {
    export type AsObject = {
        geofencesList: Array<proto_entities_geofence_pb.Geofence.AsObject>,
    }
}
