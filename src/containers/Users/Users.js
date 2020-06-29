import React, { Component } from 'react'
import Axios from 'axios'
import '@fortawesome/fontawesome-free/js/all.js'
import './Users.css'

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount () {
        Axios.get( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => {
                this.setState({ users: response.data })
            })
    }

    render (){
        const users = this.state.users.map(user=>{
            return (
                <div className="App-user">
                    <div className="col-4">
                        <span>{user.id}</span>
                    </div>
                    <div className="col-4">
                        <span>{user.name}</span>
                    </div>
                    <div className="col-4">
                        <span>{user.email}</span>
                    </div>
                    <div className="col-4">
                        <span>{user.name}</span>
                    </div>
                </div>
            )
        })

        return (
            <div className="App-users">
                <header>
                    <div>
                        <div className="col-2">
                            <h1>Usuários</h1>
                        </div>
                        <div className="col-2">
                            <a href="/users/new">Novo usuário</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input></input>
                            <button className="btn-search"><i class="icon, fas fa-search"></i></button>
                        </div>
                    </div>
                </header>

                <div className="App-users-menu">
                    <div className="col-4">
                        <span>Id</span>
                    </div>
                    <div className="col-4">
                        <span>Nome</span>
                    </div>
                    <div className="col-4">
                        <span>E-mail</span>
                    </div>
                    <div className="col-4">
                        <span>Celular</span>
                    </div>
                </div>
                <div className="App-users-all">
                    {users}
                </div>
            </div>
        )
    }
}

export default Users