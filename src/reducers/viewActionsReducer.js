import Immutable from 'immutable';
import { ADD_TORRENT } from './../actions/addTorrent';
import { SHOW_TORRENT } from './../actions/showTorrent';
import { CANCEL_TORRENT } from './../actions/cancelTorrent';
import { UPDATE_TORRENT_STATUS } from './../actions/updateTorrentStatus';
import { SELECT_CATEGORY } from './../actions/selectCategory';
import { ipcRenderer } from 'electron';

const DEFAULT_STATE = Immutable.fromJS({
  torrents: {
    '00aabb': {
      hash: '00aabb',
      name: 'Iron Man 2',
      downloaded: 14,
      pieceCount: 20,
      size: 12003229,
      isDownloading: false,
      isCompleted: true,
      isPaused: false,
      subcategory: null
    },
    '00aacc': {
      hash: '00aacc',
      name: 'Last Week Tonight with John Oliver s03e23',
      downloaded: 3,
      pieceCount: 10,
      size: 12003229,
      isDownloading: true,
      isCompleted: false,
      isPaused: false,
      subcategory: null
    },
    '00aaff': {
      hash: '00aacc',
      name: 'Westworld s01e05',
      downloaded: 3,
      pieceCount: 10,
      size: 12003229,
      isDownloading: false,
      isCompleted: false,
      isPaused: true,
      subcategory: null
    }
  },
  categories: [{
    name: 'All'
  },
  {
    name: 'Downloading'
  },
  {
    name: 'Completed'
  },
  {
    name: 'Paused'
  },
  {
    name: 'TV'
  },
  {
    name: 'Movies'
  },
  {
    name: 'Games'
  }],
  selectedCategory: 'Downloading',
  bottomPanel: {
    isEnabled: false,
    torrent: null
  }
});

export default function (state = DEFAULT_STATE, action) {
  if(!action) return state;
  switch (action.type) {
    case ADD_TORRENT:
      ipcRenderer.send('start-torrent', action.torrent);
      state = state.updateIn(['torrents', action.torrent.hash], () => action.torrent);
      return state.set('bottomPanel', {isEnabled: false, torrent: null});
    case SHOW_TORRENT:
      return state.set('bottomPanel', {isEnabled: true, torrent: action.torrent});
    case CANCEL_TORRENT:
      return state.set('bottomPanel', {isEnabled: false, torrent: null});
    case UPDATE_TORRENT_STATUS:
      return state.updateIn(['torrents', action.status.hash], () => action.status);
    case SELECT_CATEGORY:
      return state.set('selectedCategory', action.category);
    default:
      return state;
  }
}
