// package: pb
// file: proto/entities/report.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as proto_entities_cycle_pb from "../../proto/entities/cycle_pb";
import * as proto_entities_truck_pb from "../../proto/entities/truck_pb";
import * as proto_entities_excavator_pb from "../../proto/entities/excavator_pb";

export class TruckReport extends jspb.Message { 
    getId(): string;
    setId(value: string): TruckReport;

    getDeviceId(): string;
    setDeviceId(value: string): TruckReport;


    hasTruck(): boolean;
    clearTruck(): void;
    getTruck(): proto_entities_truck_pb.Truck | undefined;
    setTruck(value?: proto_entities_truck_pb.Truck): TruckReport;

    clearCycleList(): void;
    getCycleList(): Array<proto_entities_cycle_pb.Cycle>;
    setCycleList(value: Array<proto_entities_cycle_pb.Cycle>): TruckReport;
    addCycle(value?: proto_entities_cycle_pb.Cycle, index?: number): proto_entities_cycle_pb.Cycle;

    getLenDme(): number;
    setLenDme(value: number): TruckReport;

    getLenPad(): number;
    setLenPad(value: number): TruckReport;

    getLenStock(): number;
    setLenStock(value: number): TruckReport;

    getLen(): number;
    setLen(value: number): TruckReport;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TruckReport.AsObject;
    static toObject(includeInstance: boolean, msg: TruckReport): TruckReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TruckReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TruckReport;
    static deserializeBinaryFromReader(message: TruckReport, reader: jspb.BinaryReader): TruckReport;
}

export namespace TruckReport {
    export type AsObject = {
        id: string,
        deviceId: string,
        truck?: proto_entities_truck_pb.Truck.AsObject,
        cycleList: Array<proto_entities_cycle_pb.Cycle.AsObject>,
        lenDme: number,
        lenPad: number,
        lenStock: number,
        len: number,
    }
}

export class ExcavatorReport extends jspb.Message { 
    getId(): string;
    setId(value: string): ExcavatorReport;

    getDeviceId(): string;
    setDeviceId(value: string): ExcavatorReport;


    hasExcavator(): boolean;
    clearExcavator(): void;
    getExcavator(): proto_entities_excavator_pb.Excavator | undefined;
    setExcavator(value?: proto_entities_excavator_pb.Excavator): ExcavatorReport;

    clearCycleList(): void;
    getCycleList(): Array<proto_entities_cycle_pb.Cycle>;
    setCycleList(value: Array<proto_entities_cycle_pb.Cycle>): ExcavatorReport;
    addCycle(value?: proto_entities_cycle_pb.Cycle, index?: number): proto_entities_cycle_pb.Cycle;

    getLenDme(): number;
    setLenDme(value: number): ExcavatorReport;

    getLenPad(): number;
    setLenPad(value: number): ExcavatorReport;

    getLenStock(): number;
    setLenStock(value: number): ExcavatorReport;

    getLen(): number;
    setLen(value: number): ExcavatorReport;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorReport.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorReport): ExcavatorReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorReport;
    static deserializeBinaryFromReader(message: ExcavatorReport, reader: jspb.BinaryReader): ExcavatorReport;
}

export namespace ExcavatorReport {
    export type AsObject = {
        id: string,
        deviceId: string,
        excavator?: proto_entities_excavator_pb.Excavator.AsObject,
        cycleList: Array<proto_entities_cycle_pb.Cycle.AsObject>,
        lenDme: number,
        lenPad: number,
        lenStock: number,
        len: number,
    }
}

export class ReportPerformancePerHour extends jspb.Message { 
    clearHourList(): void;
    getHourList(): Array<string>;
    setHourList(value: Array<string>): ReportPerformancePerHour;
    addHour(value: string, index?: number): string;

    clearDmeList(): void;
    getDmeList(): Array<number>;
    setDmeList(value: Array<number>): ReportPerformancePerHour;
    addDme(value: number, index?: number): number;

    clearPadList(): void;
    getPadList(): Array<number>;
    setPadList(value: Array<number>): ReportPerformancePerHour;
    addPad(value: number, index?: number): number;

    clearStockList(): void;
    getStockList(): Array<number>;
    setStockList(value: Array<number>): ReportPerformancePerHour;
    addStock(value: number, index?: number): number;

    clearLenTruckList(): void;
    getLenTruckList(): Array<number>;
    setLenTruckList(value: Array<number>): ReportPerformancePerHour;
    addLenTruck(value: number, index?: number): number;

    clearTruckCycleList(): void;
    getTruckCycleList(): Array<TruckReport>;
    setTruckCycleList(value: Array<TruckReport>): ReportPerformancePerHour;
    addTruckCycle(value?: TruckReport, index?: number): TruckReport;

    clearExcavatorLabelCycleList(): void;
    getExcavatorLabelCycleList(): Array<string>;
    setExcavatorLabelCycleList(value: Array<string>): ReportPerformancePerHour;
    addExcavatorLabelCycle(value: string, index?: number): string;

    clearExcavatorValueCycleList(): void;
    getExcavatorValueCycleList(): Array<ExcavatorTonneHour>;
    setExcavatorValueCycleList(value: Array<ExcavatorTonneHour>): ReportPerformancePerHour;
    addExcavatorValueCycle(value?: ExcavatorTonneHour, index?: number): ExcavatorTonneHour;

    clearExcavatorCycleList(): void;
    getExcavatorCycleList(): Array<ExcavatorReport>;
    setExcavatorCycleList(value: Array<ExcavatorReport>): ReportPerformancePerHour;
    addExcavatorCycle(value?: ExcavatorReport, index?: number): ExcavatorReport;

    getLenCycleDme(): number;
    setLenCycleDme(value: number): ReportPerformancePerHour;

    getLenCyclePad(): number;
    setLenCyclePad(value: number): ReportPerformancePerHour;

    getLenCycleStock(): number;
    setLenCycleStock(value: number): ReportPerformancePerHour;

    getLenCycle(): number;
    setLenCycle(value: number): ReportPerformancePerHour;

    getTonnePerTruck(): number;
    setTonnePerTruck(value: number): ReportPerformancePerHour;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportPerformancePerHour.AsObject;
    static toObject(includeInstance: boolean, msg: ReportPerformancePerHour): ReportPerformancePerHour.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportPerformancePerHour, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportPerformancePerHour;
    static deserializeBinaryFromReader(message: ReportPerformancePerHour, reader: jspb.BinaryReader): ReportPerformancePerHour;
}

export namespace ReportPerformancePerHour {
    export type AsObject = {
        hourList: Array<string>,
        dmeList: Array<number>,
        padList: Array<number>,
        stockList: Array<number>,
        lenTruckList: Array<number>,
        truckCycleList: Array<TruckReport.AsObject>,
        excavatorLabelCycleList: Array<string>,
        excavatorValueCycleList: Array<ExcavatorTonneHour.AsObject>,
        excavatorCycleList: Array<ExcavatorReport.AsObject>,
        lenCycleDme: number,
        lenCyclePad: number,
        lenCycleStock: number,
        lenCycle: number,
        tonnePerTruck: number,
    }
}

export class ExcavatorTonneHour extends jspb.Message { 
    clearValueList(): void;
    getValueList(): Array<number>;
    setValueList(value: Array<number>): ExcavatorTonneHour;
    addValue(value: number, index?: number): number;

    getDeviceId(): string;
    setDeviceId(value: string): ExcavatorTonneHour;

    getDeviceAlias(): string;
    setDeviceAlias(value: string): ExcavatorTonneHour;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExcavatorTonneHour.AsObject;
    static toObject(includeInstance: boolean, msg: ExcavatorTonneHour): ExcavatorTonneHour.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExcavatorTonneHour, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExcavatorTonneHour;
    static deserializeBinaryFromReader(message: ExcavatorTonneHour, reader: jspb.BinaryReader): ExcavatorTonneHour;
}

export namespace ExcavatorTonneHour {
    export type AsObject = {
        valueList: Array<number>,
        deviceId: string,
        deviceAlias: string,
    }
}
