const fork = require('child_process').fork;
const child = fork('./6_1_child_process.js'); // fork 一个新的子进程


console.log('process.pid: ', process.pid,'child.pid: ', child.pid)
// process.pid:  12236  child.pid:  12237

child.on('message', function(msg){
    console.log('parent get message: ' + JSON.stringify(msg)); // parent get message: {"key":"child value "}
})

child.send({key: 'parent value'})