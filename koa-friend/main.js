const {app, BrowserWindow} = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
  })

  win.loadFile('index.html')

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