import React from 'react';

export const WindowActionButton = React.createClass({
  render: function() {
    return(<button type="button" className="btn btn-primary" onClick={this.props.onClick}>{this.props.children}</button>);
  }
});

export const Minimize = React.createClass({
  render: function() {
    return (<WindowActionButton {...this.props}><i className="fa fa-window-minimize" aria-hidden="true"></i></WindowActionButton>);
  }
});

export const Maximize = React.createClass({
  render: function() {
    return (<WindowActionButton {...this.props}><i className="fa fa-window-maximize" aria-hidden="true"></i></WindowActionButton>);
  }
});

export const Close = React.createClass({
  render: function() {
    return (<WindowActionButton {...this.props}><i className="fa fa-times" aria-hidden="true"></i></WindowActionButton>);
  }
});
