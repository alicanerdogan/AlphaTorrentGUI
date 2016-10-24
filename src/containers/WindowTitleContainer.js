import { connect } from 'react-redux';
import WindowTitle from '../components/WindowTitle.jsx';

const mapStateToProps = function(state) {
  return {
    text: `${state.window.get('name')} ${state.window.get('version')}`
  };
};

export default connect(mapStateToProps)(WindowTitle);
