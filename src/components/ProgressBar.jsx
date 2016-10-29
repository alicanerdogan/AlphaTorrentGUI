import React from 'react';

export default React.createClass({
  render: function() {
    const style = {
      width: this.props.percentage + "%"
    };
    return(
      <div className="progress">
        <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="{this.props.percentage}" aria-valuemin="0" aria-valuemax="100" style={style}>
        </div>
      </div>
    );
  }
});
