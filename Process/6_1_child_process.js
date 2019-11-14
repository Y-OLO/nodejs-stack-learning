console.log('child.pid: ' + process.pid); // child.pid: 12237

process.on('message', function(msg){
    console.log('child get message: ' + JSON.stringify(msg))// child get message: {"key":"parent value"}
})

setTimeout(function() {
    process.send({key: `child value `})
}, 2000)