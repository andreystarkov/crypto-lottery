import React from 'react'

import { RoundButton } from 'Components'

const ButtonMore = ({ children, ...etc }) => {
  return (
    <RoundButton
      border
      color={'rgba(255,255,255,0.2)'}
      arrowRight
      {...etc}>
      {children}
    </RoundButton>
  )
}

export default ButtonMore
