import viewActionsReducer from './viewActionsReducer';
import addTorrent from './../actions/addTorrent';

test('Verifies initial state', () => {
  const alteredState = viewActionsReducer();

  expect(alteredState.toJS()).toEqual({torrents: [], name: 'AlphaTorrent', version: '0.1.0'})
});

test('Verifies addTorrent action state reduction', () => {
  let torrent = { name: 'ubuntu1404' };
  let action = addTorrent(torrent);

  const alteredState = viewActionsReducer(undefined, action);
  expect(alteredState.toJS().torrents).toEqual([torrent]);
});
