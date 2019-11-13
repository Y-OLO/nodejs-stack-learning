const events = require('events');
const emitter = new events.EventEmitter();
const test = () => console.log('test');

const test1 = () => console.info('test1')

/** 例一 */
// emitter.on('test', function() {
//     test();
//     emitter.emit('test');
// })

// emitter.emit('test');

/** 例二 */
emitter.on('test', function() {
    test();
    emitter.on('test', test1);
})

emitter.emit('test');
