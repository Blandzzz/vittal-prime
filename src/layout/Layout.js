import React, { useState } from 'react';
import Menu from './menu/Menu'
import './Layout.css'

function Layout (props) {
    const [menuIsOpen, setMenu] = useState(false)

    function toggleMenu () {
        setMenu(!menuIsOpen)
        console.log(menuIsOpen)
    }

    return (
        <div className="App-layout">
            <div className="App-header">
                <div className="App-toggle-menu" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="App-user-panel">
                    <ul>
                        <li>
                            <a href="/#">
                                <i className="fas fa-bell"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <span className="App-user-icon">U</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="App-content">
                <Menu isOpen={menuIsOpen}></Menu>
                <div className="App-page">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout