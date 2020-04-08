const router = require('koa-router')()
const contentController = require('../controller/content-controller')

router.get('/test', (ctx) => {
  ctx.body = {
    error_code: 0,
    message: '成功',
    data: {
      list: ['测试', 'test'],
      total: 2
    }
  }
})

// 获取内容列表
router.get('/content/list', contentController.list)


module.exports = router
