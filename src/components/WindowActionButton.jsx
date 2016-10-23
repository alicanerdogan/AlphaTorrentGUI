import React from 'react';

export const WindowActionButton = React.createClass({
  render: function() {
    return(<button type="button" className="btn btn-default" onClick={this.props.onClick}>{this.props.content}</button>);
  }
});

export const Minimize = React.createClass({
  render: function() {
    return (<WindowActionButton content="_" {...this.props}/>);
  }
});

export const Maximize = React.createClass({
  render: function() {
    return (<WindowActionButton content="☐" {...this.props}/>);
  }
});

export const Close = React.createClass({
  render: function() {
    return (<WindowActionButton content="✕" {...this.props}/>);
  }
});
