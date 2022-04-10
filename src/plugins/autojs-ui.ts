import { Compilation, Compiler, sources } from "webpack";

export class AutoJSUI {

    constructor(
        private UIScriptList: string[]
    ) {

    }

    apply(compiler: Compiler) {

        compiler.hooks.compilation.tap('AutoJSUI', (compilation, normalModuleFactory) => {
            compilation.hooks.processAssets.tap({
                name: 'AutoJSUI',
                stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS
            }, (assets) => {
                for (const asset in assets) {
                    if (this.UIScriptList.includes(asset)) {
                        // console.log(chunk.name);
                        compilation.updateAsset(asset, source => {
                            return new sources.ConcatSource(
                                `"ui";`,
                                '\n',
                                source
                            )
                        });
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