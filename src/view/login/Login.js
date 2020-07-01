import React, { Component, Alert } from 'react';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded';
import logo from '../../images/logo.png'
import "./Login.css";
import firebase from '@firebase/app';
import '@firebase/auth';
import MuiAlert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { successLogin } from '../../actions';
import Cookies from 'universal-cookie';
import { generateToken } from '../../util/generateJWT'



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
        console.log('entrou');
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
        // Initialize Firebase
        try {
            firebase.initializeApp(firebaseConfig);
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

    renderRedirect() {
        this.props.history.push(`/cliente`)
    }

    sayHi() {
        alert('Hello');
    }


    tryLogin() {
        const cookies = new Cookies();
        this.setState({
            loading: true,
            messageError: null,
        })
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                const token = generateToken(true);
                cookies.set('axrs', token, { path: '/' })
                this.setState({
                    loading: false,
                })
                this.props.dispatchLoginSuccess(email);
                this.renderRedirect()
            }
            )
            .catch(error => {
                console.trace({ error });
                this.setState({
                    messageError: this.getErrorByErrorCode(error.code),
                    loading: false,
                })
            })
    }



    onChangeHandle = (event, key) => {
        console.trace({ event })
        const { value } = event.target;
        this.setState({ [key]: value });
    }



    render() {
        return (
            <div class="container">
                {this.state.messageError
                    ?
                    <MuiAlert elevation={6} variant="filled" severity="error" style={{ width: "100%" }}>
                        {this.state.messageError}
                    </MuiAlert>
                    :
                    null}

                <div class="logo">
                    <img src={logo} />
                </div>
                <div className="box">

                    <div className="boxEmail">
                        <div className="email">
                            <TextField
                                placeholder="exemplo@provedor.com.br"
                                id="input-with-icon-grid"
                                className="textEmail"
                                onKeyPress={this.keyPressed}
                                defaultValue={this.state.email}
                                onChange={event => this.onChangeHandle(event, 'email')}
                                inputProps={{ maxLength: 31 }}
                                InputProps={Object.assign({ disableUnderline: true },
                                    {
                                        startAdornment: (
                                            <InputAdornment position="end" variant="filled">
                                                <PersonIcon color="primary"
                                                    style={{ paddingRight: "20px" }}
                                                />
                                            </InputAdornment>
                                        ),
                                    }, {
                                    style: {
                                        textAlign: 'center',
                                        fontSize: "13px",
                                        paddingTop: "3px",
                                        width: "300px",
                                    }
                                })}
                            />
                        </div>
                        <div className="email">

                            <TextField

                                id="standard-password-input"
                                placeholder="*********"
                                InputLabelProps={{ style: { fontWeight: "bold", textAlign: "center" } }}
                                type="password"
                                defaultValue={this.state.password}
                                inputProps={{ maxLength: 20 }}
                                onKeyPress={this.keyPressed}
                                onChange={event => this.onChangeHandle(event, 'password')} InputProps={Object.assign({ disableUnderline: true },
                                    {
                                        startAdornment: (
                                            <InputAdornment position="end">
                                                <HttpsRoundedIcon color="primary"
                                                    style={{ paddingRight: "20px" }}
                                                />
                                            </InputAdornment>
                                        ),
                                    }, {
                                    style: {
                                        textAlign: 'center',
                                        fontSize: "13px",
                                        paddingTop: "3px",
                                        width: "300px",
                                    }
                                }

                                )}
                            />
                        </div>

                        {!this.state.loading
                            ?

                            <Button
                                variant="contained"
                                color="primary"
                                className="button"
                                style={{ marginTop: "50px" }}
                                onClick={() => this.tryLogin()}
                            >
                                LOG IN
                            </Button>

                            :

                            <CircularProgress
                                style={{ marginTop: "50px" }}
                                size="20px"
                            />

                        }



                    </div>
                </div>
                <div className='bottom'>
                    © Copyright 2020 | Desenvolvido por GE2 Tecnologia
            </div>
            </div>
        );
    }
}

export default connect(null, {
    dispatchLoginSuccess: successLogin
})(Login);
