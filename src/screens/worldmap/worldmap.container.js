import {connect} from 'react-redux'
import WorldmapComponent from './worldmap.component'
import {fetchWeather} from '../../modules/weather/weather.state'

export default connect(
  state => ({
    weather: state.weather.get('weather').toJS(),
    weatherFetching: state.weather.get('weatherFetching'),
    weatherFetched: state.weather.get('weatherFetched'),
    weatherError: state.weather.get('weatherError'),
  }), {
    fetchWeather,
  }
)(WorldmapComponent)
