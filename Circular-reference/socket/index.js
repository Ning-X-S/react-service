// const obj = require('../utils/utils')
// console.log('-----', obj)
let num = 0
exports.connectSocket = function () {
	if (num) {
		return false
	}
  num+= 1
  const { readConfigFile } = require('../utils/utils')
  console.log('bbbb', readConfigFile)
	readConfigFile()
}
