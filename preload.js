const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
  toggleDark: () => ipcRenderer.invoke('dark-mode:toggle'),
  changeGame: (url) => ipcRenderer.invoke('changeGame', url)
});