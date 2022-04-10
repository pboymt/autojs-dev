import { writeFileSync, existsSync, mkdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { program } from "commander";
const packageInfo = require('../package.json');

console.log(`${new Array(process.stdout.columns).fill('-').join('')}
欢迎使用Auto.js DevTools ${packageInfo.version}
您可以通过 https://github.com/pboymt/autojs-dev/issues 反馈您的建议与遇到的问题
${new Array(process.stdout.columns).fill('-').join('')}`);

program
    .command('cap [filename]', '对adb列表的第一个设备进行截图')
    .command('new [name]', '新建Auto.js项目')
    .command('create <filename>', '根据模板创建脚本文件')
    .command('build', '根据配置文件编译脚本')
    .command('img', '启动找图素材加载服务')
    .parse(process.argv);