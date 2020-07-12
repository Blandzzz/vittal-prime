import React from 'react';
import Users from './pages/users/Users';
import NewUser from './pages/newUser/NewUser';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';


function App (props) {
  return (
    <div className="App">
      <div className="App-header">
        <ul className="App-user-panel">
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

      <div className="App-container">
        <div className="App-nav">
          <ul>
            <li><a href="/schedule"><i className="far fa-calendar-alt"></i></a></li>
            <li><a href="/users"><i className="fa fa-users"></i></a></li>
            <li><a href="/options"><i className="fas fa-cog"></i></a></li>
          </ul>
        </div>
        <div className="App-pages">
          <Router>
            <Route path='/' exact>
              <Redirect to="/schedule"></Redirect>
            </Route>
            <Route path='/users' exact render={() => <Users></Users>}></Route>
            <Route path='/users/new' exact render={() => <NewUser></NewUser>}></Route>
          </Router>
        </div>
      </div>
    </div>  
  );
}

export default App;
