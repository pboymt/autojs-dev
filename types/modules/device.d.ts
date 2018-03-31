/**
 * device模块提供了与设备有关的信息与操作，例如获取设备宽高，内存使用率，IMEI，调整设备亮度、音量等。
 * 
 * 此模块的部分函数，例如调整音量，需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
 */
declare global {
    namespace device {

        /**
         * 设备屏幕分辨率宽度。例如1080。
         */
        const width: number;

        /**
         * 设备屏幕分辨率高度。例如1920。
         */
        const height: number;

        /**
         * 修订版本号，或者诸如"M4-rc20"的标识。
         */
        const buildId: string;

        /**
         * 设备的主板(?)名称。
         */
        const broad: string;

        /**
         * 与产品或硬件相关的厂商品牌，如"Xiaomi", "Huawei"等。
         */
        const brand: string;

        /**
         * 设备在工业设计中的名称（代号）。
         */
        const device: string;

        /**
         * 设备型号。
         */
        const model: string;

        /**
         * 整个产品的名称。
         */
        const product: string;

        /**
         * 设备Bootloader的版本。
         */
        const bootloader: string;

        /**
         * 设备的硬件名称(来自内核命令行或者/proc)。
         */
        const hardware: string;

        /**
         * 构建(build)的唯一标识码。
         */
        const fingerprint: string;

        /**
         * 硬件序列号。
         */
        const serial: string;

        /**
         * 安卓系统API版本。例如安卓4.4的sdkInt为19。
         */
        const sdkInt: number;

        /**
         * 设备固件版本号。
         */
        const incremental: string;

        /**
         * Android系统版本号。例如"5.0", "7.1.1"。
         */
        const release: string;

        /**
         * 基础操作系统。
         */
        const baseOS: string;

        /**
         * 安全补丁程序级别。
         */
        const securityPatch: string;

        /**
         * 开发代号，例如发行版是"REL"。
         */
        const codename: string;

        /**
         * 返回设备的IMEI。
         */
        function getIMEI(): string;

        /**
         * 返回设备的Android ID。
         * 
         * Android ID为一个用16进制字符串表示的64位整数，在设备第一次使用时随机生成，之后不会更改，除非恢复出厂设置。
         */
        function getAndroidId(): string;

        /**
         * 返回设备的Mac地址。该函数需要在有WLAN连接的情况下才能获取，否则会返回null。
         * 
         * 可能的后续修改：未来可能增加有root权限的情况下通过root权限获取，从而在没有WLAN连接的情况下也能返回正确的Mac地址，因此请勿使用此函数判断WLAN连接。
         */
        function getMacAddress(): string;

        /**
         * 返回当前的(手动)亮度。范围为0~255。
         */
        function getBrightness(): number;

        /**
         * 返回当前亮度模式，0为手动亮度，1为自动亮度。
         */
        function getBrightnessMode(): number;

        /**
         * 设置当前手动亮度。如果当前是自动亮度模式，该函数不会影响屏幕的亮度。
         * 
         * 此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
         */
        function setBrightness(b: number): void;

        /**
         * 设置当前亮度模式。
         * 
         * 此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
         */
        function setBrightnessMode(mode: 0 | 1): void;

        /**
         * 返回当前媒体音量。
         */
        function getMusicVolume(): number;

        /**
         * 返回当前通知音量。
         */
        function getNotificationVolume(): number;

        /**
         * 返回当前闹钟音量。
         */
        function getAlarmVolume(): number;

        /**
         * 返回媒体音量的最大值。
         */
        function getMusicMaxVolume(): number;

        /**
         * 返回通知音量的最大值。
         */
        function getNotificationMaxVolume(): number;

        /**
         * 返回闹钟音量的最大值。
         */
        function getAlarmMaxVolume(): number;

        /**
         * 设置当前媒体音量。
         * 
         * 此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
         */
        function setMusicVolume(volume: number): void;

        /**
         * 设置当前通知音量。
         * 
         * 此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
         */
        function setNotificationVolume(volume: number): void;

        /**
         * 设置当前闹钟音量。
         * 
         * 此函数需要"修改系统设置"的权限。如果没有该权限，会抛出SecurityException并跳转到权限设置界面。
         */
        function setAlarmVolume(volume: number): void;

        /**
         * 返回当前电量百分比。
         */
        function getBattery(): number;

        /**
         * 返回设备是否正在充电。
         */
        function isCharging(): boolean;

        /**
         * 返回设备内存总量，单位字节(B)。1MB = 1024 * 1024B。
         */
        function getTotalMem(): number;

        /**
         * 返回设备当前可用的内存，单位字节(B)。
         */
        function getAvailMem(): number;

        /**
         * 返回设备屏幕是否是亮着的。如果屏幕亮着，返回true; 否则返回false。
         * 
         * 需要注意的是，类似于vivo xplay系列的息屏时钟不属于"屏幕亮着"的情况，虽然屏幕确实亮着但只能显示时钟而且不可交互，此时isScreenOn()也会返回false。
         */
        function isScreenOn(): boolean;

        /**
         * 唤醒设备。包括唤醒设备CPU、屏幕等。可以用来点亮屏幕。
         */
        function wakeUp(): void;

        /**
         * 如果屏幕没有点亮，则唤醒设备。
         */
        function wakeUpIfNeeded(): void;

        /**
         * 保持屏幕常亮。
         * 
         * 此函数无法阻止用户使用锁屏键等正常关闭屏幕，只能使得设备在无人操作的情况下保持屏幕常亮；同时，如果此函数调用时屏幕没有点亮，则会唤醒屏幕。
         * 
         * 在某些设备上，如果不加参数timeout，只能在Auto.js的界面保持屏幕常亮，在其他界面会自动失效，这是因为设备的省电策略造成的。因此，建议使用比较长的时长来代替"一直保持屏幕常亮"的功能，例如device.keepScreenOn(3600 * 1000)。
         * 
         * 可以使用device.cancelKeepingAwake()来取消屏幕常亮。
         */
        function keepScreenOn(timeout: number): void;

        /**
         * 保持屏幕常亮，但允许屏幕变暗来节省电量。此函数可以用于定时脚本唤醒屏幕操作，不需要用户观看屏幕，可以让屏幕变暗来节省电量。
         * 
         * 此函数无法阻止用户使用锁屏键等正常关闭屏幕，只能使得设备在无人操作的情况下保持屏幕常亮；同时，如果此函数调用时屏幕没有点亮，则会唤醒屏幕。
         * 
         * 可以使用device.cancelKeepingAwake()来取消屏幕常亮。
         */
        function keepScreenDim(timeout: number): void;

        /**
         * 取消设备保持唤醒状态。用于取消device.keepScreenOn(), device.keepScreenDim()等函数设置的屏幕常亮。
         */
        function cancelKeepingAwake(): void;

        /**
         * 使设备震动一段时间。
         */
        function vibrate(millis: number): void;

        /**
         * 如果设备处于震动状态，则取消震动。
         */
        function cancelVibration(): void;

    }

}

export { };