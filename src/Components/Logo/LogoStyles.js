import styled, { css } from 'styled-components'
import { media } from 'Utils/Media'

import { Images } from 'Themes'

export const LogoImage = styled.div`
  background-image: url(${Images.logo});
  background-size:cover;
  width: 154px;
  height: 16px;

  ${props => !props.footer && css`
    ${media.lessThan('xs')`
        background-image: url(${Images.logoSmall});
        width: 24px;
        height: 20px;
    `}
  `}
`
