import React from 'react';
import AddTorrentButtonContainer from './../containers/AddTorrentButtonContainer';
import OpenTorrentButtonContainer from './../containers/OpenTorrentButtonContainer';
import TorrentListViewContainer from './../containers/TorrentListViewContainer';

export default React.createClass({
  render: function() {
    return(
      <div className="window-body">
        <TorrentListViewContainer/>
        <AddTorrentButtonContainer/>
        <OpenTorrentButtonContainer/>
      </div>
    );
  }
});
