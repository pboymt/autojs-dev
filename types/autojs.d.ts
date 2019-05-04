/* 内置模块 */

/*
 * based on commit "cf1e602"
 * 文件结构
 * 
 * -模块
 *     -命名空间
 *     -全局
 * 
 * 未加入：WidgetsBasedAutomation、Shell、Thread、UI、Work with Java
 * 
 */
declare module 'global' {

    /**
     * 表示一个点（坐标）。
     */
    interface Point {
        x: number;
        y: number;
    }

    /**
     * app模块提供一系列函数，用于使用其他应用、与其他应用交互。例如发送意图、打开文件、发送邮件等。
     */
    namespace app {

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
    function launchApp(appName: string): boolean;

    /** 
     * 通过应用包名启动应用。如果该包名对应的应用不存在，则返回false；否则返回true。 
     */
    function launch(packageName: string): boolean;

    /**
     * 获取应用名称对应的已安装的应用的包名。如果该找不到该应用，返回null；如果该名称对应多个应用，则只返回其中某一个的包名。
     */
    function getPackageName(appName: string): string;

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


    // interface Console {
    //     show(): void;
    //     verbose(): void;
    // }

    /**
     * 控制台模块提供了一个和Web浏览器中相似的用于调试的控制台。用于输出一些调试信息、中间结果等。 console模块中的一些函数也可以直接作为全局函数使用，例如log, print等。
     */
    namespace console {

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
    function log(data: string, ...args: any[]): void;

    /**
     * 相当于log(text)。
     */
    function print(message: string | Object): void;


    /* 基于坐标的触摸模拟 */

    /**
     * 设置脚本坐标点击所适合的屏幕宽高。如果脚本运行时，屏幕宽度不一致会自动放缩坐标。
     */
    function setScreenMetrics(width: number, height: number): void;

    /* 安卓7.0以上的触摸和手势模拟 */

    /**
     * Android7.0以上
     * 
     * 模拟点击坐标(x, y)大约150毫秒，并返回是否点击成功。只有在点击执行完成后脚本才继续执行。
     */
    function click(x: number, y: number): void;

    /**
     * Android7.0以上
     * 
     * 模拟长按坐标(x, y), 并返回是否成功。只有在长按执行完成（大约600毫秒）时脚本才会继续执行。
     */
    function longClick(x: number, y: number): void;

    /**
     * Android7.0以上
     * 
     * 模拟按住坐标(x, y), 并返回是否成功。只有按住操作执行完成时脚本才会继续执行。
     *
     * 如果按住时间过短，那么会被系统认为是点击；如果时长超过500毫秒，则认为是长按。
     */
    function press(x: number, y: number, duration: number): void;

    /**
     * 模拟从坐标(x1, y1)滑动到坐标(x2, y2)，并返回是否成功。只有滑动操作执行完成时脚本才会继续执行。
     */
    function swipe(x1: number, y1: number, x2: number, y2: number, duration: number): boolean;

    type GesturePoint = [number, number];
    /**
     * 模拟手势操作。例如gesture(1000, [0, 0], [500, 500], [500, 1000])为模拟一个从(0, 0)到(500, 500)到(500, 100)的手势操作，时长为2秒。
     */
    function gesture(duration: number, point1: GesturePoint, point2: GesturePoint, ...points: GesturePoint[]): void;

    type Gesture = [number, number, GesturePoint, GesturePoint] | [number, GesturePoint, GesturePoint];
    /**
     * 同时模拟多个手势。每个手势的参数为[delay, duration, 坐标], delay为延迟多久(毫秒)才执行该手势；duration为手势执行时长；坐标为手势经过的点的坐标。其中delay参数可以省略，默认为0。
     */
    function gestures(gesture: Gesture, ...gestures: Gesture[]): void;

    /**
     * RootAutomator是一个使用root权限来模拟触摸的对象，用它可以完成触摸与多点触摸，并且这些动作的执行没有延迟。
     * 
     * 一个脚本中最好只存在一个RootAutomator，并且保证脚本结束退出他。
     */
    class RootAutomator {
        /**
         * 点击位置(x, y)。其中id是一个整数值，用于区分多点触摸，不同的id表示不同的"手指"。
         */
        tap(x: number, y: number, id?: number): void;

        /**
         * 模拟一次从(x1, y1)到(x2, y2)的时间为duration毫秒的滑动。
         */
        swipe(x1: number, x2: number, y1: number, y2: number, duration?: number): void;

        /**
         * 模拟按下位置(x, y)，时长为duration毫秒。
         */
        press(x: number, y: number, duration: number, id?: number): void;

        /**
         * 模拟长按位置(x, y)。
         */
        longPress(x: number, y: number, duration?: number, id?: number): void;

        /**
         * 模拟手指按下位置(x, y)。
         */
        touchDown(x: number, y: number, id?: number): void;

        /**
         * 模拟移动手指到位置(x, y)。
         */
        touchMove(x: number, y: number, id?: number): void;

        /**
         * 模拟手指弹起。
         */
        touchUp(id?: number): void;

    }

    /**
     * 需要Root权限
     * 
     * 实验API，请勿过度依赖
     * 
     * 点击位置(x, y), 您可以通过"开发者选项"开启指针位置来确定点击坐标。
     */
    function Tap(x: number, y: number): void;

    /**
     * 需要Root权限
     * 
     * 实验API，请勿过度依赖
     * 
     * 滑动。从(x1, y1)位置滑动到(x2, y2)位置。
     */
    function Swipe(x1: number, x2: number, y1: number, y2: number, duration?: number): void;

    /**
     * device模块提供了与设备有关的信息与操作，例如获取设备宽高，内存使用率，IMEI，调整设备亮度、音量等。
     * 
     * 此模块的部分函数，例如调整音量，需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
     */
    namespace device {

        /**
         * 设备屏幕分辨率宽度。例如1080。
         */
        var width: number;

        /**
         * 设备屏幕分辨率高度。例如1920。
         */
        var height: number;

        /**
         * 修订版本号，或者诸如"M4-rc20"的标识。
         */
        var buildId: string;

        /**
         * 设备的主板(?)名称。
         */
        var broad: string;

        /**
         * 与产品或硬件相关的厂商品牌，如"Xiaomi", "Huawei"等。
         */
        var brand: string;

        /**
         * 设备在工业设计中的名称（代号）。
         */
        var device: string;

        /**
         * 设备型号。
         */
        var model: string;

        /**
         * 整个产品的名称。
         */
        var product: string;

        /**
         * 设备Bootloader的版本。
         */
        var bootloader: string;

        /**
         * 设备的硬件名称(来自内核命令行或者/proc)。
         */
        var hardware: string;

        /**
         * 构建(build)的唯一标识码。
         */
        var fingerprint: string;

        /**
         * 硬件序列号。
         */
        var serial: string;

        /**
         * 安卓系统API版本。例如安卓4.4的sdkInt为19。
         */
        var sdkInt: number;

        /**
         * 设备固件版本号。
         */
        var incremental: string;

        /**
         * Android系统版本号。例如"5.0", "7.1.1"。
         */
        var release: string;

        /**
         * 基础操作系统。
         */
        var baseOS: string;

        /**
         * 安全补丁程序级别。
         */
        var securityPatch: string;

        /**
         * 开发代号，例如发行版是"REL"。
         */
        var codename: string;

        /**
         * 返回设备的IMEI。
         */
        function getIMEI(): string;

        /**
         * 返回设备的Android ID。
         * 
         * Android ID为一个用16进制字符串表示的64位整数，在设备第一次使用时随机生成，之后不会更改，除非恢复出厂设置。
         */
        function getAndroidId(): string;

        /**
         * 返回设备的Mac地址。该函数需要在有WLAN连接的情况下才能获取，否则会返回null。
         * 
         * 可能的后续修改：未来可能增加有root权限的情况下通过root权限获取，从而在没有WLAN连接的情况下也能返回正确的Mac地址，因此请勿使用此函数判断WLAN连接。
         */
        function getMacAddress(): string;

        /**
         * 返回当前的(手动)亮度。范围为0~255。
         */
        function getBrightness(): number;

        /**
         * 返回当前亮度模式，0为手动亮度，1为自动亮度。
         */
        function getBrightnessMode(): number;

        /**
         * 设置当前手动亮度。如果当前是自动亮度模式，该函数不会影响屏幕的亮度。
         * 
         * 此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
         */
        function setBrightness(b: number): void;

        /**
         * 设置当前亮度模式。
         * 
         * 此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
         */
        function setBrightnessMode(mode: 0 | 1): void;

        /**
         * 返回当前媒体音量。
         */
        function getMusicVolume(): number;

        /**
         * 返回当前通知音量。
         */
        function getNotificationVolume(): number;

        /**
         * 返回当前闹钟音量。
         */
        function getAlarmVolume(): number;

        /**
         * 返回媒体音量的最大值。
         */
        function getMusicMaxVolume(): number;

        /**
         * 返回通知音量的最大值。
         */
        function getNotificationMaxVolume(): number;

        /**
         * 返回闹钟音量的最大值。
         */
        function getAlarmMaxVolume(): number;

        /**
         * 设置当前媒体音量。
         * 
         * 此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
         */
        function setMusicVolume(volume: number): void;

        /**
         * 设置当前通知音量。
         * 
         * 此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
         */
        function setNotificationVolume(volume: number): void;

        /**
         * 设置当前闹钟音量。
         * 
         * 此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
         */
        function setAlarmVolume(volume: number): void;

        /**
         * 返回当前电量百分比。
         */
        function getBattery(): number;

        /**
         * 返回设备是否正在充电。
         */
        function isCharging(): boolean;

        /**
         * 返回设备内存总量，单位字节(B)。1MB = 1024 * 1024B。
         */
        function getTotalMem(): number;

        /**
         * 返回设备当前可用的内存，单位字节(B)。
         */
        function getAvailMem(): number;

        /**
         * 返回设备屏幕是否是亮着的。如果屏幕亮着，返回true; 否则返回false。
         * 
         * 需要注意的是，类似于vivo xplay系列的息屏时钟不属于"屏幕亮着"的情况，虽然屏幕确实亮着但只能显示时钟而且不可交互，此时isScreenOn()也会返回false。
         */
        function isScreenOn(): boolean;

        /**
         * 唤醒设备。包括唤醒设备CPU、屏幕等。可以用来点亮屏幕。
         */
        function wakeUp(): void;

        /**
         * 如果屏幕没有点亮，则唤醒设备。
         */
        function wakeUpIfNeeded(): void;

        /**
         * 保持屏幕常亮。
         * 
         * 此函数无法阻止用户使用锁屏键等正常关闭屏幕，只能使得设备在无人操作的情况下保持屏幕常亮；同时，如果此函数调用时屏幕没有点亮，则会唤醒屏幕。
         * 
         * 在某些设备上，如果不加参数timeout，只能在Auto.js的界面保持屏幕常亮，在其他界面会自动失效，这是因为设备的省电策略造成的。因此，建议使用比较长的时长来代替"一直保持屏幕常亮"的功能，例如device.keepScreenOn(3600 * 1000)。
         * 
         * 可以使用device.cancelKeepingAwake()来取消屏幕常亮。
         */
        function keepScreenOn(timeout: number): void;

        /**
         * 保持屏幕常亮，但允许屏幕变暗来节省电量。此函数可以用于定时脚本唤醒屏幕操作，不需要用户观看屏幕，可以让屏幕变暗来节省电量。
         * 
         * 此函数无法阻止用户使用锁屏键等正常关闭屏幕，只能使得设备在无人操作的情况下保持屏幕常亮；同时，如果此函数调用时屏幕没有点亮，则会唤醒屏幕。
         * 
         * 可以使用device.cancelKeepingAwake()来取消屏幕常亮。
         */
        function keepScreenDim(timeout: number): void;

        /**
         * 取消设备保持唤醒状态。用于取消device.keepScreenOn(), device.keepScreenDim()等函数设置的屏幕常亮。
         */
        function cancelKeepingAwake(): void;

        /**
         * 使设备震动一段时间。
         */
        function vibrate(millis: number): void;

        /**
         * 如果设备处于震动状态，则取消震动。
         */
        function cancelVibration(): void;

    }

    /**
     * dialogs 模块提供了简单的对话框支持，可以通过对话框和用户进行交互。
     */
    namespace dialogs {

        /**
         * 显示一个只包含“确定”按钮的提示对话框。直至用户点击确定脚本才继续运行。
         */
        function alert(title: string, content?: string): void;

        /**
         * UI模式
         * 
         * 显示一个只包含“确定”按钮的提示对话框。直至用户点击确定脚本才继续运行。
         */
        function alert(title: string, content?: string, callback?: () => void): Promise<void>;

        /**
         * 显示一个包含“确定”和“取消”按钮的提示对话框。如果用户点击“确定”则返回 true ，否则返回 false 。
         */
        function confirm(title: string, content?: string): boolean;

        /**
         * UI模式
         * 
         * 显示一个包含“确定”和“取消”按钮的提示对话框。如果用户点击“确定”则返回 true ，否则返回 false 。
         */
        function confirm(title: string, content?: string, callback?: (value: boolean) => void): Promise<boolean>;

        /**
         * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
         */
        function rawInput(title: string, prefill?: string): string;

        /**
         * UI模式
         * 
         * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
         */
        function rawInput(title: string, prefill?: string, callback?: (value: string) => void): Promise<string>;

        /**
         * 等效于 eval(dialogs.rawInput(title, prefill, callback)), 该函数和rawInput的区别在于，会把输入的字符串用eval计算一遍再返回，返回的可能不是字符串。
         */
        function input(title: string, prefill?: string): any;

        /**
         * UI模式
         * 
         * 等效于 eval(dialogs.rawInput(title, prefill, callback)), 该函数和rawInput的区别在于，会把输入的字符串用eval计算一遍再返回，返回的可能不是字符串。
         */
        function input(title: string, prefill?: string, callback?: (value: any) => void): Promise<any>;

        /**
         * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
         */
        function prompt(title: string, prefill?: string): string;

        /**
         * UI模式
         * 
         * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
         */
        function prompt(title: string, prefill?: string, callback?: (value: string) => void): Promise<string>;

        /**
         * 显示一个带有选项列表的对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。
         */
        function select(title: string, items: string[]): number;

        /**
         * UI模式
         * 
         * 显示一个带有选项列表的对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。
         */
        function select(title: string, items: string[], callback?: (value: number) => void): Promise<number>;

        /**
         * 显示一个单选列表对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。
         */
        function singleChoice(title: string, items: string[], index?: number): number;

        /**
         * UI模式
         * 
         * 显示一个单选列表对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。
         */
        function singleChoice(title: string, items: string[], index?: number, callback?: (choice: number) => void): Promise<number>;

        /**
         * 显示一个多选列表对话框，等待用户选择，返回用户选择的选项索引的数组。如果用户取消了选择，返回[]。
         */
        function multiChoice(title: string, items: string[], indices?: number[]): number[];

        /**
         * UI模式
         * 
         * 显示一个多选列表对话框，等待用户选择，返回用户选择的选项索引的数组。如果用户取消了选择，返回[]。
         */
        function multiChoice(title: string, items: string[], indices?: number[], callback?: (choices: number[]) => void): Promise<number[]>;


    }

    /**
     * 显示一个只包含“确定”按钮的提示对话框。直至用户点击确定脚本才继续运行。
     */
    function alert(title: string, content?: string): void;

    /**
     * UI模式
     * 
     * 显示一个只包含“确定”按钮的提示对话框。直至用户点击确定脚本才继续运行。
     * 
     * 在ui模式下该函数返回一个Promise。
     */
    function alert(title: string, content?: string, callback?: () => void): Promise<void>;

    /**
     * 显示一个包含“确定”和“取消”按钮的提示对话框。如果用户点击“确定”则返回 true ，否则返回 false 。
     */
    function confirm(title: string, content?: string): boolean;

    /**
     * UI模式
     * 
     * 显示一个包含“确定”和“取消”按钮的提示对话框。如果用户点击“确定”则返回 true ，否则返回 false 。
     * 
     * 在ui模式下该函数返回一个Promise。
     */
    function confirm(title: string, content?: string, callback?: (value: boolean) => void): Promise<boolean>;

    /**
     * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
     */
    function rawInput(title: string, prefill?: string): string;

    /**
     * UI模式
     * 
     * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
     */
    function rawInput(title: string, prefill?: string, callback?: (value: string) => void): Promise<string>;

    /**
     * engines模块包含了一些与脚本环境、脚本运行、脚本引擎有关的函数，包括运行其他脚本，关闭脚本等。
     */
    namespace engines {

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


    namespace events {

        interface KeyEvent {
            getAction();
            getKeyCode(): number;
            getEventTime(): number;
            getDownTime(): number;
            keyCodeToString(keyCode: number): string;
        }

        function emitter(): EventEmitter;

        function observeKey(): void;

        type Keys = 'volume_up' | 'volume_down' | 'home' | 'back' | 'menu';

        function setKeyInterceptionEnabled(key: Keys, enabled: boolean);

        function setKeyInterceptionEnabled(enabled: boolean);

        function onKeyDown(keyName: Keys, listener: (e: KeyEvent) => void): void;

        function onceKeyUp(keyName: Keys, listener: (e: KeyEvent) => void): void;

        function removeAllKeyDownListeners(keyName: Keys): void;

        function removeAllKeyUpListeners(keyName: Keys): void;

        function observeTouch(): void;

        function setTouchEventTimeout(timeout: number): void;

        function getTouchEventTimeout(): number;

        function onTouch(listener: (point: Point) => void): void;

        function removeAllTouchListeners(): void;

        function on(event: 'key' | 'key_down' | 'key_up', listener: (keyCode: number, e: KeyEvent) => void): void;

        function on(event: 'exit', listener: () => void): void;

        function observeNotification(): void;

        function observeToast(): void;

        /**
         * 系统Toast对象
         */
        interface Toast {

            /**
             * 获取Toast的文本内容
             */
            getText(): string;

            /**
             * 获取发出Toast的应用包名
             */
            getPackageName(): void;

        }

        function onToast(listener: (toast: Toast) => void): void;

        /**
         * 通知对象，可以获取通知详情，包括通知标题、内容、发出通知的包名、时间等，也可以对通知进行操作，比如点击、删除。
         */
        interface Notification {
            number: number;
            when: number;
            getPackageName(): string;
            getTitle(): string;
            getText(): string;
            click(): void;
            delete(): void;
        }

        function on(event: 'notification', listener: (notification: Notification) => void): void;

    }

    /**
     * 按键事件中所有可用的按键名称
     */
    enum keys {
        home,
        back,
        menu,
        volume_up,
        volume_down
    }

    interface EventEmitter {
        defaultMaxListeners: number;
        addListener(eventName: string, listener: (...args: any[]) => void): EventEmitter;
        emit(eventName: string, ...args: any[]): boolean;
        eventNames(): string[];
        getMaxListeners(): number;
        listenerCount(eventName: string): number;
        on(eventName: string, listener: (...args: any[]) => void): EventEmitter;
        once(eventName: string, listener: (...args: any[]) => void): EventEmitter;
        prependListener(eventName: string, listener: (...args: any[]) => void): EventEmitter;
        prependOnceListener(eventName: string, listener: (...args: any[]) => void): EventEmitter;
        removeAllListeners(eventName?: string): EventEmitter;
        removeListener(eventName: string, listener: (...args: any[]) => void): EventEmitter;
        setMaxListeners(n: number): EventEmitter;
    }


    namespace floaty {
        function window(layout: any): FloatyWindow;
        function closeAll(): void;
        interface FloatyWindow {
            setAdjustEnabled(enabled: boolean): void;
            setPosition(x: number, y: number): void;
            getX(): number;
            getY(): number;
            setSize(width: number, height: number): void;
            getWidht(): number;
            getHeight(): number;
            close(): void;
            exitOnClose(): void;
        }
    }


    namespace files {
        type byte = number;
        function isFile(path: string): boolean;
        function isDir(path: string): boolean;
        function isEmptyDir(path: string): boolean;
        function join(parent: string, ...child: string[]): string;
        function create(path: string): boolean;
        function createWithDirs(path: string): boolean;
        function exists(path: string): boolean;
        function ensureDir(path: string): void;
        function read(path: string, encoding?: string): string;
        function readBytes(path: string): byte[];
        function write(path: string, text, encoding?: string): void;
        function writeBytes(path: string, bytes: byte[]): void;
        function append(path: string, text: string, encoding?: string): void;
        function appendBytes(path: string, text: byte[], encoding?: string): void;
        function copy(frompath: string, topath: string): boolean;
        function move(frompath: string, topath: string): boolean;
        function rename(path: string, newName): boolean;
        function renameWithoutExtension(path: string, newName: string): boolean;
        function getName(path: string): string;
        function getNameWithoutExtension(path: string): string;
        function getExtension(path: string): string;
        function remove(path: string): boolean;
        function removeDir(path: string): boolean;
        function getSdcardPath(): string;
        function cwd(): string;
        function path(relativePath: string): string;
        function listDir(path: string, filter: (filename: string) => boolean): string[];
    }

    interface ReadableTextFile {
        read(): string;
        read(maxCount: number): string;
        readline(): string;
        readlines(): string[];
        close(): void;
    }

    interface WritableTextFile {
        write(text: string): void;
        writeline(line: string): void;
        writelines(lines: string[]): void;
        flush(): void;
        close(): void;
    }

    function open(path: string, mode?: 'r', encoding?: string, bufferSize?: number): ReadableTextFile;
    function open(path: string, mode?: 'w' | 'a', encoding?: string, bufferSize?: number): WritableTextFile;

    namespace media {
        function scanFile(path: string): void;
        function playMusic(path: string, volume?: number, looping?: boolean);
        function musicSeekTo(msec: number): void;
        function pauseMusic(): void;
        function resumeMusic(): void;
        function stopMusic(): void;
        function isMusicPlaying(): boolean;
        function getMusicDuration(): number;
        function getMusicCurrentPosition(): number;
    }

    namespace sensors {
        interface SensorEventEmitter {
            on(eventName: 'change', callback: (...args: number[]) => void): void;
            on(eventName: 'accuracy_change', callback: (accuracy: number) => void): void;
        }
        function on(eventName: 'unsupported_sensor', callback: (sensorName: string) => void): void;
        function register(sensorName: string, delay?: delay): SensorEventEmitter;
        function unregister(emitter: SensorEventEmitter);
        function unregisterAll(): void;
        var ignoresUnsupportedSensor: boolean;
        enum delay {
            normal,
            ui,
            game,
            fastest
        }
    }

    function sleep(n: number): void;

    function currentPackage(): string;

    function currentActivity(): string;

    function setClip(test: string): void;

    function getClip(): string;

    function toast(message: string): void;

    function toastLog(message: string): void;

    function waitForActivity(activity: string, period?: number): void;

    function waitForPackage(packageName: string, period?: number): void;

    function exit(): void;

    function random(): number;
    function random(min: number, max: number): number;


    namespace http {
        interface HttpRequestOptions {
            header: { [key: string]: string },
            method: 'GET' | 'POST' | 'PUT' | 'DELET' | 'PATCH';
            contentType: string;
            body: string | string[] | files.byte[]
        }
        interface Request {

        }
        interface Response {
            statusCode: number;
            statusMessage: string;
            headers: { [key: string]: string };
            body: ResponseBody;
            request: Request;
            url: string;
            method: 'GET' | 'POST' | 'PUT' | 'DELET' | 'PATCH';
        }
        interface ResponseBody {
            bytes(): files.byte[];
            string(): string;
            json(): object;
            contentType: string;
        }
        function get(url: string, options?: HttpRequestOptions, callback?: (resp: Response) => void): Response;
        function post(url: string, data: object, options?: HttpRequestOptions, callback?: (resp: Response) => void): Response;
        function postJson(url: string, data?: object, options?: HttpRequestOptions, callback?: (resp: Response) => void): Response;

        interface RequestMultipartBody {
            file: ReadableTextFile | [string, string] | [string, string, string];
        }
        function postMultipart(url: string, files: RequestMultipartBody, options?: HttpRequestOptions, callback?: (resp: Response) => void): void;
        function postMultipart(url: string, files: { [key: string]: string } & RequestMultipartBody, options?: HttpRequestOptions, callback?: (resp: Response) => void): void;

        function request(url: string, options?: HttpRequestOptions, callback?: (resp: Response) => void): void;

    }


    interface Image {
        getWidth(): number;
        getHeight(): number;
        saveTo(path: string): void;
        pixel(x: number, y: number): number;
    }


    namespace images {
        function requestScreenCapture(landscape?: boolean): boolean;
        function captureScreen(): Image;
        function captureScreen(path: string): void;
        function pixel(image: Image, x: number, y: number): number;
        function save(image: Image, path: string): void;
        function read(path: string): Image;
        function load(url: string): Image;
        interface FindColorOptions {
            region?: [number, number] | [number, number, number, number];
            threshold?: number;
        }
        function clip(image: Image, x: number, y: number, w: number, h: number): Image;
        function findColor(image: Image, color: number | string, options: FindColorOptions): Point;
        function findColorInRegion(image: Image, color: number | string, x: number, y: number, width?: number, height?: number, threshold?: number): Point;
        function findColorEquals(image: Image, color: number | string, x?: number, y?: number, width?: number, height?: number): Point;
        function detectsColor(image: Image, color: number | string, x: number, y: number, threshold?: number, algorithm?: 'diff'): Point;
        interface FindImageOptions {
            region?: [number, number] | [number, number, number, number];
            threshold?: number;
            level?: number;
        }
        function findImage(image: Image, template: Image, options?: FindImageOptions): Point;
        function findImageInRegion(image: Image, template: Image, x: number, y: number, width?: number, height?: number, threshold?: number): Point;
        function findMultiColors(image: Image, firstColor: number | string, colors: [number, number, number | string][], options?: FindColorOptions): Point;
    }


    namespace colors {
        function toString(color: number): string;
        function red(color: number | string): number;
        function green(color: number | string): number;
        function blue(color: number | string): number;
        function alpha(color: number | string): number;
        function rgb(red: number, green: number, blue: number): number;
        function argb(alpha: number, red: number, green: number, blue: number): number;
        function parseColor(colorStr: string): number;
        function isSimilar(color1: number | string, color2: number | string, threshold: number, algorithm: 'diff' | 'rgb' | 'rgb+' | 'hs'): boolean;
        function equals(color1: number | string, color2: number | string): boolean;
    }


    /* 全局按键 */
    function back(): boolean;
    function home(): boolean;
    function powerDialog(): boolean;
    function notifications(): boolean;
    function quickSettings(): boolean;
    function recents(): boolean;
    function splitScreen(): boolean;
    function Home(): void;
    function Back(): void;
    function Power(): void;
    function Menu(): void;
    function VolumeUp(): void;
    function VolumeDown(): void;
    function Camera(): void;
    function Up(): void;
    function Down(): void;
    function Left(): void;
    function Right(): void;
    function OK(): void;
    function Text(text: string): void;
    function KeyCode(code: number | string): void;


    // var module: { exports: any };


    interface Storage {
        get<T>(key: string, defaultValue?: T): T;
        put<T>(key: string, value: T): void;
        remove(key: string): void;
        contains(key: string): boolean;
        clear(): void;
    }

    namespace storages {
        function create(name: string): Storage;
        function remove(name: string): boolean;
    }

    function auto(mode?: 'fast' | 'normal'): void;
    namespace auto {
        function waitFor(): void;
        function setMode(mode: 'fast' | 'normal'): void;
    }
    function selector(): UiSelector;
    function click(text: string, index?: number): boolean;
    function click(left: number, top: number, bottom: number, right: number): boolean;
    function longClick(text: string, index?: number): boolean;
    function scrollUp(index?: number): boolean;
    function scrollDown(index?: number): boolean;
    function setText(text: string): boolean;
    function setText(index: number, text: string): boolean;
    function input(text: string): boolean;
    function input(index: number, text: string): boolean;

    interface UiSelector {
        text(str: string): UiSelector;
        textContains(str: string): UiSelector;
        textStartsWith(prefix: string): UiSelector;
        textEndsWith(suffix: string): UiSelector;
        textMatches(reg: string | RegExp): UiSelector;
        desc(str: string): UiSelector;
        descContains(str: string): UiSelector;
        descStartsWith(prefix: string): UiSelector;
        descEndsWith(suffix: string): UiSelector;
        descMatches(reg: string | RegExp): UiSelector;
        id(resId: string): UiSelector;
        idContains(str: string): UiSelector;
        idStartsWith(prefix: string): UiSelector;
        idEndsWith(suffix: string): UiSelector;
        idMatches(reg: string | RegExp): UiSelector;
        className(str: string): UiSelector;
        classNameContains(str: string): UiSelector;
        classNameStartsWith(prefix: string): UiSelector;
        classNameEndsWith(suffix: string): UiSelector;
        classNameMatches(reg: string | RegExp): UiSelector;
        packageName(str: string): UiSelector;
        packageNameContains(str: string): UiSelector;
        packageNameStartsWith(prefix: string): UiSelector;
        packageNameEndsWith(suffix: string): UiSelector;
        packageNameMatches(reg: string | RegExp): UiSelector;
        bounds(left: number, top: number, right: number, buttom: number): UiSelector;
        boundsInside(left: number, top: number, right: number, buttom: number): UiSelector;
        boundsContains(left: number, top: number, right: number, buttom: number): UiSelector;
        drawingOrder(order): UiSelector;
        clickable(b: boolean): UiSelector;
        longClickable(b: boolean): UiSelector;
        checkable(b: boolean): UiSelector;
        selected(b: boolean): UiSelector;
        enabled(b: boolean): UiSelector;
        scrollable(b: boolean): UiSelector;
        editable(b: boolean): UiSelector;
        multiLine(b: boolean): UiSelector;
        findOne(): UiObject;
        findOne(timeout: number): UiObject;
        findOnce(): UiObject;
        findOnce(i: number): UiObject;
        find(): UiCollection;
        untilFind(): UiCollection;
        exists(): boolean;
        waitFor(): void;
        filter(filter: (obj: UiObject) => boolean)
    }

    interface UiObject {
        click(): boolean;
        longClick(): boolean;
        setText(text: string): boolean;
        copy(): boolean;
        cut(): boolean;
        paste(): boolean;
        setSelection(start, end): boolean;
        scrollForward(): boolean;
        scrollBackward(): boolean;
        select(): boolean;
        collapse(): boolean;
        expand(): boolean;
        show(): boolean;
        scrollUp(): boolean;
        scrollDown(): boolean;
        scrollLeft(): boolean;
        scrollRight(): boolean;
        children(): UiCollection;
        childCount(): number;
        child(i: number): UiObject;
        parent(): UiObject;
        bounds(): Rect;
        boundsInParent(): Rect;
        drawingOrder(): number;
        id(): string;
        text(): string;
        findByText(str: string): UiCollection;
        findOne(selector): UiObject;
        find(selector): UiCollection;
    }

    interface UiCollection {
        size(): number;
        get(i: number): UiObject;
        each(func: (obj: UiObject) => void): void;
        empty(): boolean;
        nonEmpty(): boolean;
        find(selector): UiCollection;
        findOne(selector): UiObject;
    }

    interface Rect {
        left: number;
        right: number;
        top: number;
        bottom: number;
        centerX(): number;
        centerY(): number;
        width(): number;
        height(): number;
        contains(r): Rect;
        intersect(r): Rect;
    }

}


export { };
