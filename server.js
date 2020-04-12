const Koa = require('koa')
const bodyParser = require('koa-body')
const path = require('path')
const fs = require('fs')

const router = require('./app/router')
const errorCollector = require('./app/middleware/error-collector')
const headerHandler = require('./app/middleware/header-handler')
const globalConfigInjector = require('./app/middleware/global-injector')
const params = require('./app/middleware/params')
const config = require('./config')
const port = config.port || 7002

const STATIC = path.resolve('./static')
const HTML_404 = fs.readFileSync(path.resolve('./404.html'), 'utf-8')

const globalConfig = {
  STATIC: STATIC,
  HTML_404: HTML_404
}

// const Raven = require('./app/utils/raven')

const app = new Koa()

app.use(headerHandler())
app.use(globalConfigInjector(globalConfig))
app.use(errorCollector())
app.use(bodyParser({ multipart: true }))
app.use(params())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(port)
console.log(`http://127.0.0.1:${port}`)

app.on('error', function (err) {
    console.log(err)
//   Raven.captureException(err)
})
