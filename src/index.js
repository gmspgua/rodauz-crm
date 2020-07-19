import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Route from './Routes';
import reduxThunk from 'redux-thunk';



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
  reduxThunk
)));

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>
  , document.getElementById('root'));




serviceWorker.unregister();
