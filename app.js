const { BrowserWindow } = xen;

const win = new BrowserWindow({
  width: 1200,
  height: 600,
  show: true,
  alwaysOnTop: false,
  frame: true,
  dragableClass: "dragable"
});

win.loadFile('/index.html');

win.on('openNewWindow', function(name, loc) {
  win.openNewWindow(name, loc)
})