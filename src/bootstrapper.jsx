import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import viewActionsReducer from './reducers/viewActionsReducer';
let store = createStore(viewActionsReducer);

import WindowHeader from './components/WindowHeader.jsx';
import WindowBody from './components/WindowBody.jsx';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <WindowHeader/>
        <WindowBody/>
      </div>
      );
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('content')
);
