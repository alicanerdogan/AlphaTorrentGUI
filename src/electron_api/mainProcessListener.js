import { ipcRenderer } from 'electron';
import showTorrent from './../actions/showTorrent';
import updateTorrentStatus from './../actions/updateTorrentStatus';

export default function(dispatcher) {
  ipcRenderer.on('torrent-opened', (event, torrent) => {
    dispatcher(showTorrent(torrent));
  });
  ipcRenderer.on('update-torrent', (event, torrentStatus) => {
    dispatcher(updateTorrentStatus(torrentStatus));
  });
} 