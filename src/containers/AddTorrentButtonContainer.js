import { connect } from 'react-redux';
import AddTorrentButton from '../components/AddTorrentButton.jsx';
import addTorrent from '../actions/addTorrent';

const mapDispatchToProps = function(dispatch) {
  return {
    addTorrent: function() {
      dispatch(addTorrent({ name: 'Harry Potter and The Cursed Child' }))
    }
  };
};

export default connect(null, mapDispatchToProps)(AddTorrentButton);
