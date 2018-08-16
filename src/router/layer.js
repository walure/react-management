import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import { Nav, TopBar } from '../components/index'
import { Home, page1, Counter, UserInfo } from '../pages/index'

//import { Home } from '../pages/index'

class layer extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <Nav Route={Route} />
        <div />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/page1" component={page1} />
          <Route exact path="/Counter" component={Counter} />
          <Route exact path="/UserInfo" component={UserInfo} />
        </div>
      </div>
    )
  }
}

export default layer
