
import loggerMiddleware from './logger'
import epicsMiddleware from './epics'
// import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
// import a from 'react-navigation-redux-helpers'

// const reduxMiddleware = createReactNavigationReduxMiddleware(
//   'root',
//   state => state.nav
// )

export default [
  loggerMiddleware,
  epicsMiddleware,
  // reduxMiddleware,
]
