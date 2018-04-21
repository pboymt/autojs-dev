import * as webpack from "webpack";
import { readdirSync, readFileSync } from "fs";
import { join, resolve } from "path";
import * as program from "commander";
import { getWorkspaceConfig } from "./util";
import { AutoJSUI } from "./plugins/autojs-ui";

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
    const autoTsReg = /^([A-z_-]+)\.auto\.ts$/;
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

function checkUIScript(entries: { [name: string]: string }) {
    const arr = Object.entries(entries).map(val => {
        const p = val[1];
        const str = readFileSync(p, 'utf-8');
        const isUI = /"ui";/.test(str);
        if (isUI) return val[0];
        return null;
    });
    return <string[]>arr.filter(val => { return (typeof val === 'string') });
}

// console.log(getEntry());

const entryList = getEntry();

const complier = webpack({
    entry: entryList,
    output: {
        path: outputDir,
        filename: '[name].auto.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        // configFile: join(__dirname, '../template/tsconfig.json')
                        compilerOptions: {
                            target: 'ES5',
                            module: 'commonjs',
                            lib: ['es6', 'es2017.object'],
                            removeComments: true,
                            skipLibCheck: true
                        }
                    }
                }
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     comments:false
        // })
        new AutoJSUI(checkUIScript(entryList))
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