/// <reference path="../types/adbkit.d.ts" />
import { createClient } from "adbkit";
import { createWriteStream, existsSync } from "fs";
import { join, dirname } from "path";
import * as program from "commander";
import { mkdirsSync } from "./util";
program
    .option('-d, --dir <dirname>', '保存目录', process.cwd())
    .action((filename, options) => {
        console.log('请确认好已安装adb并且在Path中设置可全局调用！');
        console.log('请确认您的计算机已被设备允许USB调试！');
        ScreenCap(filename, options.dir);
    })
    .parse(process.argv);

export async function ScreenCap(filename = `${Date.now()}.png`, path = process.cwd()) {
    const client = createClient();
    const list = await client.listDevices();
    const fullpath = join(path, filename);
    if (existsSync(fullpath)) {
        console.log('文件名已存在！建议使用默认名称！');
        return;
    }
    mkdirsSync(dirname(fullpath));
    // console.log(list);
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
};

