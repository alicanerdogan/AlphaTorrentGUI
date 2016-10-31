import { connect } from 'react-redux';
import TorrentListViewWrapper from '../components/TorrentListViewWrapper.jsx';

const mapStateToProps = function(state) {
  const torrents = state.view.get('torrents').toSetSeq().toJS();
  const selectedCategory = state.view.get('selectedCategory');
  const selectedTorrents = torrents.filter((torrent) => {
    if(selectedCategory === 'All') {
      return true;
    }
    else if(selectedCategory === 'Downloading') {
      return torrent.isDownloading;
    }
    else if(selectedCategory === 'Paused') {
      return torrent.isPaused;
    }
    else if(selectedCategory === 'Completed') {
      return torrent.isCompleted;
    }
    else {
      return torrent.subcategory === selectedCategory;
    }
  });
  return {
    torrents: selectedTorrents
  };
};

export default connect(mapStateToProps)(TorrentListViewWrapper);
