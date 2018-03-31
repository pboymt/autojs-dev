interface Point {
    x: number;
    y: number;
}

declare function sleep(n: number): void;

declare function currentPackage(): string;

declare function currentActivity(): string;

declare function setClip(test: string): void;

declare function getClip(): string;

declare function toast(message: string): void;

declare function toastLog(message: string): void;

declare function waitForActivity(activity: string, period?: number): void;

declare function waitForPackage(packageName: string, period?: number): void;

declare function exit(): void;

declare function random(): number;
declare function random(min: number, max: number): number;

