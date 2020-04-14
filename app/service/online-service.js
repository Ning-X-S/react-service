const ServiceError = require('../utils/service-error');
const config = require('../../config')
const exec = require('child_process').exec;
const { promisify } = require('util')
const execSyncNew = promisify(exec)
let isPacking = false



async function onlineServer (ctx, next) {
  let cwd = process.cwd()
  let { password = '', name = '', type = 'restart', update_modules = "update_code" } = ctx.params
  if (isPacking) {
    throw new ServiceError({ message: '任务正在进行中', code: 400765 })
  }
  if (!name) {
    throw new ServiceError({ message: '项目名称不能为空', code: 4000018 })
  }
  if (!config.online[name]) {
    throw new ServiceError({ message: '任务查询失败', code: 4000503 })
  }
  if (config.online[name].password !== password) {
    throw new ServiceError({ message: '密码错误', code: 4000502 })
  }
  isPacking = true
  try {
    process.chdir(config.online[name].pwd)
  } catch (err) {
    isPacking = false
    throw new ServiceError({ message: JSON.stringify(err), code: 400765 })
  }
  try {
    process.nextTick(async () => {
      let res = await execSyncNew(`python3 ${config.online[name].python}.py ${type} ${update_modules}`)
      isPacking = false
      console.log(res)
    })
    return {
      error_code: 0,
      data: {
        cwd
      },
      message: '任务触发成功'
    }
  } catch (err) {
    isPacking = false
    throw new ServiceError({ message: err, code: err.code })
  }
} 

module.exports = {
  onlineServer
}