import React from 'react';
import { Provider } from 'react-redux';

import Routes from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/images/styles/global.css';

import store from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
