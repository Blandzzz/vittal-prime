import React, { Component } from 'react';
import './NewUser.css';

class NewUser extends Component {
    render () {
        return (
            <div className="App-users-new">
                <div><h1>Novo Usuário</h1></div>
                <div>
                    <div><label>Nome</label></div>
                    <div><input></input></div>
                </div>
                <div>
                    <div><label>Data Nascimento</label></div>
                    <div><input></input></div>
                </div>
                <div>
                    <div><label>RG</label></div>
                    <div><input></input></div>
                </div>
                <div>
                    <div><label>CPF</label></div>
                    <div><input></input></div>
                </div>
            </div>
        )
    }
}

export default NewUser
