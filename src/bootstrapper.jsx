import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/combinedReducer';
import mainProcessListener from './electron_api/mainProcessListener';

let store = createStore(reducer);

mainProcessListener((action) => store.dispatch(action));

import WindowHeader from './components/WindowHeader.jsx';
import WindowBody from './components/WindowBody.jsx';

const App = React.createClass({
  render: function() {
    return (
      <div className="app-container">
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
