module.exports = (sequelize, dataTypes) => {
  let Content = sequelize.define('Thoughtworks', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER
    },
    ip: {
      type: dataTypes.TEXT
    },
    location: {
      type: dataTypes.TEXT
    },
    name: {
      type: dataTypes.TEXT
    },
    os: {
      type: dataTypes.TEXT
    },
    status: {
      type: dataTypes.TEXT
    },
    type: {
      type: dataTypes.TEXT
    },
    resources: {
      type: dataTypes.TEXT
    }
  }, {
    tableName: 'thoughtworks',
    timestamps: false // 必须加上，不然会多查询 createdAt 和 updatedAt 列
  })
  return Content
}