import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import './App.scss'
import './style/global.scss'
import store from './store'

import Router from './router'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
export default App
