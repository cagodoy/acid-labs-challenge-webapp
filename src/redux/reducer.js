import {Map} from 'immutable'
import {combineReducers} from 'redux'

import WeatherReducer from '../modules/weather/weather.state'

const reducers = {
  weather: WeatherReducer,
}

const immutableStateContainer = Map()
const getImmutable = (child, key) => child ? child.get(key) : void 0
const setImmutable = (child, key, value) => child.set(key, value)

const AppReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
)

export default AppReducer