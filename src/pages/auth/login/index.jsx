import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button
} from 'react-bootstrap'

import './index.scss'

export default class Login extends Component {
  constructor(pros) {
    super(pros)
  }
  componentWillMount() {}
  render() {
    return (
      <div className="container">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} xs={1}>
              用户名
            </Col>
            <Col xs={10}>
              <FormControl type="email" placeholder="请输入用户名" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} xs={1}>
              密码
            </Col>
            <Col xs={10}>
              <FormControl type="password" placeholder="请输入密码" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xsOffset={1} xs={5}>
              <Checkbox>记住我</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xsOffset={1} xs={2}>
              <Button type="submit">登录</Button>
              <Button type="submit">重置</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
