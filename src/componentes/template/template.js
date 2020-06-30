import React, { Component, Alert } from 'react';
import '@firebase/auth';
import MenuSideBar from './MenuSidebar.js'



export default class Template extends Component {

    render() {
        return (
            <>
                <MenuSideBar >
                    {this.props.children}
                </MenuSideBar>
            </>

        );
    }

}