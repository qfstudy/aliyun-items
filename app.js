const Koa = require('koa')
const path= require('path')
const fs = require('fs')
const static = require('koa-static');
const route = require('koa-route');


const app=new Koa()

// 静态资源目录路径
app.use(static(
  path.join(__dirname, './cnode')
))

// const main = ctx => {
//   ctx.response.type = 'text/html';
//   // ctx.response.body = fs.createReadStream(path.resolve(__dirname, './cnode/index.html'))
//   ctx.response.body = fs.createReadStream('./cnode/index.html');
// };

// app.use(main)

app.use(require('./routers/route.js').routes())

app.listen(3000)

console.log('3000')