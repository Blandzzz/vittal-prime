import React, { Component } from 'react';
import Users from './containers/Users/Users';
import NewUser from './containers/NewUser/NewUser';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
              <li><a href="/">Home</a></li>
              <li><a href="/users">Users</a></li>
            </ul>
          </nav>
        </div>

        <div className="App-body">
          <Router>
            <Route path='/' exact render={() => <h1>Home</h1>}></Route>
            <Route path='/users' exact render={() => <Users></Users>}></Route>
            <Route path='/users/new' exact render={() => <NewUser></NewUser>}></Route>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
