const cotentService = require('../service/content-service')

module.exports = {
  list,
  detail,
  create,
  update,
  deleteCont
}

async function list (ctx, next) {
  let res = await cotentService.getList(ctx, next)
  ctx.body = res
}

async function detail (ctx, next) {
  let res = await cotentService.getDetail(ctx, next)
  ctx.body = res
}

async function create (ctx, next) {
  let res = await cotentService.createContent(ctx, next)
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