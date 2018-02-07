import { readFileSync, existsSync } from "fs";
import * as program from "commander";
import { ScreenCap } from "./adb";
import { getWorkspaceConfig } from "./util";

program
    .option('-d, --dir <dirname>', '保存目录', process.cwd())
    // .action((filename, options) => {

    // ScreenCap(filename, options.dir);
    // })
    .parse(process.argv);

const config = getWorkspaceConfig();
const saveDir = (config && (config.screencap && config.screencap.dir)) || program.opts().dir;
// console.log(saveDir);
console.log('请确认好已安装adb并且在Path中设置可全局调用！');
console.log('请确认您的计算机已被设备允许USB调试！');

try {
    ScreenCap((program.args[0] && `${program.args[0]}.png`) || `${Date.now()}.png`, saveDir);
} catch (error) {
    console.log(error);
}