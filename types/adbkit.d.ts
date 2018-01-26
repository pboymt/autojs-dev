
// import * as a from "adbkit";

declare module "adbkit" {
    import { ReadStream } from "fs";

    export interface TcpUsbServer { }

    export interface Connection { }

    export interface Device {
        id: string;
        type: string;
    }

    export interface Client {
        createTcpUsbBridge(serial: string): TcpUsbServer;
        connection(): Promise<Connection>;
        version(): any;
        listDevices(): Promise<Device[]>;
        screencap(serial: string): Promise<ReadStream>;
    }

    export interface ClientOptions {
        host?: string;
        port?: number;
        bin?: string;
    }

    export function createClient(options?: ClientOptions): Client;

    export var KeyCode: any;

    export var util: any;
}