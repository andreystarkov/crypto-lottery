import React, { Component } from 'react'
import { PlaceholderContainer, Header, Text } from './EmptyStyles'
export default class Empty extends Component {
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
