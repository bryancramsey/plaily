const { app, BrowserWindow, ipcMain, nativeTheme, session } = require('electron/main')
const path = require('node:path')
const { ElectronBlocker } = require('@cliqz/adblocker-electron')
const { fetch } = require('cross-fetch')
const Store = require('electron-store');

let window;
const store = new Store();

// Enable adblocking functionality for the session
ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
  blocker.enableBlockingInSession(session.defaultSession);
});

// Create and configure window
function createWindow() {
  return new BrowserWindow({
    minWidth: 1000,
    minHeight: 600,
    width: 1000,
    height: 600,
    frame: false,
    icon: './src/icons/pnglogo.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true
    }
  })
}

function minimizeWindow() {
  window.minimize();
}

function closeWindow() {
  window.close();
}

function maximizeWindow() {
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  };
}

app.whenReady().then(() => {
  window = createWindow();
  window.loadFile('src/index.html');

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

ipcMain.handle('minimize', () => {
  minimizeWindow();
})

ipcMain.handle('maximize', () => {
  maximizeWindow();
})

ipcMain.handle('close', () => {
  closeWindow();
})