export const type = 'ADD_TORRENT';

export default function (torrent) {
  return {
    type: type,
    torrent
  };
}
