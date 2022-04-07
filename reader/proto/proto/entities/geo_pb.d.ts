// package: pb
// file: proto/entities/geo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_material_pb from "../../proto/entities/material_pb";
import * as proto_entities_geofence_pb from "../../proto/entities/geofence_pb";
import * as proto_entities_road_pb from "../../proto/entities/road_pb";
import * as proto_entities_pit_pb from "../../proto/entities/pit_pb";
import * as proto_entities_pad_pb from "../../proto/entities/pad_pb";
import * as proto_entities_dme_pb from "../../proto/entities/dme_pb";
import * as proto_entities_stock_pb from "../../proto/entities/stock_pb";

export class Geo extends jspb.Message { 
    getId(): string;
    setId(value: string): Geo;

    getName(): string;
    setName(value: string): Geo;

    getDescription(): string;
    setDescription(value: string): Geo;

    clearMaterialList(): void;
    getMaterialList(): Array<proto_entities_material_pb.Material>;
    setMaterialList(value: Array<proto_entities_material_pb.Material>): Geo;
    addMaterial(value?: proto_entities_material_pb.Material, index?: number): proto_entities_material_pb.Material;

    clearGeofenceList(): void;
    getGeofenceList(): Array<proto_entities_geofence_pb.Geofence>;
    setGeofenceList(value: Array<proto_entities_geofence_pb.Geofence>): Geo;
    addGeofence(value?: proto_entities_geofence_pb.Geofence, index?: number): proto_entities_geofence_pb.Geofence;

    clearRoadList(): void;
    getRoadList(): Array<proto_entities_road_pb.Road>;
    setRoadList(value: Array<proto_entities_road_pb.Road>): Geo;
    addRoad(value?: proto_entities_road_pb.Road, index?: number): proto_entities_road_pb.Road;

    clearPitList(): void;
    getPitList(): Array<proto_entities_pit_pb.Pit>;
    setPitList(value: Array<proto_entities_pit_pb.Pit>): Geo;
    addPit(value?: proto_entities_pit_pb.Pit, index?: number): proto_entities_pit_pb.Pit;

    clearPadList(): void;
    getPadList(): Array<proto_entities_pad_pb.Pad>;
    setPadList(value: Array<proto_entities_pad_pb.Pad>): Geo;
    addPad(value?: proto_entities_pad_pb.Pad, index?: number): proto_entities_pad_pb.Pad;

    clearDmeList(): void;
    getDmeList(): Array<proto_entities_dme_pb.Dme>;
    setDmeList(value: Array<proto_entities_dme_pb.Dme>): Geo;
    addDme(value?: proto_entities_dme_pb.Dme, index?: number): proto_entities_dme_pb.Dme;

    clearStockList(): void;
    getStockList(): Array<proto_entities_stock_pb.Stock>;
    setStockList(value: Array<proto_entities_stock_pb.Stock>): Geo;
    addStock(value?: proto_entities_stock_pb.Stock, index?: number): proto_entities_stock_pb.Stock;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Geo.AsObject;
    static toObject(includeInstance: boolean, msg: Geo): Geo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Geo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Geo;
    static deserializeBinaryFromReader(message: Geo, reader: jspb.BinaryReader): Geo;
}

export namespace Geo {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        materialList: Array<proto_entities_material_pb.Material.AsObject>,
        geofenceList: Array<proto_entities_geofence_pb.Geofence.AsObject>,
        roadList: Array<proto_entities_road_pb.Road.AsObject>,
        pitList: Array<proto_entities_pit_pb.Pit.AsObject>,
        padList: Array<proto_entities_pad_pb.Pad.AsObject>,
        dmeList: Array<proto_entities_dme_pb.Dme.AsObject>,
        stockList: Array<proto_entities_stock_pb.Stock.AsObject>,
    }
}
