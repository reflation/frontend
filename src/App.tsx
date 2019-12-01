import React from 'react'

import Login from './routes/Login'
import Main from './routes/Main'
import Fetch from './routes/Fetch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
const App: React.FC = () => (
  <Provider store={store}>
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
  </Provider>
)

export default App
