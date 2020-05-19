/**
 * 主进程与渲染进程消息通信
 */

const { ipcMain } = require('electron')
const { spawn } = require('child_process')

// 打开桌面
ipcMain.on('open-desktop', (event, arg) => {
	let remoteViewerPath = process.env.NODE_ENV === 'development' ? 'public\\remote-viewer\\exe' : 'resources\\public\\remote-viewer\\exe'
	let opt = {
		stdio: 'ignore',
		detached: true,
		foreground: true,
		cwd: remoteViewerPath
	}
	console.log('startRemoteView')
	let desktop = spawn('remote-viewer.exe', ['spice://10.221.120.11:5907', '-f'], opt)
	setTimeout(() => {
		spawn('cmd.exe', ['/c', 'taskkill', '/pid', desktop.pid, '-f'])
	}, 2000)
})
