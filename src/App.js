import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Router from 'Router'

import createStore from './Redux'
import gridConfig from './Config/Grid'

import 'sanitize.css/sanitize.css'
import './App.css'

const store = createStore()

class App extends Component {
  componentDidMount () {
    // initNotifications()
  }
  render () {
    return (
      <ThemeProvider theme={gridConfig}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
