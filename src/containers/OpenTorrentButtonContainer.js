import { connect } from 'react-redux';
import OpenTorrentButton from '../components/OpenTorrentButton.jsx';
import openTorrent from '../actions/openTorrent';
import openFile from '../electron_api/openFile';

const mapDispatchToProps = function(dispatch) {
  return {
    openTorrent: function() {
      var files = openFile();
      if (files)
      {
        dispatch(openTorrent(files[0]));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(OpenTorrentButton);
