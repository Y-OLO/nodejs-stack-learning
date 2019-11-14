/**
 * 从客户端解决沾包问题 延迟发送
 */
const net = require('net');
const client = net.createConnection({
    host: '127.0.0.1',
    port: 3000
});

client.on('connect', () => {
    client.setNoDelay(true);
    // 向服务器发送数据
    client.write('Nodejs 技术栈 TCP');

    const arr = [
        'JavaScript ',
        'TypeScript ',
        'Python ',
        'Java ',
        'C ',
        'PHP ',
        'ASP.NET '
    ]

    for (let i=0; i<arr.length; i++) {
        (function(val, k){
            setTimeout(() => {
                client.write(val);
            }, 1000 * (k+1))
        }(arr[i], i));
    }
})

