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

export default class Login extends Component {
  constructor(pros) {
    super(pros)
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={1}>
              用户名1
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="请输入用户名" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={1}>
              密码
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="请输入密码" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={1} sm={1}>
              <Checkbox>记住我</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={1} sm={1}>
              <Button type="submit">登录</Button>
              <Button type="submit">重置</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
