import React from 'react'
import PropTypes from 'prop-types'

import {
  WiDaySunny,
  WiNightClear,
  WiRain,
  WiSnow,
  WiSleet,
  WiWindy,
  WiFog,
  WiCloudy,
  WiDayCloudy,
  WiNightCloudy,
} from 'weather-icons-react'

const WeatherIcon = ({iconName, size, color}) => {
  let icon = null

  switch (iconName) {
    case 'clear-day':
      icon = (<WiDaySunny size={size} color={color} />)
      break
      case 'clear-night':
      icon = (<WiNightClear size={size} color={color} />)
      break
      case 'rain':
      icon = (<WiRain size={size} color={color} />)
      break
      case 'snow':
      icon = (<WiSnow size={size} color={color} />)
      break
      case 'sleet':
      icon = (<WiSleet size={size} color={color} />)
      break
      case 'wind':
      icon = (<WiWindy size={size} color={color} />)
      break
      case 'fog':
      icon = (<WiFog size={size} color={color} />)
      break
      case 'cloudy':
      icon = (<WiCloudy size={size} color={color} />)
      break
      case 'partly-cloudy-day':
      icon = (<WiDayCloudy size={size} color={color} />)
      break
      case 'partly-cloudy-night':
      icon = (<WiNightCloudy size={size} color={color} />)
      break
  }

  return (
    <>
      {icon}
    </>
  )
}

WeatherIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default WeatherIcon