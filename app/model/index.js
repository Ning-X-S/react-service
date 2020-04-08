const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/sql')
const sqlConfig = config.sql || {}

const basename = path.basename(__filename)
let db = {}

let sequelizeConfig = {
  dialect: 'mysql',
  host: sqlConfig.host,
  port: sqlConfig.port,
  pool: {
    max: 100, // 最大值
    idle: 5000, // 闲时超时
    acquire: 10000
  },
  dialectOptions: {
    dateStrings: true, // 日期字符串（配合类型转换使用）
    typeCast: true // 类型转换
  },
  timezone: '+08:00'
}

let sequelize = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, sequelizeConfig)

sequelize.query = function () {
  return Sequelize.prototype.query.apply(this, arguments).catch(function (err) {
    console.log(err)
  })
}

fs.readdirSync(__dirname)
  .filter(file => {
    // 过滤 . .. 和本文件
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    // 加载模块
    let model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

// 绑定 Model 之间的关联关系（如果 model 中定义了 associate 属性）
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

// let model = sequelize['import'](path.join(__dirname, './content-model.js'))
// db[model.name] = model

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

