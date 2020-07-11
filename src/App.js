import React, { Component } from 'react';
import Users from './containers/Users/Users';
import NewUser from './pages/newUser/NewUser';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';


class App extends Component {
  state = {
    users: []
  }

  render() {
    
    return (
      <div className="App">
        <div className="App-nav">
          <nav>
            <ul>
              <li><a href="/schedule"><i class="fas fa-calendar-alt"></i></a></li>
              <li><a href="/users"><i className="fa fa-users"></i></a></li>
              <li><a href="/options"><i className="fas fa-cog"></i></a></li>
            </ul>
          </nav>
        </div>

        <div className="App-body">
          <Router>
            <Route path='/' exact>
              <Redirect to="/schedule"></Redirect>
            </Route>
            <Route path='/users' exact render={() => <Users></Users>}></Route>
            <Route path='/users/new' exact render={() => <NewUser></NewUser>}></Route>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
