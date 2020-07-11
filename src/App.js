import React from 'react';
import Users from './pages/users/Users';
import NewUser from './pages/newUser/NewUser';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';


function App (props) {
  return (
      <div className="App">
        <Router>
          <div className="App-nav">
            <nav>
              <ul>
                <li><a href="/schedule"><i className="fas fa-calendar-alt"></i></a></li>
                <li><a href="/users"><i className="fa fa-users"></i></a></li>
                <li><a href="/options"><i className="fas fa-cog"></i></a></li>
              </ul>
            </nav>
          </div>
          <Route path='/' exact>
            <Redirect to="/schedule"></Redirect>
          </Route>
          <Route path='/users' exact render={() => <Users></Users>}></Route>
          <Route path='/users/new' exact render={() => <NewUser></NewUser>}></Route>
        </Router>
      </div>
  );
}

export default App;
