const router = require('koa-router')()
const path= require('path')
const fs = require('fs')

router.get('/cnode',async (ctx,next) => {
  ctx.response.type = 'text/html'
  ctx.response.body = await fs.createReadStream(path.resolve(__dirname, '../public/cnodeIndex.html'))
})

module.exports = router