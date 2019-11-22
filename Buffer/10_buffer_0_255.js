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


// 给元素的赋值如果小于0，就将该值逐次加256，直到得到一个0255之间的整数，
// 如果得到赋值大于255，就逐次减256，直到得到0255区间内的数值。如果是小数，则舍弃小数部分，只保留整数部分