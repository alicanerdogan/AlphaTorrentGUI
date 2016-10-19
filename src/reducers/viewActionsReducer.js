import { type as addTorrentType } from './../actions/addTorrent';

export default function (state = {torrents: []}, action) {
  switch (action.type) {
    case addTorrentType:
      return {
        torrents: state.torrents.concat([action.torrent])
      }
    default:
      return state;
  }
}
