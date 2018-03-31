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

    /**
     * 用其他应用查看文件。文件不存在的情况由查看文件的应用处理。如果找不出可以查看该文件的应用，则抛出ActivityNotException。
     * 
     * @throws ActivityNotException
     */
    function viewFile(path: string): void;

    /**
     * 用其他应用编辑文件。文件不存在的情况由编辑文件的应用处理。如果找不出可以编辑该文件的应用，则抛出ActivityNotException。
     * 
     * @throws ActivityNotException
     */
    function editFile(path: string): void;

    /**
     * 卸载应用。执行后会会弹出卸载应用的提示框。如果该包名的应用未安装，由应用卸载程序处理，可能弹出"未找到应用"的提示。
     */
    function uninstall(packageName: string): void;

    /**
     * 用浏览器打开网站url。网站的Url，如果不以"http:// "或"https:// "开头则默认是"http:// "。
     */
    function openUrl(url: string): void;

    /**
     * 发送邮件的参数，这些选项均是可选的。
     */
    interface SendEmailOptions {
        /**
         * 收件人的邮件地址。如果有多个收件人，则用字符串数组表示
         */
        email?: string | string[];
        /**
         * 抄送收件人的邮件地址。如果有多个抄送收件人，则用字符串数组表示
         */
        cc?: string | string[];
        /**
         * 密送收件人的邮件地址。如果有多个密送收件人，则用字符串数组表示
         */
        bcc?: string | string[];
        /**
         * 邮件主题(标题)
         */
        subject?: string;
        /**
         * 邮件正文
         */
        text?: string;
        /**
         * 附件的路径。
         */
        attachment?: string;
    }

    /**
     * 根据选项options调用邮箱应用发送邮件。如果没有安装邮箱应用，则抛出ActivityNotException。
     */
    function sendEmail(options: SendEmailOptions): void;

    /**
     * 启动Auto.js的特定界面。该函数在Auto.js内运行则会打开Auto.js内的界面，在打包应用中运行则会打开打包应用的相应界面。
     */
    function startActivity(name: 'console' | 'settings'): void;

    /**
     * Intent(意图) 是一个消息传递对象，您可以使用它从其他应用组件请求操作。尽管 Intent 可以通过多种方式促进组件之间的通信.
     */
    interface Intent { }

    /**
     * 构造意图Intent对象所需设置。
     */
    interface IntentOptions {
        action?: string;
        type?: string;
        data?: string;
        category?: string[];
        packageName?: string;
        className?: string;
        extras?: Object;
    }

    /**
     * 根据选项，构造一个意图Intent对象。
     */
    function intent(options: IntentOptions): Intent;

    /**
     * 根据选项构造一个Intent，并启动该Activity。
     */
    function startActivity(intent: Intent): void;

    /**
     * 根据选项构造一个Intent，并发送该广播。
     */
    function sendBroadcast(intent: Intent): void;

}

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
