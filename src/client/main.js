
/**
 * @file Main
 * @author Enrique Tamames Sobrino
 * @module Main
 * @version 0.0.1
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import socket from "./lib/socket"

import App from './components/App'
import { Provider } from 'react-redux'
import store from './redux/store';

import registerServiceWorker from './pwa/registerServiceWorker';

import 'react-hot-loader/patch'
import './styles/app.less'

const render = () => {
  ReactDOM.render(
    <AppContainer>
    <Provider store={store}>
    <App socket={socket} />
    </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

registerServiceWorker();  // Runs register() as default function

socket.once('ready', () => {
  console.log('Socket ready')
  render()
})

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}
