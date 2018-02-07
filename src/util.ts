import { existsSync, mkdirSync, readFileSync } from "fs";
import { dirname } from "path";

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