const { app, BrowserView, BrowserWindow, ipcMain, nativeTheme } = require('electron/main')
const axios = require('axios');
const path = require('node:path')

let window;

function createWindow() {
  return new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true
    }
  })
}

function showMainWindow() {
    window.loadFile('src/index.html')
}


app.whenReady().then(() => {
  window = createWindow();
  showMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


// ----- IPC FUNCTIONS -----

ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
})