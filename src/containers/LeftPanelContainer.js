import { connect } from 'react-redux';
import LeftPanel from '../components/LeftPanel.jsx';

const mapStateToProps = function(state) {
  const categories = state.view.get('categories');
  return {
    categories: categories.toJS()
  };
};

export default connect(mapStateToProps)(LeftPanel);
