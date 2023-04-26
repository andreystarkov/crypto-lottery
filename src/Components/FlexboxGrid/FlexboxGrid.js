import React from 'react'

import { ThemeProvider } from 'styled-components'

export default class FlexboxGrid extends React.Component {
  constructor (props) {
    super(props)
    this.defaults = {
      gridSize: 12,
      gutterWidth: 1,
      outerMargin: 2,
      mediaQuery: 'only screen',
      container: {
        sm: 46,
        md: 61,
        lg: 76
      },
      breakpoints: {
        xs: 0,
        sm: 48,
        md: 64,
        lg: 75
      }
    }
  }
  render () {
    const { children, ...etc } = this.props
    const theme = {
      flexboxgrid: { ...this.defaults, ...etc }
    }
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    )
  }
}
