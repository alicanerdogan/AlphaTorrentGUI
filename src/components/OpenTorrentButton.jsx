import React from 'react';

export default React.createClass({
  render: function() {
    return(
      <button className="btn btn-primary btn-lg btn-block" id="add-torrent" onClick={this.props.openTorrent}>
        <p><span className="icon">+</span><span className="text">Add Torrent</span></p>
      </button>);
  }
});
