import React from 'react';
import LeftPanelContainer from './../containers/LeftPanelContainer';
import OpenTorrentButtonContainer from './../containers/OpenTorrentButtonContainer';
import TorrentListViewContainer from './../containers/TorrentListViewContainer';

export default React.createClass({
  render: function() {
    return(
      <div className="window-body">
        <LeftPanelContainer/>
        <div className="main-panel">
          <TorrentListViewContainer/>
          <OpenTorrentButtonContainer/>
        </div>
      </div>
    );
  }
});
