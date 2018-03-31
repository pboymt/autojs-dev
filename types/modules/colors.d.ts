declare namespace colors {
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

