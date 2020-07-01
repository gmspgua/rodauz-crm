import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Cliente from './view/cliente/Cliente';
import Login from './view/login/Login';
import { verifyToken } from './util/generateJWT';
import Cookies from 'universal-cookie';



class Routes extends Component {


    constructor() {
        super();
        this.cookies = new Cookies();
    }

    componentDidMount() {
        console.log('==== Routes mounted!');
    }




    tokenValid = (token) => {

        console.trace({ token });
        try {
            verifyToken(token);
            return true;
        } catch (error) {
            return false;

        }

    }

    render() {
        const token = this.cookies.get('axrs');
        const valid = this.tokenValid(token);
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute exact path="/cliente" valid={valid} component={Cliente} />
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => ({ login: state.login });
export default connect(mapStateToProps, null)(Routes);