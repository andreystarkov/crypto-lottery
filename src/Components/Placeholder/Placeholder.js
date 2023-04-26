import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PlaceholderContainer, Header, Text } from './PlaceholderStyles'
export default class Placeholder extends Component {
  render () {
    const { title, text } = this.props
    return (
      <PlaceholderContainer>
        {title && <Header>{title}</Header>}
        {text && <Text>{text}</Text>}
      </PlaceholderContainer>
    )
  }
}

Placeholder.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}
