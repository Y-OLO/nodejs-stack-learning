const buf = Buffer.from('Node.js 技术栈 Buffer', 'UTF-8');

console.log(buf); // <Buffer 4e 6f 64 65 2e 6a 73 20 e6 8a 80 e6 9c af e6 a0 88 20 42 75 66 66 65 72>
console.log(buf.length); // 24
console.log(buf.toString('UTF-8', 0, 9)); // Node.js �

console.log(buf.toString('UTF-8', 0, 11)); // Node.js 技