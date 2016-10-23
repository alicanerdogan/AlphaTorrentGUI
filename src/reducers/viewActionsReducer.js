import Immutable from 'immutable';
import { ADD_TORRENT } from './../actions/addTorrent';
import { MINIMIZE_WINDOW, MAXIMIZE_WINDOW, CLOSE_WINDOW } from './../actions/windowActions';
import { ipcRenderer } from 'electron';

const DEFAULT_STATE = Immutable.fromJS({
  name: 'AlphaTorrent',
  version: '0.1.0',
  torrents: []
});

export default function (state = DEFAULT_STATE, action) {
  if(!action) return state;
  switch (action.type) {
    case ADD_TORRENT:
      return state.updateIn(['torrents'], list => list.push(action.torrent));
    case CLOSE_WINDOW:
      ipcRenderer.send('close-request');
      return state;
    case MINIMIZE_WINDOW:
    case MAXIMIZE_WINDOW:
    default:
      return state;
  }
}
