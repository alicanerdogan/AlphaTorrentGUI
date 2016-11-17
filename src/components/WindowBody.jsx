import React from 'react';
import LeftPanelContainer from './../containers/LeftPanelContainer';
import OpenTorrentButtonContainer from './../containers/OpenTorrentButtonContainer';
import TorrentListViewContainer from './../containers/TorrentListViewContainer';
import BottomPanelContainer from './../containers/BottomPanelContainer';

export default React.createClass({
  render: function() {
    return(
      <div className="window-body">
        <LeftPanelContainer/>
        <div className="main-panel">
          <TorrentListViewContainer/>
          <OpenTorrentButtonContainer/>
          <BottomPanelContainer/>
        </div>
      </div>
    );
  }
});
