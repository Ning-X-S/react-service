const Model = require('../model/index')
const ServiceError = require('../utils/service-error');

module.exports = {
  getList,
  updateContent,
  deleteContent
}

// eslint-disable-next-line no-unused-vars
async function getList (ctx, next) {
  try {
    const { page = 1, size: limit = 5, id = null } = ctx.query;
    const queryObj = {
      attributes: [ 'id', 'ip', 'location', 'name', 'status', 'type', 'resources' ],
      offset: limit * (page - 1),
      limit: parseInt(limit),
      where: {},
    };
    if (id) {
      queryObj.where.id = id.split(',');
    }
    const res = await Model.Thoughtworks.findAndCountAll(queryObj);
    if (res !== null) {
      let list = []
      res.rows.map((item) => {
        let obj = item.get()
        obj.resources = obj.resources.split(',')
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
        message: '请求失败',
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




// eslint-disable-next-line no-unused-vars
async function updateContent(ctx, next) {
  try {
    const { id = "", resources = ""  } = ctx.params
    if (!id) {
      throw new ServiceError({ message: 'id不能为空', code: 4000018 })
    }
    if (!resources) {
      throw new ServiceError({ message: 'resources不能为空', code: 4000018 })
    }
    let res = await Model.Thoughtworks.update({
      resources
    }, {
      where:{
      id: id
    }})
    console.log(res)
    if (res !== null) {
      return {
        error_code: 0,
        data: {
          id
        },
        message: '修改成功'
      }
    } else {
      return {
        error_code: 4000020,
        data: {},
        message: '修改失败'
      }
    }
  } catch (err) {
    throw new ServiceError({ message: err.message, code: err.code })
  }
}

// eslint-disable-next-line no-unused-vars
async function deleteContent(ctx, next) {
  try {
    const { id = "" } = ctx.params
    if (!id) {
      throw new ServiceError({ message: 'id不能为空', code: 4000018 })
    }
    let res = Model.Thoughtworks.destroy({
      where: {
        id
      }
    })
    if (res !== null) {
      return {
        error_code: 0,
        data: {
          id
        },
        message: '删除成功'
      }
    } else {
      return {
        error_code: 4000020,
        data: {},
        message: '删除失败'
      }
    }
  } catch (err) {
    throw new ServiceError({ message: err.message, code: err.code })
  }
}