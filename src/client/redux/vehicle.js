
/**
 *
 */

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

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
  return state.merge(Immutable({
    vehicle: state.vehicle.concat(vehicle),
    currentCoordinate: [parseFloat(vehicle.gps[0]), parseFloat(vehicle.gps[1])]
  }))
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_INFO_VEHICLE]: addInfoVehicle
})
