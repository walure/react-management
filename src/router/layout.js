import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import { Nav, TopBar } from '../components/index'
import { Home, page1, Counter, UserInfo } from '../pages/index'
import './layout.scss'

class layout extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="warp">
          <Nav Route={Route} />

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/page1" component={page1} />
            <Route exact path="/Counter" component={Counter} />
            <Route exact path="/UserInfo" component={UserInfo} />
          </div>
        </div>
      </div>
    )
  }
}

export default layout
