import React, { Component } from 'react'
import {Provider} from 'react-redux'

import  Router from './router'
import store from './store'
import './utils/rem'
import './assets/styles/iconfont.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        </Router>
      </Provider>
    )
  }
}

export default App
