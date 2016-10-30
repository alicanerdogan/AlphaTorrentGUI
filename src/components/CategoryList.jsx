import React from 'react';

export default React.createClass({
  render: function() {
    let categoryListItems = this.props.categories.map((category) => {
      let className = 'list-group-item ';
      if(category.active) {
        className += 'active';
      }
      return (<a className={className}><span className="badge">{category.count}</span>{category.name}</a>);
    });
    return(<div className="list-group">{categoryListItems}</div>);
  }
});
