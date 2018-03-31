declare namespace floaty {
    function window(layout: any): FloatyWindow;
    function closeAll(): void;
    interface FloatyWindow {
        setAdjustEnabled(enabled: boolean): void;
        setPosition(x: number, y: number): void;
        getX(): number;
        getY(): number;
        setSize(width: number, height: number): void;
        getWidht(): number;
        getHeight(): number;
        close(): void;
        exitOnClose(): void;
    }
}
