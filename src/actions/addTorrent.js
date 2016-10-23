export const ADD_TORRENT = 'ADD_TORRENT';

export default function (torrent) {
  return {
    type: ADD_TORRENT,
    torrent
  };
}
