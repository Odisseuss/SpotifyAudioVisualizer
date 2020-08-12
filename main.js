"use strict";

const { app, BrowserWindow } = require("electron");

let mainWindow;

/**
 * @summary Creates the main window
 * @function
 * @public
 *
 */
const createWindow = function () {
  const windowProperties = {
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      // plugins: true,
    },
  };

  mainWindow = new BrowserWindow(windowProperties);
  mainWindow.loadFile("index.html");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
