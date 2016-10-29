import { remote } from 'electron';

export default function () {
  return remote.dialog.showOpenDialog(
    {
      properties: ['openFile'],
        filters: [{
          name: 'Torrent',
          extensions: ['torrent']
        }]
    });
}
