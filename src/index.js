import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from 'components/App/App'

const mountNode = document.getElementById('app')

const render = Cont => {
  ReactDom.render(
    <Provider store={store}>
      <Cont />
    </Provider>,
    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept(App, err => {
    if (err) {
      console.log(err)
    }
    ReactDOM.unmountComponentAtNode(mountNode)
    render(App)
  })
}
