import Immutable from 'immutable';
import { OPEN_TORRENT } from './../actions/openTorrent';
import { OPEN_IN_FOLDER } from './../actions/openInFolder';
import { ipcRenderer } from 'electron';

const DEFAULT_STATE = Immutable.fromJS({});

export default function (state = DEFAULT_STATE, action) {
  if(!action) return state;
  switch (action.type) {
    case OPEN_TORRENT:
      ipcRenderer.send('open-torrent', action.filepath);
      break;
    case OPEN_IN_FOLDER:
      ipcRenderer.send('open-in-folder', action.filepath);
      break;
  }
  return state;
}
