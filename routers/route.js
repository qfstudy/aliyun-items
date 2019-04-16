const router = require('koa-router')()
const path= require('path')
const fs = require('fs')

const static = require('koa-static');


router.get('/index',async (ctx,next) => {
  ctx.response.type = 'text/html'
  ctx.response.body = await fs.createReadStream(path.resolve(__dirname, '../index.html'))
})

router.get('/cnode',async (ctx,next) => {
  ctx.response.type = 'text/html'
  ctx.response.body = await fs.createReadStream(path.resolve(__dirname, '../cnode/index.html'))
})

// router.get('/todo',async (ctx,next) => {
//   ctx.response.type = 'html'
//   ctx.response.body = fs.createReadStream('./index2.html')
// })

module.exports = router