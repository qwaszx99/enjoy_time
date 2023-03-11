const router = require('koa-router')()
const koa2Req = require('koa2-request')
const { baseUrl } = require('../config')

router.prefix('/movie')

router.get('/types', async function (ctx, next) {
    const res = await koa2Req(baseUrl)
    ctx.body = res.body
    ctx.msg = '操作成功'
    await next()
})

router.get('/list', async function (ctx, next) {
    const res = await koa2Req(baseUrl + ctx.request.query.path)
    ctx.body = res.body
    ctx.msg = '操作成功'
    await next()
})

module.exports = router
