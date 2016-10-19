import React from 'react';
import TorrentListView from './TorrentListView.jsx';

export default React.createClass({
  render: function () {
    let torrentListViews = this.props.torrents.map((torrent) => {
      return (<TorrentListView name={torrent.name}/>);
    });
    return (<div>{torrentListViews}</div>);
  }
});
