import React from 'react';
import Layout from './layout/Layout'
import Users from './pages/users/Users';
import NewUser from './pages/newUser/NewUser';
import Login from './pages/login/Login'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';

function App (props) {
  return (
    <Router>
      <Route path='/' exact>
        <Redirect to="/users"></Redirect>
      </Route>
      <Route path='/login' exact component={Login}></Route>
      <Layout>
        <Route path='/users' exact component={Users}></Route>
        <Route path='/users/new' exact component={NewUser}></Route>
      </Layout>
    </Router>
  );
}

export default App;
