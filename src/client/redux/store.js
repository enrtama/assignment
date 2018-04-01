/**
 *
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer';

let createStoreWithMiddleware;

if (__DEVTOOLS__) {
  const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
  });

  createStoreWithMiddleware = compose(
    applyMiddleware(loggerMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f   // https://github.com/zalmoxisus/redux-devtools-extension
  )(createStore);
} else {
  createStoreWithMiddleware = compose(applyMiddleware())(createStore);
}

/**
 * Class Store
 * Store for Redux
 */
const store = createStoreWithMiddleware(rootReducer);

if (__DEVTOOLS__) {
  window.getState = () => store.getState();
}

export default store;
