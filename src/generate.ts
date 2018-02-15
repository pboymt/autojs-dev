import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { join, dirname, resolve } from "path";
import { mkdirsSync, getWorkspaceConfig } from "./util";
import * as program from "commander";

program
    .option('-m, --module', '是否创建模块', false)
    .option('-j, --javascript', '是否创建javascript文件', false)
    .option('-d, --dir <dirname>', '文件目录', './')
    // .action((filename, options) => {
    // console.log(filename, options);
    // console.log('新建文件');
    // const fname = `${filename}.${options.javascript ? 'auto.js' : 'auto.ts'}`;
    // const fullpath = join(options.dir, fname);
    // console.log(fullpath);
    // if (existsSync(fullpath)) {
    //     throw "文件已存在";
    // } else {
    //     mkdirsSync(dirname(fullpath));
    //     writeFileSync(fullpath, readFileSync(join(__dirname, '../template/script.tpl')));
    // }
    // })
    .parse(process.argv);

const config = getWorkspaceConfig();
const fname = `${program.args[0] || `script${Date.now()}`}.${program.opts().javascript ? 'auto.js' : 'auto.ts'}`;
const saveDir = (config && (config.generate && config.generate.dir)) || program.opts().dir;
const fullpath = resolve(program.opts().dir, fname);
console.log(`生成位置：${fullpath}`);
if (existsSync(fullpath)) {
    throw "文件已存在";
} else {
    mkdirsSync(dirname(fullpath));
    writeFileSync(fullpath, readFileSync(join(__dirname, '../template/script.tpl'), 'utf-8').replace(RegExp('{{#name}}', 'g'), program.args[0] || `script${Date.now()}`));
}