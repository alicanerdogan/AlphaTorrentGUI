import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/combinedReducer';

let store = createStore(reducer);

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
