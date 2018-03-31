declare namespace threads {

    type ThreadTimerID = number;

    interface Thread {
        interrupt(): void;
        join(timeout?: number);
        isAlive(): boolean;
        waitFor(): void;
        setTimeout(callback: (...args: any[]) => void, delay: number, ...args: any[]): ThreadTimerID;
        setInterval(callback: (...args: any[]) => void, delay: number, ...args: any[]): ThreadTimerID;
        setImmediate(callback: (...args: any[]) => void, ...args: any[]): ThreadTimerID;
        clearInterval(id: ThreadTimerID): void;
        clearTimeout(id: ThreadTimerID): void;
        clearImmediate(id: ThreadTimerID): void;
    }

    function start(action): Thread;
    function shutDownAll(): void;
    function currentThread(): Thread;
    function disposable(): any;
    function atomic(initialValue?: number): any;
    function lock(): any;


}