const Logger  = require('./logger');

// 启动计时器
Logger.time('计时器');

// 中间写一些测试代码
for(let i=0; i < 1000000000; i++){}

// 停止计时器
Logger.timeEnd('计时器');

// 计时器: 718.034ms