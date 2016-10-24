import { combineReducers } from 'redux';
import view from './viewActionsReducer';
import window from './windowActionsReducer';

export default combineReducers({
  view,
  window
});
