import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AnonymousHome from './page/AnonymousHome'
import AuthenticatedHome from './page/AuthenticatedHome'

class MainApp extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        
        <Router>
          {logged_in &&
            <Switch>
              <Route component={AuthenticatedHome} path="/"/>
            </Switch>
          }
          {!logged_in &&
            <Switch>
              <Route component={AnonymousHome} path="/"/>
            </Switch>
          }
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
