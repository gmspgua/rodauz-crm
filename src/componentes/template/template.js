import React, { Component, Alert } from 'react';
import '@firebase/auth';
import MenuSideBar from './MenuSidebar.js';
import { connect } from 'react-redux';
import "./template.css";
import { Redirect } from 'react-router-dom';

import { logout } from '../../actions';
import Cookies from 'universal-cookie';
import { withRouter } from 'react-router'




class Template extends Component {

    constructor(props) {
        super(props);
    }

    exit = () => {
        const cookies = new Cookies();
        cookies.remove('axrs');
        this.props.dispatchLogout({
            email: this.props.user.email,
            logged: true
        });

    }



    render() {
        return (
            < div className="template" >
                <MenuSideBar user={this.props.user} logout={this.exit}>
                    {this.props.children}
                </MenuSideBar>
            </div >
        );
    }

}
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, {
    dispatchLogout: logout
})(Template);