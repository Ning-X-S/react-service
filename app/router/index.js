const router = require('koa-router')()
const contentController = require('../controller/content-controller')
const onlineController = require('../controller/online-controller')
const thoughtworksController = require('../controller/thoughtworks-controller')

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


// 上线相关
router.get('/api/online', onlineController.onlineServer)


// thoughtworks相关
router.get('/api/agents', thoughtworksController.list)
router.post('/api/agents/update', thoughtworksController.update)
router.get('/api/agents/update', (ctx) => {
  ctx.body = {
    error_code: 4000121,
    message: '无效的请求',
    data: {}
  }
})
router.post('/api/agents/delete', thoughtworksController.deleteCont)
router.get('/api/agents/delete', (ctx) => {
  ctx.body = {
    error_code: 4000121,
    message: '无效的请求',
    data: {}
  }
})

module.exports = router
