import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { mkdirsSync } from "./util";
import * as program from "commander";

program
    .option('-m, --module', '是否创建模块', false)
    .option('-j, --javascript', '是否创建javascript文件', false)
    .action((filename, options) => {
        console.log('新建文件');
        const fname = `${filename}.${options.javascript ? 'auto.js' : 'auto.ts'}`;
        const fullpath = join(process.cwd(), fname);
        if (existsSync(fullpath)) {
            throw "文件已存在";
        } else {
            mkdirsSync(dirname(fullpath));
            writeFileSync(fullpath, readFileSync(join(__dirname, '../template/script.tpl')));
        }
    })
    .parse(process.argv);