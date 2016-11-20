import React from 'react';
import LeftPanelContainer from './../containers/LeftPanelContainer';
import TorrentListViewContainer from './../containers/TorrentListViewContainer';
import BottomPanelContainer from './../containers/BottomPanelContainer';

export default React.createClass({
  render: function() {
    return(
      <div className="window-body">
        <LeftPanelContainer/>
        <div className="main-panel">
          <TorrentListViewContainer/>
          <BottomPanelContainer/>
        </div>
      </div>
    );
  }
});
