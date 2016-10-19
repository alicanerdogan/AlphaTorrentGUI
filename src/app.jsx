// main.js
import './app.scss';
import 'jquery';
import 'bootstrap-sass';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';

const TorrentListView = React.createClass({
  render: function () { return (<div><h1>Torrent</h1><p>{this.props.name}</p></div>); }
});

const TorrentListViewWrapper = React.createClass({
  render: function () {
    let torrentListViews = this.props.torrents.map((torrent) => {
      return (<TorrentListView name={torrent.name}/>);
    });
    return (<div>{torrentListViews}</div>);
  }
});

const AddTorrentButton = React.createClass({
  render: function() {
    return (<button className="btn btn-primary" onClick={this.props.addTorrent}>Add Torrent</button>)
  }
});

const ADD_TORRENT = 'ADD_TORRENT';
function addTorrent(torrent) {
  return {
    type: ADD_TORRENT,
    torrent
  };
}

function viewActionsReducer(state = {torrents: []}, action) {
  switch (action.type) {
    case ADD_TORRENT:
      return {
        torrents: state.torrents.concat([action.torrent])
      }
    default:
      return state;
  }
}

let store = createStore(viewActionsReducer);

const mapStateToProps = function(state) {
  return {
    torrents: state.torrents
  };
};

const TorrentListViewContainer = connect(mapStateToProps)(TorrentListViewWrapper);

const mapDispatchToProps = function(dispatch) {
  return {
    addTorrent: function() {
      dispatch(addTorrent({ name: 'Harry Potter and The Cursed Child' }))
    }
  };
};

const AddTorrentButtonContainer = connect(null, mapDispatchToProps)(AddTorrentButton);

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
