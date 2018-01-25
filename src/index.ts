import { writeFileSync, existsSync, mkdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import * as program from "commander";

console.log('----');
program
    .command('create <filename>')
    .option('-m, --module', '是否创建模块', undefined, false)
    .option('-j, --javascript', '是否创建javascript文件', undefined, false)
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
program.parse(process.argv);

function mkdirsSync(dir: string) {
    if (existsSync(dir)) {
        return true;
    } else {
        if (mkdirsSync(dirname(dir))) {
            mkdirSync(dir);
            return true;
        }
    }
}

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