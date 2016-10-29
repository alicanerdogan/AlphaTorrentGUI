import { combineReducers } from 'redux';
import view from './viewActionsReducer';
import window from './windowActionsReducer';
import file from './fileActionsReducer';

export default combineReducers({
  view,
  window,
  file
});
