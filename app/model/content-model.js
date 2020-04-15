module.exports = (sequelize, dataTypes) => {
  let Content = sequelize.define('Content', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER
    },
    title: {
      type: dataTypes.TEXT
    },
    desc: {
      type: dataTypes.TEXT
    }
  }, {
    tableName: 'content_table',
    timestamps: false // 必须加上，不然会多查询 createdAt 和 updatedAt 列
  })
  return Content
}