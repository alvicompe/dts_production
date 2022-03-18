// package: pb
// file: proto/entities/square.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_point_pb from "../../proto/entities/point_pb";
import * as proto_entities_geofence_pb from "../../proto/entities/geofence_pb";
import * as proto_entities_road_pb from "../../proto/entities/road_pb";
import * as proto_entities_pit_pb from "../../proto/entities/pit_pb";
import * as proto_entities_pad_pb from "../../proto/entities/pad_pb";
import * as proto_entities_stock_pb from "../../proto/entities/stock_pb";
import * as proto_entities_dme_pb from "../../proto/entities/dme_pb";

export class Square extends jspb.Message { 
    getId(): string;
    setId(value: string): Square;

    getName(): string;
    setName(value: string): Square;

    getAltitude(): number;
    setAltitude(value: number): Square;

    clearSegmentList(): void;
    getSegmentList(): Array<proto_entities_point_pb.Point>;
    setSegmentList(value: Array<proto_entities_point_pb.Point>): Square;
    addSegment(value?: proto_entities_point_pb.Point, index?: number): proto_entities_point_pb.Point;

    clearPointList(): void;
    getPointList(): Array<proto_entities_point_pb.Point>;
    setPointList(value: Array<proto_entities_point_pb.Point>): Square;
    addPoint(value?: proto_entities_point_pb.Point, index?: number): proto_entities_point_pb.Point;

    clearGeofenceList(): void;
    getGeofenceList(): Array<proto_entities_geofence_pb.Geofence>;
    setGeofenceList(value: Array<proto_entities_geofence_pb.Geofence>): Square;
    addGeofence(value?: proto_entities_geofence_pb.Geofence, index?: number): proto_entities_geofence_pb.Geofence;

    clearRoadList(): void;
    getRoadList(): Array<proto_entities_road_pb.Road>;
    setRoadList(value: Array<proto_entities_road_pb.Road>): Square;
    addRoad(value?: proto_entities_road_pb.Road, index?: number): proto_entities_road_pb.Road;

    clearPitList(): void;
    getPitList(): Array<proto_entities_pit_pb.Pit>;
    setPitList(value: Array<proto_entities_pit_pb.Pit>): Square;
    addPit(value?: proto_entities_pit_pb.Pit, index?: number): proto_entities_pit_pb.Pit;

    clearPadList(): void;
    getPadList(): Array<proto_entities_pad_pb.Pad>;
    setPadList(value: Array<proto_entities_pad_pb.Pad>): Square;
    addPad(value?: proto_entities_pad_pb.Pad, index?: number): proto_entities_pad_pb.Pad;

    clearStockList(): void;
    getStockList(): Array<proto_entities_stock_pb.Stock>;
    setStockList(value: Array<proto_entities_stock_pb.Stock>): Square;
    addStock(value?: proto_entities_stock_pb.Stock, index?: number): proto_entities_stock_pb.Stock;

    clearDmeList(): void;
    getDmeList(): Array<proto_entities_dme_pb.Dme>;
    setDmeList(value: Array<proto_entities_dme_pb.Dme>): Square;
    addDme(value?: proto_entities_dme_pb.Dme, index?: number): proto_entities_dme_pb.Dme;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Square.AsObject;
    static toObject(includeInstance: boolean, msg: Square): Square.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Square, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Square;
    static deserializeBinaryFromReader(message: Square, reader: jspb.BinaryReader): Square;
}

export namespace Square {
    export type AsObject = {
        id: string,
        name: string,
        altitude: number,
        segmentList: Array<proto_entities_point_pb.Point.AsObject>,
        pointList: Array<proto_entities_point_pb.Point.AsObject>,
        geofenceList: Array<proto_entities_geofence_pb.Geofence.AsObject>,
        roadList: Array<proto_entities_road_pb.Road.AsObject>,
        pitList: Array<proto_entities_pit_pb.Pit.AsObject>,
        padList: Array<proto_entities_pad_pb.Pad.AsObject>,
        stockList: Array<proto_entities_stock_pb.Stock.AsObject>,
        dmeList: Array<proto_entities_dme_pb.Dme.AsObject>,
    }
}
