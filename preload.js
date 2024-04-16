const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
  toggleDark: () => ipcRenderer.invoke('dark-mode:toggle'),
  minimize: () => ipcRenderer.invoke('minimize'),
  maximize: () => ipcRenderer.invoke('maximize'),
  close: () => ipcRenderer.invoke('close'),
  saveGame: (data) => ipcRenderer.invoke('saveGame', data),
  loadGames: () => ipcRenderer.invoke('loadGames'),
});