const { app, BrowserWindow, Menu, MenuItem } = require("electron");
const path = require("node:path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth: 650,
    webPreferences: {
      nodeIntegration: true,
      contentSecurityPolicy: "default-src 'self';",
    },
  });
  // Set the application icon for Windows
  if (process.platform === "win32") {
    win.setIcon(path.join(__dirname, "assets/icons/current.ico"));
  }

  // Set the application icon for macOS
  if (process.platform === "darwin") {
    app.dock.setIcon(path.join(__dirname, "assets/images/current.png"));
  }

  // Set the application icon for Linux
  if (process.platform === "linux") {
   
    win.setIcon(path.join(__dirname, "assets/images/current.png"));
  }
  win.removeMenu();
  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
