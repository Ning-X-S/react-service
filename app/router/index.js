const router = require('koa-router')()
const contentController = require('../controller/content-controller')

router.get('/api/test', (ctx) => {
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
router.get('/api/content/list', contentController.list)
router.get('/api/content/detail', contentController.detail)
router.post('/api/content/create', contentController.create)
router.get('/api/content/create', (ctx) => {
  ctx.body = {
    error_code: 4000121,
    message: '无效的请求',
    data: {}
  }
})
router.post('/api/content/update', contentController.update)
router.get('/api/content/update', (ctx) => {
  ctx.body = {
    error_code: 4000121,
    message: '无效的请求',
    data: {}
  }
})
router.post('/api/content/delete', contentController.deleteCont)
router.get('/api/content/delete', (ctx) => {
  ctx.body = {
    error_code: 4000121,
    message: '无效的请求',
    data: {}
  }
})


module.exports = router
