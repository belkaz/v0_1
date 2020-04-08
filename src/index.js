import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import configStore from './redux/configStore';

import { Provider } from 'react-redux';
let store = configStore();

ReactDOM.render(
  <Provider store = { store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
