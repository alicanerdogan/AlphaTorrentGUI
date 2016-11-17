import { connect } from 'react-redux';
import BottomPanel from '../components/BottomPanel.jsx';
import addTorrent from '../actions/addTorrent';
import cancelTorrent from '../actions/cancelTorrent';

const mapStateToProps = function(state) {
  let bottomPanelState = state.view.get('bottomPanel');
  return {
    isEnabled: bottomPanelState.isEnabled,
    torrent: bottomPanelState.torrent
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    add: function(torrent) {
      dispatch(addTorrent(torrent));
    },
    cancel: function() {
      dispatch(cancelTorrent());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomPanel);
