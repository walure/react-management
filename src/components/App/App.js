import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import getRouter from 'router/router'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }

  nav() {
    const isLogin = this.state.isLogin
    if (!isLogin) {
    }
    console.log(isLogin)
  }
  render() {
    return (
      <Router>
        <div>{getRouter()}</div>
      </Router>
    )
  }
}

export default App
