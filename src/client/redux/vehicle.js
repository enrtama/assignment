
/**
 * @file Redux for vehicle
 * @author Enrique Tamames Sobrino
 * @module Redux/vehicle
 * @version 0.0.1
 */

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { getTimeKey } from '../utils'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  addInfoVehicle: ['vehicle']
})

export const VehicleTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  vehicle: [],
  currentCoordinate: null
})

/* ------------- Reducers ------------- */

export const addInfoVehicle = (state, {vehicle}) => {
  const { energy, gps, odo, soc, speed, time } = vehicle
  const newDataVehicle = {
    energy: energy ? parseFloat(energy.toFixed(2)) : 0,
    gps: [parseFloat(gps[0]), parseFloat(gps[1])],
    odo: odo ? parseFloat(odo.toFixed(2)) : 0,
    soc: soc ? parseFloat(soc.toFixed(2)) : 0,
    speed: speed ? speed : 0,
    time: getTimeKey(time)
  }
  return state.merge(Immutable({
    vehicle: state.vehicle.concat(newDataVehicle),
    currentCoordinate: [parseFloat(vehicle.gps[0]), parseFloat(vehicle.gps[1])]
  }))
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_INFO_VEHICLE]: addInfoVehicle
})
