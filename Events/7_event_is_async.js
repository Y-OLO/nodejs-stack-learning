const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('test',function(){
    console.log(111)
});
emitter.emit('test');
console.log(222)

// 输出
//？
//？