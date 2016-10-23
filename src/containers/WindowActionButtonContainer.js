import { connect } from 'react-redux';
import { Minimize, Maximize, Close } from './../components/WindowActionButton.jsx';
import { minimizeWindow, maximizeWindow, closeWindow } from './../actions/windowActions';

export const MinimizeButton = connect(null, (dispatch) => {
  return {
    onClick: () => {
      dispatch(minimizeWindow());
    }
  }
})(Minimize);

export const MaximizeButton = connect(null, (dispatch) => {
  return {
    onClick: () => {
      dispatch(maximizeWindow());
    }
  }
})(Maximize);

export const CloseButton = connect(null, (dispatch) => {
  return {
    onClick: () => {
      dispatch(closeWindow());
    }
  }
})(Close);
