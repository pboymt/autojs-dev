/* 全局 */
/**
 * 通过应用名称启动应用。如果该名称对应的应用不存在，则返回false; 否则返回true。如果该名称对应多个应用，则只启动其中某一个。
 */
declare function launchApp(appName: string): boolean;
/** 
 * 通过应用包名启动应用。如果该包名对应的应用不存在，则返回false；否则返回true。 
 */
declare function launch(packageName: string): boolean;
/**
 * 获取应用名称对应的已安装的应用的包名。如果该找不到该应用，返回null；如果该名称对应多个应用，则只返回其中某一个的包名。
 */
declare function getPackageName(appName: string): string;
/**
 * 获取应用名称对应的已安装的应用的包名。如果该找不到该应用，返回null；如果该名称对应多个应用，则只返回其中某一个的包名。
 */
declare function getPackageName(appName: string): string;
/**
 * 获取应用包名对应的已安装的应用的名称。如果该找不到该应用，返回null。
 */
declare function getAppName(packageName: string): string;
/**
 * 打开应用的详情页(设置页)。如果找不到该应用，返回false; 否则返回true。
 */
declare function openAppSetting(packageName: string): boolean;


/* 内置模块 */

/**
 * app模块提供一系列函数，用于使用其他应用、与其他应用交互。例如发送意图、打开文件、发送邮件等。
 */
declare namespace app {
    /**
     * 通过应用名称启动应用。如果该名称对应的应用不存在，则返回false; 否则返回true。如果该名称对应多个应用，则只启动其中某一个。
     */
    function launchApp(appName: string): boolean;
    /** 
     * 通过应用包名启动应用。如果该包名对应的应用不存在，则返回false；否则返回true。 
     */
    function launch(packageName: string): boolean;
    /**
     * 通过应用包名启动应用。如果该包名对应的应用不存在，则返回false；否则返回true。 
     */
    function launchPackage(packageName: string): boolean;
    /**
     * 获取应用名称对应的已安装的应用的包名。如果该找不到该应用，返回null；如果该名称对应多个应用，则只返回其中某一个的包名。
     */
    function getPackageName(appName: string): string;
    /**
     * 获取应用包名对应的已安装的应用的名称。如果该找不到该应用，返回null。
     */
    function getAppName(packageName: string): string;
    /**
     * 打开应用的详情页(设置页)。如果找不到该应用，返回false; 否则返回true。
     */
    function openAppSetting(packageName: string): boolean;

}