import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './data/store';
import Root from './components/Views/Root';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
