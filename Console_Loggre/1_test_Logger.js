const logger = require('./Logger');

logger.log('hello world') // 普通日志打印
logger.info('hello world') // 等同于logger.log
logger.error('hello world') // 错误日志打印
logger.warn('hello world') // 等同于logger.error
// logger.trace('错误信息') // trace打印错误堆栈
const family = {
    name: 'Jack',
    brother: {
        hobby: ['篮球', '足球']
    }
}

logger.dir(family, {depth: 3});
// logger.clear() // 清除控制台信息