import React from 'react';
import ProgressBar from './ProgressBar.jsx';
import TorrentActions from './TorrentActions.jsx';

export default React.createClass({
  render: function () {
    const downloadPercentage = Math.floor((this.props.torrent.downloaded/this.props.torrent.pieceCount)*100);
    return (
      <div className="torrent-list-view-item">
        <p>{this.props.torrent.name}</p>
        <TorrentActions/>
        <ProgressBar percentage={downloadPercentage}/>
      </div>
    ); 
  }
});
