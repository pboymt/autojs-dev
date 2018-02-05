import { existsSync, mkdirSync } from "fs";
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