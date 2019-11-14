const fork = require('child_process').fork;
const cpus = require('os').cpus();

for (let i=0; i<cpus.length; i++) {
    const worker = fork('./11_Interview3_fock');
    console.log('worker process created, pid: %s ppid: %s', worker.pid, process.pid);
}