import {createEpicMiddleware, combineEpics} from 'redux-observable'
import WeatherEpics from '../../modules/weather/weather.epic'

export const epics = combineEpics(
  WeatherEpics,
)

export default createEpicMiddleware()
