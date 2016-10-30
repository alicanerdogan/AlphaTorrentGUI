import React from 'react';
import CategoryList from './CategoryList.jsx';

export default React.createClass({
  render: function() {
    return(<div className="left-panel"><CategoryList categories={this.props.categories}/></div>);
  }
});
