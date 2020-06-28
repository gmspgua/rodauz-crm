import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login/Login';

ReactDOM.render(
  <BrowserRouter basename="/copadubo-react/">
    <Route path="/" exact={true} component={Login} />
  </ BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();
