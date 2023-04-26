import React, { Component } from 'react'
import { FadeInWrapper, BackgroundIllustration } from './BackgroundImageStyles'

export default class BackgroundImage extends Component {
  state = {
    scrollTop: null
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop < 700) this.setState({ scrollTop })
  }

  render () {
    const { initialOpacity } = this.props
    const { scrollTop } = this.state
    const opacity = (initialOpacity || 1) - scrollTop / 1000
    return (
      <FadeInWrapper className='animated fadeIn'>
        <BackgroundIllustration
          {...this.props}
          style={{ opacity, transform: `scale(${1 + scrollTop * 0.000019})` }}
        />
      </FadeInWrapper>
    )
  }
}
