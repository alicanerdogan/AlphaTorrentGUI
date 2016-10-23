import { connect } from 'react-redux';
import WindowTitle from '../components/WindowTitle.jsx';

const mapStateToProps = function(state) {
  return {
    text: `${state.get('name')} ${state.get('version')}`
  };
};

export default connect(mapStateToProps)(WindowTitle);
