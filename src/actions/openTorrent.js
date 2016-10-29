export const OPEN_TORRENT = 'OPEN_TORRENT';

export default function (filepath) {
  return {
    type: OPEN_TORRENT,
    filepath
  };
}
