const spawn = require('child_process').spawn;
const child = spawn('node', ['13_Interview4_fock.js'])
// child.stdout.pipe(process.stdout);
console.log(process.pid, child.pid); // 主进程id3243 子进程3244