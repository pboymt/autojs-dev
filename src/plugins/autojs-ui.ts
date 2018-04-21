import { Compiler } from "webpack";
import { ConcatSource } from "webpack-sources";

export class AutoJSUI {

    constructor(
        private UIScriptList: string[]
    ) {

    }

    apply(compiler: Compiler) {

        compiler.hooks.compilation.tap('AutoJSUI', (compilation, normalModuleFactory) => {
            compilation.hooks.optimizeChunkAssets.tap('AutoJSUI', (chunks) => {
                for (const chunk of chunks) {
                    if (chunk.canBeInitial()) {
                        if (this.UIScriptList.includes(chunk.name)) {
                            // console.log(chunk.name);
                            chunk.files.forEach(file => {
                                compilation.assets[file] = new ConcatSource(
                                    '"ui";',
                                    '\n',
                                    compilation.assets[file]
                                );
                            });
                        }
                        // chunk.files.forEach(file => {
                        // console.log(compilation.assets[file]);
                        // compilation.assets[file] = new ConcatSource(
                        //     '\/**Sweet Banner**\/',
                        //     '\n',
                        //     compilation.assets[file]
                        // );
                        // })
                    }
                }
            });
        });

        // compiler.plugin('compile', (args) => {
        //     console.log("编译器开始编译(compile)……");
        // });

        // compiler.plugin("compilation", function (compilation) {
        //     console.log(compilation);
        //     console.log("编译器开始一个新的编译过程(compilation)……");

        //     compilation.plugin("optimize", function () {
        //         console.log("编译过程(compilation)开始优化文件...");
        //     });
        // });

        // compiler.plugin("emit", (compilation, callback) => {
        //     console.log("编译过程(compilation)准备开始输出文件……");
        //     callback();
        // });
    }

}