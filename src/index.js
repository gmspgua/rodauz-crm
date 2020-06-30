import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Login from './view/login/Login';
import Cliente from './view/cliente/Cliente';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect } from 'react-redux';

/* const fakeAuthCentralState = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  }
};

const ProtectedRoute = ({ component: Component, props: Props, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuthCentralState.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
  )} />
);
 */
const store = createStore(rootReducer, composeWithDevTools());


const ProtectedRoute = ({ isAllowed, authentication, ...props }) =>
  authentication
    ? <Route {...props} />
    : <Redirect to="/" />;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Route path="/" exact={true} component={Login} />
      <Route path="/cliente" exact={true} component={Cliente} />
      <ProtectedRoute path="/produto" exact={true} component={Cliente} authentication={this.props.login} />
    </ BrowserRouter>
  </Provider>
  , document.getElementById('root'));


const mapStateToProps = state => {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps, null)();



serviceWorker.unregister();
