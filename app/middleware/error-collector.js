// const Raven = require('../utils/raven')
// const env = process.env.NODE_ENV

module.exports = function () {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      // Raven.captureException(err, {
      //   level: env === 'development' ? 'warning' : 'error'
      // })
      let { message } = err
      ctx.status = 400
      ctx.body = {
        'error_code': 400004,
        'message': message || '请求出错',
        'data': {}
      }
    }
  }
}
