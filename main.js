const { app, BrowserWindow, ipcMain, nativeTheme, session } = require('electron/main')
const path = require('node:path')
const { ElectronBlocker } = require('@cliqz/adblocker-electron')
const { fetch } = require('cross-fetch')
const fs = require('fs')

let window;

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
  window.minimize();
})

ipcMain.handle('maximize', () => {
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  };
})

ipcMain.handle('close', () => {
  window.close();
})

ipcMain.handle('saveGame', (event, data) => {
  fs.writeFile('AddedGames.txt', data, {flag: "a"}, (err) => {
    if (err) throw err;
    else {
      console.log("Game has been saved")
    }
  })
})

ipcMain.handle('loadGames', () => {
  return new Promise((resolve, reject) => {
    fs.readFile('AddedGames.txt', "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      const values = data.split(',');
      const games = [];
      for (let i = 0; i < values.length / 2; i = i + 2) {
        const game = [values[i], values[i + 1]];
        games.push(game);
      }
      console.log(games[0][0])
      resolve(games);
  })
  })
})