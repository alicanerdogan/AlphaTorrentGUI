export const SHOW_TORRENT = 'SHOW_TORRENT';

export default function (torrent) {
  return {
    type: SHOW_TORRENT,
    torrent
  };
}
