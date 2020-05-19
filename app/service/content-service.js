const Model = require('../model/index')
const ServiceError = require('../utils/service-error');

module.exports = {
  getList,
  getDetail,
  createContent,
  updateContent,
  deleteContent
}

// eslint-disable-next-line no-unused-vars
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
async function getDetail(ctx, next) {
  try {
    const { id = '' } = ctx.params    
    if (id) {
      const queryObj = {
        attributes: [ 'id', 'title', 'desc', 'created_at', 'updated_at' ],
        where: {
          id: id
        },
      };
      const res = await Model.Content.findOne(queryObj);
      if (res !== null) {
        return {
          error_code: 0,
          message: '获取信息成功',
          data: res.get()
        }
      } else {
        return {
          error_code: 0,
          message: '获取信息失败',
          data: {}
        }
      }
       
    } else {
      throw new ServiceError({ message: 'id不能为空', code: 4000017 })
    }
  } catch (err) {
    throw new ServiceError({ message: err.message, code: err.code })
  }
}


// eslint-disable-next-line no-unused-vars
async function createContent(ctx, next) {
  try {
    const { title = "", desc = ""  } = ctx.params
    if (!title) {
      throw new ServiceError({ message: '标题不能为空', code: 4000018 })
    }
    if (!desc) {
      throw new ServiceError({ message: '正文不能为空', code: 4000018 })
    }
    let res = await Model.Content.create({
      title,
      desc
    })
    if (res !== null) {
      return {
        error_code: 0,
        data: res.get(),
        message: '创建成功'
      }
    } else {
      return {
        error_code: 4000020,
        data: {},
        message: '创建失败'
      }
    }
  } catch (err) {
    throw new ServiceError({ message: err.message, code: err.code })
  }
}

// eslint-disable-next-line no-unused-vars
async function updateContent(ctx, next) {
  try {
    const { id = "", title = "", desc = ""  } = ctx.params
    if (!id) {
      throw new ServiceError({ message: 'id不能为空', code: 4000018 })
    }
    if (!title) {
      throw new ServiceError({ message: '标题不能为空', code: 4000018 })
    }
    if (!desc) {
      throw new ServiceError({ message: '正文不能为空', code: 4000018 })
    }
    let res = await Model.Content.update({
      title,
      desc
    }, {
      where:{
      id: id
    }})
    console.log(res)
    if (res !== null) {
      return {
        error_code: 0,
        data: {
          id,
          title,
          desc
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
    let res = Model.Content.destroy({
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