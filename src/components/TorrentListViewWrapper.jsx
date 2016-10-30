import React from 'react';
import TorrentListView from './TorrentListView.jsx';

export default React.createClass({
  render: function () {
    let torrentListViews = this.props.torrents.map((torrent) => {
      return (<TorrentListView torrent={torrent}/>);
    });
    return (<div className="torrent-list-view">{torrentListViews}</div>);
  }
});
