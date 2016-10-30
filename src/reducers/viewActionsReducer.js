import Immutable from 'immutable';
import { ADD_TORRENT } from './../actions/addTorrent';
import { UPDATE_TORRENT_STATUS } from './../actions/updateTorrentStatus';

const DEFAULT_STATE = Immutable.fromJS({
  torrents: {
    '00aabb': {
      hash: '00aabb',
      name: 'Iron Man 2',
      downloaded: 14,
      pieceCount: 20,
      size: 12003229,
      isDownloading: true
    },
    '00aacc': {
      hash: '00aacc',
      name: 'Last Week Tonight with John Oliver s03e23',
      downloaded: 3,
      pieceCount: 10,
      size: 12003229,
      isDownloading: false
    }
  },
  categories: [{
    name: 'All',
    count: 17
  },{
    name: 'Downloading',
    count: 2,
    active: true
  },
  {
    name: 'Completed',
    count: 15
  },
  {
    name: 'Paused',
    count: 0
  }]
});

export default function (state = DEFAULT_STATE, action) {
  if(!action) return state;
  switch (action.type) {
    case ADD_TORRENT:
      return state.updateIn(['torrents', action.torrent.hash], () => action.torrent);
    case UPDATE_TORRENT_STATUS:
      return state.updateIn(['torrents', action.status.hash], () => action.status);
    default:
      return state;
  }
}
