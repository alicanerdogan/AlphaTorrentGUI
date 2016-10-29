import { ipcRenderer } from 'electron';
import addTorrent from './../actions/addTorrent';
import updateTorrentStatus from './../actions/updateTorrentStatus';

export default function(dispatcher) {
  ipcRenderer.once('torrent-opened', (event, torrent) => {
    console.log(torrent);
    dispatcher(addTorrent(torrent));
  });
  ipcRenderer.on('update-torrent', (event, torrentStatus) => {
    console.log(torrentStatus);
    dispatcher(updateTorrentStatus(torrentStatus));
  });
} 