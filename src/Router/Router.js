import React from 'react'

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import { SidebarMenu, Alert, Modal, Tutorial } from 'Components'
import ScrollWrapper from './ScrollWrapper'

import routes from './Routes'

class Routes extends React.Component {
  renderRoute = (route, index) => {
    const { exact, path, component } = route
    return (
      <Route
        key={`route:${index}`}
        exact={exact}
        path={path}
        component={component} />
    )
  }

  renderRoutes = () => {
    return (
      <Switch>
        {routes.map(this.renderRoute)}
      </Switch>
    )
  }

  render () {
    const isDevMode = process.env.NODE_ENV === 'development'
    const routerOptions = isDevMode ? {} : { basename: '/games/lottery/' }
    return (
      <BrowserRouter {...routerOptions}>
        <ScrollWrapper>
          <div id='top-container'>
            <SidebarMenu routes={routes} />
            <div id='content-container'>
              {this.renderRoutes()}
            </div>
            <Alert />
            <Modal />
            {/* <Tutorial /> */}
          </div>
        </ScrollWrapper>
      </BrowserRouter>
    )
  }
}

export default Routes
export { routes }
