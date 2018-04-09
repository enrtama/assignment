
/**
 * @file Root reducer
 * @author Enrique Tamames Sobrino
 * @module redux/rootReducer
 * @version 0.0.1
 */

import { combineReducers } from 'redux';

/**
 * Constant combineReducers
 */
export default combineReducers({
  vehicle: require('./vehicle').reducer
});
