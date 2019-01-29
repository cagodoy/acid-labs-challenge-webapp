import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'

import logoAcidBig from '../../assets/logo_full.png'

const Navbar = ({text}) => {
  return (
    <div 
      id={'navbar'}
      className={'navbar_container'}>
      <div className={'navbar_logo navbar_logo_container'}>
        <div className={'navbar_image_container'}>
          <img 
            src={logoAcidBig} 
            alt={'big-logo'}
            className={'navbar_image'}/>
        </div>
        <div className={'navbar_text'}>
          {text}
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Navbar