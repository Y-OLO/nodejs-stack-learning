/**
 * 守护进程
 */

const fs = require('fs');
const { Console } = require('console');

// 全局的 console 是一个特殊的 Console，其输出发送到 process.stdout 和 process.stderr。 相当于调用：
// new Console({ stdout: process.stdout, stderr: process.stderr });
const logger = new Console(fs.createWriteStream('./stdout.log'), fs.createWriteStream('./stderr.log'));

setInterval(function() {
    logger.log('daemon pid: ', process.pid, ', ppid: ', process.ppid);
}, 1000 * 10);