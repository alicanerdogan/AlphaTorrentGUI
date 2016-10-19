import React from 'react';

export default React.createClass({
  render: function() {
    return (<button className="btn btn-primary" onClick={this.props.addTorrent}>Add Torrent</button>)
  }
});
