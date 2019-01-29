import React, {Component} from 'react'
import PropTypes from 'prop-types'

import GoogleMapReact from 'google-map-react'
import Modal from 'react-modal'
import ReactLoading from 'react-loading'

import {IoMdClose} from 'react-icons/io'
import WeatherIcon from '../../components/weather-icon'

import './worldmap.css'
import Navbar from '../../components/navbar/navbar.component';
import AcidMarker from '../../components/map-marker'

Modal.setAppElement('#root')

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
const GOOGLE_MAP_ZOOM = 4

class Worldmap extends Component {
  static defaultProps = {
    center: {
      lat: 37,
      lng: -70,
    },
    zoom: GOOGLE_MAP_ZOOM,
  }

  state = {
    currentLat: null,
    currentLon: null,
    modalIsOpen: false,
  }

  onMapClicked = (mapProps) => {
    this.setState({
      currentLat: mapProps.lat,
      currentLon: mapProps.lng,
    })

    this.props.fetchWeather(mapProps.lat, mapProps.lng)
    this.openModal()
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  getModalError = () => (
    <div className={'modal_error_container'}>
      <div className={'modal_error_text'}>
        Ocurrió un error, asegúrate de hacer click en un país o inténtalo nuevamente.
      </div>
    </div>
  )

  getModalLoading = () => (
    <div className={'modal_loading_container'}>
      <ReactLoading 
        type={'spin'} 
        color={'rgba(170, 170, 170, 1)'} 
        height={50} 
        width={50} />
    </div>
  )

  getModalInfo = () => (
    <>
      <div className={'modal_info_image_container'}>
        <WeatherIcon iconName={this.props.weather.icon} size={110} color={'rgba(51, 51, 51, 0.8)'} />
      </div>
      <div>
        <div className={'modal_info_temperature_container'}>
          <div className={'modal_info_temperature_text'}>
            {this.props.weather.temperature.toFixed(1)}º
          </div>
        </div>
        <div className={'modal_info_text'}>
          {this.props.weather.capital.charAt(0).toUpperCase() + this.props.weather.capital.substring(1, this.props.weather.capital.length)}, {this.props.weather.country.charAt(0).toUpperCase() + this.props.weather.country.substring(1, this.props.weather.country.length)}
        </div>
      </div>
    </>
  )

  render() {
    let modal = null
    if (this.props.weatherError !== null) {
      modal = this.getModalError()
    } else if (!this.props.weatherFetching) {
      modal = this.getModalInfo()
    } else {
      modal = this.getModalLoading()
    }

    return (
      <div className={'worldmap_container'}>
        <Navbar text={'CHALLENGE'} />

        <GoogleMapReact
          bootstrapURLKeys={{key: GOOGLE_MAP_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{
            zoomControl: false,
            minZoom: GOOGLE_MAP_ZOOM,
            maxZoom: GOOGLE_MAP_ZOOM,
            disableDoubleClickZoom: true,
          }}
          onClick={this.onMapClicked}>
            {(this.state.currentLat && this.state.currentLon) && (
              <AcidMarker
                lat={this.state.currentLat}
                lng={this.state.currentLon}
              />
            )}
        </GoogleMapReact>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={styles.modal}>

          <div className={'modal_container'}>
            <div className={'modal_container_top'}>
              <div 
                onClick={this.closeModal}
                className={'modal_container_top_close'}>
                <IoMdClose 
                  size={'5em'}
                  color={'rgba(100, 100, 100, 1)'}
                  />
              </div>
            </div>
            <div className={'modal_container_bottom'}>
              <div className={'modal_container_bottom_box'}>
                {this.props.weatherFetched && !this.props.weatherError && this.props.weather.cached && (
                  <div className={'modal_box_cached'}>
                    CACHED
                  </div>
                )}

                {modal}
              </div>
              {this.props.weatherFetched && !this.props.weatherError && (
                <div className={'modal_box_summary'}>
                  {this.props.weather.summary}
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

Worldmap.propTypes = {
  weather: PropTypes.object.isRequired,
  weatherFetching: PropTypes.bool.isRequired,
  weatherFetched: PropTypes.bool.isRequired,
  weatherError: PropTypes.object,
  fetchWeather: PropTypes.func.isRequired,
}

const styles = {
  modal: {
    content: {
      top: 0,
      left: 0,
      border: 'none',
      width: '100%',
      height: '100%',
      padding: 0,
      background: 'transparent',
    }, 
    overlay: {
      zIndex: 2,
      backgroundColor: 'rgba(235, 242, 246, 0.9)'
    }
  }
}

export default Worldmap