/**
 * engines模块包含了一些与脚本环境、脚本运行、脚本引擎有关的函数，包括运行其他脚本，关闭脚本等。
 */
declare namespace engines {

    /**
     * 脚本引擎对象。
     */
    interface ScriptEngine {

        /**
         * 停止脚本引擎的执行。
         */
        forceStop(): void;

        /**
         * 返回脚本执行的路径。对于一个脚本文件而言为这个脚本所在的文件夹；对于其他脚本，例如字符串脚本，则为null或者执行时的设置值。
         */
        cwd(): string;
    }

    /**
     * 执行脚本时返回的对象，可以通过他获取执行的引擎、配置等，也可以停止这个执行。
     * 
     * 要停止这个脚本的执行，使用exectuion.getEngine().forceStop().
     */
    interface ScriptExecution {

        /**
         * 返回执行该脚本的脚本引擎对象(ScriptEngine)
         */
        getEngine(): ScriptEngine;

        /**
         * 返回该脚本的运行配置(ScriptConfig)
         */
        getConfig(): ScriptConfig;
    }

    /**
     * 运行配置项。
     */
    interface ScriptConfig {

        /**
         * 延迟执行的毫秒数，默认为0。
         */
        delay?: number;

        /**
         * 循环运行次数，默认为1。0为无限循环。
         */
        loopTimes?: number;

        /**
         * 循环运行时两次运行之间的时间间隔，默认为0。
         */
        interval?: number;

        /**
         * 指定脚本运行的目录。这些路径会用于require时寻找模块文件。
         */
        path?: string | string[];

        /**
         * 返回一个字符串数组表示脚本运行时模块寻找的路径。
         */
        getpath?: string[];
    }

    /**
     * 在新的脚本环境中运行脚本script。返回一个ScriptExectuion对象。
     * 
     * 所谓新的脚本环境，指定是，脚本中的变量和原脚本的变量是不共享的，并且，脚本会在新的线程中运行。
     */
    function execScript(name: string, script: string, config?: ScriptConfig): ScriptExecution;

    /**
     * 在新的脚本环境中运行脚本文件path:string。返回一个ScriptExecution对象。
     */
    function execScriptFile(path: string, config?: ScriptConfig): ScriptExecution;

    /**
     * 在新的脚本环境中运行录制文件path:string。返回一个ScriptExecution对象。
     */
    function execAutoFile(path: string, config?: ScriptConfig): ScriptExecution;

    /**
     * 停止所有正在运行的脚本。包括当前脚本自身。
     */
    function stopAll(): void;

    /**
     * 停止所有正在运行的脚本并显示停止的脚本数量。包括当前脚本自身。
     */
    function stopAllAndToast(): void;

    /**
     * 返回当前脚本的脚本引擎对象(ScriptEngine)
     */
    function myEngine(): void;
}
