import { connect } from 'react-redux';
import LeftPanel from '../components/LeftPanel.jsx';
import selectCategory from '../actions/selectCategory';

const mapStateToProps = function(state) {
  const categories = state.view.get('categories').toJS();
  const torrents = state.view.get('torrents').toSetSeq().toJS();
  let categoryMap = {
    'All': torrents.length,
    'Downloading': 0,
    'Paused': 0,
    'Completed': 0
  };
  torrents.forEach((torrent) => {
    if(torrent.isDownloading) {
      categoryMap['Downloading'] += 1;
    }
    if(torrent.isPaused) {
      categoryMap['Paused'] += 1;
    }
    if(torrent.isCompleted) {
      categoryMap['Completed'] += 1;
    }
    if(torrent.subcategory) {
      categoryMap[torrent.subcategory] = categoryMap[torrent.subcategory] || 0;
      categoryMap[torrent.subcategory] += 1;
    }
  });
  categories.forEach((category) => {
    category.count = categoryMap[category.name] || 0;
    category.active = (state.view.get('selectedCategory') === category.name);
  });
  return {
    categories: categories
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    selectCategory: function(category) {
      dispatch(selectCategory(category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
