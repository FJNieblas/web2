import { app, BrowserWindow } from 'electron';
import {main} from "@angular/compiler-cli/src/main";

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
})
