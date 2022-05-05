const os = require('os');
const StreamZip = require('node-stream-zip');
const { writeFile, mkdir, unlink } = require('fs/promises');
const { join } = require('path');
const { fetch } = require('undici');

const zipPath = join(__dirname, 'platform-tools.zip');
const platformPath = join(__dirname, 'tools');

function choosePlatform() {
    switch (os.platform()) {
        case 'darwin':
            return 'https://dl.google.com/android/repository/platform-tools-latest-darwin.zip';
        case 'win32':
            return 'https://dl.google.com/android/repository/platform-tools-latest-windows.zip';
        case 'linux':
            return 'https://dl.google.com/android/repository/platform-tools-latest-linux.zip';
        default:
            return 'unknown';
    }
}

async function downloadFile(url) {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    await writeFile(zipPath, Buffer.from(buffer));
}

async function main() {

    try {
        await unlink(zipPath);
        await unlink(platformPath);
    } catch { }

    await mkdir(platformPath, { recursive: true });

    const platform = choosePlatform();
    if (platform === 'unknown') {
        console.log('Unknown platform');
        return;
    }
    console.log(`Downloading platform tools from ${platform}`);
    await downloadFile(platform);

    console.log('Extracting platform tools');
    const zip = new StreamZip.async({ file: zipPath });
    await zip.extract(null, platformPath);
    await zip.close();
    console.log('Platform tools extracted');

    await unlink(zipPath);
}
if (require.main === module) {
    main();
}