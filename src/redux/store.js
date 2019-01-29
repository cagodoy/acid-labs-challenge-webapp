import {applyMiddleware, createStore} from 'redux'
import middleware from './middleware'
import AppReducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

import EpicMiddleware, {epics} from './middleware/epics'

const enhancers = [
  applyMiddleware(...middleware)
]

const composeEnhancers = composeWithDevTools({})

const store = createStore(AppReducer, composeEnhancers(
	...enhancers
))

EpicMiddleware.run(epics)

export default store