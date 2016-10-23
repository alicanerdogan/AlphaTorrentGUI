import React from 'react';
import WindowTitle from './../containers/WindowTitleContainer';
import WindowActions from './WindowActions.jsx';

export default React.createClass({
  render: function() {
    return(
      <header>
        <WindowTitle/>
        <WindowActions/>
      </header>
    );
  }
});
