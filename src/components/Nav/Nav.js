import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

export default class Nav extends Component {
  handle(e) {
    console.log(e)
  }
  render() {
    // console.log(this)
    return (
      <ul className="navBar">
        <li>
          <NavLink exact to="/" activeClassName="active" onclick={this.handle}>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/page1" acitveClassName="active">
            Page1
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" acitveClassName="active">
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/userinfo" acitveClassName="active">
            UserInfo
          </NavLink>
        </li>
        {this.props.children}
      </ul>
    )
  }
}
