/**
 *
 */

import { combineReducers } from 'redux';

// Reducers

/**
 * Constant combineReducers
 */
export default combineReducers({
  vehicle: require('./vehicle').reducer
});
