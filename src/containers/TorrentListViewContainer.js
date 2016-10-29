import { connect } from 'react-redux';
import TorrentListViewWrapper from '../components/TorrentListViewWrapper.jsx';

const mapStateToProps = function(state) {
  const torrents = state.view.get('torrents').toSetSeq();
  return {
    torrents: torrents
  };
};

export default connect(mapStateToProps)(TorrentListViewWrapper);
