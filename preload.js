const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
  toggleDark: () => ipcRenderer.invoke('dark-mode:toggle'),
  minimize: () => ipcRenderer.invoke('minimize'),
  maximize: () => ipcRenderer.invoke('maximize'),
  close: () => ipcRenderer.invoke('close'),
  loadSettings: () => ipcRenderer.invoke('changeWindow'),
});