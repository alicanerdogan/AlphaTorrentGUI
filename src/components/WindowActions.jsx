import React from 'react';
import { MaximizeButton, MinimizeButton, CloseButton } from './../containers/WindowActionButtonContainer';

export default React.createClass({
  render: function() {
    return(
      <div className="btn-group btn-group-xs actions" role="group">
        <MinimizeButton/>
        <MaximizeButton/>
        <CloseButton/>
			</div>
    );
  }
});
