import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Contato from './view/contato/Contato';
import Login from './view/login/Login';
import Tarefa from './view/tarefa/Tarefa';
import { verifyToken } from './util/generateJWT';
import Cookies from 'universal-cookie';
import { getLocalStorage } from './util/localStorage'



class Routes extends Component {

    constructor() {
        super();
        this.cookies = new Cookies();
        this.state = {
            valid: false,
            token: ''
        }
    }

    componentDidMount() {
        console.log('==== Routes mounted!');
    }

    tokenValid = (token) => {
        try {
            verifyToken(token);
            return true;
        } catch (error) {
            return false;
        }
    }

    render() {
        let token = getLocalStorage();
        let valid = this.tokenValid(token);
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute exact path="/tarefa" valid={valid} component={Tarefa} />
                    <PrivateRoute exact path="/contato" valid={valid} component={Contato} />
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => ({ login: state.login });
export default connect(mapStateToProps, null)(Routes);