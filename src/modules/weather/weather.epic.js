import {of} from 'rxjs'
import {mergeMap, catchError, map} from 'rxjs/operators'
import {combineEpics, ofType} from 'redux-observable'
import {request} from 'universal-rxjs-ajax'

import {
  FETCH_WEATHER,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from './weather.state'

const API_URL = process.env.REACT_APP_API_URL

const fetchWeatherEpic = (action$, state$) => {
  return action$.pipe(
    ofType(FETCH_WEATHER),
    mergeMap(action => {
      const {latitude, longitude} = action.payload
      const url = `${API_URL}/weather?latitude=${latitude}&longitude=${longitude}`

      return request({
        url,
        timeout: 5000,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).pipe(
        map(data => fetchWeatherSuccess(data.response)),
        catchError(error => of(fetchWeatherFailure(error))),
      )
    })
  )
}

export default combineEpics(
  fetchWeatherEpic,
)
