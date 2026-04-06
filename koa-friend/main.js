const {app, BrowserWindow} = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 100,
    height: 100,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
        contextIsolation: true  
    }
  })

  win.loadFile('index.html')
  win.setIgnoreMouseEvents(false)
}

app.whenReady().then(() => {
  createWindow()
})