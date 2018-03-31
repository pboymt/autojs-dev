/**
 * dialogs 模块提供了简单的对话框支持，可以通过对话框和用户进行交互。
 */
declare namespace dialogs {

    /**
     * 显示一个只包含“确定”按钮的提示对话框。直至用户点击确定脚本才继续运行。
     */
    function alert(title: string, content?: string): void;

    /**
     * UI模式
     * 
     * 显示一个只包含“确定”按钮的提示对话框。直至用户点击确定脚本才继续运行。
     */
    function alert(title: string, content?: string, callback?: () => void): Promise<void>;

    /**
     * 显示一个包含“确定”和“取消”按钮的提示对话框。如果用户点击“确定”则返回 true ，否则返回 false 。
     */
    function confirm(title: string, content?: string): boolean;

    /**
     * UI模式
     * 
     * 显示一个包含“确定”和“取消”按钮的提示对话框。如果用户点击“确定”则返回 true ，否则返回 false 。
     */
    function confirm(title: string, content?: string, callback?: (value: boolean) => void): Promise<boolean>;

    /**
     * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
     */
    function rawInput(title: string, prefill?: string): string;

    /**
     * UI模式
     * 
     * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
     */
    function rawInput(title: string, prefill?: string, callback?: (value: string) => void): Promise<string>;

    /**
     * 等效于 eval(dialogs.rawInput(title, prefill, callback)), 该函数和rawInput的区别在于，会把输入的字符串用eval计算一遍再返回，返回的可能不是字符串。
     */
    function input(title: string, prefill?: string): any;

    /**
     * UI模式
     * 
     * 等效于 eval(dialogs.rawInput(title, prefill, callback)), 该函数和rawInput的区别在于，会把输入的字符串用eval计算一遍再返回，返回的可能不是字符串。
     */
    function input(title: string, prefill?: string, callback?: (value: any) => void): Promise<any>;

    /**
     * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
     */
    function prompt(title: string, prefill?: string): string;

    /**
     * UI模式
     * 
     * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
     */
    function prompt(title: string, prefill?: string, callback?: (value: string) => void): Promise<string>;

    /**
     * 显示一个带有选项列表的对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。
     */
    function select(title: string, items: string[]): number;

    /**
     * UI模式
     * 
     * 显示一个带有选项列表的对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。
     */
    function select(title: string, items: string[], callback?: (value: number) => void): Promise<number>;

    /**
     * 显示一个单选列表对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。
     */
    function singleChoice(title: string, items: string[], index?: number): number;

    /**
     * UI模式
     * 
     * 显示一个单选列表对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。
     */
    function singleChoice(title: string, items: string[], index?: number, callback?: (choice: number) => void): Promise<number>;

    /**
     * 显示一个多选列表对话框，等待用户选择，返回用户选择的选项索引的数组。如果用户取消了选择，返回[]。
     */
    function multiChoice(title: string, items: string[], indices?: number[]): number[];

    /**
     * UI模式
     * 
     * 显示一个多选列表对话框，等待用户选择，返回用户选择的选项索引的数组。如果用户取消了选择，返回[]。
     */
    function multiChoice(title: string, items: string[], indices?: number[], callback?: (choices: number[]) => void): Promise<number[]>;


}

/**
 * 显示一个只包含“确定”按钮的提示对话框。直至用户点击确定脚本才继续运行。
 */
declare function alert(title: string, content?: string): void;

/**
 * UI模式
 * 
 * 显示一个只包含“确定”按钮的提示对话框。直至用户点击确定脚本才继续运行。
 * 
 * 在ui模式下该函数返回一个Promise。
 */
declare function alert(title: string, content?: string, callback?: () => void): Promise<void>;

/**
 * 显示一个包含“确定”和“取消”按钮的提示对话框。如果用户点击“确定”则返回 true ，否则返回 false 。
 */
declare function confirm(title: string, content?: string): boolean;

/**
 * UI模式
 * 
 * 显示一个包含“确定”和“取消”按钮的提示对话框。如果用户点击“确定”则返回 true ，否则返回 false 。
 * 
 * 在ui模式下该函数返回一个Promise。
 */
declare function confirm(title: string, content?: string, callback?: (value: boolean) => void): Promise<boolean>;

/**
 * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
 */
declare function rawInput(title: string, prefill?: string): string;

/**
 * UI模式
 * 
 * 显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回null。
 */
declare function rawInput(title: string, prefill?: string, callback?: (value: string) => void): Promise<string>;
