
/**
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import socket from "./lib/socket"

import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from './redux/store';

import 'react-hot-loader/patch'
import './styles/app.less'

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
			  <App socket={socket} />
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	)
}

socket.once('ready', () => {
	console.log('Socket ready')
	render(App)
})

if (module.hot) {
	module.hot.accept('./components/App', () => { render(App) })
}
