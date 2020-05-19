// const path = require('path')
// const { app, BrowserWindow } = require('electron')
const {readConfigFile} = require('./utils/utils')
// const adsad = require('./utils/utils')

console.log(readConfigFile)
readConfigFile()

const { promisify } = require('util')
const fs = require('fs')
const openFileAsync = promisify(fs.open);

(async() => {
  const res = await openFileAsync('./a', 'r+')
	console.log(res)
})();

// 引入主进程的事件处理
// require('./message/index')

// function createWindow() {
// 	// 创建浏览器窗口
// 	let win = new BrowserWindow({
// 		useContentSize: true,
// 		show: false, // 启动时避免白屏
// 		minHeight: 600,
// 		minWidth: 800,
// 		webPreferences: {
// 			nodeIntegration: true
// 		}
// 	})
// 	// 去掉菜单栏
// 	win.setMenu(null)
// 	// 窗口最大化
// 	win.maximize()

// 	// 加载窗口
// 	if (process.env.NODE_ENV === 'development') {
// 		win.loadURL('http://localhost:8003')
// 	} else {
// 		win.loadFile(path.resolve(__dirname, '../dist/index.html'))
// 	}

// 	// 打开开发者工具
// 	if (process.env.NODE_ENV === 'development') {
// 		win.webContents.openDevTools()
// 	}

// 	// 读取配置文件连接socket
// 	readConfigFile()

// 	win.on('closed', () => {
// 		win = null
// 	})
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // 部分 API 在 ready 事件触发后才能使用。
// app.whenReady().then(createWindow)

// // Quit when all windows are closed.
// app.on('window-all-closed', () => {
// 	// 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
// 	// 否则绝大部分应用及其菜单栏会保持激活。
// 	if (process.platform !== 'darwin') {
// 		app.quit()
// 	}
// })

// app.on('activate', () => {
// 	// 在macOS上，当单击dock图标并且没有其他窗口打开时，
// 	// 通常在应用程序中重新创建一个窗口。
// 	if (BrowserWindow.getAllWindows().length === 0) {
// 		createWindow()
// 	}
// })
