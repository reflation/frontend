import React from 'react'

import logo from './logo.svg'
import './App.css'

import Login from './routes/Login'
import Main from './routes/Main'
import Fetch from './routes/Fetch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/fetch">
            <Fetch />
          </Route>
        </Switch>
      </Router>
    </header>
  </div>
)

export default App
