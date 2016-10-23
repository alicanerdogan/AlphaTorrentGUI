import addTorrent from './addTorrent';
import { ADD_TORRENT } from './addTorrent';

test('Verifies addTorrent action', () => {
  let torrent = { name: 'ubuntu1404' };

  let action = addTorrent(torrent);
  expect(action.type).toBe(ADD_TORRENT);
  expect(action.torrent).toBe(torrent);
});
