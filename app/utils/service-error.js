'use strict';

'use strict';


class ServiceError extends Error {
  constructor(options = {}) {
    super()
    const { message, response = {}, status, code } = options;
    this.message = message || '请求失败';
    this.status = status || 200;
    this.code = code || -1;
    // 返回数据使用
    this.response = response;
  }
}

module.exports = ServiceError