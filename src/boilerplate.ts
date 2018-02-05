import { existsSync, statSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import * as program from "commander";

program
    .option('-d, --dir <dirname>', '项目父目录，默认为当前目录')
    .action((name, options, c) => {
        console.log('options.parent.dir');
        Boilerplate(name, join(process.cwd(), ''));
    })
    .parse(process.argv);

function Boilerplate(name: string, dir: string) {
    console.log(name, dir);
    const templatePath = join(__dirname, '../template');
    const boilerplatePath = join(templatePath, 'boilerplate.json');
    const boilerplateConfig = JSON.parse(readFileSync(boilerplatePath, 'utf-8'));
    const createPath = join(dir, name || '');
    console.log(createPath);
}