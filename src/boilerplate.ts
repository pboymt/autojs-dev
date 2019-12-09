import { existsSync, statSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";
import { spawn, exec } from "child_process";
import * as program from "commander";

program
    // .option('-d, --dir <dirname>', '项目父目录，默认为当前目录')
    .option('-m, --module', '是否打算作为模块发布', false)
    .option('-y, --yarn', '是否使用yarn进行npm install操作', false)
    .option('-s, --skip', '是否跳过后续安装', false)
    // .action((name, options, c) => {
    //     console.log('options.parent.dir');
    //     Boilerplate(name, join(process.cwd(), ''));
    // })
    .parse(process.argv);

const defaultTSConfig = {
    "compilerOptions": {
        "target": "ES5",
        "module": "commonjs",
        "lib": [
            "es2015",
            "DOM" // for use console
        ],
        "removeComments": false,
        "skipLibCheck": true,
        "sourceMap": false,
        "esModuleInterop": true
    },
    "include": [
        "scripts/**/*",  // typescripts
        "node_modules/autojs-dev/types/auto.d.ts" // auto file types
    ],
    "exclude": []
};

const autojsConfig = {
    "$schema": "./node_modules/autojs-dev/template/schema.json",
    "project": {
        "name": ""
    },
    "generate": {
        "language": "typescript",
        "dir": "./scripts"
    },
    "screencap": {
        "dir": "./screencap"
    },
    "images": {
        "dir": "./images",
        "port": 3400
    },
    "compile": {
        "src": "./scripts",
        "output": "./output"
    }
}

Boilerplate(program.args[0], Boolean(program.opts().module) || false);

function Boilerplate(name: string, isModule: boolean) {
    console.log(`Name: ${name}`);
    const projectPath = join(process.cwd(), name || '');
    const autojsonPath = join(projectPath, 'autojs.json');
    const tsconfigPath = join(projectPath, 'tsconfig.json');
    const packagePath = join(projectPath, 'package.json');
    if (existsSync(projectPath)) {
        if (readdirSync(projectPath).length) {
            console.log('目录中已有文件，请确认目录为空');
            return;
        } else {
            console.log('目录已存在，将在空目录的基础上建立脚本工程目录');
        }
    } else {
        try {
            mkdirSync(projectPath);
            console.log('新建目录成功');
        } catch (error) {
            console.log('新建目录失败，请确认是否具有权限');
            return;
        }
    }
    try {
        writeFileSync(autojsonPath, JSON.stringify(Object.assign({ name: name }, autojsConfig), null, 4), { flag: 'w+' });
        console.log('创建autojs.json文件成功');
    } catch (error) {
        console.log('创建文件失败！');
        return;
    }
    try {
        writeFileSync(tsconfigPath, JSON.stringify(defaultTSConfig, null, 4), { flag: 'w+' });
        console.log('创建tsconfig.json文件成功');
    } catch (error) {
        console.log('创建文件失败！');
        return;
    }
    let packageJSON = {
        name: name,
        version: "0.0.0",
        description: "A Auto.js Script Project.",
        devDependencies: {
            "autojs-dev": JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8')).version,
            "ts-loader": JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8'))["dependencies"]["ts-loader"], // 如果需要使用node scripts，则新建项目里需要拥有ts-loader和url-loader
            "url-loader": JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8'))["dependencies"]["url-loader"],
        },
        author: "",
        license: "GPL-3.0"
    }
    if (isModule) {
        packageJSON = Object.assign({
            main: 'index.js'
        }, packageJSON);
    }
    try {
        writeFileSync(packagePath, JSON.stringify(packageJSON, null, 4), { flag: 'w+' });
        console.log('创建package.json文件成功');
    } catch (error) {
        console.log('创建文件失败！');
        return;
    }
    try {
        mkdirSync(join(projectPath, 'scripts'));
        mkdirSync(join(projectPath, 'output'));
        mkdirSync(join(projectPath, 'screencap'));
        mkdirSync(join(projectPath, 'images'));
    } catch (error) {
        console.log('创建目录失败！');
    }
    if (!program.opts().skip) {
        installSpawn(projectPath, Boolean(program.opts().yarn) || false);
    }
}

function installExec(projectPath: string) {
    const cp = exec('npm install', {
        cwd: projectPath,
        env: process.env
    }, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
        }
        if (stdout) {
            console.log(stdout);
        }
        if (stderr) {
            console.log(stderr);
        }
    });
    cp.once('exit', (code, signal) => {
        // console.log(`Exit code ${code}`);
    });
}

function installSpawn(projectPath: string, yarn: boolean) {
    const command = yarn ? 'yarn' : 'npm';
    const args = yarn ? [] : ['install'];
    console.log(`使用${command}进行后续安装`);
    const cp = spawn(/^win/.test(process.platform) ? `${command}.cmd` : command, args, {
        cwd: projectPath
    });
    // const cp = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['install'], {
    //     cwd: projectPath
    // });
    cp.stdout.on('data', chunk => {
        process.stdout.write(chunk);
    });
    cp.stderr.on('data', chunk => {
        process.stderr.write(chunk);
    });
    cp.once('error', err => {
        console.log(err);
    });
    cp.once('exit', (code, signal) => {
        console.log(`Exit code ${code}`);
    });
}