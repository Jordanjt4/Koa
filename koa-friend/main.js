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

  // controls z order, 'screen-saver' is the highest level, above all other windows
  win.setAlwaysOnTop(true, 'screen-saver')

  // macOS specific
  // allows the window to be visible on all workspaces, including full screen ones
  win.setVisibleOnAllWorkspaces(true, {
    visibleOnFullScreen: true,
  })
}

app.whenReady().then(() => {
  createWindow()
})