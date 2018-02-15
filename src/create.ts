import { render } from "ejs";
import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { join, dirname, resolve } from "path";
import { mkdirsSync, getWorkspaceConfig, firstUpperCase } from "./util";
import * as program from "commander";

program
    .option('-m, --module', '是否创建为模块', false)
    .option('-j, --javascript', '是否创建javascript文件', false)
    .option('-d, --dir <dirname>', '文件目录', './')
    .parse(process.argv);

const config = getWorkspaceConfig();
const name = `${program.args[0] || `script${Date.now()}`}`;
const fname = `${name}.${program.opts().javascript ? 'auto.js' : 'auto.ts'}`;
const saveDir = (config && (config.generate && config.generate.dir)) || program.opts().dir;
const fullpath = resolve(saveDir, fname);

const data = {
    module: program.opts().module || false,
    javascript: program.opts().javascript || false,
    name: firstUpperCase(name)
}

console.log(`生成位置：${fullpath}`);
if (existsSync(fullpath)) {
    throw "文件已存在";
} else {
    mkdirsSync(dirname(fullpath));
    writeFileSync(fullpath, render(readFileSync(join(__dirname, '../template/script.ejs'), 'utf-8').replace(/(<script>(\r?\n?)|(\r?\n?)<\/script>)/g, ''), data));
}