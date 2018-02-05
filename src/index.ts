#!/usr/bin/env node

import { writeFileSync, existsSync, mkdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import * as program from "commander";

console.log(`${new Array(process.stdout.columns).fill('-').join('')}
欢迎使用Auto.js DevTools
您可以通过 https://github.com/pboymt/autojs-dev/issues 反馈您的建议与遇到的问题
${new Array(process.stdout.columns).fill('-').join('')}`);

program
    .command('create <filename>', '根据模板创建脚本文件')
    .command('cap [filename]', '对adb列表的第一个设备进行截图')
    .command('new [name]', '新建Auto.js项目')

    .parse(process.argv);