const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
  toggleDark: () => ipcRenderer.invoke('dark-mode:toggle')
});