import Immutable from 'immutable';
import { MINIMIZE_WINDOW, MAXIMIZE_WINDOW, CLOSE_WINDOW } from './../actions/windowActions';
import { ipcRenderer } from 'electron';

const DEFAULT_STATE = Immutable.fromJS({
  name: 'AlphaTorrent',
  version: '0.1.0'
});

export default function (state = DEFAULT_STATE, action) {
  if(!action) return state;
  switch (action.type) {
    case CLOSE_WINDOW:
      ipcRenderer.send('close-request');
      break;
    case MINIMIZE_WINDOW:
      ipcRenderer.send('minimize-request');
      break;
    case MAXIMIZE_WINDOW:
      ipcRenderer.send('maximize-request');
      break;
    default:
      break;
  }
  return state;
}
