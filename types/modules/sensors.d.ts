declare namespace sensors {
    interface SensorEventEmitter {
        on(eventName: 'change', callback: (...args: number[]) => void): void;
        on(eventName: 'accuracy_change', callback: (accuracy: number) => void): void;
    }
    function on(eventName: 'unsupported_sensor', callback: (sensorName: string) => void): void;
    function register(sensorName: string, delay?: delay): SensorEventEmitter;
    function unregister(emitter: SensorEventEmitter);
    function unregisterAll(): void;
    var ignoresUnsupportedSensor: boolean;
    enum delay {
        normal,
        ui,
        game,
        fastest
    }
}