const { connectSocket } = require('../socket/index')
exports.readConfigFile = function() {
  console.log('aaaa', connectSocket)
	connectSocket()
}
