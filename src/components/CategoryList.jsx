import React from 'react';

export default React.createClass({
  render: function() {
    let categoryListItems = this.props.categories.map((category) => {
      let className = 'list-group-item ';
      if(category.active) {
        className += 'active';
      }
      let selectCategory = () => this.props.selectCategory(category.name);
      return (<a className={className} onClick={selectCategory}><span className="badge">{category.count}</span>{category.name}</a>);
    });
    return(<div className="list-group">{categoryListItems}</div>);
  }
});
