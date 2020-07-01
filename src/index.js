import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Login from './view/login/Login';
import Cliente from './view/cliente/Cliente';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect } from 'react-redux';
import Route from './Routes'


const store = createStore(rootReducer, composeWithDevTools());



ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>
  , document.getElementById('root'));




serviceWorker.unregister();
