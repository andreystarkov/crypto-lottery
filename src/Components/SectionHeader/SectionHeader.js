import React, { PureComponent } from 'react'

import { Row } from 'react-styled-flexboxgrid'
import { withRouter } from 'react-router-dom'
import { ButtonMore } from 'Components'
import { SectionHeader } from 'Styles/CommonStyles'
import { RightAlign } from 'Styles/MainStyles'
import { Column } from './SectionHeaderStyles'

class SectionHeaderComponent extends PureComponent {
  onButtonClick = () => {
    const { href, onButtonClick, history } = this.props
    if (onButtonClick) onButtonClick()
    if (href) history.push(href)
  }
  render () {
    const { title, marginTop, marginBottom, buttonText } = this.props
    return (
      <Row
        style={{
          marginTop: marginTop || 0,
          marginBottom: marginBottom || '1rem',
          justifyContent: 'space-between'
        }}>
        <Column xs={buttonText ? 6 : 12}>
          <SectionHeader>{title}</SectionHeader>
        </Column>
        {buttonText && (
          <Column xs={6}>
            <RightAlign>
              <ButtonMore onClick={this.onButtonClick}>{buttonText}</ButtonMore>
            </RightAlign>
          </Column>
        )}
      </Row>
    )
  }
}

export default withRouter(SectionHeaderComponent)
