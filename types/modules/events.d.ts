declare namespace events {

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
declare enum keys {
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