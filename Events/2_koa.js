const Koa = require('koa');
const app = new Koa();

app.on("koa", function() {
    console.log("在 Koa 中使用 EventEmitter");
});

app.emit("koa");

