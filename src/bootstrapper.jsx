import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import viewActionsReducer from './reducers/viewActionsReducer';
let store = createStore(viewActionsReducer);

import AddTorrentButtonContainer from './containers/AddTorrentButtonContainer';
import TorrentListViewContainer from './containers/TorrentListViewContainer';

const App = React.createClass({
  render: function() {
    return (<div><TorrentListViewContainer/><AddTorrentButtonContainer/></div>);
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('content')
);
