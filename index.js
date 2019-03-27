const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    let win = new BrowserWindow({ width: 800, height: 800 })
    win.loadFile('./mainapp/dist/mainapp/index.html')
    win.webContents.openDevTools()
})