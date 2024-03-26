const { app, BrowserView, BrowserWindow, ipcMain, nativeTheme } = require('electron/main')
const axios = require('axios');
const path = require('node:path')

let window;
let currentView = null;

function createWindow() {
  return new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
}

function showMainWindow() {
    window.loadFile('src/index.html')
}

function changeGame(url) {
  if (currentView !== null) {
    window.setBrowserView(null);
    currentView = null;
  }

  const view = new BrowserView()
  window.setBrowserView(view)
  view.setBounds({ x: 50, y: 70, width: 900, height: 500 })
  view.setAutoResize({width: true, height: true})
  view.webContents.loadURL(url)

  currentView = view;
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

ipcMain.handle('changeGame', (event, url) => {
  changeGame(url)
})