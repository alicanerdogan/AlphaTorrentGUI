import React from 'react';
import { MaximizeButton, MinimizeButton, CloseButton } from './../containers/WindowActionButtonContainer';

export default React.createClass({
  render: function() {
    return(
      <div className="actions">
        <MinimizeButton/>
        <MaximizeButton/>
        <CloseButton/>
			</div>
    );
  }
});
