import React from 'react';
import ProgressBar from './ProgressBar.jsx';

export default React.createClass({
  render: function () {
    const downloadPercentage = Math.floor((this.props.torrent.downloaded/this.props.torrent.pieceCount)*100);
    return (
      <div>
        <p>{this.props.torrent.name}</p>
        <ProgressBar percentage={downloadPercentage}/>
      </div>
    ); 
  }
});
