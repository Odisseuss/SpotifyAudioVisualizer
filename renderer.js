const { remote, desktopCapturer } = require("electron");
const BroserWindow = remote.BrowserWindow;
// console.log(browser);
console.log(desktopCapturer);

function initDashboard(dashboardWindow, electronWallpaper, attachMessage) {
  if (dashboardWindow) {
    return;
  }

  const windowProperties = {
    width: 1920,
    height: 1080,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      // plugins: true,
    },
  };

  dashboardWindow = new BroserWindow(windowProperties);
  // dashboardWindow.webContents.openDevTools();
  electronWallpaper.attachWindow(dashboardWindow);
  dashboardWindow.loadFile("./visualizer/index.html");

  // electronWallpaper.attachWindow(dashboardWindow);
  attachMessage.innerText =
    "Attached a window running dashboard.html to the desktop, the dashboard will be killed when you destroy this window. But the default behaviour is to let the window live.";
  return dashboardWindow;
}

function closeDashboard(dashboardWindow) {
  console.log(dashboardWindow);
  console.log("GOT HERE");
  if (dashboardWindow) {
    dashboardWindow.close();
    console.log("Closed window");

    dashboardWindow = null;
    attachMessage.innerText = "Killed the wallpaper window";
  }
  return dashboardWindow;
}

module.exports = {
  closeDashboard: closeDashboard,
  initDashboard: initDashboard,
};
