import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import beerReducer from './reducers';
import App from './App';

const store = createStore(beerReducer, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
