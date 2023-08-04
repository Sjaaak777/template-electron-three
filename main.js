const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname);

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
