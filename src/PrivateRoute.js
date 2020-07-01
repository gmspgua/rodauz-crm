import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, valid, ...rest }) => (
    < Route
        {...rest}
        render={props => (
            valid
                ? <Component {...props} />
                : <Redirect to="/" />
        )}
    />
);

export default PrivateRoute;