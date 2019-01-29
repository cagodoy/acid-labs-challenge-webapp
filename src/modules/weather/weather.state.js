import {Map} from 'immutable'

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE'
// --end-actions-types--

export const fetchWeather = (latitude, longitude) => ({
  type: FETCH_WEATHER,
  payload: {latitude, longitude}
})
export const fetchWeatherSuccess = (response) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: {response}
})
export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: {error}
})
// --end-actions-creators--

const INITIAL_STATE = Map({
  weather: Map({
    capital: '',
    country: '',
    latitude: '',
    longitude: '',
    summary: '',
    icon: '',
    temperature: 0,
    cached: false,
  }),
  weatherFetching: false,
  weatherFetched: false,
  weatherError: null,
  // --end-initial-state--
})

export default function Reducer (state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case FETCH_WEATHER:
      return state
        .set('weatherFetching', true)
        .set('weatherFetched', false)
        .set('weatherError', null)

    case FETCH_WEATHER_SUCCESS: {
      const {response} = payload

      return state
        .set('weatherFetching', false)
        .set('weatherFetched', true)
        .set('weatherError', null)
        .setIn(['weather', 'capital'], response.capital)
        .setIn(['weather', 'country'], response.country)
        .setIn(['weather', 'latitude'], response.latitude)
        .setIn(['weather', 'longitude'], response.longitude)
        .setIn(['weather', 'summary'], response.summary)
        .setIn(['weather', 'icon'], response.icon)
        .setIn(['weather', 'temperature'], response.temperature)
        .setIn(['weather', 'cached'], response.cached)
      }

    case FETCH_WEATHER_FAILURE: {
      const {error} = payload
      return state
        .set('weatherFetching', false)
        .set('weatherFetched', true)
        .set('weatherError', error)
    }
    // --end-reducers--

    default:
      return state
  }
}