const cotentService = require('../service/content-service')

module.exports = {
  list
}

async function list (ctx, next) {
  let res = await cotentService.getList(ctx, next)
  ctx.body = res
}