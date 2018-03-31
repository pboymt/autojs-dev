declare function auto(mode?: 'fast' | 'normal'): void;
declare namespace auto {
    function waitFor(): void;
    function setMode(mode: 'fast' | 'normal'): void;
}
declare function selector(): UiSelector;
declare function click(text: string, index?: number): boolean;
declare function click(left: number, top: number, bottom: number, right: number): boolean;
declare function longClick(text: string, index?: number): boolean;
declare function scrollUp(index?: number): boolean;
declare function scrollDown(index?: number): boolean;
declare function setText(text: string): boolean;
declare function setText(index: number, text: string): boolean;
declare function input(text: string): boolean;
declare function input(index: number, text: string): boolean;

declare interface UiSelector {
    text(str: string): UiSelector;
    textContains(str: string): UiSelector;
    textStartsWith(prefix: string): UiSelector;
    textEndsWith(suffix: string): UiSelector;
    textMatches(reg: string | RegExp): UiSelector;
    desc(str: string): UiSelector;
    descContains(str: string): UiSelector;
    descStartsWith(prefix: string): UiSelector;
    descEndsWith(suffix: string): UiSelector;
    descMatches(reg: string | RegExp): UiSelector;
    id(resId: string): UiSelector;
    idContains(str: string): UiSelector;
    idStartsWith(prefix: string): UiSelector;
    idEndsWith(suffix: string): UiSelector;
    idMatches(reg: string | RegExp): UiSelector;
    className(str: string): UiSelector;
    classNameContains(str: string): UiSelector;
    classNameStartsWith(prefix: string): UiSelector;
    classNameEndsWith(suffix: string): UiSelector;
    classNameMatches(reg: string | RegExp): UiSelector;
    packageName(str: string): UiSelector;
    packageNameContains(str: string): UiSelector;
    packageNameStartsWith(prefix: string): UiSelector;
    packageNameEndsWith(suffix: string): UiSelector;
    packageNameMatches(reg: string | RegExp): UiSelector;
    bounds(left: number, top: number, right: number, buttom: number): UiSelector;
    boundsInside(left: number, top: number, right: number, buttom: number): UiSelector;
    boundsContains(left: number, top: number, right: number, buttom: number): UiSelector;
    drawingOrder(order): UiSelector;
    clickable(b: boolean): UiSelector;
    longClickable(b: boolean): UiSelector;
    checkable(b: boolean): UiSelector;
    selected(b: boolean): UiSelector;
    enabled(b: boolean): UiSelector;
    scrollable(b: boolean): UiSelector;
    editable(b: boolean): UiSelector;
    multiLine(b: boolean): UiSelector;
    findOne(): UiObject;
    findOne(timeout: number): UiObject;
    findOnce(): UiObject;
    findOnce(i: number): UiObject;
    find(): UiCollection;
    untilFind(): UiCollection;
    exists(): boolean;
    waitFor(): void;
    filter(filter: (obj: UiObject) => boolean)
}

declare interface UiObject {
    click(): boolean;
    longClick(): boolean;
    setText(text: string): boolean;
    copy(): boolean;
    cut(): boolean;
    paste(): boolean;
    setSelection(start, end): boolean;
    scrollForward(): boolean;
    scrollBackward(): boolean;
    select(): boolean;
    collapse(): boolean;
    expand(): boolean;
    show(): boolean;
    scrollUp(): boolean;
    scrollDown(): boolean;
    scrollLeft(): boolean;
    scrollRight(): boolean;
    children(): UiCollection;
    childCount(): number;
    child(i: number): UiObject;
    parent(): UiObject;
    bounds(): Rect;
    boundsInParent(): Rect;
    drawingOrder(): number;
    id(): string;
    text(): string;
    findByText(str: string): UiCollection;
    findOne(selector): UiObject;
    find(selector): UiCollection;
}

declare interface UiCollection {
    size(): number;
    get(i: number): UiObject;
    each(func: (obj: UiObject) => void): void;
    empty(): boolean;
    nonEmpty(): boolean;
    find(selector): UiCollection;
    findOne(selector): UiObject;
}

declare interface Rect {
    left: number;
    right: number;
    top: number;
    bottom: number;
    centerX(): number;
    centerY(): number;
    width(): number;
    height(): number;
    contains(r): Rect;
    intersect(r): Rect;
}