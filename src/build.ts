import * as webpack from "webpack";
import { readdirSync } from "fs";
import { join, resolve } from "path";
import * as program from "commander";
import { getWorkspaceConfig } from "./util";

program
    .option('-w, --watch', '监控模式', false)
    .option('-d, --dir', '源文件目录', process.cwd())
    .option('-o, --output', '输出目录', process.cwd())
    .parse(process.argv);

const config = getWorkspaceConfig();

if (config) {
    console.log('使用目录配置文件');
} else {
    console.log('使用默认配置或命令行输入配置');
}

const outputDir = (config && (config.compile && config.compile.output)) ? join(process.cwd(), config.compile.output) : program.opts().output;
const srcDir = (config && (config.compile && config.compile.src)) ? join(process.cwd(), config.compile.src) : program.opts().src;

function getEntry(): { [name: string]: string } {
    const srcPath = srcDir;
    const srcFiles = readdirSync(srcPath);
    const autoTsReg = /^([A-z_-]+)\.auto\.ts/;
    const f = srcFiles.filter(item => {
        return autoTsReg.test(item);
    });
    const m = f.map((item, index) => {
        const ma = item.match(autoTsReg);
        if (ma) {
            return {
                name: ma[1],
                path: f[index]
            };
        }
    });
    const entries: { [name: string]: string } = {};
    m.forEach(val => {
        if (val) {
            entries[val.name] = join(srcPath, val.path);
        }
    });
    return entries;
}

// console.log(getEntry());

const complier = webpack({
    entry: getEntry(),
    output: {
        path: outputDir,
        filename: '[name].auto.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     comments:false
        // })
    ]
});
if (program.opts().watch) {
    complier.watch({}, (err, stat) => {
        if (err) {
            console.log(err);
        }
        if (stat.hasErrors()) {
            stat.toJson().errors.forEach((error: Error) => {
                console.log(error);
            });
        }
        console.log(`\nCompiled on ${new Date().toLocaleString()}`);
        stat.toJson().assets.forEach((element: { name: string }) => {
            console.log(element.name);
        });
    });
} else {
    complier.run((err, stat) => {
        if (err) {
            console.log(err);
        }
        if (stat.hasErrors()) {
            stat.toJson().errors.forEach((error: Error) => {
                console.log(error);
            });
        }
        console.log(`\nCompiled on ${new Date().toLocaleString()}`);
        stat.toJson().assets.forEach((element: { name: string }) => {
            console.log(element.name);
        });
    });
}