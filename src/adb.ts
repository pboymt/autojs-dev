import ADB from "appium-adb";
import { createWriteStream, existsSync, mkdirSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { join, dirname } from "path";
import * as program from "commander";

export async function ScreenCap(filename = `${Date.now()}.png`, path = process.cwd()) {
    try {
        const client = await ADB.createADB({ sdkRoot: join(__dirname, "../tools") });
        const list = await client.getConnectedDevices();
        const fullpath = join(path, filename);
        if (existsSync(fullpath)) {
            console.log('文件名已存在！建议使用默认名称！');
            return;
        }
        await mkdir(dirname(fullpath), { recursive: true });
        if (list.length > 0) {
            const deviceId = list[0].udid;
            const result = await client.adbExec(['exec-out', 'screencap', '-p'], { outputFormat: 'full', encoding: 'binary' });
            await writeFile(fullpath, result.stdout.replace(/\r$/, ''), { encoding: 'binary' });
            // const ws = createWriteStream(fullpath);
            // ws.once('close', () => {
            //     console.log('截图成功');
            // });
            // const rs = await client.screencap(list[0].id);
            // rs.pipe(ws);
        } else {
            console.log('没有设备可以截图！');
        }
    } catch (error) {
        console.log(error);
    }
};


