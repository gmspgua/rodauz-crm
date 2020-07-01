import React, { Component, Alert } from 'react';
import '@firebase/auth';
import MenuSideBar from './MenuSidebar.js';
import { connect } from 'react-redux';
import "./template.css";


class Template extends Component {

    render() {
        console.trace({ joao: this.props.login })
        return (
            <div className="template">
                <MenuSideBar email={this.props.login} >
                    {this.props.children}
                </MenuSideBar>
            </div>

        );
    }

}
const mapStateToProps = state => ({ login: state.login });
export default connect(mapStateToProps, null)(Template);