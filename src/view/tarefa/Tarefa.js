import React, { Component, Alert } from 'react';
import '@firebase/auth';
import Template from '../../componentes/template/template';




export default class Tarefa extends Component {

    render() {
        return (
            <Template title={'Tarefas'}>
                <div>Tarefa</div>
            </Template>
        );
    }
}