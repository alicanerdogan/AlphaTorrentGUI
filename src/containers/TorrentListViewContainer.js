import { connect } from 'react-redux';
import TorrentListViewWrapper from '../components/TorrentListViewWrapper.jsx';

const mapStateToProps = function(state) {
  return {
    torrents: state.view.get('torrents')
  };
};

export default connect(mapStateToProps)(TorrentListViewWrapper);
