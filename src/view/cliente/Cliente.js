import React, { Component, Alert } from 'react';
import '@firebase/auth';
import { useHistory } from "react-router-dom";

import Template from '../../componentes/template/template'



export default class Cliente extends Component {


    render() {
        return (
            <div>
                <Template>
                    <div>Cliente</div>
                    <div>12345678901234567890</div>
                </Template>
            </div>
        );
    }

}