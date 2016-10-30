import React from 'react';

const TorrentAction = React.createClass({
  render: function() {
    return(
      <button className="btn btn-primary torrent-action">{this.props.children}</button>
    );
  }
});

export default React.createClass({
  render: function() {
    return(
      <div className="torrent-actions">
        <TorrentAction><i className="fa fa-pause" aria-hidden="true"></i></TorrentAction>
        <TorrentAction><i className="fa fa-stop" aria-hidden="true"></i></TorrentAction>
        <div className="btn-group">
  <button type="button" className="btn btn-primary torrent-action dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" className="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
      </div>
    );
  }
});
