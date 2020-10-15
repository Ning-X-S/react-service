const cotentService = require('../service/thoughtworks-service')

module.exports = {
  list,
  update,
  deleteCont
}

async function list (ctx, next) {
  let res = await cotentService.getList(ctx, next)
  ctx.body = res
}


async function update (ctx, next) {
  let res = await cotentService.updateContent(ctx, next)
  ctx.body = res
}

async function deleteCont (ctx, next) {
  let res = await cotentService.deleteContent(ctx, next)
  ctx.body = res
}