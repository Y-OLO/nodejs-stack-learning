var buf = Buffer.alloc(100);
console.log(buf.length); // => 100
console.info(buf)
console.log(buf[10]);

//我们给buffer元素赋值
buf[10] = 100;
console.log(buf[10]); // => 100
buf[20] = -100;
console.log(buf[20]); // 156
buf[21] = 300;
console.log(buf[21]); // 44
buf[22] = 3.1415;
console.log(buf[22]); // 3
buf[23] = 3.5415;
console.log(buf[23]); // 3