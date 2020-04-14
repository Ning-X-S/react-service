const onlineService = require('../service/online-service')


async function onlineServer (ctx, next) {
  let res = await onlineService.onlineServer(ctx, next)
  ctx.body = res
}

module.exports = {
  onlineServer
}
