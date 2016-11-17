const {app, BrowserWindow, ipcMain} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win = null;

function createWindow() {
  win = new BrowserWindow({ frame: false, width: 1280, height: 768, transparent: true, icon: 'icon.png' });
  win.loadURL(`file://${__dirname}/index.html`);

  win.on('closed', () => {
    win = null;
  })
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.on('close-request', () => {
  app.quit();
});

ipcMain.on('minimize-request', () => {
  win.minimize();
});

ipcMain.on('maximize-request', () => {
  win.maximize();
});

const Torrent = require('alpha-torrent/lib/torrent');
const TorrentConnection = require('alpha-torrent/lib/torrentConnection');
const torrentConnections = [];
const torrents = {};

ipcMain.on('open-torrent', (event, filepath) => {
  const torrent = new Torrent.default(filepath);
  let torrentStatus = createTorrentStatus(torrent);
  torrents[torrentStatus.hash] = torrent;
  win.webContents.send('torrent-opened', torrentStatus);
});

ipcMain.on('start-torrent', (event, torrentStatus) => {
  const torrent = torrents[torrentStatus.hash];
  const torrentConnection = new TorrentConnection.default(torrent);
  const status = createTorrentStatus(torrent);
  status.pieceCount = torrentConnection.pieces.pieceCount;
  status.downloaded = torrentConnection.pieces.completed;
  torrentConnections.push({
    torrent: torrent,
    connection: torrentConnection
  });
  torrentConnection.start();
  const update = setInterval(function() {
    status.pieceCount = torrentConnection.pieces.pieceCount;
    status.downloaded = torrentConnection.pieces.completed;
    win.webContents.send('update-torrent', status);
  }, 2000);
  torrentConnection.on('downloaded', function() {
    clearInterval(update);
    status.pieceCount = torrentConnection.pieces.pieceCount;
    status.downloaded = torrentConnection.pieces.completed;
    win.webContents.send('update-torrent', status);
  });
});

function createTorrentStatus(torrent) {
  return {
    name: torrent.name,
    hash: torrent.hashSignature,
    files: torrent.files.concat([]),
    pieceCount: 0,
    downloaded: 0,
    size: torrent.size,
    sizeAsString: torrent.sizeAsString,
    isDownloading: true
  }
}

ipcMain.on('open-in-folder', (event, filepath) => {
  
});
