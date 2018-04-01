
/**
 *
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import LogoComponent from './Logo'
import LiveDataLogComponent from './LiveDataLog'

import VehicleActions from '../redux/vehicle'

class App extends Component {
	state = {
		logs: []
	}

	/**
	 * componentDidMount - description
	 *
	 * @return {type}  description
	 */
	componentDidMount() {
		// Save data in state on data event
		this.props.socket.on('state', (state) => {
			this.props.addInfoVehicle(state)
			this.setState({ logs: this.state.logs.concat([state]) })
		})
	}

	/**
	 * render - description
	 *
	 * @return {type}  description
	 */
	render() {
		return (
			<section>
				<article id='app-container'>
					<Header />
					<LogoComponent />
				</article>
				<article id='log-container'>
					<LiveDataLogComponent logs={ this.state.logs } />
				</article>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    vehicle: state.vehicle
  }
}

const mapStateToDispatch = dispatch => ({
  addInfoVehicle: (vehicle) => dispatch(VehicleActions.addInfoVehicle(vehicle))
})

export default connect(mapStateToProps, mapStateToDispatch)(App)
