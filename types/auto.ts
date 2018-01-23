/* 内置模块 */

/*
 * 文件结构
 * 
 * -模块
 *     -命名空间
 *     -全局
 * 
 */


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


/**
 * 控制台模块提供了一个和Web浏览器中相似的用于调试的控制台。用于输出一些调试信息、中间结果等。 console模块中的一些函数也可以直接作为全局函数使用，例如log, print等。
 */
declare namespace console {

    /**
     * 显示控制台。这会显示一个控制台的悬浮窗(需要悬浮窗权限)。
     */
    function show(): void;

    /**
     * 隐藏控制台悬浮窗。
     */
    function hide(): void;

    /**
     * 清空控制台。
     */
    function clear(): void;

    /**
     * 打印到控制台，并带上换行符。 可以传入多个参数，第一个参数作为主要信息，其他参数作为类似于 printf(3) 中的代替值（参数都会传给 util.format()）。
     */
    function log(data: string, ...args: any[]): void;

    /**
     * 与console.log类似，但输出结果以灰色字体显示。输出优先级低于log，用于输出观察性质的信息。
     */
    function verbose(data: string, ...args: any[]): void;

    /**
     * 与console.log类似，但输出结果以绿色字体显示。输出优先级高于log, 用于输出重要信息。
     */
    function info(data: string, ...args: any[]): void;

    /**
     * 与console.log类似，但输出结果以蓝色字体显示。输出优先级高于info, 用于输出警告信息。
     */
    function warn(data: string, ...args: any[]): void;

    /**
     * 与console.log类似，但输出结果以红色字体显示。输出优先级高于warn, 用于输出错误信息。
     */
    function error(data: string, ...args: any[]): void;

    /**
     * 断言。如果value为false则输出错误信息message并停止脚本运行。
     */
    function assert(value: boolean, message: string);

    /**
     * 与console.log一样输出信息，并在控制台显示输入框等待输入。按控制台的确认按钮后会将输入的字符串用eval计算后返回。
     */
    function input(data: string, ...args: any[]): string | number | boolean;

    /**
     * 与console.log一样输出信息，并在控制台显示输入框等待输入。按控制台的确认按钮后会将输入的字符串直接返回。
     */
    function rawInput(data: string, ...args: any[]): string;

    /**
     * 设置控制台的大小，单位像素。
     */
    function setSize(wight: number, height: number): void;

    /**
     * 设置控制台的位置，单位像素。
     */
    function setPosition(x: number, y: number): void;

}

/**
 * 打印到控制台，并带上换行符。 可以传入多个参数，第一个参数作为主要信息，其他参数作为类似于 printf(3) 中的代替值（参数都会传给 util.format()）。
 */
declare function log(data: string, ...args: any[]): void;

/**
 * 相当于log(text)。
 */
declare function print(message: string | Object): void;


/* 基于坐标的触摸模拟 */

/**
 * 设置脚本坐标点击所适合的屏幕宽高。如果脚本运行时，屏幕宽度不一致会自动放缩坐标。
 */
declare function setScreenMetrics(width: number, height: number): void;

/* 安卓7.0以上的触摸和手势模拟 */

/**
 * Android7.0以上
 * 
 * 模拟点击坐标(x, y)大约150毫秒，并返回是否点击成功。只有在点击执行完成后脚本才继续执行。
 */
declare function click(x: number, y: number): void;

/**
 * Android7.0以上
 * 
 * 模拟长按坐标(x, y), 并返回是否成功。只有在长按执行完成（大约600毫秒）时脚本才会继续执行。
 */
declare function longClick(x: number, y: number): void;

/**
 * Android7.0以上
 * 
 * 模拟按住坐标(x, y), 并返回是否成功。只有按住操作执行完成时脚本才会继续执行。
 *
 * 如果按住时间过短，那么会被系统认为是点击；如果时长超过500毫秒，则认为是长按。
 */
declare function press(x: number, y: number, duration: number): void;

/**
 * 模拟从坐标(x1, y1)滑动到坐标(x2, y2)，并返回是否成功。只有滑动操作执行完成时脚本才会继续执行。
 */
declare function swipe(x1: number, y1: number, x2: number, y2: number, duration: number): boolean;

type PonintArray = number[];
declare function gesture(duration: number, ...args: PonintArray[]);