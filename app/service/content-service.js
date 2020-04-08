const Model = require('../model/index')
const ServiceError = require('../utils/service-error');

module.exports = {
  getList
}

async function getList (ctx, next) {
  try {
    const { page = 1, size: limit = 10, id = null } = ctx.query;
    const queryObj = {
      attributes: [ 'id', 'title', 'desc' ],
      offset: limit * (page - 1),
      limit: parseInt(limit),
      where: {},
    };
    if (id) {
      queryObj.where.id = id.split(',');
    }
    const res = await Model.Content.findAndCountAll(queryObj);
    if (res !== null) {
      let list = []
      res.rows.map((item) => {
        let obj = item.get()
        list.push(obj)
      })
      return {
        error_code: 0,
        message: '请求成功',
        data: {
          list: list,
          total: res.count,
          page: page,
          size: limit
        } 
      }
    } else {
      return {
        error_code: 0,
        message: '请求成功',
        data: {
          list: [],
          total: 0,
          page: page,
          size: limit
        }
      }
    }
  } catch (err) {
    throw new ServiceError({ message: '请求错误', code: 4000001 })
  }
}