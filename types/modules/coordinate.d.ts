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
declare function click(x: number, y: number): boolean;

/**
 * Android7.0以上
 * 
 * 模拟长按坐标(x, y), 并返回是否成功。只有在长按执行完成（大约600毫秒）时脚本才会继续执行。
 */
declare function longClick(x: number, y: number): boolean;

/**
 * Android7.0以上
 * 
 * 模拟按住坐标(x, y), 并返回是否成功。只有按住操作执行完成时脚本才会继续执行。
 *
 * 如果按住时间过短，那么会被系统认为是点击；如果时长超过500毫秒，则认为是长按。
 */
declare function press(x: number, y: number, duration: number): boolean;

/**
 * 模拟从坐标(x1, y1)滑动到坐标(x2, y2)，并返回是否成功。只有滑动操作执行完成时脚本才会继续执行。
 */
declare function swipe(x1: number, y1: number, x2: number, y2: number, duration: number): boolean;

type GesturePoint = [number, number];
/**
 * 模拟手势操作。例如gesture(1000, [0, 0], [500, 500], [500, 1000])为模拟一个从(0, 0)到(500, 500)到(500, 100)的手势操作，时长为2秒。
 */
declare function gesture(duration: number, point1: GesturePoint, point2: GesturePoint, ...points: GesturePoint[]): void;

type Gesture = [number, number, GesturePoint, GesturePoint] | [number, GesturePoint, GesturePoint];
/**
 * 同时模拟多个手势。每个手势的参数为[delay, duration, 坐标], delay为延迟多久(毫秒)才执行该手势；duration为手势执行时长；坐标为手势经过的点的坐标。其中delay参数可以省略，默认为0。
 */
declare function gestures(gesture: Gesture, ...gestures: Gesture[]): void;
