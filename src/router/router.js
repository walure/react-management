import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Bundle from './Bundle'
import Loading from 'components/Loading/Loading'
import Login from '../pages/auth/login/index.jsx'
import layout from './layout'

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
)

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />

      <Route exact path="*" component={layout} />
    </Switch>
  </div>
)

export default Routes
