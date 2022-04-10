import { program } from 'commander';
import Express from "express";
import { readFileSync } from "fs";
import { join, resolve } from 'path';
import { getWorkspaceConfig } from './util';
import { networkInterfaces } from 'os';

program
    .option('-p, --port', '监听端口')
    .option('-h, --host', '监听地址')
    .option('-d, --dir', '监听目录');

const config = getWorkspaceConfig();
const optDir = (config && (config.images && config.images.dir)) || program.opts().dir;
const port = (config && (config.images && config.images.port)) || program.opts().port;
const host = (config && (config.images && config.images.host)) || program.opts().host;

const imgDir = resolve(process.cwd(), optDir);

console.log('监听地址');
console.log(imgDir);
const app = Express();

app.get('/version', (req, res) => {
    res.send(JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8')).version);
});

app.get('/img/:file', (req, res) => {
    console.log(req.params['file']);
    res.sendFile(join(imgDir, `${req.params['file']}`));
});

app.listen(port ?? 3400, host ?? '0.0.0.0', () => {
    console.log(`Listening on ${host ?? '0.0.0.0'}:${port ?? 3400}`);
    const networks = networkInterfaces();
    console.log('在局域网内可能监听的地址：')
    for (const key in networks) {
        if (Object.prototype.hasOwnProperty.call(networks, key)) {
            const network = networks[key];
            for (const item of network ?? []) {
                if (item.family === 'IPv4') {
                    console.log(`${item.address}:${port ?? 3400}`);
                }
            }
        }
    }
});
