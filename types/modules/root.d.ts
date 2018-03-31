/**
 * RootAutomator是一个使用root权限来模拟触摸的对象，用它可以完成触摸与多点触摸，并且这些动作的执行没有延迟。
 * 
 * 一个脚本中最好只存在一个RootAutomator，并且保证脚本结束退出他。
 */
declare class RootAutomator {
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
declare function Tap(x: number, y: number): void;

/**
 * 需要Root权限
 * 
 * 实验API，请勿过度依赖
 * 
 * 滑动。从(x1, y1)位置滑动到(x2, y2)位置。
 */
declare function Swipe(x1: number, x2: number, y1: number, y2: number, duration?: number): void;
