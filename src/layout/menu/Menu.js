import React from 'react'
import './Menu.css'

function Menu (props) {
    return (
        <div className="App-menu">
            <div className="App-menu-desktop">
                <ul>
                    <li><a href="/schedule"><i className="far fa-calendar-alt"></i></a></li>
                    <li><a href="/users"><i className="fa fa-users"></i></a></li>
                    <li><a href="/options"><i className="fas fa-cog"></i></a></li>
                </ul>
            </div>
            <div className="App-menu-mobile" style={{display: (props.isOpen ? 'inline-block' : 'none')}}>
                <ul>
                    <li>
                        <a href="/schedule">
                            <i className="far fa-calendar-alt"></i>
                            <span>Agenda</span>
                        </a>
                    </li>
                    <li>
                        <a href="/users">
                            <i className="fa fa-users"></i>
                            <span>Usuários</span>
                        </a>
                    </li>
                    <li>
                        <a href="/options">
                            <i className="fas fa-cog"></i>
                            <span>Opções</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )                   
}

export default Menu