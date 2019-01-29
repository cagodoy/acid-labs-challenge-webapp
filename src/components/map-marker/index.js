import React from 'react'
import PropTypes from 'prop-types'

import logoAcidSmall from '../../assets/logo_small.png'

const AcidMarker = ({}) => {
  return (
    <div style={styles.container}>
      <img 
        src={logoAcidSmall}
        alt={'small-logo'}
        style={styles.image} />
    </div>
  )
}

AcidMarker.propTypes = {}

const styles = {
  container: {
    borderRadius: '50%',
    backgroundColor: 'rgba(51, 51, 51, 0.55)',
    boxShadow: 'rgba(0, 0, 0, 1) 0px 0px 15px',
    height: '40px',
    width: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '-20px',
    marginTop: '-20px',
  },
  image: {
    height: '75%',
    width: '75%',
    marginTop: '2px',
  },
}

export default AcidMarker