import { connect } from 'react-redux';
import OpenTorrentButton from '../components/OpenTorrentButton.jsx';
import addTorrent from '../actions/addTorrent';
import openFile from '../electron_api/openFile';

const mapDispatchToProps = function(dispatch) {
  return {
    openTorrent: function() {
      var files = openFile();
      if (files)
      {
        dispatch(addTorrent({ name: files[0] }));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(OpenTorrentButton);
