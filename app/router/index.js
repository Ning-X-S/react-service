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

// 内容相关
router.get('/content/list', contentController.list)
router.get('/content/detail', contentController.detail)
router.post('/content/create', contentController.create)
router.get('/content/create', (ctx) => {
  ctx.body = {
    error_code: 4000121,
    message: '无效的请求',
    data: {}
  }
})
router.post('/content/update', contentController.update)
router.get('/content/update', (ctx) => {
  ctx.body = {
    error_code: 4000121,
    message: '无效的请求',
    data: {}
  }
})
router.post('/content/delete', contentController.deleteCont)
router.get('/content/delete', (ctx) => {
  ctx.body = {
    error_code: 4000121,
    message: '无效的请求',
    data: {}
  }
})


module.exports = router
