import React, { Component, Alert } from 'react';
import '@firebase/auth';
import MenuSideBar from './MenuSidebar.js';
import { connect } from 'react-redux';
import "./template.css";
import { removeLocalStorage } from '../../util/localStorage'
const axios = require('axios');

class Template extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: false,
        }

    }

    redirect() {
        removeLocalStorage();
        window.location.href = '/';
    }

    render() {
        const { title } = this.props;
        return (
            < div className="template" >
                <MenuSideBar user={this.props.user} logout={this.redirect} navigate={this.state.navigate} title={title}>
                    {this.props.children}
                </MenuSideBar>
            </div >
        );
    }

}
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, null)(Template);