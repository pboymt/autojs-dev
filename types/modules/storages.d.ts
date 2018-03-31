interface Storage {
    get<T>(key: string, defaultValue?: T): T;
    put<T>(key: string, value: T): void;
    remove(key: string): void;
    contains(key: string): boolean;
    clear(): void;
}

declare namespace storages {
    function create(name: string): Storage;
    function remove(name: string): boolean;
}