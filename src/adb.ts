/// <reference path="../types/adbkit.d.ts" />
import { createClient } from "adbkit";
import { createWriteStream, existsSync } from "fs";
import { join, dirname } from "path";
import * as program from "commander";
import { mkdirsSync } from "./util";

export async function ScreenCap(filename = `${Date.now()}.png`, path = process.cwd()) {
    try {
        const client = createClient({
            host: '127.0.0.1'
        });
        const list = await client.listDevices();
        const fullpath = join(path, filename);
        if (existsSync(fullpath)) {
            console.log('文件名已存在！建议使用默认名称！');
            return;
        }
        mkdirsSync(dirname(fullpath));
        // console.log(list);
        console.log(list);
        if (list.length) {
            const ws = createWriteStream(fullpath);
            ws.once('close', () => {
                console.log('截图成功');
            });
            const rs = await client.screencap(list[0].id);
            rs.pipe(ws);
        } else {
            console.log('没有设备可以截图！');
        }
    } catch (error) {
        console.log(error);
    }
};


