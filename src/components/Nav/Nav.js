import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

export default class Nav extends Component {
  handle(e) {
    console.log(e)
  }
  render() {
    console.log(this)
    return (
      <ul className="navBar">
        <li>
          <Link
            to="/"
            className="aaa"
            acitveClassName="bbb"
            activeStyle={{ color: 'green' }}
            onclick={this.handle}
          >
            首页
          </Link>
        </li>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/userinfo">UserInfo</Link>
        </li>
        {this.props.children}
      </ul>
    )
  }
}
