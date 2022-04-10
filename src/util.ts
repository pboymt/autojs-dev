import { existsSync, mkdirSync, readFileSync } from "fs";
import { dirname } from "path";
import webpack from "webpack";

export function mkdirsSync(dir: string) {
    if (existsSync(dir)) {
        return true;
    } else {
        if (mkdirsSync(dirname(dir))) {
            mkdirSync(dir);
            return true;
        }
    }
}

export function getWorkspaceConfig() {
    return (existsSync('./autojs.json') && JSON.parse(readFileSync('./autojs.json', 'utf-8'))) || null;
}

export function firstUpperCase(str: string) {
    return str.split('').map((val, index) => {
        return index === 0 ? val.toUpperCase() : val;
    }).join('');
}