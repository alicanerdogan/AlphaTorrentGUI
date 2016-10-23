import Immutable from 'immutable';
import { type as addTorrentType } from './../actions/addTorrent';

const DEFAULT_STATE = Immutable.fromJS({
  torrents: []
});

export default function (state = DEFAULT_STATE, action) {
  if(!action) return state;
  switch (action.type) {
    case addTorrentType:
      return state.updateIn(['torrents'], list => list.push(action.torrent));
    default:
      return state;
  }
}
