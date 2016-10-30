import React from 'react';

export default React.createClass({
  render: function() {
    let categoryListItems = this.props.categories.map((category) => {
      return (<li className="list-group-item"><span className="badge">{category.count}</span>{category.name}</li>);
    });
    return(<ul className="list-group">{categoryListItems}</ul>);
  }
});
