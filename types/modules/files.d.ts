declare namespace files {
    type byte = number;
    function isFile(path: string): boolean;
    function isDir(path: string): boolean;
    function isEmptyDir(path: string): boolean;
    function join(parent: string, ...child: string[]): string;
    function create(path: string): boolean;
    function createWithDirs(path: string): boolean;
    function exists(path: string): boolean;
    function ensureDir(path: string): void;
    function read(path: string, encoding?: string): string;
    function readBytes(path: string): byte[];
    function write(path: string, text, encoding?: string): void;
    function writeBytes(path: string, bytes: byte[]): void;
    function append(path: string, text: string, encoding?: string): void;
    function appendBytes(path: string, text: byte[], encoding?: string): void;
    function copy(frompath: string, topath: string): boolean;
    function move(frompath: string, topath: string): boolean;
    function rename(path: string, newName): boolean;
    function renameWithoutExtension(path: string, newName: string): boolean;
    function getName(path: string): string;
    function getNameWithoutExtension(path: string): string;
    function getExtension(path: string): string;
    function remove(path: string): boolean;
    function removeDir(path: string): boolean;
    function getSdcardPath(): string;
    function cwd(): string;
    function path(relativePath: string): string;
    function listDir(path: string, filter: (filename: string) => boolean): string[];
}

interface ReadableTextFile {
    read(): string;
    read(maxCount: number): string;
    readline(): string;
    readlines(): string[];
    close(): void;
}

interface WritableTextFile {
    write(text: string): void;
    writeline(line: string): void;
    writelines(lines: string[]): void;
    flush(): void;
    close(): void;
}

declare function open(path: string, mode?: 'r', encoding?: string, bufferSize?: number): ReadableTextFile;
declare function open(path: string, mode?: 'w' | 'a', encoding?: string, bufferSize?: number): WritableTextFile;
