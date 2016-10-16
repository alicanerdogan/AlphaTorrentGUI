// main.js
import React from 'react';
import ReactDOM from 'react-dom';

const TorrentListView = React.createClass({
  render: function () { return (<div><h1>Torrent</h1><p>{this.props.name}</p></div>); }
});

const TorrentListViewContainer = React.createClass({
  getInitialState: () => { return { torrents: [ { name: 'Harry Potter and The Cursed Child' } ] }; },
  render: function () {
    let torrentListViews = this.state.torrents.map((torrent) => {
      return (<TorrentListView name={torrent.name}/>);
    });
    return (<div>{torrentListViews}</div>);
  }
});

const AddTorrentButton = React.createClass({
  handleClick: function() {
    alert('Are you there?');
  },
  render: function() {
    return (<button onClick={this.handleClick}>Add Torrent</button>)
  }
});


ReactDOM.render(
  <div>
    <TorrentListViewContainer/>
    <AddTorrentButton/>
  </div>
  ,
  document.getElementById('content')
);
