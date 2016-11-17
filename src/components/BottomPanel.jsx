import React from 'react';

export default React.createClass({
  render: function() {
    if(this.props.isEnabled) {
      let add = () => this.props.add(this.props.torrent);
      let files = this.props.torrent.files.map((fileName) => {
        return (<tr><td><input type="checkbox" checked/><label>{fileName}</label></td></tr>);
      });
      return(
        <div className="bottom-panel">
          <div className="row">
            <div className="col-xs-6">
              <table className="table">
                <tbody>
                <tr>
                  <th>Name</th>
                  <td>{this.props.torrent.name}</td>
                </tr>
                <tr>
                  <th>Size</th>
                  <td>{this.props.torrent.sizeAsString}</td>
                </tr>
                <tr>
                  <th>Hash</th>
                  <td>{this.props.torrent.hash}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="col-xs-6">
              <table className="table table-striped">
                <tbody>
                {files}
                </tbody>
              </table>
            </div>
          </div>
          <div className="action-buttons">
            <button className="btn btn-primary" id="ok-button" onClick={add}>Add</button>
            <button className="btn btn-success" id="cancel-button" onClick={this.props.cancel}>Cancel</button>
          </div>
        </div>);
    }
    else {
      return null;
    }
  }
});
