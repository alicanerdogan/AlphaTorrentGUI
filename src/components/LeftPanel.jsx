import React from 'react';
import CategoryList from './CategoryList.jsx';
import OpenTorrentButtonContainer from './../containers/OpenTorrentButtonContainer';

export default React.createClass({
  render: function() {
    return(
      <div className="left-panel">
        <CategoryList categories={this.props.categories} selectCategory={this.props.selectCategory}/>
        <OpenTorrentButtonContainer/>
      </div>
    );
  }
});
