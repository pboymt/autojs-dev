/// <reference path="./global.d.ts" />

interface Image {
    getWidth(): number;
    getHeight(): number;
    saveTo(path: string): void;
    pixel(x: number, y: number): number;
}


declare namespace images {
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
    function findColor(image: Image, color: number | string, options: FindColorOptions): Point | null;
    function findColorInRegion(image: Image, color: number | string, x: number, y: number, width?: number, height?: number, threshold?: number): Point | null;
    function findColorEquals(image: Image, color: number | string, x?: number, y?: number, width?: number, height?: number): Point | null;
    function detectsColor(image: Image, color: number | string, x: number, y: number, threshold?: number, algorithm?: 'diff'): Boolean;
    interface FindImageOptions {
        region?: [number, number] | [number, number, number, number];
        threshold?: number;
        level?: number;
    }
    function findImage(image: Image, template: Image, options: FindImageOptions): Point | null;
    function findImageInRegion(image: Image, template: Image, x: number, y: number, width?: number, height?: number, threshold?: number): Point | null;
    function findMultiColors(image: Image, firstColor: number | string, colors: [number, number, number | string][], options?: FindColorOptions): Point | null;

    function fromBase64(base64: string): Image | null;
    function toBase64(img: Image): string;
}
