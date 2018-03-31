declare namespace media {
    function scanFile(path: string): void;
    function playMusic(path: string, volume?: number, looping?: boolean);
    function musicSeekTo(msec: number): void;
    function pauseMusic(): void;
    function resumeMusic(): void;
    function stopMusic(): void;
    function isMusicPlaying(): boolean;
    function getMusicDuration(): number;
    function getMusicCurrentPosition(): number;
}
