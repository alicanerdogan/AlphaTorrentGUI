import addTorrent from './addTorrent';
import { type } from './addTorrent';

test('Verifies addTorrent action', () => {
  let torrent = { name: 'ubuntu1404' };

  let action = addTorrent(torrent);
  expect(action.type).toBe(type);
  expect(action.torrent).toBe(torrent);
});
