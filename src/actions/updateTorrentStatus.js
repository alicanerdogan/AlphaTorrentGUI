export const UPDATE_TORRENT_STATUS = 'UPDATE_TORRENT_STATUS';

export default function (status) {
  return {
    type: UPDATE_TORRENT_STATUS,
    status
  };
}
