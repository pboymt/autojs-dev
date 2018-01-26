#!/usr/bin/env node

import { writeFileSync, existsSync, mkdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import * as program from "commander";
import { mkdirsSync, ScreenCap } from "./adb";

console.log('----');
program
    .command('create <filename>')
    .option('-m, --module', '是否创建模块', false)
    .option('-j, --javascript', '是否创建javascript文件', false)
    .action((filename, options) => {
        const fname = `${filename}.${options.javascript ? 'auto.js' : 'auto.ts'}`;
        const fullpath = join(process.cwd(), fname);
        if (existsSync(fullpath)) {
            throw "文件已存在";
        } else {
            mkdirsSync(dirname(fullpath));
            writeFileSync(fullpath, readFileSync(join(__dirname, '../template/script.tpl')));
        }
    });

program
    .command('cap [filename]')
    .option('-d, --dir <dirname>', '保存目录', process.cwd())
    .action((filename, options) => {
        console.log('请确认好已安装adb并且在Path中设置可全局调用！');
        console.log('请确认您的计算机已被设备允许USB调试！');
        ScreenCap(filename, options.dir);
    })
program.parse(process.argv);
// function test(filename = '123', dir = '234') {
//     console.log(filename);
//     console.log(dir);
// }



// function main(args: string[]) {
//     switch (args[2]) {
//         case "create":
//             create(args);
//             break;

//         default:
//             break;
//     }
// }

// function create(args: string[]) {
//     switch (args[3]) {
//         case "script":
//             createScript(args);
//             break;

//         case "module":

//             break;
//         default:
//             break;
//     }
// }

// function createScript(args: string[]) {

// }