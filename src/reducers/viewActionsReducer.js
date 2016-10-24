import Immutable from 'immutable';
import { ADD_TORRENT } from './../actions/addTorrent';

const DEFAULT_STATE = Immutable.fromJS({
  torrents: []
});

export default function (state = DEFAULT_STATE, action) {
  if(!action) return state;
  switch (action.type) {
    case ADD_TORRENT:
      return state.updateIn(['torrents'], list => list.push(action.torrent));
    default:
      return state;
  }
}
