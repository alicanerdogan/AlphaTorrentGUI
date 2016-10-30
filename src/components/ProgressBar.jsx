import React from 'react';

export default React.createClass({
  render: function() {
    let className = 'progress-bar';
    if(this.props.active) {
      className += ' progress-bar-striped active';
    }
    const style = {
      width: this.props.percentage + '%'
    };
    return(
      <div className="progress">
        <div className={className} role="progressbar" aria-valuenow="{this.props.percentage}" aria-valuemin="0" aria-valuemax="100" style={style}>
          <p>{this.props.percentage}%</p>
        </div>
      </div>
    );
  }
});
