import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Worldmap from './screens/worldmap/worldmap.container'

const App = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Worldmap} />
      </div>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App