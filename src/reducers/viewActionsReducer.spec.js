import viewActionsReducer from './viewActionsReducer';
import addTorrent from './../actions/addTorrent';

test('Verifies initial state', () => {
  const alteredState = viewActionsReducer();

  expect(alteredState.toJS()).toEqual({torrents: []})
});

test('Verifies addTorrent action state reduction', () => {
  let torrent = { name: 'ubuntu1404' };
  let action = addTorrent(torrent);

  const alteredState = viewActionsReducer(undefined, action);
  expect(alteredState.toJS()).toEqual({torrents: [torrent]})
});
