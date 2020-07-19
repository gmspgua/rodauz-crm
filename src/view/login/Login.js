import React, { Component } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import "./Login.css";
import firebase from '@firebase/app';
import '@firebase/auth';
import { connect } from 'react-redux';
import { successLogin } from '../../actions';
import { setLocalStorage } from '../../util/localStorage'
import { LoginBottom, LoginEmailField, LoginPasswordField, LoginLogo, LoginButton } from '../../componentes/login';
import ErrorMessage from '../../componentes/ErrorMessage'


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            messageError: '',
            email: '',
            password: '',
        }

        this.tryLogin = this.tryLogin.bind(this);
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.getErrorByErrorCode = this.getErrorByErrorCode.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyBZtIIeDxMYyAwPTI9ZqjbnuIj53j_PsLo",
            authDomain: "series-e5ead.firebaseapp.com",
            databaseURL: "https://series-e5ead.firebaseio.com",
            projectId: "series-e5ead",
            storageBucket: "series-e5ead.appspot.com",
            messagingSenderId: "252163341549",
            appId: "1:252163341549:web:a18da88fabc08e226d60e4",
            measurementId: "G-SM1MRC0DR1"
        };
        try {
            if (!firebase.apps.length) {
                console.log('inicalizou firebase');
                firebase.initializeApp(firebaseConfig);
            } else {
            }
        } catch (error) {

            console.error('Firebase initialization error', error.stack)
        }
    }

    getErrorByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'E-mail não cadastrado.';
            default:
                return 'Erro desconhecido';
        }
    }

    keyPressed(event) {
        if (event.key === "Enter") {
            this.tryLogin()
        }
    }

    redirect() {
        setLocalStorage();
        window.location.href = '/contato';
    }

    tryLogin() {
        this.setState({
            loading: true,
            messageError: null,
        })
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                this.props.dispatchLoginSuccess({
                    email,
                    logged: true
                });
                this.redirect()
            }
            )
            .catch(error => {
                this.setState({
                    messageError: this.getErrorByErrorCode(error.code),
                    loading: false,
                })
            })
    }

    onChangeHandle = (event, key) => {
        const { value } = event.target;
        this.setState({ [key]: value });
    }

    render() {
        return (
            <div class="container">
                <LoginLogo />
                <div className="box">
                    {this.state.messageError ?
                        <ErrorMessage messageError={this.state.messageError} /> : null}
                    <div className="boxCenter">
                        <LoginEmailField
                            keyPressed={this.keyPressed}
                            onChangeHandle={(event) => this.onChangeHandle(event, 'email')}
                            defaultValue={this.state.user} />

                        <LoginPasswordField
                            keyPressed={this.keyPressed}
                            onChangeHandle={(event) => this.onChangeHandle(event, 'password')}
                            defaultValue={this.state.password} />

                        {!this.state.loading
                            ?
                            <LoginButton onClick={this.tryLogin} label="LOG IN" />
                            :
                            <CircularProgress style={{ marginTop: "50px" }} size="20px" />
                        }

                    </div>
                </div>
                <LoginBottom />
            </div >
        );
    }
}

export default connect(null, {
    dispatchLoginSuccess: successLogin
})(Login);