import { connect } from 'react-redux';
import TorrentListViewWrapper from '../components/TorrentListViewWrapper.jsx';

const mapStateToProps = function(state) {
  return {
    torrents: state.torrents
  };
};

export default connect(mapStateToProps)(TorrentListViewWrapper);
