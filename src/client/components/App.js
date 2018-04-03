
/**
 * @file Entry point for the application
 * @author Enrique Tamames
 * @module App
 * @version 0.0.1
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import LogoComponent from './Logo'
import LiveDataLogComponent from './LiveDataLog'
import Map from './Map'
import Sidebar from './Sidebar'

import VehicleActions from '../redux/vehicle'

export class App extends Component {

	/**
	 * componentDidMount - description
	 *
	 * @return {type}  description
	 */
	componentDidMount = () => {
		// Save data in state on data event
		this.props.socket.on('state', (state) => {
			this.props.addInfoVehicle(state)
		})
	}

	/**
	 * render - description
	 *
	 * @return {type}  description
	 */
	render = () => {
		const { vehicle, currentCoordinate } = this.props
		return (
			<section>
				<Sidebar vehicle={vehicle[vehicle.length - 1]} />
				<Map currentCoordinate={currentCoordinate}/>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    vehicle: state.vehicle.vehicle,
		currentCoordinate: state.vehicle.currentCoordinate
  }
}

const mapStateToDispatch = dispatch => ({
  addInfoVehicle: (vehicle) => dispatch(VehicleActions.addInfoVehicle(vehicle))
})

export default connect(mapStateToProps, mapStateToDispatch)(App)
